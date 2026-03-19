import { getPanchangam, Observer, tithiNames, nakshatraNames, yogaNames } from "@ishubhamx/panchangam-js";

(() => {
  const root = document.getElementById("appRoot");
  if (!root) return;

  const presets = {
    delhi: { label: "Delhi", lat: 28.6139, lng: 77.209, elevation: 216 },
    varanasi: { label: "Varanasi", lat: 25.3176, lng: 82.9739, elevation: 80 },
    mumbai: { label: "Mumbai", lat: 19.076, lng: 72.8777, elevation: 14 },
    bengaluru: { label: "Bengaluru", lat: 12.9716, lng: 77.5946, elevation: 920 }
  };

  const state = { place: "delhi", custom: null };

  root.innerHTML = `
    <section class="section-stack">
      <article class="tool-card">
        <div class="toolbar">
          <div>
            <p class="eyebrow">Daily panchang</p>
            <h3>Aaj ka tithi, nakshatra, paksha</h3>
          </div>
          <button class="ghost-btn" id="geoBtn" type="button">Use my location</button>
        </div>
        <div class="button-row" id="presetButtons"></div>
        <div class="result-panel">
          <p class="mini-label">Location</p>
          <strong class="result-number" id="placeLabel">Delhi</strong>
          <p class="muted" id="todayLabel">--</p>
        </div>
        <div class="stat-grid" id="panchangGrid"></div>
      </article>
    </section>

    <aside class="section-stack">
      <article class="info-card">
        <p class="eyebrow">Timings</p>
        <div class="history-grid" id="timingList"></div>
      </article>
      <article class="info-card">
        <p class="eyebrow">Festivals & context</p>
        <div class="history-grid" id="festivalList"></div>
      </article>
    </aside>
  `;

  const presetButtons = document.getElementById("presetButtons");
  const placeLabel = document.getElementById("placeLabel");
  const todayLabel = document.getElementById("todayLabel");
  const panchangGrid = document.getElementById("panchangGrid");
  const timingList = document.getElementById("timingList");
  const festivalList = document.getElementById("festivalList");

  function formatDate(value) {
    if (!value) return "--";
    return new Intl.DateTimeFormat("hi-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(value);
  }

  function formatTime(value, timeZone) {
    if (!value) return "--";
    return new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      timeZone
    }).format(value);
  }

  function getOffsetMinutes() {
    return -new Date().getTimezoneOffset();
  }

  function activePlace() {
    if (state.custom) return state.custom;
    return presets[state.place];
  }

  function render() {
    const place = activePlace();
    const observer = new Observer(place.lat, place.lng, place.elevation || 0);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
    const p = getPanchangam(new Date(), observer, { timezoneOffset: getOffsetMinutes() || 330 });
    placeLabel.textContent = place.label;
    todayLabel.textContent = formatDate(new Date());

    const cards = [
      ["Tithi", tithiNames[p.tithi] || String(p.tithi)],
      ["Nakshatra", nakshatraNames[p.nakshatra] || String(p.nakshatra)],
      ["Yoga", yogaNames[p.yoga] || String(p.yoga)],
      ["Paksha", String(p.paksha)],
      ["Masa", p.masa?.name || "--"],
      ["Ritu", String(p.ritu || "--")]
    ];
    panchangGrid.innerHTML = cards.map(([label, value]) => `
      <div class="stat-box">
        <p class="mini-label">${label}</p>
        <strong>${value}</strong>
      </div>
    `).join("");

    const timings = [
      ["Sunrise", formatTime(p.sunrise, timezone)],
      ["Sunset", formatTime(p.sunset, timezone)],
      ["Abhijit", p.abhijitMuhurta ? `${formatTime(p.abhijitMuhurta.start, timezone)} - ${formatTime(p.abhijitMuhurta.end, timezone)}` : "--"],
      ["Rahu Kalam", p.rahuKalam ? `${formatTime(p.rahuKalam.start, timezone)} - ${formatTime(p.rahuKalam.end, timezone)}` : "--"]
    ];
    timingList.innerHTML = timings.map(([label, value]) => `
      <div class="history-card"><strong>${label}</strong><span class="muted">${value}</span></div>
    `).join("");

    const festivals = p.festivals && p.festivals.length
      ? p.festivals.slice(0, 4).map((item) => `<div class="history-card"><strong>${item.name}</strong><span class="muted">${item.category}</span></div>`).join("")
      : '<div class="history-card"><strong>Festival marker nahi hai</strong><span class="muted">Aaj regular panchang din hai.</span></div>';
    festivalList.innerHTML = festivals;
  }

  presetButtons.innerHTML = Object.entries(presets).map(([key, value], index) => `
    <button class="mode-btn ${index === 0 ? "active" : ""}" data-place="${key}" type="button">${value.label}</button>
  `).join("");

  presetButtons.querySelectorAll("[data-place]").forEach((button) => {
    button.addEventListener("click", () => {
      state.custom = null;
      state.place = button.getAttribute("data-place") || "delhi";
      presetButtons.querySelectorAll("[data-place]").forEach((node) => node.classList.toggle("active", node === button));
      render();
    });
  });

  document.getElementById("geoBtn")?.addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      state.custom = {
        label: "My location",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        elevation: 0
      };
      presetButtons.querySelectorAll("[data-place]").forEach((node) => node.classList.remove("active"));
      render();
    });
  });

  render();
})();