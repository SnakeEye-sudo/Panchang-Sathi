import {
  Observer,
  getPanchangam,
  tithiNames,
  nakshatraNames,
  yogaNames,
  karanaNames
} from "@ishubhamx/panchangam-js";

type Place = {
  label: string;
  lat: number;
  lng: number;
  elevation: number;
};

type PanchangData = ReturnType<typeof getPanchangam>;

(() => {
  const root = document.getElementById("appRoot");
  if (!root) return;

  const presets: Record<string, Place> = {
    varanasi: { label: "Varanasi", lat: 25.3176, lng: 82.9739, elevation: 80 },
    delhi: { label: "Delhi", lat: 28.6139, lng: 77.209, elevation: 216 },
    ayodhya: { label: "Ayodhya", lat: 26.799, lng: 82.204, elevation: 93 },
    ujjain: { label: "Ujjain", lat: 23.1765, lng: 75.7885, elevation: 494 }
  };

  const state = {
    placeKey: "varanasi",
    customPlace: null as Place | null,
    monthCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    selectedDate: new Date(),
    tab: "panchang"
  };

  root.innerHTML = `
    <div class="app-shell">
      <section class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true">卐</div>
          <div>
            <p class="eyebrow">Hindu calendar app</p>
            <h1>Panchang Sathi</h1>
          </div>
        </div>
        <div class="topbar-actions">
          <span class="pill" id="activePlacePill">Varanasi</span>
          <button class="chip-btn" id="geoBtn" type="button">Meri location</button>
        </div>
      </section>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Tithi, muhurat, vrat, tyohar</p>
          <h2>Aaj ka panchang app jaisa, board jaisa nahi.</h2>
          <p>Mahine bhar ke parv, selected din ka detailed panchang, aur alag sheet me muhurat aur vrat-upwas. Yeh layout calendar-app feel ke liye banaya gaya hai, taaki har din ko seedha kholkar dekha ja sake.</p>
          <div class="hero-actions location-row" id="presetRow"></div>
        </div>
        <div class="hero-card">
          <div>
            <p class="eyebrow">Aaj ka saar</p>
            <h3 id="todayHeadline">Loading...</h3>
          </div>
          <div class="inline-stats">
            <span class="pill" id="todayFestivalPill">Tyohar check...</span>
            <span class="pill" id="todayFastPill">Vrat check...</span>
          </div>
          <p id="todaySummary">Aaj ke tithi aur sunrise ke hisaab se quick summary yahan dikhegi.</p>
        </div>
      </section>

      <section class="summary-strip" id="summaryStrip"></section>

      <section class="content-grid">
        <article class="calendar-panel">
          <div class="month-nav">
            <button class="nav-btn" id="prevMonthBtn" type="button">Pichhla</button>
            <div class="month-title">
              <p class="eyebrow">Mahina</p>
              <strong id="monthLabel"></strong>
            </div>
            <button class="nav-btn primary" id="nextMonthBtn" type="button">Agla</button>
          </div>
          <div class="weekday-grid" id="weekdayGrid"></div>
          <div class="calendar-grid" id="calendarGrid"></div>
        </article>

        <aside class="detail-panel">
          <section class="detail-main">
            <div class="detail-title">
              <div>
                <p class="eyebrow">Selected date</p>
                <strong id="selectedDateLabel"></strong>
                <p id="selectedSubtitle"></p>
              </div>
              <div class="inline-stats" id="selectedTags"></div>
            </div>
            <div class="tab-switch">
              <button class="tab-btn active" data-tab="panchang" type="button">Panchang</button>
              <button class="tab-btn" data-tab="muhurat" type="button">Muhurat</button>
              <button class="tab-btn" data-tab="vrat" type="button">Vrat & Upwas</button>
            </div>
          </section>

          <div id="detailContent"></div>

          <p class="tiny-credit">Calendar flow inspired by <a href="https://www.drikpanchang.com/calendars/hindu/hinducalendar.html" target="_blank" rel="noreferrer">Drik Panchang</a>; detailed calculations are powered locally by panchangam-js.</p>
        </aside>
      </section>
    </div>
  `;

  const summaryStrip = document.getElementById("summaryStrip");
  const activePlacePill = document.getElementById("activePlacePill");
  const presetRow = document.getElementById("presetRow");
  const monthLabel = document.getElementById("monthLabel");
  const calendarGrid = document.getElementById("calendarGrid");
  const detailContent = document.getElementById("detailContent");
  const selectedDateLabel = document.getElementById("selectedDateLabel");
  const selectedSubtitle = document.getElementById("selectedSubtitle");
  const selectedTags = document.getElementById("selectedTags");
  const todayHeadline = document.getElementById("todayHeadline");
  const todaySummary = document.getElementById("todaySummary");
  const todayFestivalPill = document.getElementById("todayFestivalPill");
  const todayFastPill = document.getElementById("todayFastPill");

  const weekdayLabels = ["Ravi", "Som", "Mangal", "Budh", "Guru", "Shukra", "Shani"];

  function getTimezoneOffsetMinutes(date: Date) {
    return -date.getTimezoneOffset() || 330;
  }

  function activePlace() {
    return state.customPlace || presets[state.placeKey];
  }

  function isSameDay(left: Date, right: Date) {
    return left.getFullYear() === right.getFullYear()
      && left.getMonth() === right.getMonth()
      && left.getDate() === right.getDate();
  }

  function createDate(year: number, month: number, day: number) {
    return new Date(year, month, day, 6, 0, 0, 0);
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("hi-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function formatMonth(date: Date) {
    return new Intl.DateTimeFormat("hi-IN", {
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function formatTime(value: Date | undefined | null) {
    if (!value) return "--";
    return new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "2-digit"
    }).format(value);
  }

  function formatRange(value: { start?: Date; end?: Date } | undefined | null) {
    if (!value?.start || !value?.end) return "--";
    return `${formatTime(value.start)} - ${formatTime(value.end)}`;
  }

  function panchangFor(date: Date) {
    const place = activePlace();
    const observer = new Observer(place.lat, place.lng, place.elevation || 0);
    return getPanchangam(date, observer, { timezoneOffset: getTimezoneOffsetMinutes(date) });
  }

  function getFestivalName(data: PanchangData) {
    return data.festivals?.[0]?.name || "";
  }

  function isFastingDay(data: PanchangData) {
    return Boolean(data.festivals?.some((festival) => festival.isFastingDay));
  }

  function monthFestivalDigest(date: Date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const festivals: Array<{ date: Date; name: string; fasting: boolean }> = [];
    for (let day = 1; day <= lastDay.getDate(); day += 1) {
      const current = createDate(firstDay.getFullYear(), firstDay.getMonth(), day);
      const panchang = panchangFor(current);
      const firstFestival = panchang.festivals?.[0];
      if (firstFestival) {
        festivals.push({
          date: current,
          name: firstFestival.name,
          fasting: Boolean(firstFestival.isFastingDay)
        });
      }
    }
    return festivals;
  }

  function renderTopSummary(selected: PanchangData, monthFestivals: Array<{ date: Date; name: string; fasting: boolean }>) {
    const festivalName = getFestivalName(selected);
    todayHeadline!.textContent = festivalName || `${tithiNames[selected.tithi]} ka din`;
    todaySummary!.textContent = `${nakshatraNames[selected.nakshatra]} nakshatra, ${String(selected.paksha)} paksha, aur sunrise ${formatTime(selected.sunrise)} par.`;
    todayFestivalPill!.textContent = festivalName || "Aaj regular din";
    todayFastPill!.textContent = isFastingDay(selected) ? "Vrat / upwas" : "No major vrat";

    const cards = [
      { label: "Sunrise", value: formatTime(selected.sunrise), note: "Din ki shuruaat" },
      { label: "Sunset", value: formatTime(selected.sunset), note: "Sandhya samay" },
      { label: "Mahine ke parv", value: String(monthFestivals.length), note: "Current month list" },
      { label: "Masa", value: selected.masa?.name || "--", note: String(selected.ritu || "Ritu") }
    ];

    summaryStrip!.innerHTML = cards.map((card) => `
      <div class="summary-card">
        <p class="micro-label">${card.label}</p>
        <strong>${card.value}</strong>
        <p>${card.note}</p>
      </div>
    `).join("");
  }

  function renderCalendar(monthFestivals: Array<{ date: Date; name: string; fasting: boolean }>) {
    const cursor = state.monthCursor;
    monthLabel!.textContent = formatMonth(cursor);
    activePlacePill!.textContent = activePlace().label;

    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const leading = first.getDay();
    const totalSlots = Math.ceil((leading + last.getDate()) / 7) * 7;

    const festivalMap = new Map(
      monthFestivals.map((festival) => [festival.date.getDate(), festival])
    );

    const cells: string[] = [];
    for (let slot = 0; slot < totalSlots; slot += 1) {
      const dayNumber = slot - leading + 1;
      if (dayNumber < 1 || dayNumber > last.getDate()) {
        cells.push('<div class="day-cell empty"></div>');
        continue;
      }
      const cellDate = createDate(year, month, dayNumber);
      const data = panchangFor(cellDate);
      const festival = festivalMap.get(dayNumber);
      const classes = [
        "day-cell",
        isSameDay(cellDate, new Date()) ? "today" : "",
        isSameDay(cellDate, state.selectedDate) ? "selected" : ""
      ].filter(Boolean).join(" ");

      cells.push(`
        <button class="${classes}" data-date="${cellDate.toISOString()}">
          <span class="day-number">${dayNumber}</span>
          <span class="day-tithi">${tithiNames[data.tithi]}</span>
          <span class="day-festival">${festival ? festival.name : ""}</span>
        </button>
      `);
    }

    calendarGrid!.innerHTML = cells.join("");
  }

  function renderPanchangSheet(data: PanchangData) {
    const cards = [
      ["Tithi", tithiNames[data.tithi]],
      ["Nakshatra", nakshatraNames[data.nakshatra]],
      ["Yoga", yogaNames[data.yoga]],
      ["Karana", karanaNames?.[data.karana] || String(data.karana)],
      ["Paksha", String(data.paksha)],
      ["Masa", data.masa?.name || "--"],
      ["Ritu", String(data.ritu || "--")],
      ["Vaar", String(data.vaara || "--")]
    ];

    detailContent!.innerHTML = `
      <section class="sheet-grid">
        ${cards.map(([label, value]) => `
          <article class="sheet-item">
            <p class="micro-label">${label}</p>
            <strong>${value}</strong>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderMuhuratSheet(data: PanchangData) {
    const cards = [
      ["Abhijit Muhurat", formatRange(data.abhijitMuhurta)],
      ["Brahma Muhurta", formatRange((data as PanchangData & { brahmaMuhurta?: { start?: Date; end?: Date } }).brahmaMuhurta)],
      ["Rahu Kalam", formatRange(data.rahuKalam)],
      ["Yamaganda", formatRange((data as PanchangData & { yamaganda?: { start?: Date; end?: Date } }).yamaganda)],
      ["Gulika", formatRange((data as PanchangData & { gulika?: { start?: Date; end?: Date } }).gulika)],
      ["Varjyam", formatRange((data as PanchangData & { varjyam?: { start?: Date; end?: Date } }).varjyam)],
      ["Amrit Kalam", formatRange((data as PanchangData & { amritKalam?: { start?: Date; end?: Date } }).amritKalam)],
      ["Dur Muhurta", formatRange((data as PanchangData & { durMuhurta?: { start?: Date; end?: Date } }).durMuhurta)]
    ];

    detailContent!.innerHTML = `
      <section class="sheet-grid">
        ${cards.map(([label, value]) => `
          <article class="sheet-item">
            <p class="micro-label">${label}</p>
            <strong>${value}</strong>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderVratSheet(data: PanchangData, monthFestivals: Array<{ date: Date; name: string; fasting: boolean }>) {
    const selectedFestivals = data.festivals || [];
    const upcoming = monthFestivals
      .filter((festival) => festival.date >= createDate(state.selectedDate.getFullYear(), state.selectedDate.getMonth(), state.selectedDate.getDate()))
      .slice(0, 6);

    detailContent!.innerHTML = `
      <section class="sheet">
        <p class="eyebrow">Aaj ke parv / vrat</p>
        <div class="festival-list">
          ${selectedFestivals.length
            ? selectedFestivals.map((festival) => `
              <article class="festival-item">
                <strong>${festival.name}</strong>
                <p>${festival.description || festival.category || "Hindu calendar observance"}</p>
                <div class="festival-tags">
                  ${festival.category ? `<span class="festival-tag">${festival.category}</span>` : ""}
                  ${festival.isFastingDay ? '<span class="festival-tag">Vrat / upwas</span>' : ""}
                </div>
              </article>
            `).join("")
            : '<div class="empty-state">Is din koi major vrat ya tyohar marker nahi mila.</div>'}
        </div>
      </section>

      <section class="sheet">
        <p class="eyebrow">Nazdeeki dinon ke parv</p>
        <div class="upcoming-list">
          ${upcoming.length
            ? upcoming.map((festival) => `
              <article class="festival-item">
                <strong>${festival.name}</strong>
                <p>${new Intl.DateTimeFormat("hi-IN", { day: "numeric", month: "long" }).format(festival.date)}</p>
                <div class="festival-tags">
                  ${festival.fasting ? '<span class="festival-tag">Upwas</span>' : '<span class="festival-tag">Parv</span>'}
                </div>
              </article>
            `).join("")
            : '<div class="empty-state">Is month me aur koi marked parv nahi mila.</div>'}
        </div>
      </section>
    `;
  }

  function renderDetail(monthFestivals: Array<{ date: Date; name: string; fasting: boolean }>) {
    const data = panchangFor(state.selectedDate);
    const festivalName = getFestivalName(data);
    selectedDateLabel!.textContent = formatDate(state.selectedDate);
    selectedSubtitle!.textContent = `${tithiNames[data.tithi]} • ${nakshatraNames[data.nakshatra]} • Sunrise ${formatTime(data.sunrise)}`;
    selectedTags!.innerHTML = `
      <span class="pill">${String(data.paksha)}</span>
      <span class="pill ${isFastingDay(data) ? "good" : ""}">${isFastingDay(data) ? "Vrat day" : "Regular day"}</span>
      ${festivalName ? `<span class="pill good">${festivalName}</span>` : ""}
    `;

    if (state.tab === "muhurat") {
      renderMuhuratSheet(data);
      return;
    }
    if (state.tab === "vrat") {
      renderVratSheet(data, monthFestivals);
      return;
    }
    renderPanchangSheet(data);
  }

  function renderWeekdays() {
    document.getElementById("weekdayGrid")!.innerHTML = weekdayLabels
      .map((label) => `<div class="weekday-chip">${label}</div>`)
      .join("");
  }

  function renderPresets() {
    presetRow!.innerHTML = Object.entries(presets).map(([key, place]) => `
      <button class="chip-btn ${state.placeKey === key && !state.customPlace ? "active" : ""}" data-place="${key}" type="button">${place.label}</button>
    `).join("");
  }

  function render() {
    renderWeekdays();
    renderPresets();
    const selectedData = panchangFor(state.selectedDate);
    const monthFestivals = monthFestivalDigest(state.monthCursor);
    renderTopSummary(selectedData, monthFestivals);
    renderCalendar(monthFestivals);
    renderDetail(monthFestivals);
    document.querySelectorAll("[data-tab]").forEach((button) => {
      button.classList.toggle("active", button.getAttribute("data-tab") === state.tab);
    });
  }

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const placeButton = target.closest("[data-place]") as HTMLElement | null;
    if (placeButton) {
      state.customPlace = null;
      state.placeKey = placeButton.dataset.place || "varanasi";
      render();
      return;
    }

    const tabButton = target.closest("[data-tab]") as HTMLElement | null;
    if (tabButton) {
      state.tab = tabButton.dataset.tab || "panchang";
      render();
      return;
    }

    const dateButton = target.closest("[data-date]") as HTMLElement | null;
    if (dateButton) {
      state.selectedDate = new Date(dateButton.dataset.date || Date.now());
      render();
    }
  });

  document.getElementById("prevMonthBtn")?.addEventListener("click", () => {
    state.monthCursor = new Date(state.monthCursor.getFullYear(), state.monthCursor.getMonth() - 1, 1);
    render();
  });

  document.getElementById("nextMonthBtn")?.addEventListener("click", () => {
    state.monthCursor = new Date(state.monthCursor.getFullYear(), state.monthCursor.getMonth() + 1, 1);
    render();
  });

  document.getElementById("geoBtn")?.addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      state.customPlace = {
        label: "Meri location",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        elevation: 0
      };
      render();
    });
  });

  render();
})();
