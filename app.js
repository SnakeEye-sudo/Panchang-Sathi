"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@ishubhamx/panchangam-js/dist/core/types.js
  var require_types = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/constants.js
  var require_constants = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MULTI_DAY_FESTIVALS = exports.SANKRANTI_NAMES = exports.SOLAR_FESTIVALS = exports.planetOwnSigns = exports.planetDebilitation = exports.planetExaltation = exports.vimshottariDurations = exports.vimshottariLords = exports.amritKalamStartGhatis = exports.varjyamStartGhatis = exports.sankrantiNames = exports.samvatsaraNames = exports.pakshaNames = exports.dayNames = exports.ayanaNames = exports.rituNames = exports.masaNames = exports.horaRulers = exports.rashiNames = exports.nakshatraNames = exports.tithiNames = exports.yogaNames = exports.karanaNames = exports.fixedKaranaNames = exports.repeatingKaranaNames = void 0;
      exports.repeatingKaranaNames = [
        "Bava",
        "Balava",
        "Kaulava",
        "Taitila",
        "Gara",
        "Vanija",
        "Vishti"
      ];
      exports.fixedKaranaNames = [
        "Shakuni",
        "Chatushpada",
        "Naga",
        "Kimstughna"
      ];
      exports.karanaNames = [...exports.repeatingKaranaNames, ...exports.fixedKaranaNames];
      exports.yogaNames = [
        "Vishkambha",
        "Priti",
        "Ayushman",
        "Saubhagya",
        "Shobhana",
        "Atiganda",
        "Sukarman",
        "Dhriti",
        "Shula",
        "Ganda",
        "Vriddhi",
        "Dhruva",
        "Vyaghata",
        "Harshana",
        "Vajra",
        "Siddhi",
        "Vyatipata",
        "Variyana",
        "Parigha",
        "Shiva",
        "Siddha",
        "Sadhya",
        "Shubha",
        "Shukla",
        "Brahma",
        "Indra",
        "Vaidhriti"
      ];
      exports.tithiNames = [
        "Prathama",
        "Dwitiya",
        "Tritiya",
        "Chaturthi",
        "Panchami",
        "Shashthi",
        "Saptami",
        "Ashtami",
        "Navami",
        "Dashami",
        "Ekadashi",
        "Dwadashi",
        "Trayodashi",
        "Chaturdashi",
        "Purnima",
        "Prathama",
        "Dwitiya",
        "Tritiya",
        "Chaturthi",
        "Panchami",
        "Shashthi",
        "Saptami",
        "Ashtami",
        "Navami",
        "Dashami",
        "Ekadashi",
        "Dwadashi",
        "Trayodashi",
        "Chaturdashi",
        "Amavasya"
      ];
      exports.nakshatraNames = [
        "Ashwini",
        "Bharani",
        "Krittika",
        "Rohini",
        "Mrigashira",
        "Ardra",
        "Punarvasu",
        "Pushya",
        "Ashlesha",
        "Magha",
        "Purva Phalguni",
        "Uttara Phalguni",
        "Hasta",
        "Chitra",
        "Swati",
        "Vishakha",
        "Anuradha",
        "Jyeshtha",
        "Mula",
        "Purva Ashadha",
        "Uttara Ashadha",
        "Shravana",
        "Dhanishta",
        "Shatabhisha",
        "Purva Bhadrapada",
        "Uttara Bhadrapada",
        "Revati"
      ];
      exports.rashiNames = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces"
      ];
      exports.horaRulers = [
        "Sun",
        "Venus",
        "Mercury",
        "Moon",
        "Saturn",
        "Jupiter",
        "Mars"
      ];
      exports.masaNames = [
        "Chaitra",
        "Vaishakha",
        "Jyeshtha",
        "Ashadha",
        "Shravana",
        "Bhadrapada",
        "Ashwina",
        "Kartika",
        "Margashirsha",
        "Pausha",
        "Magha",
        "Phalguna"
      ];
      exports.rituNames = [
        "Vasant",
        "Grishma",
        "Varsha",
        "Sharad",
        "Hemant",
        "Shishir"
      ];
      exports.ayanaNames = [
        "Uttarayana",
        "Dakshinayana"
      ];
      exports.dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      exports.pakshaNames = [
        "Shukla",
        "Krishna"
      ];
      exports.samvatsaraNames = [
        "Prabhava",
        "Vibhava",
        "Shukla",
        "Pramoda",
        "Prajapati",
        "Angira",
        "Srimukha",
        "Bhava",
        "Yuva",
        "Dhatru",
        "Ishvara",
        "Bahudhanya",
        "Pramathi",
        "Vikrama",
        "Vrusha",
        "Chitrabhanu",
        "Subhanu",
        "Tarana",
        "Parthiva",
        "Vyaya",
        "Sarvajit",
        "Sarvadhari",
        "Virodhi",
        "Vikriti",
        "Khara",
        "Nandana",
        "Vijaya",
        "Jaya",
        "Manmatha",
        "Durmukha",
        "Hemalamba",
        "Vilambi",
        "Vikari",
        "Sharvari",
        "Plava",
        "Shubhakrit",
        "Shobhakrit",
        "Krodhi",
        "Vishvavasu",
        "Parabhava",
        "Plavanga",
        "Kilaka",
        "Saumya",
        "Sadharana",
        "Virodhikrit",
        "Paridhavi",
        "Pramadicha",
        "Ananda",
        "Rakshasa",
        "Nala",
        "Pingala",
        "Kalayukti",
        "Siddharthi",
        "Raudra",
        "Durmati",
        "Dundubhi",
        "Rudhirodgari",
        "Raktakshi",
        "Krodhana",
        "Akshaya"
      ];
      exports.sankrantiNames = [
        "Mesh Sankranti",
        // 0: Aries - Hindu New Year in some traditions
        "Vrishabh Sankranti",
        // 1: Taurus
        "Mithun Sankranti",
        // 2: Gemini
        "Kark Sankranti",
        // 3: Cancer - Summer Solstice region
        "Simha Sankranti",
        // 4: Leo
        "Kanya Sankranti",
        // 5: Virgo
        "Tula Sankranti",
        // 6: Libra - Start of Dakshinayana
        "Vrischik Sankranti",
        // 7: Scorpio
        "Dhanu Sankranti",
        // 8: Sagittarius
        "Makar Sankranti",
        // 9: Capricorn - Most celebrated, start of Uttarayana
        "Kumbh Sankranti",
        // 10: Aquarius
        "Meen Sankranti"
        // 11: Pisces
      ];
      exports.varjyamStartGhatis = [
        50,
        // Ashwini
        24,
        // Bharani
        30,
        // Krittika
        40,
        // Rohini
        14,
        // Mrigashirsha
        21,
        // Ardra
        30,
        // Punarvasu
        20,
        // Pushya
        32,
        // Ashlesha
        30,
        // Magha
        20,
        // Purva Phalguni
        18,
        // Uttara Phalguni
        21,
        // Hasta
        20,
        // Chitra
        14,
        // Swati
        14,
        // Vishakha
        10,
        // Anuradha
        14,
        // Jyeshtha
        [20, 56],
        // Mula (20 is standard, 56 also observed in Drik)
        24,
        // Purva Ashadha
        20,
        // Uttara Ashadha
        10,
        // Shravana
        10,
        // Dhanishta
        18,
        // Shatabhisha
        16,
        // Purva Bhadrapada
        24,
        // Uttara Bhadrapada
        30
        // Revati
      ];
      exports.amritKalamStartGhatis = [
        42,
        // Ashwini
        48,
        // Bharani
        54,
        // Krittika
        52,
        // Rohini
        38,
        // Mrigashira
        35,
        // Ardra
        54,
        // Punarvasu
        44,
        // Pushya
        56,
        // Ashlesha
        54,
        // Magha
        44,
        // Purva Phalguni
        42,
        // Uttara Phalguni
        45,
        // Hasta
        44,
        // Chitra
        38,
        // Swati
        38,
        // Vishakha
        34,
        // Anuradha
        38,
        // Jyeshtha
        44,
        // Mula
        48,
        // Purva Ashadha
        44,
        // Uttara Ashadha
        34,
        // Shravana
        34,
        // Dhanishta
        42,
        // Shatabhisha
        40,
        // Purva Bhadrapada
        48,
        // Uttara Bhadrapada
        54
        // Revati
      ];
      exports.vimshottariLords = [
        "Ketu",
        "Venus",
        "Sun",
        "Moon",
        "Mars",
        "Rahu",
        "Jupiter",
        "Saturn",
        "Mercury"
      ];
      exports.vimshottariDurations = [
        7,
        // Ketu
        20,
        // Venus
        6,
        // Sun
        10,
        // Moon
        7,
        // Mars
        18,
        // Rahu
        16,
        // Jupiter
        19,
        // Saturn
        17
        // Mercury
      ];
      exports.planetExaltation = {
        "Sun": 0,
        // Aries
        "Moon": 1,
        // Taurus
        "Mars": 9,
        // Capricorn
        "Mercury": 5,
        // Virgo
        "Jupiter": 3,
        // Cancer
        "Venus": 11,
        // Pisces
        "Saturn": 6,
        // Libra
        "Rahu": 1,
        // Taurus (Standard view)
        "Ketu": 7
        // Scorpio (Standard view)
      };
      exports.planetDebilitation = {
        "Sun": 6,
        // Libra
        "Moon": 7,
        // Scorpio
        "Mars": 3,
        // Cancer
        "Mercury": 11,
        // Pisces
        "Jupiter": 9,
        // Capricorn
        "Venus": 5,
        // Virgo
        "Saturn": 0,
        // Aries
        "Rahu": 7,
        // Scorpio
        "Ketu": 1
        // Taurus
      };
      exports.planetOwnSigns = {
        "Sun": [4],
        // Leo
        "Moon": [3],
        // Cancer
        "Mars": [0, 7],
        // Aries, Scorpio
        "Mercury": [2, 5],
        // Gemini, Virgo
        "Jupiter": [8, 11],
        // Sagittarius, Pisces
        "Venus": [1, 6],
        // Taurus, Libra
        "Saturn": [9, 10]
        // Capricorn, Aquarius
        // Rahu/Ketu co-lordship often debated, omitting 'Own' for now to avoid confusion unless requested.
      };
      exports.SOLAR_FESTIVALS = {
        // Capricorn (Makar) - Rashi 9
        9: [
          {
            name: "Makar Sankranti",
            type: "span",
            spanDays: 4,
            dayNames: ["Bhogi", "Makar Sankranti (Pongal)", "Mattu Pongal", "Kaanum Pongal"],
            regional: ["South", "Maharashtra", "Gujarat", "Punjab"],
            description: "Harvest festival marking Sun's northward journey"
          }
        ],
        // Leo (Simha) - Rashi 4
        4: [
          {
            name: "Onam (Simha Sankranti)",
            type: "single",
            regional: ["Kerala"],
            description: "Kerala harvest festival \u2014 Thiruvonam"
          }
        ],
        // Aries (Mesha) - Rashi 0
        0: [
          {
            name: "Vishu",
            type: "single",
            regional: ["Kerala", "Malayalam"],
            description: "Malayalam New Year"
          },
          {
            name: "Tamil Puthandu",
            type: "single",
            regional: ["Tamil Nadu"],
            description: "Tamil New Year"
          },
          {
            name: "Vaisakhi / Baisakhi",
            type: "single",
            regional: ["Punjab", "North"],
            description: "Punjabi New Year and harvest festival"
          }
        ]
      };
      exports.SANKRANTI_NAMES = [
        "Mesha Sankranti",
        // 0 - Aries
        "Vrishabha Sankranti",
        // 1 - Taurus
        "Mithuna Sankranti",
        // 2 - Gemini
        "Karka Sankranti",
        // 3 - Cancer
        "Simha Sankranti",
        // 4 - Leo
        "Kanya Sankranti",
        // 5 - Virgo
        "Tula Sankranti",
        // 6 - Libra
        "Vrishchika Sankranti",
        // 7 - Scorpio
        "Dhanu Sankranti",
        // 8 - Sagittarius
        "Makar Sankranti",
        // 9 - Capricorn
        "Kumbha Sankranti",
        // 10 - Aquarius
        "Meena Sankranti"
        // 11 - Pisces
      ];
      exports.MULTI_DAY_FESTIVALS = {
        // Navaratri: Ashwina Shukla Prathama (1) to Navami (9) - 9 days
        "navaratri": {
          name: "Navaratri",
          masaIndex: 6,
          // Ashwina
          startTithi: 1,
          // Shukla Prathama
          endTithi: 9,
          // Shukla Navami
          spanDays: 9,
          dailyNames: [
            "Ghatasthapana (Day 1)",
            "Dwitiya (Day 2)",
            "Tritiya (Day 3)",
            "Chaturthi (Day 4)",
            "Panchami (Day 5)",
            "Shashthi (Day 6)",
            "Saptami (Day 7)",
            "Durga Ashtami (Day 8)",
            "Maha Navami (Day 9)"
          ],
          description: "Nine nights of Durga worship"
        },
        // Ganesh Utsav: Bhadrapada Shukla Chaturthi (4) to Chaturdashi (14) - 10 days
        "ganesh_utsav": {
          name: "Ganesh Utsav",
          masaIndex: 5,
          // Bhadrapada
          startTithi: 4,
          // Shukla Chaturthi
          endTithi: 14,
          // Shukla Chaturdashi
          spanDays: 10,
          dailyNames: [
            "Ganesh Chaturthi (Day 1)",
            "Ganesh Panchami (Day 2)",
            "Shashthi (Day 3)",
            "Saptami (Day 4)",
            "Ashtami (Day 5)",
            "Navami (Day 6)",
            "Dashami (Day 7)",
            "Ekadashi (Day 8)",
            "Dwadashi (Day 9)",
            "Anant Chaturdashi (Day 10)"
          ],
          description: "Ten days of Ganesha celebration"
        },
        // Chaitra Navratri: Chaitra Shukla Prathama (1) to Navami (9) - 9 days
        "chaitra_navaratri": {
          name: "Chaitra Navratri",
          masaIndex: 0,
          // Chaitra
          startTithi: 1,
          // Shukla Prathama
          endTithi: 9,
          // Shukla Navami
          spanDays: 9,
          dailyNames: [
            "Chaitra Navratri Day 1 (Ghatasthapana)",
            "Chaitra Navratri Day 2 (Brahmacharini)",
            "Chaitra Navratri Day 3 (Chandraghanta)",
            "Chaitra Navratri Day 4 (Kushmanda)",
            "Chaitra Navratri Day 5 (Skandamata)",
            "Chaitra Navratri Day 6 (Katyayani)",
            "Chaitra Navratri Day 7 (Kaalratri)",
            "Chaitra Navratri Day 8 (Mahagauri)",
            "Chaitra Navratri Day 9 (Siddhidatri / Rama Navami)"
          ],
          description: "Nine nights of Goddess worship in Chaitra"
        },
        // Pitru Paksha: Bhadrapada Purnima (15) to Amavasya (30) - 15 days
        "pitru_paksha": {
          name: "Pitru Paksha",
          masaIndex: 5,
          // Bhadrapada
          startTithi: 16,
          // Krishna Prathama (after Purnima)
          endTithi: 30,
          // Amavasya
          spanDays: 15,
          dailyNames: [
            "Prathama Shraddha (Day 1)",
            "Dwitiya Shraddha (Day 2)",
            "Tritiya Shraddha (Day 3)",
            "Chaturthi Shraddha (Day 4)",
            "Panchami Shraddha (Day 5)",
            "Shashthi Shraddha (Day 6)",
            "Saptami Shraddha (Day 7)",
            "Ashtami Shraddha (Day 8)",
            "Navami Shraddha (Day 9)",
            "Dashami Shraddha (Day 10)",
            "Ekadashi Shraddha (Day 11)",
            "Dwadashi Shraddha (Day 12)",
            "Trayodashi Shraddha (Day 13)",
            "Chaturdashi Shraddha (Day 14)",
            "Sarva Pitru Amavasya (Day 15)"
          ],
          description: "Fifteen days of ancestor worship"
        }
      };
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/ayanamsa.js
  var require_ayanamsa = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/ayanamsa.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getAyanamsa = getAyanamsa;
      function getAyanamsa(date) {
        const time = date.getTime();
        const JD = time / 864e5 + 24405875e-1;
        const T = (JD - 2451545) / 36525;
        const offsetSeconds = 5029.0966 * T + 1.11161 * T * T;
        const initialAyanamsaSeconds = 23 * 3600 + 51 * 60 + 25.532;
        const ayanamsaSeconds = initialAyanamsaSeconds + offsetSeconds;
        return ayanamsaSeconds / 3600;
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/tarabalam.js
  var require_tarabalam = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/tarabalam.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTarabalam = getTarabalam;
      exports.getAuspiciousNakshatras = getAuspiciousNakshatras;
      var constants_1 = require_constants();
      var TARA_INFO = {
        1: { name: "Janma", isAuspicious: false, description: "Birth star - may cause physical discomfort" },
        2: { name: "Sampat", isAuspicious: true, description: "Wealth star - good for financial matters" },
        3: { name: "Vipat", isAuspicious: false, description: "Danger star - obstacles and troubles possible" },
        4: { name: "Kshema", isAuspicious: true, description: "Well-being star - prosperity and good health" },
        5: { name: "Pratyak", isAuspicious: false, description: "Opposition star - hindrances and delays" },
        6: { name: "Sadhana", isAuspicious: true, description: "Achievement star - success in endeavors" },
        7: { name: "Naidhana", isAuspicious: false, description: "Death star - avoid important activities" },
        8: { name: "Mitra", isAuspicious: true, description: "Friend star - support and cooperation" },
        9: { name: "Parama Mitra", isAuspicious: true, description: "Great friend star - highly favorable" }
      };
      function getTarabalam(birthNakshatra, currentNakshatra) {
        const normalizedBirth = (birthNakshatra % 27 + 27) % 27;
        const normalizedCurrent = (currentNakshatra % 27 + 27) % 27;
        let count;
        if (normalizedCurrent >= normalizedBirth) {
          count = normalizedCurrent - normalizedBirth + 1;
        } else {
          count = 27 - normalizedBirth + normalizedCurrent + 1;
        }
        const remainder = count % 9;
        const taraNumber = remainder === 0 ? 9 : remainder;
        const taraInfo = TARA_INFO[taraNumber];
        return {
          birthNakshatra: normalizedBirth,
          birthNakshatraName: constants_1.nakshatraNames[normalizedBirth],
          currentNakshatra: normalizedCurrent,
          currentNakshatraName: constants_1.nakshatraNames[normalizedCurrent],
          taraNumber,
          taraName: taraInfo.name,
          isAuspicious: taraInfo.isAuspicious,
          description: taraInfo.description
        };
      }
      function getAuspiciousNakshatras(birthNakshatra) {
        const auspicious = [];
        const auspiciousTaras = [2, 4, 6, 8, 9];
        for (let i = 0; i < 27; i++) {
          const tara = getTarabalam(birthNakshatra, i);
          if (auspiciousTaras.includes(tara.taraNumber)) {
            auspicious.push(i);
          }
        }
        return auspicious;
      }
    }
  });

  // node_modules/astronomy-engine/astronomy.js
  var require_astronomy = __commonJS({
    "node_modules/astronomy-engine/astronomy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GeoEmbState = exports.GeoMoonState = exports.EclipticGeoMoon = exports.GeoMoon = exports.Ecliptic = exports.ObserverGravity = exports.VectorObserver = exports.ObserverState = exports.ObserverVector = exports.Equator = exports.SunPosition = exports.Observer = exports.Horizon = exports.EclipticCoordinates = exports.HorizontalCoordinates = exports.MakeRotation = exports.RotationMatrix = exports.EquatorialCoordinates = exports.Spherical = exports.StateVector = exports.Vector = exports.SiderealTime = exports.Libration = exports.LibrationInfo = exports.CalcMoonCount = exports.e_tilt = exports.MakeTime = exports.AstroTime = exports.SetDeltaTFunction = exports.DeltaT_JplHorizons = exports.DeltaT_EspenakMeeus = exports.PlanetOrbitalPeriod = exports.DefineStar = exports.Body = exports.AngleBetween = exports.MassProduct = exports.CALLISTO_RADIUS_KM = exports.GANYMEDE_RADIUS_KM = exports.EUROPA_RADIUS_KM = exports.IO_RADIUS_KM = exports.JUPITER_MEAN_RADIUS_KM = exports.JUPITER_POLAR_RADIUS_KM = exports.JUPITER_EQUATORIAL_RADIUS_KM = exports.RAD2HOUR = exports.RAD2DEG = exports.HOUR2RAD = exports.DEG2RAD = exports.AU_PER_LY = exports.KM_PER_AU = exports.C_AUDAY = void 0;
      exports.VectorFromHorizon = exports.HorizonFromVector = exports.SphereFromVector = exports.EquatorFromVector = exports.VectorFromSphere = exports.Pivot = exports.IdentityMatrix = exports.CombineRotation = exports.InverseRotation = exports.NextPlanetApsis = exports.SearchPlanetApsis = exports.NextLunarApsis = exports.SearchLunarApsis = exports.Apsis = exports.ApsisKind = exports.SearchPeakMagnitude = exports.SearchMaxElongation = exports.Elongation = exports.ElongationEvent = exports.Seasons = exports.SeasonInfo = exports.HourAngle = exports.SearchHourAngle = exports.HourAngleEvent = exports.SearchAltitude = exports.SearchRiseSet = exports.Atmosphere = exports.AtmosphereInfo = exports.NextMoonQuarter = exports.SearchMoonQuarter = exports.MoonQuarter = exports.SearchMoonPhase = exports.MoonPhase = exports.SearchRelativeLongitude = exports.Illumination = exports.IlluminationInfo = exports.EclipticLongitude = exports.AngleFromSun = exports.PairLongitude = exports.SearchSunLongitude = exports.Search = exports.HelioState = exports.BaryState = exports.GeoVector = exports.BackdatePosition = exports.CorrectLightTravel = exports.HelioDistance = exports.HelioVector = exports.JupiterMoons = exports.JupiterMoonsInfo = void 0;
      exports.GravitySimulator = exports.LagrangePointFast = exports.LagrangePoint = exports.RotationAxis = exports.AxisInfo = exports.NextMoonNode = exports.SearchMoonNode = exports.NodeEventInfo = exports.NodeEventKind = exports.NextTransit = exports.SearchTransit = exports.TransitInfo = exports.NextLocalSolarEclipse = exports.SearchLocalSolarEclipse = exports.LocalSolarEclipseInfo = exports.EclipseEvent = exports.NextGlobalSolarEclipse = exports.SearchGlobalSolarEclipse = exports.NextLunarEclipse = exports.GlobalSolarEclipseInfo = exports.SearchLunarEclipse = exports.LunarEclipseInfo = exports.EclipseKind = exports.Constellation = exports.ConstellationInfo = exports.Rotation_EQD_ECT = exports.Rotation_ECT_EQD = exports.Rotation_GAL_EQJ = exports.Rotation_EQJ_GAL = exports.Rotation_HOR_ECL = exports.Rotation_ECL_HOR = exports.Rotation_ECL_EQD = exports.Rotation_EQD_ECL = exports.Rotation_EQJ_HOR = exports.Rotation_HOR_EQJ = exports.Rotation_HOR_EQD = exports.Rotation_EQD_HOR = exports.Rotation_EQD_EQJ = exports.Rotation_ECT_EQJ = exports.Rotation_EQJ_ECT = exports.Rotation_EQJ_EQD = exports.Rotation_ECL_EQJ = exports.Rotation_EQJ_ECL = exports.RotateState = exports.RotateVector = exports.InverseRefraction = exports.Refraction = void 0;
      exports.C_AUDAY = 173.1446326846693;
      exports.KM_PER_AU = 14959787069098932e-8;
      exports.AU_PER_LY = 63241.07708807546;
      exports.DEG2RAD = 0.017453292519943295;
      exports.HOUR2RAD = 0.26179938779914946;
      exports.RAD2DEG = 57.29577951308232;
      exports.RAD2HOUR = 3.819718634205488;
      exports.JUPITER_EQUATORIAL_RADIUS_KM = 71492;
      exports.JUPITER_POLAR_RADIUS_KM = 66854;
      exports.JUPITER_MEAN_RADIUS_KM = 69911;
      exports.IO_RADIUS_KM = 1821.6;
      exports.EUROPA_RADIUS_KM = 1560.8;
      exports.GANYMEDE_RADIUS_KM = 2631.2;
      exports.CALLISTO_RADIUS_KM = 2410.3;
      var DAYS_PER_TROPICAL_YEAR = 365.24217;
      var J2000 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z");
      var PI2 = 2 * Math.PI;
      var ARC = 3600 * (180 / Math.PI);
      var ASEC2RAD = 484813681109536e-20;
      var ASEC180 = 180 * 60 * 60;
      var ASEC360 = 2 * ASEC180;
      var ANGVEL = 7292115e-11;
      var AU_PER_PARSEC = ASEC180 / Math.PI;
      var SUN_MAG_1AU = -0.17 - 5 * Math.log10(AU_PER_PARSEC);
      var MEAN_SYNODIC_MONTH = 29.530588;
      var SECONDS_PER_DAY = 24 * 3600;
      var MILLIS_PER_DAY = SECONDS_PER_DAY * 1e3;
      var SOLAR_DAYS_PER_SIDEREAL_DAY = 0.9972695717592592;
      var SUN_RADIUS_KM = 695700;
      var SUN_RADIUS_AU = SUN_RADIUS_KM / exports.KM_PER_AU;
      var EARTH_FLATTENING = 0.996647180302104;
      var EARTH_FLATTENING_SQUARED = EARTH_FLATTENING * EARTH_FLATTENING;
      var EARTH_EQUATORIAL_RADIUS_KM = 6378.1366;
      var EARTH_EQUATORIAL_RADIUS_AU = EARTH_EQUATORIAL_RADIUS_KM / exports.KM_PER_AU;
      var EARTH_POLAR_RADIUS_KM = EARTH_EQUATORIAL_RADIUS_KM * EARTH_FLATTENING;
      var EARTH_MEAN_RADIUS_KM = 6371;
      var EARTH_ATMOSPHERE_KM = 88;
      var EARTH_ECLIPSE_RADIUS_KM = EARTH_MEAN_RADIUS_KM + EARTH_ATMOSPHERE_KM;
      var MOON_EQUATORIAL_RADIUS_KM = 1738.1;
      var MOON_EQUATORIAL_RADIUS_AU = MOON_EQUATORIAL_RADIUS_KM / exports.KM_PER_AU;
      var MOON_MEAN_RADIUS_KM = 1737.4;
      var MOON_POLAR_RADIUS_KM = 1736;
      var MOON_POLAR_RADIUS_AU = MOON_POLAR_RADIUS_KM / exports.KM_PER_AU;
      var REFRACTION_NEAR_HORIZON = 34 / 60;
      var EARTH_MOON_MASS_RATIO = 81.30056;
      var SUN_GM = 2959122082855911e-19;
      var MERCURY_GM = 4912547451450812e-26;
      var VENUS_GM = 7243452486162703e-25;
      var EARTH_GM = 8887692390113509e-25;
      var MARS_GM = 9549535105779258e-26;
      var JUPITER_GM = 2825345909524226e-22;
      var SATURN_GM = 8459715185680659e-23;
      var URANUS_GM = 1292024916781969e-23;
      var NEPTUNE_GM = 1524358900784276e-23;
      var PLUTO_GM = 218869976542597e-26;
      var MOON_GM = EARTH_GM / EARTH_MOON_MASS_RATIO;
      function MassProduct(body) {
        switch (body) {
          case Body.Sun:
            return SUN_GM;
          case Body.Mercury:
            return MERCURY_GM;
          case Body.Venus:
            return VENUS_GM;
          case Body.Earth:
            return EARTH_GM;
          case Body.Moon:
            return MOON_GM;
          case Body.EMB:
            return EARTH_GM + MOON_GM;
          case Body.Mars:
            return MARS_GM;
          case Body.Jupiter:
            return JUPITER_GM;
          case Body.Saturn:
            return SATURN_GM;
          case Body.Uranus:
            return URANUS_GM;
          case Body.Neptune:
            return NEPTUNE_GM;
          case Body.Pluto:
            return PLUTO_GM;
          default:
            throw `Do not know mass product for body: ${body}`;
        }
      }
      exports.MassProduct = MassProduct;
      function VerifyBoolean(b) {
        if (b !== true && b !== false) {
          console.trace();
          throw `Value is not boolean: ${b}`;
        }
        return b;
      }
      function VerifyNumber(x) {
        if (!Number.isFinite(x)) {
          console.trace();
          throw `Value is not a finite number: ${x}`;
        }
        return x;
      }
      function Frac(x) {
        return x - Math.floor(x);
      }
      function AngleBetween(a, b) {
        const aa = a.x * a.x + a.y * a.y + a.z * a.z;
        if (Math.abs(aa) < 1e-8)
          throw `AngleBetween: first vector is too short.`;
        const bb = b.x * b.x + b.y * b.y + b.z * b.z;
        if (Math.abs(bb) < 1e-8)
          throw `AngleBetween: second vector is too short.`;
        const dot = (a.x * b.x + a.y * b.y + a.z * b.z) / Math.sqrt(aa * bb);
        if (dot <= -1)
          return 180;
        if (dot >= 1)
          return 0;
        return exports.RAD2DEG * Math.acos(dot);
      }
      exports.AngleBetween = AngleBetween;
      var Body;
      (function(Body2) {
        Body2["Sun"] = "Sun";
        Body2["Moon"] = "Moon";
        Body2["Mercury"] = "Mercury";
        Body2["Venus"] = "Venus";
        Body2["Earth"] = "Earth";
        Body2["Mars"] = "Mars";
        Body2["Jupiter"] = "Jupiter";
        Body2["Saturn"] = "Saturn";
        Body2["Uranus"] = "Uranus";
        Body2["Neptune"] = "Neptune";
        Body2["Pluto"] = "Pluto";
        Body2["SSB"] = "SSB";
        Body2["EMB"] = "EMB";
        Body2["Star1"] = "Star1";
        Body2["Star2"] = "Star2";
        Body2["Star3"] = "Star3";
        Body2["Star4"] = "Star4";
        Body2["Star5"] = "Star5";
        Body2["Star6"] = "Star6";
        Body2["Star7"] = "Star7";
        Body2["Star8"] = "Star8";
      })(Body = exports.Body || (exports.Body = {}));
      var StarList = [
        Body.Star1,
        Body.Star2,
        Body.Star3,
        Body.Star4,
        Body.Star5,
        Body.Star6,
        Body.Star7,
        Body.Star8
      ];
      var StarTable = [
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 },
        { ra: 0, dec: 0, dist: 0 }
      ];
      function GetStar(body) {
        const index = StarList.indexOf(body);
        return index >= 0 ? StarTable[index] : null;
      }
      function UserDefinedStar(body) {
        const star = GetStar(body);
        return star && star.dist > 0 ? star : null;
      }
      function DefineStar(body, ra, dec, distanceLightYears) {
        const star = GetStar(body);
        if (!star)
          throw `Invalid star body: ${body}`;
        VerifyNumber(ra);
        VerifyNumber(dec);
        VerifyNumber(distanceLightYears);
        if (ra < 0 || ra >= 24)
          throw `Invalid right ascension for star: ${ra}`;
        if (dec < -90 || dec > 90)
          throw `Invalid declination for star: ${dec}`;
        if (distanceLightYears < 1)
          throw `Invalid star distance: ${distanceLightYears}`;
        star.ra = ra;
        star.dec = dec;
        star.dist = distanceLightYears * exports.AU_PER_LY;
      }
      exports.DefineStar = DefineStar;
      var PrecessDirection;
      (function(PrecessDirection2) {
        PrecessDirection2[PrecessDirection2["From2000"] = 0] = "From2000";
        PrecessDirection2[PrecessDirection2["Into2000"] = 1] = "Into2000";
      })(PrecessDirection || (PrecessDirection = {}));
      var Planet = {
        Mercury: { OrbitalPeriod: 87.969 },
        Venus: { OrbitalPeriod: 224.701 },
        Earth: { OrbitalPeriod: 365.256 },
        Mars: { OrbitalPeriod: 686.98 },
        Jupiter: { OrbitalPeriod: 4332.589 },
        Saturn: { OrbitalPeriod: 10759.22 },
        Uranus: { OrbitalPeriod: 30685.4 },
        Neptune: { OrbitalPeriod: 60189 },
        Pluto: { OrbitalPeriod: 90560 }
      };
      function PlanetOrbitalPeriod(body) {
        if (body in Planet)
          return Planet[body].OrbitalPeriod;
        throw `Unknown orbital period for: ${body}`;
      }
      exports.PlanetOrbitalPeriod = PlanetOrbitalPeriod;
      var vsop = {
        Mercury: [
          [
            [
              [4.40250710144, 0, 0],
              [0.40989414977, 1.48302034195, 26087.9031415742],
              [0.050462942, 4.47785489551, 52175.8062831484],
              [0.00855346844, 1.16520322459, 78263.70942472259],
              [0.00165590362, 4.11969163423, 104351.61256629678],
              [34561897e-11, 0.77930768443, 130439.51570787099],
              [7583476e-11, 3.71348404924, 156527.41884944518]
            ],
            [
              [26087.90313685529, 0, 0],
              [0.01131199811, 6.21874197797, 26087.9031415742],
              [0.00292242298, 3.04449355541, 52175.8062831484],
              [75775081e-11, 6.08568821653, 78263.70942472259],
              [19676525e-11, 2.80965111777, 104351.61256629678]
            ]
          ],
          [
            [
              [0.11737528961, 1.98357498767, 26087.9031415742],
              [0.02388076996, 5.03738959686, 52175.8062831484],
              [0.01222839532, 3.14159265359, 0],
              [0.0054325181, 1.79644363964, 78263.70942472259],
              [0.0012977877, 4.83232503958, 104351.61256629678],
              [31866927e-11, 1.58088495658, 130439.51570787099],
              [7963301e-11, 4.60972126127, 156527.41884944518]
            ],
            [
              [0.00274646065, 3.95008450011, 26087.9031415742],
              [99737713e-11, 3.14159265359, 0]
            ]
          ],
          [
            [
              [0.39528271651, 0, 0],
              [0.07834131818, 6.19233722598, 26087.9031415742],
              [0.00795525558, 2.95989690104, 52175.8062831484],
              [0.00121281764, 6.01064153797, 78263.70942472259],
              [21921969e-11, 2.77820093972, 104351.61256629678],
              [4354065e-11, 5.82894543774, 130439.51570787099]
            ],
            [
              [0.0021734774, 4.65617158665, 26087.9031415742],
              [44141826e-11, 1.42385544001, 52175.8062831484]
            ]
          ]
        ],
        Venus: [
          [
            [
              [3.17614666774, 0, 0],
              [0.01353968419, 5.59313319619, 10213.285546211],
              [89891645e-11, 5.30650047764, 20426.571092422],
              [5477194e-11, 4.41630661466, 7860.4193924392],
              [3455741e-11, 2.6996444782, 11790.6290886588],
              [2372061e-11, 2.99377542079, 3930.2096962196],
              [1317168e-11, 5.18668228402, 26.2983197998],
              [1664146e-11, 4.25018630147, 1577.3435424478],
              [1438387e-11, 4.15745084182, 9683.5945811164],
              [1200521e-11, 6.15357116043, 30639.856638633]
            ],
            [
              [10213.28554621638, 0, 0],
              [95617813e-11, 2.4640651111, 10213.285546211],
              [7787201e-11, 0.6247848222, 20426.571092422]
            ]
          ],
          [
            [
              [0.05923638472, 0.26702775812, 10213.285546211],
              [40107978e-11, 1.14737178112, 20426.571092422],
              [32814918e-11, 3.14159265359, 0]
            ],
            [
              [0.00287821243, 1.88964962838, 10213.285546211]
            ]
          ],
          [
            [
              [0.72334820891, 0, 0],
              [0.00489824182, 4.02151831717, 10213.285546211],
              [1658058e-11, 4.90206728031, 20426.571092422],
              [1378043e-11, 1.12846591367, 11790.6290886588],
              [1632096e-11, 2.84548795207, 7860.4193924392],
              [498395e-11, 2.58682193892, 9683.5945811164],
              [221985e-11, 2.01346696541, 19367.1891622328],
              [237454e-11, 2.55136053886, 15720.8387848784]
            ],
            [
              [34551041e-11, 0.89198706276, 10213.285546211]
            ]
          ]
        ],
        Earth: [
          [
            [
              [1.75347045673, 0, 0],
              [0.03341656453, 4.66925680415, 6283.0758499914],
              [34894275e-11, 4.62610242189, 12566.1516999828],
              [3417572e-11, 2.82886579754, 3.523118349],
              [3497056e-11, 2.74411783405, 5753.3848848968],
              [3135899e-11, 3.62767041756, 77713.7714681205],
              [2676218e-11, 4.41808345438, 7860.4193924392],
              [2342691e-11, 6.13516214446, 3930.2096962196],
              [1273165e-11, 2.03709657878, 529.6909650946],
              [1324294e-11, 0.74246341673, 11506.7697697936],
              [901854e-11, 2.04505446477, 26.2983197998],
              [1199167e-11, 1.10962946234, 1577.3435424478],
              [857223e-11, 3.50849152283, 398.1490034082],
              [779786e-11, 1.17882681962, 5223.6939198022],
              [99025e-10, 5.23268072088, 5884.9268465832],
              [753141e-11, 2.53339052847, 5507.5532386674],
              [505267e-11, 4.58292599973, 18849.2275499742],
              [492392e-11, 4.20505711826, 775.522611324],
              [356672e-11, 2.91954114478, 0.0673103028],
              [284125e-11, 1.89869240932, 796.2980068164],
              [242879e-11, 0.34481445893, 5486.777843175],
              [317087e-11, 5.84901948512, 11790.6290886588],
              [271112e-11, 0.31486255375, 10977.078804699],
              [206217e-11, 4.80646631478, 2544.3144198834],
              [205478e-11, 1.86953770281, 5573.1428014331],
              [202318e-11, 2.45767790232, 6069.7767545534],
              [126225e-11, 1.08295459501, 20.7753954924],
              [155516e-11, 0.83306084617, 213.299095438]
            ],
            [
              [6283.0758499914, 0, 0],
              [0.00206058863, 2.67823455808, 6283.0758499914],
              [4303419e-11, 2.63512233481, 12566.1516999828]
            ],
            [
              [8721859e-11, 1.07253635559, 6283.0758499914]
            ]
          ],
          [
            [],
            [
              [0.00227777722, 3.4137662053, 6283.0758499914],
              [3805678e-11, 3.37063423795, 12566.1516999828]
            ]
          ],
          [
            [
              [1.00013988784, 0, 0],
              [0.01670699632, 3.09846350258, 6283.0758499914],
              [13956024e-11, 3.05524609456, 12566.1516999828],
              [308372e-10, 5.19846674381, 77713.7714681205],
              [1628463e-11, 1.17387558054, 5753.3848848968],
              [1575572e-11, 2.84685214877, 7860.4193924392],
              [924799e-11, 5.45292236722, 11506.7697697936],
              [542439e-11, 4.56409151453, 3930.2096962196],
              [47211e-10, 3.66100022149, 5884.9268465832],
              [85831e-11, 1.27079125277, 161000.6857376741],
              [57056e-11, 2.01374292245, 83996.84731811189],
              [55736e-11, 5.2415979917, 71430.69561812909],
              [174844e-11, 3.01193636733, 18849.2275499742],
              [243181e-11, 4.2734953079, 11790.6290886588]
            ],
            [
              [0.00103018607, 1.10748968172, 6283.0758499914],
              [1721238e-11, 1.06442300386, 12566.1516999828]
            ],
            [
              [4359385e-11, 5.78455133808, 6283.0758499914]
            ]
          ]
        ],
        Mars: [
          [
            [
              [6.20347711581, 0, 0],
              [0.18656368093, 5.0503710027, 3340.6124266998],
              [0.01108216816, 5.40099836344, 6681.2248533996],
              [91798406e-11, 5.75478744667, 10021.8372800994],
              [27744987e-11, 5.97049513147, 3.523118349],
              [10610235e-11, 2.93958560338, 2281.2304965106],
              [12315897e-11, 0.84956094002, 2810.9214616052],
              [8926784e-11, 4.15697846427, 0.0172536522],
              [8715691e-11, 6.11005153139, 13362.4497067992],
              [6797556e-11, 0.36462229657, 398.1490034082],
              [7774872e-11, 3.33968761376, 5621.8429232104],
              [3575078e-11, 1.6618650571, 2544.3144198834],
              [4161108e-11, 0.22814971327, 2942.4634232916],
              [3075252e-11, 0.85696614132, 191.4482661116],
              [2628117e-11, 0.64806124465, 3337.0893083508],
              [2937546e-11, 6.07893711402, 0.0673103028],
              [2389414e-11, 5.03896442664, 796.2980068164],
              [2579844e-11, 0.02996736156, 3344.1355450488],
              [1528141e-11, 1.14979301996, 6151.533888305],
              [1798806e-11, 0.65634057445, 529.6909650946],
              [1264357e-11, 3.62275122593, 5092.1519581158],
              [1286228e-11, 3.06796065034, 2146.1654164752],
              [1546404e-11, 2.91579701718, 1751.539531416],
              [1024902e-11, 3.69334099279, 8962.4553499102],
              [891566e-11, 0.18293837498, 16703.062133499],
              [858759e-11, 2.4009381194, 2914.0142358238],
              [832715e-11, 2.46418619474, 3340.5951730476],
              [83272e-10, 4.49495782139, 3340.629680352],
              [712902e-11, 3.66335473479, 1059.3819301892],
              [748723e-11, 3.82248614017, 155.4203994342],
              [723861e-11, 0.67497311481, 3738.761430108],
              [635548e-11, 2.92182225127, 8432.7643848156],
              [655162e-11, 0.48864064125, 3127.3133312618],
              [550474e-11, 3.81001042328, 0.9803210682],
              [55275e-10, 4.47479317037, 1748.016413067],
              [425966e-11, 0.55364317304, 6283.0758499914],
              [415131e-11, 0.49662285038, 213.299095438],
              [472167e-11, 3.62547124025, 1194.4470102246],
              [306551e-11, 0.38052848348, 6684.7479717486],
              [312141e-11, 0.99853944405, 6677.7017350506],
              [293198e-11, 4.22131299634, 20.7753954924],
              [302375e-11, 4.48618007156, 3532.0606928114],
              [274027e-11, 0.54222167059, 3340.545116397],
              [281079e-11, 5.88163521788, 1349.8674096588],
              [231183e-11, 1.28242156993, 3870.3033917944],
              [283602e-11, 5.7688543494, 3149.1641605882],
              [236117e-11, 5.75503217933, 3333.498879699],
              [274033e-11, 0.13372524985, 3340.6797370026],
              [299395e-11, 2.78323740866, 6254.6266625236]
            ],
            [
              [3340.61242700512, 0, 0],
              [0.01457554523, 3.60433733236, 3340.6124266998],
              [0.00168414711, 3.92318567804, 6681.2248533996],
              [20622975e-11, 4.26108844583, 10021.8372800994],
              [3452392e-11, 4.7321039319, 3.523118349],
              [2586332e-11, 4.60670058555, 13362.4497067992],
              [841535e-11, 4.45864030426, 2281.2304965106]
            ],
            [
              [58152577e-11, 2.04961712429, 3340.6124266998],
              [13459579e-11, 2.45738706163, 6681.2248533996]
            ]
          ],
          [
            [
              [0.03197134986, 3.76832042431, 3340.6124266998],
              [0.00298033234, 4.10616996305, 6681.2248533996],
              [0.00289104742, 0, 0],
              [31365539e-11, 4.4465105309, 10021.8372800994],
              [34841e-9, 4.7881254926, 13362.4497067992]
            ],
            [
              [0.00217310991, 6.04472194776, 3340.6124266998],
              [20976948e-11, 3.14159265359, 0],
              [12834709e-11, 1.60810667915, 6681.2248533996]
            ]
          ],
          [
            [
              [1.53033488271, 0, 0],
              [0.1418495316, 3.47971283528, 3340.6124266998],
              [0.00660776362, 3.81783443019, 6681.2248533996],
              [46179117e-11, 4.15595316782, 10021.8372800994],
              [8109733e-11, 5.55958416318, 2810.9214616052],
              [7485318e-11, 1.77239078402, 5621.8429232104],
              [5523191e-11, 1.3643630377, 2281.2304965106],
              [382516e-10, 4.49407183687, 13362.4497067992],
              [2306537e-11, 0.09081579001, 2544.3144198834],
              [1999396e-11, 5.36059617709, 3337.0893083508],
              [2484394e-11, 4.9254563992, 2942.4634232916],
              [1960195e-11, 4.74249437639, 3344.1355450488],
              [1167119e-11, 2.11260868341, 5092.1519581158],
              [1102816e-11, 5.00908403998, 398.1490034082],
              [899066e-11, 4.40791133207, 529.6909650946],
              [992252e-11, 5.83861961952, 6151.533888305],
              [807354e-11, 2.10217065501, 1059.3819301892],
              [797915e-11, 3.44839203899, 796.2980068164],
              [740975e-11, 1.49906336885, 2146.1654164752]
            ],
            [
              [0.01107433345, 2.03250524857, 3340.6124266998],
              [0.00103175887, 2.37071847807, 6681.2248533996],
              [128772e-9, 0, 0],
              [1081588e-10, 2.70888095665, 10021.8372800994]
            ],
            [
              [44242249e-11, 0.47930604954, 3340.6124266998],
              [8138042e-11, 0.86998389204, 6681.2248533996]
            ]
          ]
        ],
        Jupiter: [
          [
            [
              [0.59954691494, 0, 0],
              [0.09695898719, 5.06191793158, 529.6909650946],
              [0.00573610142, 1.44406205629, 7.1135470008],
              [0.00306389205, 5.41734730184, 1059.3819301892],
              [97178296e-11, 4.14264726552, 632.7837393132],
              [72903078e-11, 3.64042916389, 522.5774180938],
              [64263975e-11, 3.41145165351, 103.0927742186],
              [39806064e-11, 2.29376740788, 419.4846438752],
              [38857767e-11, 1.27231755835, 316.3918696566],
              [27964629e-11, 1.7845459182, 536.8045120954],
              [1358973e-10, 5.7748104079, 1589.0728952838],
              [8246349e-11, 3.5822792584, 206.1855484372],
              [8768704e-11, 3.63000308199, 949.1756089698],
              [7368042e-11, 5.0810119427, 735.8765135318],
              [626315e-10, 0.02497628807, 213.299095438],
              [6114062e-11, 4.51319998626, 1162.4747044078],
              [4905396e-11, 1.32084470588, 110.2063212194],
              [5305285e-11, 1.30671216791, 14.2270940016],
              [5305441e-11, 4.18625634012, 1052.2683831884],
              [4647248e-11, 4.69958103684, 3.9321532631],
              [3045023e-11, 4.31676431084, 426.598190876],
              [2609999e-11, 1.56667394063, 846.0828347512],
              [2028191e-11, 1.06376530715, 3.1813937377],
              [1764763e-11, 2.14148655117, 1066.49547719],
              [1722972e-11, 3.88036268267, 1265.5674786264],
              [1920945e-11, 0.97168196472, 639.897286314],
              [1633223e-11, 3.58201833555, 515.463871093],
              [1431999e-11, 4.29685556046, 625.6701923124],
              [973272e-11, 4.09764549134, 95.9792272178]
            ],
            [
              [529.69096508814, 0, 0],
              [0.00489503243, 4.2208293947, 529.6909650946],
              [0.00228917222, 6.02646855621, 7.1135470008],
              [30099479e-11, 4.54540782858, 1059.3819301892],
              [2072092e-10, 5.45943156902, 522.5774180938],
              [12103653e-11, 0.16994816098, 536.8045120954],
              [6067987e-11, 4.42422292017, 103.0927742186],
              [5433968e-11, 3.98480737746, 419.4846438752],
              [4237744e-11, 5.89008707199, 14.2270940016]
            ],
            [
              [47233601e-11, 4.32148536482, 7.1135470008],
              [30649436e-11, 2.929777887, 529.6909650946],
              [14837605e-11, 3.14159265359, 0]
            ]
          ],
          [
            [
              [0.02268615702, 3.55852606721, 529.6909650946],
              [0.00109971634, 3.90809347197, 1059.3819301892],
              [0.00110090358, 0, 0],
              [8101428e-11, 3.60509572885, 522.5774180938],
              [6043996e-11, 4.25883108339, 1589.0728952838],
              [6437782e-11, 0.30627119215, 536.8045120954]
            ],
            [
              [78203446e-11, 1.52377859742, 529.6909650946]
            ]
          ],
          [
            [
              [5.20887429326, 0, 0],
              [0.25209327119, 3.49108639871, 529.6909650946],
              [0.00610599976, 3.84115365948, 1059.3819301892],
              [0.00282029458, 2.57419881293, 632.7837393132],
              [0.00187647346, 2.07590383214, 522.5774180938],
              [86792905e-11, 0.71001145545, 419.4846438752],
              [72062974e-11, 0.21465724607, 536.8045120954],
              [65517248e-11, 5.9799588479, 316.3918696566],
              [29134542e-11, 1.67759379655, 103.0927742186],
              [30135335e-11, 2.16132003734, 949.1756089698],
              [23453271e-11, 3.54023522184, 735.8765135318],
              [22283743e-11, 4.19362594399, 1589.0728952838],
              [23947298e-11, 0.2745803748, 7.1135470008],
              [13032614e-11, 2.96042965363, 1162.4747044078],
              [970336e-10, 1.90669633585, 206.1855484372],
              [12749023e-11, 2.71550286592, 1052.2683831884],
              [7057931e-11, 2.18184839926, 1265.5674786264],
              [6137703e-11, 6.26418240033, 846.0828347512],
              [2616976e-11, 2.00994012876, 1581.959348283]
            ],
            [
              [0.0127180152, 2.64937512894, 529.6909650946],
              [61661816e-11, 3.00076460387, 1059.3819301892],
              [53443713e-11, 3.89717383175, 522.5774180938],
              [31185171e-11, 4.88276958012, 536.8045120954],
              [41390269e-11, 0, 0]
            ]
          ]
        ],
        Saturn: [
          [
            [
              [0.87401354025, 0, 0],
              [0.11107659762, 3.96205090159, 213.299095438],
              [0.01414150957, 4.58581516874, 7.1135470008],
              [0.00398379389, 0.52112032699, 206.1855484372],
              [0.00350769243, 3.30329907896, 426.598190876],
              [0.00206816305, 0.24658372002, 103.0927742186],
              [792713e-9, 3.84007056878, 220.4126424388],
              [23990355e-11, 4.66976924553, 110.2063212194],
              [16573588e-11, 0.43719228296, 419.4846438752],
              [14906995e-11, 5.76903183869, 316.3918696566],
              [1582029e-10, 0.93809155235, 632.7837393132],
              [14609559e-11, 1.56518472, 3.9321532631],
              [13160301e-11, 4.44891291899, 14.2270940016],
              [15053543e-11, 2.71669915667, 639.897286314],
              [13005299e-11, 5.98119023644, 11.0457002639],
              [10725067e-11, 3.12939523827, 202.2533951741],
              [5863206e-11, 0.23656938524, 529.6909650946],
              [5227757e-11, 4.20783365759, 3.1813937377],
              [6126317e-11, 1.76328667907, 277.0349937414],
              [5019687e-11, 3.17787728405, 433.7117378768],
              [459255e-10, 0.61977744975, 199.0720014364],
              [4005867e-11, 2.24479718502, 63.7358983034],
              [2953796e-11, 0.98280366998, 95.9792272178],
              [387367e-10, 3.22283226966, 138.5174968707],
              [2461186e-11, 2.03163875071, 735.8765135318],
              [3269484e-11, 0.77492638211, 949.1756089698],
              [1758145e-11, 3.2658010994, 522.5774180938],
              [1640172e-11, 5.5050445305, 846.0828347512],
              [1391327e-11, 4.02333150505, 323.5054166574],
              [1580648e-11, 4.37265307169, 309.2783226558],
              [1123498e-11, 2.83726798446, 415.5524906121],
              [1017275e-11, 3.71700135395, 227.5261894396],
              [848642e-11, 3.1915017083, 209.3669421749]
            ],
            [
              [213.2990952169, 0, 0],
              [0.01297370862, 1.82834923978, 213.299095438],
              [0.00564345393, 2.88499717272, 7.1135470008],
              [93734369e-11, 1.06311793502, 426.598190876],
              [0.00107674962, 2.27769131009, 206.1855484372],
              [40244455e-11, 2.04108104671, 220.4126424388],
              [19941774e-11, 1.2795439047, 103.0927742186],
              [10511678e-11, 2.7488034213, 14.2270940016],
              [6416106e-11, 0.38238295041, 639.897286314],
              [4848994e-11, 2.43037610229, 419.4846438752],
              [4056892e-11, 2.92133209468, 110.2063212194],
              [3768635e-11, 3.6496533078, 3.9321532631]
            ],
            [
              [0.0011644133, 1.17988132879, 7.1135470008],
              [91841837e-11, 0.0732519584, 213.299095438],
              [36661728e-11, 0, 0],
              [15274496e-11, 4.06493179167, 206.1855484372]
            ]
          ],
          [
            [
              [0.04330678039, 3.60284428399, 213.299095438],
              [0.00240348302, 2.85238489373, 426.598190876],
              [84745939e-11, 0, 0],
              [30863357e-11, 3.48441504555, 220.4126424388],
              [34116062e-11, 0.57297307557, 206.1855484372],
              [1473407e-10, 2.11846596715, 639.897286314],
              [9916667e-11, 5.79003188904, 419.4846438752],
              [6993564e-11, 4.7360468972, 7.1135470008],
              [4807588e-11, 5.43305312061, 316.3918696566]
            ],
            [
              [0.00198927992, 4.93901017903, 213.299095438],
              [36947916e-11, 3.14159265359, 0],
              [17966989e-11, 0.5197943111, 426.598190876]
            ]
          ],
          [
            [
              [9.55758135486, 0, 0],
              [0.52921382865, 2.39226219573, 213.299095438],
              [0.01873679867, 5.2354960466, 206.1855484372],
              [0.01464663929, 1.64763042902, 426.598190876],
              [0.00821891141, 5.93520042303, 316.3918696566],
              [0.00547506923, 5.0153261898, 103.0927742186],
              [0.0037168465, 2.27114821115, 220.4126424388],
              [0.00361778765, 3.13904301847, 7.1135470008],
              [0.00140617506, 5.70406606781, 632.7837393132],
              [0.00108974848, 3.29313390175, 110.2063212194],
              [69006962e-11, 5.94099540992, 419.4846438752],
              [61053367e-11, 0.94037691801, 639.897286314],
              [48913294e-11, 1.55733638681, 202.2533951741],
              [34143772e-11, 0.19519102597, 277.0349937414],
              [32401773e-11, 5.47084567016, 949.1756089698],
              [20936596e-11, 0.46349251129, 735.8765135318],
              [9796004e-11, 5.20477537945, 1265.5674786264],
              [11993338e-11, 5.98050967385, 846.0828347512],
              [208393e-9, 1.52102476129, 433.7117378768],
              [15298404e-11, 3.0594381494, 529.6909650946],
              [6465823e-11, 0.17732249942, 1052.2683831884],
              [11380257e-11, 1.7310542704, 522.5774180938],
              [3419618e-11, 4.94550542171, 1581.959348283]
            ],
            [
              [0.0618298134, 0.2584351148, 213.299095438],
              [0.00506577242, 0.71114625261, 206.1855484372],
              [0.00341394029, 5.79635741658, 426.598190876],
              [0.00188491195, 0.47215589652, 220.4126424388],
              [0.00186261486, 3.14159265359, 0],
              [0.00143891146, 1.40744822888, 7.1135470008]
            ],
            [
              [0.00436902572, 4.78671677509, 213.299095438]
            ]
          ]
        ],
        Uranus: [
          [
            [
              [5.48129294297, 0, 0],
              [0.09260408234, 0.89106421507, 74.7815985673],
              [0.01504247898, 3.6271926092, 1.4844727083],
              [0.00365981674, 1.89962179044, 73.297125859],
              [0.00272328168, 3.35823706307, 149.5631971346],
              [70328461e-11, 5.39254450063, 63.7358983034],
              [68892678e-11, 6.09292483287, 76.2660712756],
              [61998615e-11, 2.26952066061, 2.9689454166],
              [61950719e-11, 2.85098872691, 11.0457002639],
              [2646877e-10, 3.14152083966, 71.8126531507],
              [25710476e-11, 6.11379840493, 454.9093665273],
              [2107885e-10, 4.36059339067, 148.0787244263],
              [17818647e-11, 1.74436930289, 36.6485629295],
              [14613507e-11, 4.73732166022, 3.9321532631],
              [11162509e-11, 5.8268179635, 224.3447957019],
              [1099791e-10, 0.48865004018, 138.5174968707],
              [9527478e-11, 2.95516862826, 35.1640902212],
              [7545601e-11, 5.236265824, 109.9456887885],
              [4220241e-11, 3.23328220918, 70.8494453042],
              [40519e-9, 2.277550173, 151.0476698429],
              [3354596e-11, 1.0654900738, 4.4534181249],
              [2926718e-11, 4.62903718891, 9.5612275556],
              [349034e-10, 5.48306144511, 146.594251718],
              [3144069e-11, 4.75199570434, 77.7505439839],
              [2922333e-11, 5.35235361027, 85.8272988312],
              [2272788e-11, 4.36600400036, 70.3281804424],
              [2051219e-11, 1.51773566586, 0.1118745846],
              [2148602e-11, 0.60745949945, 38.1330356378],
              [1991643e-11, 4.92437588682, 277.0349937414],
              [1376226e-11, 2.04283539351, 65.2203710117],
              [1666902e-11, 3.62744066769, 380.12776796],
              [1284107e-11, 3.11347961505, 202.2533951741],
              [1150429e-11, 0.93343589092, 3.1813937377],
              [1533221e-11, 2.58594681212, 52.6901980395],
              [1281604e-11, 0.54271272721, 222.8603229936],
              [1372139e-11, 4.19641530878, 111.4301614968],
              [1221029e-11, 0.1990065003, 108.4612160802],
              [946181e-11, 1.19253165736, 127.4717966068],
              [1150989e-11, 4.17898916639, 33.6796175129]
            ],
            [
              [74.7815986091, 0, 0],
              [0.00154332863, 5.24158770553, 74.7815985673],
              [24456474e-11, 1.71260334156, 1.4844727083],
              [9258442e-11, 0.4282973235, 11.0457002639],
              [8265977e-11, 1.50218091379, 63.7358983034],
              [915016e-10, 1.41213765216, 149.5631971346]
            ]
          ],
          [
            [
              [0.01346277648, 2.61877810547, 74.7815985673],
              [623414e-9, 5.08111189648, 149.5631971346],
              [61601196e-11, 3.14159265359, 0],
              [9963722e-11, 1.61603805646, 76.2660712756],
              [992616e-10, 0.57630380333, 73.297125859]
            ],
            [
              [34101978e-11, 0.01321929936, 74.7815985673]
            ]
          ],
          [
            [
              [19.21264847206, 0, 0],
              [0.88784984413, 5.60377527014, 74.7815985673],
              [0.03440836062, 0.32836099706, 73.297125859],
              [0.0205565386, 1.7829515933, 149.5631971346],
              [0.0064932241, 4.52247285911, 76.2660712756],
              [0.00602247865, 3.86003823674, 63.7358983034],
              [0.00496404167, 1.40139935333, 454.9093665273],
              [0.00338525369, 1.58002770318, 138.5174968707],
              [0.00243509114, 1.57086606044, 71.8126531507],
              [0.00190522303, 1.99809394714, 1.4844727083],
              [0.00161858838, 2.79137786799, 148.0787244263],
              [0.00143706183, 1.38368544947, 11.0457002639],
              [93192405e-11, 0.17437220467, 36.6485629295],
              [71424548e-11, 4.24509236074, 224.3447957019],
              [89806014e-11, 3.66105364565, 109.9456887885],
              [39009723e-11, 1.66971401684, 70.8494453042],
              [46677296e-11, 1.39976401694, 35.1640902212],
              [39025624e-11, 3.36234773834, 277.0349937414],
              [36755274e-11, 3.88649278513, 146.594251718],
              [30348723e-11, 0.70100838798, 151.0476698429],
              [29156413e-11, 3.180563367, 77.7505439839],
              [22637073e-11, 0.72518687029, 529.6909650946],
              [11959076e-11, 1.7504339214, 984.6003316219],
              [25620756e-11, 5.25656086672, 380.12776796]
            ],
            [
              [0.01479896629, 3.67205697578, 74.7815985673]
            ]
          ]
        ],
        Neptune: [
          [
            [
              [5.31188633046, 0, 0],
              [0.0179847553, 2.9010127389, 38.1330356378],
              [0.01019727652, 0.48580922867, 1.4844727083],
              [0.00124531845, 4.83008090676, 36.6485629295],
              [42064466e-11, 5.41054993053, 2.9689454166],
              [37714584e-11, 6.09221808686, 35.1640902212],
              [33784738e-11, 1.24488874087, 76.2660712756],
              [16482741e-11, 7727998e-11, 491.5579294568],
              [9198584e-11, 4.93747051954, 39.6175083461],
              [899425e-10, 0.27462171806, 175.1660598002]
            ],
            [
              [38.13303563957, 0, 0],
              [16604172e-11, 4.86323329249, 1.4844727083],
              [15744045e-11, 2.27887427527, 38.1330356378]
            ]
          ],
          [
            [
              [0.03088622933, 1.44104372644, 38.1330356378],
              [27780087e-11, 5.91271884599, 76.2660712756],
              [27623609e-11, 0, 0],
              [15355489e-11, 2.52123799551, 36.6485629295],
              [15448133e-11, 3.50877079215, 39.6175083461]
            ]
          ],
          [
            [
              [30.07013205828, 0, 0],
              [0.27062259632, 1.32999459377, 38.1330356378],
              [0.01691764014, 3.25186135653, 36.6485629295],
              [0.00807830553, 5.18592878704, 1.4844727083],
              [0.0053776051, 4.52113935896, 35.1640902212],
              [0.00495725141, 1.5710564165, 491.5579294568],
              [0.00274571975, 1.84552258866, 175.1660598002],
              [1201232e-10, 1.92059384991, 1021.2488945514],
              [0.00121801746, 5.79754470298, 76.2660712756],
              [0.00100896068, 0.3770272493, 73.297125859],
              [0.00135134092, 3.37220609835, 39.6175083461],
              [7571796e-11, 1.07149207335, 388.4651552382]
            ]
          ]
        ]
      };
      function DeltaT_EspenakMeeus(ut) {
        var u, u2, u3, u4, u5, u6, u7;
        const y = 2e3 + (ut - 14) / DAYS_PER_TROPICAL_YEAR;
        if (y < -500) {
          u = (y - 1820) / 100;
          return -20 + 32 * u * u;
        }
        if (y < 500) {
          u = y / 100;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          u5 = u2 * u3;
          u6 = u3 * u3;
          return 10583.6 - 1014.41 * u + 33.78311 * u2 - 5.952053 * u3 - 0.1798452 * u4 + 0.022174192 * u5 + 0.0090316521 * u6;
        }
        if (y < 1600) {
          u = (y - 1e3) / 100;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          u5 = u2 * u3;
          u6 = u3 * u3;
          return 1574.2 - 556.01 * u + 71.23472 * u2 + 0.319781 * u3 - 0.8503463 * u4 - 5050998e-9 * u5 + 0.0083572073 * u6;
        }
        if (y < 1700) {
          u = y - 1600;
          u2 = u * u;
          u3 = u * u2;
          return 120 - 0.9808 * u - 0.01532 * u2 + u3 / 7129;
        }
        if (y < 1800) {
          u = y - 1700;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          return 8.83 + 0.1603 * u - 59285e-7 * u2 + 13336e-8 * u3 - u4 / 1174e3;
        }
        if (y < 1860) {
          u = y - 1800;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          u5 = u2 * u3;
          u6 = u3 * u3;
          u7 = u3 * u4;
          return 13.72 - 0.332447 * u + 68612e-7 * u2 + 41116e-7 * u3 - 37436e-8 * u4 + 121272e-10 * u5 - 1699e-10 * u6 + 875e-12 * u7;
        }
        if (y < 1900) {
          u = y - 1860;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          u5 = u2 * u3;
          return 7.62 + 0.5737 * u - 0.251754 * u2 + 0.01680668 * u3 - 4473624e-10 * u4 + u5 / 233174;
        }
        if (y < 1920) {
          u = y - 1900;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          return -2.79 + 1.494119 * u - 0.0598939 * u2 + 61966e-7 * u3 - 197e-6 * u4;
        }
        if (y < 1941) {
          u = y - 1920;
          u2 = u * u;
          u3 = u * u2;
          return 21.2 + 0.84493 * u - 0.0761 * u2 + 20936e-7 * u3;
        }
        if (y < 1961) {
          u = y - 1950;
          u2 = u * u;
          u3 = u * u2;
          return 29.07 + 0.407 * u - u2 / 233 + u3 / 2547;
        }
        if (y < 1986) {
          u = y - 1975;
          u2 = u * u;
          u3 = u * u2;
          return 45.45 + 1.067 * u - u2 / 260 - u3 / 718;
        }
        if (y < 2005) {
          u = y - 2e3;
          u2 = u * u;
          u3 = u * u2;
          u4 = u2 * u2;
          u5 = u2 * u3;
          return 63.86 + 0.3345 * u - 0.060374 * u2 + 17275e-7 * u3 + 651814e-9 * u4 + 2373599e-11 * u5;
        }
        if (y < 2050) {
          u = y - 2e3;
          return 62.92 + 0.32217 * u + 5589e-6 * u * u;
        }
        if (y < 2150) {
          u = (y - 1820) / 100;
          return -20 + 32 * u * u - 0.5628 * (2150 - y);
        }
        u = (y - 1820) / 100;
        return -20 + 32 * u * u;
      }
      exports.DeltaT_EspenakMeeus = DeltaT_EspenakMeeus;
      function DeltaT_JplHorizons(ut) {
        return DeltaT_EspenakMeeus(Math.min(ut, 17 * DAYS_PER_TROPICAL_YEAR));
      }
      exports.DeltaT_JplHorizons = DeltaT_JplHorizons;
      var DeltaT = DeltaT_EspenakMeeus;
      function SetDeltaTFunction(func) {
        DeltaT = func;
      }
      exports.SetDeltaTFunction = SetDeltaTFunction;
      function TerrestrialTime(ut) {
        return ut + DeltaT(ut) / 86400;
      }
      var AstroTime = class _AstroTime {
        /**
         * @param {FlexibleDateTime} date
         *      A JavaScript Date object, a numeric UTC value expressed in J2000 days, or another AstroTime object.
         */
        constructor(date) {
          if (date instanceof _AstroTime) {
            this.date = date.date;
            this.ut = date.ut;
            this.tt = date.tt;
            return;
          }
          const MillisPerDay = 1e3 * 3600 * 24;
          if (date instanceof Date && Number.isFinite(date.getTime())) {
            this.date = date;
            this.ut = (date.getTime() - J2000.getTime()) / MillisPerDay;
            this.tt = TerrestrialTime(this.ut);
            return;
          }
          if (Number.isFinite(date)) {
            this.date = new Date(J2000.getTime() + date * MillisPerDay);
            this.ut = date;
            this.tt = TerrestrialTime(this.ut);
            return;
          }
          throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
        }
        /**
         * @brief Creates an `AstroTime` value from a Terrestrial Time (TT) day value.
         *
         * This function can be used in rare cases where a time must be based
         * on Terrestrial Time (TT) rather than Universal Time (UT).
         * Most developers will want to invoke `new AstroTime(ut)` with a universal time
         * instead of this function, because usually time is based on civil time adjusted
         * by leap seconds to match the Earth's rotation, rather than the uniformly
         * flowing TT used to calculate solar system dynamics. In rare cases
         * where the caller already knows TT, this function is provided to create
         * an `AstroTime` value that can be passed to Astronomy Engine functions.
         *
         * @param {number} tt
         *      The number of days since the J2000 epoch as expressed in Terrestrial Time.
         *
         * @returns {AstroTime}
         *      An `AstroTime` object for the specified terrestrial time.
         */
        static FromTerrestrialTime(tt) {
          let time = new _AstroTime(tt);
          for (; ; ) {
            const err = tt - time.tt;
            if (Math.abs(err) < 1e-12)
              return time;
            time = time.AddDays(err);
          }
        }
        /**
         * Formats an `AstroTime` object as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
         * date/time string in UTC, to millisecond resolution.
         * Example: `2018-08-17T17:22:04.050Z`
         * @returns {string}
         */
        toString() {
          return this.date.toISOString();
        }
        /**
         * Returns a new `AstroTime` object adjusted by the floating point number of days.
         * Does NOT modify the original `AstroTime` object.
         *
         * @param {number} days
         *      The floating point number of days by which to adjust the given date and time.
         *      Positive values adjust the date toward the future, and
         *      negative values adjust the date toward the past.
         *
         * @returns {AstroTime}
         */
        AddDays(days) {
          return new _AstroTime(this.ut + days);
        }
      };
      exports.AstroTime = AstroTime;
      function InterpolateTime(time1, time2, fraction) {
        return new AstroTime(time1.ut + fraction * (time2.ut - time1.ut));
      }
      function MakeTime(date) {
        if (date instanceof AstroTime) {
          return date;
        }
        return new AstroTime(date);
      }
      exports.MakeTime = MakeTime;
      function iau2000b(time) {
        function mod(x) {
          return x % ASEC360 * ASEC2RAD;
        }
        const t = time.tt / 36525;
        const elp = mod(128710479305e-5 + t * 1295965810481e-4);
        const f = mod(335779.526232 + t * 17395272628478e-4);
        const d = mod(107226070369e-5 + t * 1602961601209e-3);
        const om = mod(450160.398036 - t * 69628905431e-4);
        let sarg = Math.sin(om);
        let carg = Math.cos(om);
        let dp = (-172064161 - 174666 * t) * sarg + 33386 * carg;
        let de = (92052331 + 9086 * t) * carg + 15377 * sarg;
        let arg = 2 * (f - d + om);
        sarg = Math.sin(arg);
        carg = Math.cos(arg);
        dp += (-13170906 - 1675 * t) * sarg - 13696 * carg;
        de += (5730336 - 3015 * t) * carg - 4587 * sarg;
        arg = 2 * (f + om);
        sarg = Math.sin(arg);
        carg = Math.cos(arg);
        dp += (-2276413 - 234 * t) * sarg + 2796 * carg;
        de += (978459 - 485 * t) * carg + 1374 * sarg;
        arg = 2 * om;
        sarg = Math.sin(arg);
        carg = Math.cos(arg);
        dp += (2074554 + 207 * t) * sarg - 698 * carg;
        de += (-897492 + 470 * t) * carg - 291 * sarg;
        sarg = Math.sin(elp);
        carg = Math.cos(elp);
        dp += (1475877 - 3633 * t) * sarg + 11817 * carg;
        de += (73871 - 184 * t) * carg - 1924 * sarg;
        return {
          dpsi: -135e-6 + dp * 1e-7,
          deps: 388e-6 + de * 1e-7
        };
      }
      function mean_obliq(time) {
        var t = time.tt / 36525;
        var asec = ((((-434e-10 * t - 576e-9) * t + 20034e-7) * t - 1831e-7) * t - 46.836769) * t + 84381.406;
        return asec / 3600;
      }
      var cache_e_tilt;
      function e_tilt(time) {
        if (!cache_e_tilt || Math.abs(cache_e_tilt.tt - time.tt) > 1e-6) {
          const nut = iau2000b(time);
          const mean_ob = mean_obliq(time);
          const true_ob = mean_ob + nut.deps / 3600;
          cache_e_tilt = {
            tt: time.tt,
            dpsi: nut.dpsi,
            deps: nut.deps,
            ee: nut.dpsi * Math.cos(mean_ob * exports.DEG2RAD) / 15,
            mobl: mean_ob,
            tobl: true_ob
          };
        }
        return cache_e_tilt;
      }
      exports.e_tilt = e_tilt;
      function obl_ecl2equ_vec(oblDegrees, pos) {
        const obl = oblDegrees * exports.DEG2RAD;
        const cos_obl = Math.cos(obl);
        const sin_obl = Math.sin(obl);
        return [
          pos[0],
          pos[1] * cos_obl - pos[2] * sin_obl,
          pos[1] * sin_obl + pos[2] * cos_obl
        ];
      }
      function ecl2equ_vec(time, pos) {
        return obl_ecl2equ_vec(mean_obliq(time), pos);
      }
      exports.CalcMoonCount = 0;
      function CalcMoon(time) {
        ++exports.CalcMoonCount;
        const T = time.tt / 36525;
        function DeclareArray1(xmin, xmax) {
          const array = [];
          let i;
          for (i = 0; i <= xmax - xmin; ++i) {
            array.push(0);
          }
          return { min: xmin, array };
        }
        function DeclareArray2(xmin, xmax, ymin, ymax) {
          const array = [];
          for (let i = 0; i <= xmax - xmin; ++i) {
            array.push(DeclareArray1(ymin, ymax));
          }
          return { min: xmin, array };
        }
        function ArrayGet2(a, x, y) {
          const m = a.array[x - a.min];
          return m.array[y - m.min];
        }
        function ArraySet2(a, x, y, v) {
          const m = a.array[x - a.min];
          m.array[y - m.min] = v;
        }
        let S, MAX, ARG, FAC, I, J, T2, DGAM, DLAM, N, GAM1C, SINPI, L0, L, LS, F, D, DL0, DL, DLS, DF, DD, DS;
        let coArray = DeclareArray2(-6, 6, 1, 4);
        let siArray = DeclareArray2(-6, 6, 1, 4);
        function CO(x, y) {
          return ArrayGet2(coArray, x, y);
        }
        function SI(x, y) {
          return ArrayGet2(siArray, x, y);
        }
        function SetCO(x, y, v) {
          return ArraySet2(coArray, x, y, v);
        }
        function SetSI(x, y, v) {
          return ArraySet2(siArray, x, y, v);
        }
        function AddThe(c1, s1, c2, s2, func) {
          func(c1 * c2 - s1 * s2, s1 * c2 + c1 * s2);
        }
        function Sine(phi) {
          return Math.sin(PI2 * phi);
        }
        T2 = T * T;
        DLAM = 0;
        DS = 0;
        GAM1C = 0;
        SINPI = 3422.7;
        var S1 = Sine(0.19833 + 0.05611 * T);
        var S2 = Sine(0.27869 + 0.04508 * T);
        var S3 = Sine(0.16827 - 0.36903 * T);
        var S4 = Sine(0.34734 - 5.37261 * T);
        var S5 = Sine(0.10498 - 5.37899 * T);
        var S6 = Sine(0.42681 - 0.41855 * T);
        var S7 = Sine(0.14943 - 5.37511 * T);
        DL0 = 0.84 * S1 + 0.31 * S2 + 14.27 * S3 + 7.26 * S4 + 0.28 * S5 + 0.24 * S6;
        DL = 2.94 * S1 + 0.31 * S2 + 14.27 * S3 + 9.34 * S4 + 1.12 * S5 + 0.83 * S6;
        DLS = -6.4 * S1 - 1.89 * S6;
        DF = 0.21 * S1 + 0.31 * S2 + 14.27 * S3 - 88.7 * S4 - 15.3 * S5 + 0.24 * S6 - 1.86 * S7;
        DD = DL0 - DLS;
        DGAM = -3332e-9 * Sine(0.59734 - 5.37261 * T) - 539e-9 * Sine(0.35498 - 5.37899 * T) - 64e-9 * Sine(0.39943 - 5.37511 * T);
        L0 = PI2 * Frac(0.60643382 + 1336.85522467 * T - 313e-8 * T2) + DL0 / ARC;
        L = PI2 * Frac(0.37489701 + 1325.55240982 * T + 2565e-8 * T2) + DL / ARC;
        LS = PI2 * Frac(0.99312619 + 99.99735956 * T - 44e-8 * T2) + DLS / ARC;
        F = PI2 * Frac(0.25909118 + 1342.2278298 * T - 892e-8 * T2) + DF / ARC;
        D = PI2 * Frac(0.82736186 + 1236.85308708 * T - 397e-8 * T2) + DD / ARC;
        for (I = 1; I <= 4; ++I) {
          switch (I) {
            case 1:
              ARG = L;
              MAX = 4;
              FAC = 1.000002208;
              break;
            case 2:
              ARG = LS;
              MAX = 3;
              FAC = 0.997504612 - 2495388e-9 * T;
              break;
            case 3:
              ARG = F;
              MAX = 4;
              FAC = 1.000002708 + 139.978 * DGAM;
              break;
            case 4:
              ARG = D;
              MAX = 6;
              FAC = 1;
              break;
            default:
              throw `Internal error: I = ${I}`;
          }
          SetCO(0, I, 1);
          SetCO(1, I, Math.cos(ARG) * FAC);
          SetSI(0, I, 0);
          SetSI(1, I, Math.sin(ARG) * FAC);
          for (J = 2; J <= MAX; ++J) {
            AddThe(CO(J - 1, I), SI(J - 1, I), CO(1, I), SI(1, I), (c, s) => (SetCO(J, I, c), SetSI(J, I, s)));
          }
          for (J = 1; J <= MAX; ++J) {
            SetCO(-J, I, CO(J, I));
            SetSI(-J, I, -SI(J, I));
          }
        }
        function Term(p, q, r, s) {
          var result = { x: 1, y: 0 };
          var I2 = [0, p, q, r, s];
          for (var k = 1; k <= 4; ++k)
            if (I2[k] !== 0)
              AddThe(result.x, result.y, CO(I2[k], k), SI(I2[k], k), (c, s2) => (result.x = c, result.y = s2));
          return result;
        }
        function AddSol(coeffl, coeffs, coeffg, coeffp, p, q, r, s) {
          var result = Term(p, q, r, s);
          DLAM += coeffl * result.y;
          DS += coeffs * result.y;
          GAM1C += coeffg * result.x;
          SINPI += coeffp * result.x;
        }
        AddSol(13.902, 14.06, -1e-3, 0.2607, 0, 0, 0, 4);
        AddSol(0.403, -4.01, 0.394, 23e-4, 0, 0, 0, 3);
        AddSol(2369.912, 2373.36, 0.601, 28.2333, 0, 0, 0, 2);
        AddSol(-125.154, -112.79, -0.725, -0.9781, 0, 0, 0, 1);
        AddSol(1.979, 6.98, -0.445, 0.0433, 1, 0, 0, 4);
        AddSol(191.953, 192.72, 0.029, 3.0861, 1, 0, 0, 2);
        AddSol(-8.466, -13.51, 0.455, -0.1093, 1, 0, 0, 1);
        AddSol(22639.5, 22609.07, 0.079, 186.5398, 1, 0, 0, 0);
        AddSol(18.609, 3.59, -0.094, 0.0118, 1, 0, 0, -1);
        AddSol(-4586.465, -4578.13, -0.077, 34.3117, 1, 0, 0, -2);
        AddSol(3.215, 5.44, 0.192, -0.0386, 1, 0, 0, -3);
        AddSol(-38.428, -38.64, 1e-3, 0.6008, 1, 0, 0, -4);
        AddSol(-0.393, -1.43, -0.092, 86e-4, 1, 0, 0, -6);
        AddSol(-0.289, -1.59, 0.123, -53e-4, 0, 1, 0, 4);
        AddSol(-24.42, -25.1, 0.04, -0.3, 0, 1, 0, 2);
        AddSol(18.023, 17.93, 7e-3, 0.1494, 0, 1, 0, 1);
        AddSol(-668.146, -126.98, -1.302, -0.3997, 0, 1, 0, 0);
        AddSol(0.56, 0.32, -1e-3, -37e-4, 0, 1, 0, -1);
        AddSol(-165.145, -165.06, 0.054, 1.9178, 0, 1, 0, -2);
        AddSol(-1.877, -6.46, -0.416, 0.0339, 0, 1, 0, -4);
        AddSol(0.213, 1.02, -0.074, 54e-4, 2, 0, 0, 4);
        AddSol(14.387, 14.78, -0.017, 0.2833, 2, 0, 0, 2);
        AddSol(-0.586, -1.2, 0.054, -0.01, 2, 0, 0, 1);
        AddSol(769.016, 767.96, 0.107, 10.1657, 2, 0, 0, 0);
        AddSol(1.75, 2.01, -0.018, 0.0155, 2, 0, 0, -1);
        AddSol(-211.656, -152.53, 5.679, -0.3039, 2, 0, 0, -2);
        AddSol(1.225, 0.91, -0.03, -88e-4, 2, 0, 0, -3);
        AddSol(-30.773, -34.07, -0.308, 0.3722, 2, 0, 0, -4);
        AddSol(-0.57, -1.4, -0.074, 0.0109, 2, 0, 0, -6);
        AddSol(-2.921, -11.75, 0.787, -0.0484, 1, 1, 0, 2);
        AddSol(1.267, 1.52, -0.022, 0.0164, 1, 1, 0, 1);
        AddSol(-109.673, -115.18, 0.461, -0.949, 1, 1, 0, 0);
        AddSol(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2);
        AddSol(0.233, 0.36, 0.012, -25e-4, 1, 1, 0, -3);
        AddSol(-4.391, -9.66, -0.471, 0.0673, 1, 1, 0, -4);
        AddSol(0.283, 1.53, -0.111, 6e-3, 1, -1, 0, 4);
        AddSol(14.577, 31.7, -1.54, 0.2302, 1, -1, 0, 2);
        AddSol(147.687, 138.76, 0.679, 1.1528, 1, -1, 0, 0);
        AddSol(-1.089, 0.55, 0.021, 0, 1, -1, 0, -1);
        AddSol(28.475, 23.59, -0.443, -0.2257, 1, -1, 0, -2);
        AddSol(-0.276, -0.38, -6e-3, -36e-4, 1, -1, 0, -3);
        AddSol(0.636, 2.27, 0.146, -0.0102, 1, -1, 0, -4);
        AddSol(-0.189, -1.68, 0.131, -28e-4, 0, 2, 0, 2);
        AddSol(-7.486, -0.66, -0.037, -86e-4, 0, 2, 0, 0);
        AddSol(-8.096, -16.35, -0.74, 0.0918, 0, 2, 0, -2);
        AddSol(-5.741, -0.04, 0, -9e-4, 0, 0, 2, 2);
        AddSol(0.255, 0, 0, 0, 0, 0, 2, 1);
        AddSol(-411.608, -0.2, 0, -0.0124, 0, 0, 2, 0);
        AddSol(0.584, 0.84, 0, 71e-4, 0, 0, 2, -1);
        AddSol(-55.173, -52.14, 0, -0.1052, 0, 0, 2, -2);
        AddSol(0.254, 0.25, 0, -17e-4, 0, 0, 2, -3);
        AddSol(0.025, -1.67, 0, 31e-4, 0, 0, 2, -4);
        AddSol(1.06, 2.96, -0.166, 0.0243, 3, 0, 0, 2);
        AddSol(36.124, 50.64, -1.3, 0.6215, 3, 0, 0, 0);
        AddSol(-13.193, -16.4, 0.258, -0.1187, 3, 0, 0, -2);
        AddSol(-1.187, -0.74, 0.042, 74e-4, 3, 0, 0, -4);
        AddSol(-0.293, -0.31, -2e-3, 46e-4, 3, 0, 0, -6);
        AddSol(-0.29, -1.45, 0.116, -51e-4, 2, 1, 0, 2);
        AddSol(-7.649, -10.56, 0.259, -0.1038, 2, 1, 0, 0);
        AddSol(-8.627, -7.59, 0.078, -0.0192, 2, 1, 0, -2);
        AddSol(-2.74, -2.54, 0.022, 0.0324, 2, 1, 0, -4);
        AddSol(1.181, 3.32, -0.212, 0.0213, 2, -1, 0, 2);
        AddSol(9.703, 11.67, -0.151, 0.1268, 2, -1, 0, 0);
        AddSol(-0.352, -0.37, 1e-3, -28e-4, 2, -1, 0, -1);
        AddSol(-2.494, -1.17, -3e-3, -17e-4, 2, -1, 0, -2);
        AddSol(0.36, 0.2, -0.012, -43e-4, 2, -1, 0, -4);
        AddSol(-1.167, -1.25, 8e-3, -0.0106, 1, 2, 0, 0);
        AddSol(-7.412, -6.12, 0.117, 0.0484, 1, 2, 0, -2);
        AddSol(-0.311, -0.65, -0.032, 44e-4, 1, 2, 0, -4);
        AddSol(0.757, 1.82, -0.105, 0.0112, 1, -2, 0, 2);
        AddSol(2.58, 2.32, 0.027, 0.0196, 1, -2, 0, 0);
        AddSol(2.533, 2.4, -0.014, -0.0212, 1, -2, 0, -2);
        AddSol(-0.344, -0.57, -0.025, 36e-4, 0, 3, 0, -2);
        AddSol(-0.992, -0.02, 0, 0, 1, 0, 2, 2);
        AddSol(-45.099, -0.02, 0, -1e-3, 1, 0, 2, 0);
        AddSol(-0.179, -9.52, 0, -0.0833, 1, 0, 2, -2);
        AddSol(-0.301, -0.33, 0, 14e-4, 1, 0, 2, -4);
        AddSol(-6.382, -3.37, 0, -0.0481, 1, 0, -2, 2);
        AddSol(39.528, 85.13, 0, -0.7136, 1, 0, -2, 0);
        AddSol(9.366, 0.71, 0, -0.0112, 1, 0, -2, -2);
        AddSol(0.202, 0.02, 0, 0, 1, 0, -2, -4);
        AddSol(0.415, 0.1, 0, 13e-4, 0, 1, 2, 0);
        AddSol(-2.152, -2.26, 0, -66e-4, 0, 1, 2, -2);
        AddSol(-1.44, -1.3, 0, 14e-4, 0, 1, -2, 2);
        AddSol(0.384, -0.04, 0, 0, 0, 1, -2, -2);
        AddSol(1.938, 3.6, -0.145, 0.0401, 4, 0, 0, 0);
        AddSol(-0.952, -1.58, 0.052, -0.013, 4, 0, 0, -2);
        AddSol(-0.551, -0.94, 0.032, -97e-4, 3, 1, 0, 0);
        AddSol(-0.482, -0.57, 5e-3, -45e-4, 3, 1, 0, -2);
        AddSol(0.681, 0.96, -0.026, 0.0115, 3, -1, 0, 0);
        AddSol(-0.297, -0.27, 2e-3, -9e-4, 2, 2, 0, -2);
        AddSol(0.254, 0.21, -3e-3, 0, 2, -2, 0, -2);
        AddSol(-0.25, -0.22, 4e-3, 14e-4, 1, 3, 0, -2);
        AddSol(-3.996, 0, 0, 4e-4, 2, 0, 2, 0);
        AddSol(0.557, -0.75, 0, -9e-3, 2, 0, 2, -2);
        AddSol(-0.459, -0.38, 0, -53e-4, 2, 0, -2, 2);
        AddSol(-1.298, 0.74, 0, 4e-4, 2, 0, -2, 0);
        AddSol(0.538, 1.14, 0, -0.0141, 2, 0, -2, -2);
        AddSol(0.263, 0.02, 0, 0, 1, 1, 2, 0);
        AddSol(0.426, 0.07, 0, -6e-4, 1, 1, -2, -2);
        AddSol(-0.304, 0.03, 0, 3e-4, 1, -1, 2, 0);
        AddSol(-0.372, -0.19, 0, -27e-4, 1, -1, -2, 2);
        AddSol(0.418, 0, 0, 0, 0, 0, 4, 0);
        AddSol(-0.33, -0.04, 0, 0, 3, 0, 2, 0);
        function ADDN(coeffn, p, q, r, s) {
          return coeffn * Term(p, q, r, s).y;
        }
        N = 0;
        N += ADDN(-526.069, 0, 0, 1, -2);
        N += ADDN(-3.352, 0, 0, 1, -4);
        N += ADDN(44.297, 1, 0, 1, -2);
        N += ADDN(-6, 1, 0, 1, -4);
        N += ADDN(20.599, -1, 0, 1, 0);
        N += ADDN(-30.598, -1, 0, 1, -2);
        N += ADDN(-24.649, -2, 0, 1, 0);
        N += ADDN(-2, -2, 0, 1, -2);
        N += ADDN(-22.571, 0, 1, 1, -2);
        N += ADDN(10.985, 0, -1, 1, -2);
        DLAM += 0.82 * Sine(0.7736 - 62.5512 * T) + 0.31 * Sine(0.0466 - 125.1025 * T) + 0.35 * Sine(0.5785 - 25.1042 * T) + 0.66 * Sine(0.4591 + 1335.8075 * T) + 0.64 * Sine(0.313 - 91.568 * T) + 1.14 * Sine(0.148 + 1331.2898 * T) + 0.21 * Sine(0.5918 + 1056.5859 * T) + 0.44 * Sine(0.5784 + 1322.8595 * T) + 0.24 * Sine(0.2275 - 5.7374 * T) + 0.28 * Sine(0.2965 + 2.6929 * T) + 0.33 * Sine(0.3132 + 6.3368 * T);
        S = F + DS / ARC;
        let lat_seconds = (1.000002708 + 139.978 * DGAM) * (18518.511 + 1.189 + GAM1C) * Math.sin(S) - 6.24 * Math.sin(3 * S) + N;
        return {
          geo_eclip_lon: PI2 * Frac((L0 + DLAM / ARC) / PI2),
          geo_eclip_lat: Math.PI / (180 * 3600) * lat_seconds,
          distance_au: ARC * EARTH_EQUATORIAL_RADIUS_AU / (0.999953253 * SINPI)
        };
      }
      var LibrationInfo = class {
        constructor(elat, elon, mlat, mlon, dist_km, diam_deg) {
          this.elat = elat;
          this.elon = elon;
          this.mlat = mlat;
          this.mlon = mlon;
          this.dist_km = dist_km;
          this.diam_deg = diam_deg;
        }
      };
      exports.LibrationInfo = LibrationInfo;
      function Libration(date) {
        const time = MakeTime(date);
        const t = time.tt / 36525;
        const t2 = t * t;
        const t3 = t2 * t;
        const t4 = t2 * t2;
        const moon = CalcMoon(time);
        const mlon = moon.geo_eclip_lon;
        const mlat = moon.geo_eclip_lat;
        const dist_km = moon.distance_au * exports.KM_PER_AU;
        const I = exports.DEG2RAD * 1.543;
        const f = exports.DEG2RAD * NormalizeLongitude(93.272095 + 483202.0175233 * t - 36539e-7 * t2 - t3 / 3526e3 + t4 / 86331e4);
        const omega = exports.DEG2RAD * NormalizeLongitude(125.0445479 - 1934.1362891 * t + 20754e-7 * t2 + t3 / 467441 - t4 / 60616e3);
        const m = exports.DEG2RAD * NormalizeLongitude(357.5291092 + 35999.0502909 * t - 1536e-7 * t2 + t3 / 2449e4);
        const mdash = exports.DEG2RAD * NormalizeLongitude(134.9633964 + 477198.8675055 * t + 87414e-7 * t2 + t3 / 69699 - t4 / 14712e3);
        const d = exports.DEG2RAD * NormalizeLongitude(297.8501921 + 445267.1114034 * t - 18819e-7 * t2 + t3 / 545868 - t4 / 113065e3);
        const e = 1 - 2516e-6 * t - 74e-7 * t2;
        const w = mlon - omega;
        const a = Math.atan2(Math.sin(w) * Math.cos(mlat) * Math.cos(I) - Math.sin(mlat) * Math.sin(I), Math.cos(w) * Math.cos(mlat));
        const ldash = LongitudeOffset(exports.RAD2DEG * (a - f));
        const bdash = Math.asin(-Math.sin(w) * Math.cos(mlat) * Math.sin(I) - Math.sin(mlat) * Math.cos(I));
        const k1 = exports.DEG2RAD * (119.75 + 131.849 * t);
        const k2 = exports.DEG2RAD * (72.56 + 20.186 * t);
        const rho = -0.02752 * Math.cos(mdash) + -0.02245 * Math.sin(f) + 684e-5 * Math.cos(mdash - 2 * f) + -293e-5 * Math.cos(2 * f) + -85e-5 * Math.cos(2 * f - 2 * d) + -54e-5 * Math.cos(mdash - 2 * d) + -2e-4 * Math.sin(mdash + f) + -2e-4 * Math.cos(mdash + 2 * f) + -2e-4 * Math.cos(mdash - f) + 14e-5 * Math.cos(mdash + 2 * f - 2 * d);
        const sigma = -0.02816 * Math.sin(mdash) + 0.02244 * Math.cos(f) + -682e-5 * Math.sin(mdash - 2 * f) + -279e-5 * Math.sin(2 * f) + -83e-5 * Math.sin(2 * f - 2 * d) + 69e-5 * Math.sin(mdash - 2 * d) + 4e-4 * Math.cos(mdash + f) + -25e-5 * Math.sin(2 * mdash) + -23e-5 * Math.sin(mdash + 2 * f) + 2e-4 * Math.cos(mdash - f) + 19e-5 * Math.sin(mdash - f) + 13e-5 * Math.sin(mdash + 2 * f - 2 * d) + -1e-4 * Math.cos(mdash - 3 * f);
        const tau = 0.0252 * e * Math.sin(m) + 473e-5 * Math.sin(2 * mdash - 2 * f) + -467e-5 * Math.sin(mdash) + 396e-5 * Math.sin(k1) + 276e-5 * Math.sin(2 * mdash - 2 * d) + 196e-5 * Math.sin(omega) + -183e-5 * Math.cos(mdash - f) + 115e-5 * Math.sin(mdash - 2 * d) + -96e-5 * Math.sin(mdash - d) + 46e-5 * Math.sin(2 * f - 2 * d) + -39e-5 * Math.sin(mdash - f) + -32e-5 * Math.sin(mdash - m - d) + 27e-5 * Math.sin(2 * mdash - m - 2 * d) + 23e-5 * Math.sin(k2) + -14e-5 * Math.sin(2 * d) + 14e-5 * Math.cos(2 * mdash - 2 * f) + -12e-5 * Math.sin(mdash - 2 * f) + -12e-5 * Math.sin(2 * mdash) + 11e-5 * Math.sin(2 * mdash - 2 * m - 2 * d);
        const ldash2 = -tau + (rho * Math.cos(a) + sigma * Math.sin(a)) * Math.tan(bdash);
        const bdash2 = sigma * Math.cos(a) - rho * Math.sin(a);
        const diam_deg = 2 * exports.RAD2DEG * Math.atan(MOON_MEAN_RADIUS_KM / Math.sqrt(dist_km * dist_km - MOON_MEAN_RADIUS_KM * MOON_MEAN_RADIUS_KM));
        return new LibrationInfo(exports.RAD2DEG * bdash + bdash2, ldash + ldash2, exports.RAD2DEG * mlat, exports.RAD2DEG * mlon, dist_km, diam_deg);
      }
      exports.Libration = Libration;
      function rotate(rot, vec) {
        return [
          rot.rot[0][0] * vec[0] + rot.rot[1][0] * vec[1] + rot.rot[2][0] * vec[2],
          rot.rot[0][1] * vec[0] + rot.rot[1][1] * vec[1] + rot.rot[2][1] * vec[2],
          rot.rot[0][2] * vec[0] + rot.rot[1][2] * vec[1] + rot.rot[2][2] * vec[2]
        ];
      }
      function precession(pos, time, dir) {
        const r = precession_rot(time, dir);
        return rotate(r, pos);
      }
      function precession_posvel(state, time, dir) {
        const r = precession_rot(time, dir);
        return RotateState(r, state);
      }
      function precession_rot(time, dir) {
        const t = time.tt / 36525;
        let eps0 = 84381.406;
        let psia = ((((-951e-10 * t + 132851e-9) * t - 114045e-8) * t - 1.0790069) * t + 5038.481507) * t;
        let omegaa = ((((3337e-10 * t - 467e-9) * t - 772503e-8) * t + 0.0512623) * t - 0.025754) * t + eps0;
        let chia = ((((-56e-9 * t + 170663e-9) * t - 121197e-8) * t - 2.3814292) * t + 10.556403) * t;
        eps0 *= ASEC2RAD;
        psia *= ASEC2RAD;
        omegaa *= ASEC2RAD;
        chia *= ASEC2RAD;
        const sa = Math.sin(eps0);
        const ca = Math.cos(eps0);
        const sb = Math.sin(-psia);
        const cb = Math.cos(-psia);
        const sc = Math.sin(-omegaa);
        const cc = Math.cos(-omegaa);
        const sd = Math.sin(chia);
        const cd = Math.cos(chia);
        const xx = cd * cb - sb * sd * cc;
        const yx = cd * sb * ca + sd * cc * cb * ca - sa * sd * sc;
        const zx = cd * sb * sa + sd * cc * cb * sa + ca * sd * sc;
        const xy = -sd * cb - sb * cd * cc;
        const yy = -sd * sb * ca + cd * cc * cb * ca - sa * cd * sc;
        const zy = -sd * sb * sa + cd * cc * cb * sa + ca * cd * sc;
        const xz = sb * sc;
        const yz = -sc * cb * ca - sa * cc;
        const zz = -sc * cb * sa + cc * ca;
        if (dir === PrecessDirection.Into2000) {
          return new RotationMatrix([
            [xx, yx, zx],
            [xy, yy, zy],
            [xz, yz, zz]
          ]);
        }
        if (dir === PrecessDirection.From2000) {
          return new RotationMatrix([
            [xx, xy, xz],
            [yx, yy, yz],
            [zx, zy, zz]
          ]);
        }
        throw "Invalid precess direction";
      }
      function era(time) {
        const thet1 = 0.779057273264 + 0.00273781191135448 * time.ut;
        const thet3 = time.ut % 1;
        let theta = 360 * ((thet1 + thet3) % 1);
        if (theta < 0) {
          theta += 360;
        }
        return theta;
      }
      var sidereal_time_cache;
      function sidereal_time(time) {
        if (!sidereal_time_cache || sidereal_time_cache.tt !== time.tt) {
          const t = time.tt / 36525;
          let eqeq = 15 * e_tilt(time).ee;
          const theta = era(time);
          const st = eqeq + 0.014506 + ((((-368e-10 * t - 29956e-9) * t - 44e-8) * t + 1.3915817) * t + 4612.156534) * t;
          let gst = (st / 3600 + theta) % 360 / 15;
          if (gst < 0) {
            gst += 24;
          }
          sidereal_time_cache = {
            tt: time.tt,
            st: gst
          };
        }
        return sidereal_time_cache.st;
      }
      function SiderealTime(date) {
        const time = MakeTime(date);
        return sidereal_time(time);
      }
      exports.SiderealTime = SiderealTime;
      function inverse_terra(ovec, st) {
        const x = ovec[0] * exports.KM_PER_AU;
        const y = ovec[1] * exports.KM_PER_AU;
        const z = ovec[2] * exports.KM_PER_AU;
        const p = Math.hypot(x, y);
        let lon_deg, lat_deg, height_km;
        if (p < 1e-6) {
          lon_deg = 0;
          lat_deg = z > 0 ? 90 : -90;
          height_km = Math.abs(z) - EARTH_POLAR_RADIUS_KM;
        } else {
          const stlocl = Math.atan2(y, x);
          lon_deg = exports.RAD2DEG * stlocl - 15 * st;
          while (lon_deg <= -180)
            lon_deg += 360;
          while (lon_deg > 180)
            lon_deg -= 360;
          let lat = Math.atan2(z, p);
          let cos, sin, denom;
          let count = 0;
          for (; ; ) {
            if (++count > 10)
              throw `inverse_terra failed to converge.`;
            cos = Math.cos(lat);
            sin = Math.sin(lat);
            const factor = (EARTH_FLATTENING_SQUARED - 1) * EARTH_EQUATORIAL_RADIUS_KM;
            const cos2 = cos * cos;
            const sin2 = sin * sin;
            const radicand = cos2 + EARTH_FLATTENING_SQUARED * sin2;
            denom = Math.sqrt(radicand);
            const W = factor * sin * cos / denom - z * cos + p * sin;
            if (Math.abs(W) < 1e-8)
              break;
            const D = factor * ((cos2 - sin2) / denom - sin2 * cos2 * (EARTH_FLATTENING_SQUARED - 1) / (factor * radicand)) + z * sin + p * cos;
            lat -= W / D;
          }
          lat_deg = exports.RAD2DEG * lat;
          const adjust = EARTH_EQUATORIAL_RADIUS_KM / denom;
          if (Math.abs(sin) > Math.abs(cos))
            height_km = z / sin - EARTH_FLATTENING_SQUARED * adjust;
          else
            height_km = p / cos - adjust;
        }
        return new Observer2(lat_deg, lon_deg, 1e3 * height_km);
      }
      function terra(observer, st) {
        const phi = observer.latitude * exports.DEG2RAD;
        const sinphi = Math.sin(phi);
        const cosphi = Math.cos(phi);
        const c = 1 / Math.hypot(cosphi, EARTH_FLATTENING * sinphi);
        const s = EARTH_FLATTENING_SQUARED * c;
        const ht_km = observer.height / 1e3;
        const ach = EARTH_EQUATORIAL_RADIUS_KM * c + ht_km;
        const ash = EARTH_EQUATORIAL_RADIUS_KM * s + ht_km;
        const stlocl = (15 * st + observer.longitude) * exports.DEG2RAD;
        const sinst = Math.sin(stlocl);
        const cosst = Math.cos(stlocl);
        return {
          pos: [ach * cosphi * cosst / exports.KM_PER_AU, ach * cosphi * sinst / exports.KM_PER_AU, ash * sinphi / exports.KM_PER_AU],
          vel: [-ANGVEL * ach * cosphi * sinst * 86400 / exports.KM_PER_AU, ANGVEL * ach * cosphi * cosst * 86400 / exports.KM_PER_AU, 0]
        };
      }
      function nutation(pos, time, dir) {
        const r = nutation_rot(time, dir);
        return rotate(r, pos);
      }
      function nutation_posvel(state, time, dir) {
        const r = nutation_rot(time, dir);
        return RotateState(r, state);
      }
      function nutation_rot(time, dir) {
        const tilt = e_tilt(time);
        const oblm = tilt.mobl * exports.DEG2RAD;
        const oblt = tilt.tobl * exports.DEG2RAD;
        const psi = tilt.dpsi * ASEC2RAD;
        const cobm = Math.cos(oblm);
        const sobm = Math.sin(oblm);
        const cobt = Math.cos(oblt);
        const sobt = Math.sin(oblt);
        const cpsi = Math.cos(psi);
        const spsi = Math.sin(psi);
        const xx = cpsi;
        const yx = -spsi * cobm;
        const zx = -spsi * sobm;
        const xy = spsi * cobt;
        const yy = cpsi * cobm * cobt + sobm * sobt;
        const zy = cpsi * sobm * cobt - cobm * sobt;
        const xz = spsi * sobt;
        const yz = cpsi * cobm * sobt - sobm * cobt;
        const zz = cpsi * sobm * sobt + cobm * cobt;
        if (dir === PrecessDirection.From2000) {
          return new RotationMatrix([
            [xx, xy, xz],
            [yx, yy, yz],
            [zx, zy, zz]
          ]);
        }
        if (dir === PrecessDirection.Into2000) {
          return new RotationMatrix([
            [xx, yx, zx],
            [xy, yy, zy],
            [xz, yz, zz]
          ]);
        }
        throw "Invalid precess direction";
      }
      function gyration(pos, time, dir) {
        return dir === PrecessDirection.Into2000 ? precession(nutation(pos, time, dir), time, dir) : nutation(precession(pos, time, dir), time, dir);
      }
      function gyration_posvel(state, time, dir) {
        return dir === PrecessDirection.Into2000 ? precession_posvel(nutation_posvel(state, time, dir), time, dir) : nutation_posvel(precession_posvel(state, time, dir), time, dir);
      }
      function geo_pos(time, observer) {
        const gast = sidereal_time(time);
        const pos = terra(observer, gast).pos;
        return gyration(pos, time, PrecessDirection.Into2000);
      }
      var Vector = class {
        constructor(x, y, z, t) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.t = t;
        }
        /**
         * Returns the length of the vector in astronomical units (AU).
         * @returns {number}
         */
        Length() {
          return Math.hypot(this.x, this.y, this.z);
        }
      };
      exports.Vector = Vector;
      var StateVector = class {
        constructor(x, y, z, vx, vy, vz, t) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.vx = vx;
          this.vy = vy;
          this.vz = vz;
          this.t = t;
        }
      };
      exports.StateVector = StateVector;
      var Spherical = class {
        constructor(lat, lon, dist) {
          this.lat = VerifyNumber(lat);
          this.lon = VerifyNumber(lon);
          this.dist = VerifyNumber(dist);
        }
      };
      exports.Spherical = Spherical;
      var EquatorialCoordinates = class {
        constructor(ra, dec, dist, vec) {
          this.ra = VerifyNumber(ra);
          this.dec = VerifyNumber(dec);
          this.dist = VerifyNumber(dist);
          this.vec = vec;
        }
      };
      exports.EquatorialCoordinates = EquatorialCoordinates;
      function IsValidRotationArray(rot) {
        if (!(rot instanceof Array) || rot.length !== 3)
          return false;
        for (let i = 0; i < 3; ++i) {
          if (!(rot[i] instanceof Array) || rot[i].length !== 3)
            return false;
          for (let j = 0; j < 3; ++j)
            if (!Number.isFinite(rot[i][j]))
              return false;
        }
        return true;
      }
      var RotationMatrix = class {
        constructor(rot) {
          this.rot = rot;
        }
      };
      exports.RotationMatrix = RotationMatrix;
      function MakeRotation(rot) {
        if (!IsValidRotationArray(rot))
          throw "Argument must be a [3][3] array of numbers";
        return new RotationMatrix(rot);
      }
      exports.MakeRotation = MakeRotation;
      var HorizontalCoordinates = class {
        constructor(azimuth, altitude, ra, dec) {
          this.azimuth = VerifyNumber(azimuth);
          this.altitude = VerifyNumber(altitude);
          this.ra = VerifyNumber(ra);
          this.dec = VerifyNumber(dec);
        }
      };
      exports.HorizontalCoordinates = HorizontalCoordinates;
      var EclipticCoordinates = class {
        constructor(vec, elat, elon) {
          this.vec = vec;
          this.elat = VerifyNumber(elat);
          this.elon = VerifyNumber(elon);
        }
      };
      exports.EclipticCoordinates = EclipticCoordinates;
      function VectorFromArray(av, time) {
        return new Vector(av[0], av[1], av[2], time);
      }
      function vector2radec(pos, time) {
        const vec = VectorFromArray(pos, time);
        const xyproj = vec.x * vec.x + vec.y * vec.y;
        const dist = Math.sqrt(xyproj + vec.z * vec.z);
        if (xyproj === 0) {
          if (vec.z === 0)
            throw "Indeterminate sky coordinates";
          return new EquatorialCoordinates(0, vec.z < 0 ? -90 : 90, dist, vec);
        }
        let ra = exports.RAD2HOUR * Math.atan2(vec.y, vec.x);
        if (ra < 0)
          ra += 24;
        const dec = exports.RAD2DEG * Math.atan2(pos[2], Math.sqrt(xyproj));
        return new EquatorialCoordinates(ra, dec, dist, vec);
      }
      function spin(angle, pos) {
        const angr = angle * exports.DEG2RAD;
        const c = Math.cos(angr);
        const s = Math.sin(angr);
        return [c * pos[0] + s * pos[1], c * pos[1] - s * pos[0], pos[2]];
      }
      function Horizon(date, observer, ra, dec, refraction) {
        let time = MakeTime(date);
        VerifyObserver(observer);
        VerifyNumber(ra);
        VerifyNumber(dec);
        const sinlat = Math.sin(observer.latitude * exports.DEG2RAD);
        const coslat = Math.cos(observer.latitude * exports.DEG2RAD);
        const sinlon = Math.sin(observer.longitude * exports.DEG2RAD);
        const coslon = Math.cos(observer.longitude * exports.DEG2RAD);
        const sindc = Math.sin(dec * exports.DEG2RAD);
        const cosdc = Math.cos(dec * exports.DEG2RAD);
        const sinra = Math.sin(ra * exports.HOUR2RAD);
        const cosra = Math.cos(ra * exports.HOUR2RAD);
        let uze = [coslat * coslon, coslat * sinlon, sinlat];
        let une = [-sinlat * coslon, -sinlat * sinlon, coslat];
        let uwe = [sinlon, -coslon, 0];
        const spin_angle = -15 * sidereal_time(time);
        let uz = spin(spin_angle, uze);
        let un = spin(spin_angle, une);
        let uw = spin(spin_angle, uwe);
        let p = [cosdc * cosra, cosdc * sinra, sindc];
        const pz = p[0] * uz[0] + p[1] * uz[1] + p[2] * uz[2];
        const pn = p[0] * un[0] + p[1] * un[1] + p[2] * un[2];
        const pw = p[0] * uw[0] + p[1] * uw[1] + p[2] * uw[2];
        let proj = Math.hypot(pn, pw);
        let az;
        if (proj > 0) {
          az = -exports.RAD2DEG * Math.atan2(pw, pn);
          if (az < 0)
            az += 360;
        } else {
          az = 0;
        }
        let zd = exports.RAD2DEG * Math.atan2(proj, pz);
        let out_ra = ra;
        let out_dec = dec;
        if (refraction) {
          let zd0 = zd;
          let refr = Refraction(refraction, 90 - zd);
          zd -= refr;
          if (refr > 0 && zd > 3e-4) {
            const sinzd = Math.sin(zd * exports.DEG2RAD);
            const coszd = Math.cos(zd * exports.DEG2RAD);
            const sinzd0 = Math.sin(zd0 * exports.DEG2RAD);
            const coszd0 = Math.cos(zd0 * exports.DEG2RAD);
            const pr = [];
            for (let j = 0; j < 3; ++j) {
              pr.push((p[j] - coszd0 * uz[j]) / sinzd0 * sinzd + uz[j] * coszd);
            }
            proj = Math.hypot(pr[0], pr[1]);
            if (proj > 0) {
              out_ra = exports.RAD2HOUR * Math.atan2(pr[1], pr[0]);
              if (out_ra < 0) {
                out_ra += 24;
              }
            } else {
              out_ra = 0;
            }
            out_dec = exports.RAD2DEG * Math.atan2(pr[2], proj);
          }
        }
        return new HorizontalCoordinates(az, 90 - zd, out_ra, out_dec);
      }
      exports.Horizon = Horizon;
      function VerifyObserver(observer) {
        if (!(observer instanceof Observer2)) {
          throw `Not an instance of the Observer class: ${observer}`;
        }
        VerifyNumber(observer.latitude);
        VerifyNumber(observer.longitude);
        VerifyNumber(observer.height);
        if (observer.latitude < -90 || observer.latitude > 90) {
          throw `Latitude ${observer.latitude} is out of range. Must be -90..+90.`;
        }
        return observer;
      }
      var Observer2 = class {
        constructor(latitude, longitude, height) {
          this.latitude = latitude;
          this.longitude = longitude;
          this.height = height;
          VerifyObserver(this);
        }
      };
      exports.Observer = Observer2;
      function SunPosition(date) {
        const time = MakeTime(date).AddDays(-1 / exports.C_AUDAY);
        const earth2000 = CalcVsop(vsop.Earth, time);
        const sun2000 = [-earth2000.x, -earth2000.y, -earth2000.z];
        const [gx, gy, gz] = gyration(sun2000, time, PrecessDirection.From2000);
        const true_obliq = exports.DEG2RAD * e_tilt(time).tobl;
        const cos_ob = Math.cos(true_obliq);
        const sin_ob = Math.sin(true_obliq);
        const vec = new Vector(gx, gy, gz, time);
        const sun_ecliptic = RotateEquatorialToEcliptic(vec, cos_ob, sin_ob);
        return sun_ecliptic;
      }
      exports.SunPosition = SunPosition;
      function Equator(body, date, observer, ofdate, aberration) {
        VerifyObserver(observer);
        VerifyBoolean(ofdate);
        VerifyBoolean(aberration);
        const time = MakeTime(date);
        const gc_observer = geo_pos(time, observer);
        const gc = GeoVector(body, time, aberration);
        const j2000 = [
          gc.x - gc_observer[0],
          gc.y - gc_observer[1],
          gc.z - gc_observer[2]
        ];
        if (!ofdate)
          return vector2radec(j2000, time);
        const datevect = gyration(j2000, time, PrecessDirection.From2000);
        return vector2radec(datevect, time);
      }
      exports.Equator = Equator;
      function ObserverVector(date, observer, ofdate) {
        const time = MakeTime(date);
        const gast = sidereal_time(time);
        let ovec = terra(observer, gast).pos;
        if (!ofdate)
          ovec = gyration(ovec, time, PrecessDirection.Into2000);
        return VectorFromArray(ovec, time);
      }
      exports.ObserverVector = ObserverVector;
      function ObserverState(date, observer, ofdate) {
        const time = MakeTime(date);
        const gast = sidereal_time(time);
        const svec = terra(observer, gast);
        const state = new StateVector(svec.pos[0], svec.pos[1], svec.pos[2], svec.vel[0], svec.vel[1], svec.vel[2], time);
        if (!ofdate)
          return gyration_posvel(state, time, PrecessDirection.Into2000);
        return state;
      }
      exports.ObserverState = ObserverState;
      function VectorObserver(vector, ofdate) {
        const gast = sidereal_time(vector.t);
        let ovec = [vector.x, vector.y, vector.z];
        if (!ofdate) {
          ovec = precession(ovec, vector.t, PrecessDirection.From2000);
          ovec = nutation(ovec, vector.t, PrecessDirection.From2000);
        }
        return inverse_terra(ovec, gast);
      }
      exports.VectorObserver = VectorObserver;
      function ObserverGravity(latitude, height) {
        const s = Math.sin(latitude * exports.DEG2RAD);
        const s2 = s * s;
        const g0 = 9.7803253359 * (1 + 0.00193185265241 * s2) / Math.sqrt(1 - 0.00669437999013 * s2);
        return g0 * (1 - (315704e-12 - 210269e-14 * s2) * height + 737452e-19 * height * height);
      }
      exports.ObserverGravity = ObserverGravity;
      function RotateEquatorialToEcliptic(equ, cos_ob, sin_ob) {
        const ex = equ.x;
        const ey = equ.y * cos_ob + equ.z * sin_ob;
        const ez = -equ.y * sin_ob + equ.z * cos_ob;
        const xyproj = Math.hypot(ex, ey);
        let elon = 0;
        if (xyproj > 0) {
          elon = exports.RAD2DEG * Math.atan2(ey, ex);
          if (elon < 0)
            elon += 360;
        }
        let elat = exports.RAD2DEG * Math.atan2(ez, xyproj);
        let ecl = new Vector(ex, ey, ez, equ.t);
        return new EclipticCoordinates(ecl, elat, elon);
      }
      function Ecliptic(eqj) {
        const et = e_tilt(eqj.t);
        const eqj_pos = [eqj.x, eqj.y, eqj.z];
        const mean_pos = precession(eqj_pos, eqj.t, PrecessDirection.From2000);
        const [x, y, z] = nutation(mean_pos, eqj.t, PrecessDirection.From2000);
        const eqd = new Vector(x, y, z, eqj.t);
        const tobl = et.tobl * exports.DEG2RAD;
        return RotateEquatorialToEcliptic(eqd, Math.cos(tobl), Math.sin(tobl));
      }
      exports.Ecliptic = Ecliptic;
      function GeoMoon(date) {
        const time = MakeTime(date);
        const moon = CalcMoon(time);
        const dist_cos_lat = moon.distance_au * Math.cos(moon.geo_eclip_lat);
        const gepos = [
          dist_cos_lat * Math.cos(moon.geo_eclip_lon),
          dist_cos_lat * Math.sin(moon.geo_eclip_lon),
          moon.distance_au * Math.sin(moon.geo_eclip_lat)
        ];
        const mpos1 = ecl2equ_vec(time, gepos);
        const mpos2 = precession(mpos1, time, PrecessDirection.Into2000);
        return new Vector(mpos2[0], mpos2[1], mpos2[2], time);
      }
      exports.GeoMoon = GeoMoon;
      function EclipticGeoMoon(date) {
        const time = MakeTime(date);
        const moon = CalcMoon(time);
        const dist_cos_lat = moon.distance_au * Math.cos(moon.geo_eclip_lat);
        const ecm = [
          dist_cos_lat * Math.cos(moon.geo_eclip_lon),
          dist_cos_lat * Math.sin(moon.geo_eclip_lon),
          moon.distance_au * Math.sin(moon.geo_eclip_lat)
        ];
        const et = e_tilt(time);
        const eqm = obl_ecl2equ_vec(et.mobl, ecm);
        const eqd = nutation(eqm, time, PrecessDirection.From2000);
        const eqd_vec = VectorFromArray(eqd, time);
        const toblRad = et.tobl * exports.DEG2RAD;
        const cos_tobl = Math.cos(toblRad);
        const sin_tobl = Math.sin(toblRad);
        const eclip = RotateEquatorialToEcliptic(eqd_vec, cos_tobl, sin_tobl);
        return new Spherical(eclip.elat, eclip.elon, moon.distance_au);
      }
      exports.EclipticGeoMoon = EclipticGeoMoon;
      function GeoMoonState(date) {
        const time = MakeTime(date);
        const dt = 1e-5;
        const t1 = time.AddDays(-dt);
        const t2 = time.AddDays(+dt);
        const r1 = GeoMoon(t1);
        const r2 = GeoMoon(t2);
        return new StateVector((r1.x + r2.x) / 2, (r1.y + r2.y) / 2, (r1.z + r2.z) / 2, (r2.x - r1.x) / (2 * dt), (r2.y - r1.y) / (2 * dt), (r2.z - r1.z) / (2 * dt), time);
      }
      exports.GeoMoonState = GeoMoonState;
      function GeoEmbState(date) {
        const time = MakeTime(date);
        const s = GeoMoonState(time);
        const d = 1 + EARTH_MOON_MASS_RATIO;
        return new StateVector(s.x / d, s.y / d, s.z / d, s.vx / d, s.vy / d, s.vz / d, time);
      }
      exports.GeoEmbState = GeoEmbState;
      function VsopFormula(formula, t, clamp_angle) {
        let tpower = 1;
        let coord = 0;
        for (let series of formula) {
          let sum = 0;
          for (let [ampl, phas, freq] of series)
            sum += ampl * Math.cos(phas + t * freq);
          let incr = tpower * sum;
          if (clamp_angle)
            incr %= PI2;
          coord += incr;
          tpower *= t;
        }
        return coord;
      }
      function VsopDeriv(formula, t) {
        let tpower = 1;
        let dpower = 0;
        let deriv = 0;
        let s = 0;
        for (let series of formula) {
          let sin_sum = 0;
          let cos_sum = 0;
          for (let [ampl, phas, freq] of series) {
            let angle = phas + t * freq;
            sin_sum += ampl * freq * Math.sin(angle);
            if (s > 0)
              cos_sum += ampl * Math.cos(angle);
          }
          deriv += s * dpower * cos_sum - tpower * sin_sum;
          dpower = tpower;
          tpower *= t;
          ++s;
        }
        return deriv;
      }
      var DAYS_PER_MILLENNIUM = 365250;
      var LON_INDEX = 0;
      var LAT_INDEX = 1;
      var RAD_INDEX = 2;
      function VsopRotate(eclip) {
        return new TerseVector(eclip[0] + 44036e-11 * eclip[1] - 190919e-12 * eclip[2], -479966e-12 * eclip[0] + 0.917482137087 * eclip[1] - 0.397776982902 * eclip[2], 0.397776982902 * eclip[1] + 0.917482137087 * eclip[2]);
      }
      function VsopSphereToRect(lon, lat, radius) {
        const r_coslat = radius * Math.cos(lat);
        const coslon = Math.cos(lon);
        const sinlon = Math.sin(lon);
        return [
          r_coslat * coslon,
          r_coslat * sinlon,
          radius * Math.sin(lat)
        ];
      }
      function CalcVsop(model, time) {
        const t = time.tt / DAYS_PER_MILLENNIUM;
        const lon = VsopFormula(model[LON_INDEX], t, true);
        const lat = VsopFormula(model[LAT_INDEX], t, false);
        const rad = VsopFormula(model[RAD_INDEX], t, false);
        const eclip = VsopSphereToRect(lon, lat, rad);
        return VsopRotate(eclip).ToAstroVector(time);
      }
      function CalcVsopPosVel(model, tt) {
        const t = tt / DAYS_PER_MILLENNIUM;
        const lon = VsopFormula(model[LON_INDEX], t, true);
        const lat = VsopFormula(model[LAT_INDEX], t, false);
        const rad = VsopFormula(model[RAD_INDEX], t, false);
        const dlon_dt = VsopDeriv(model[LON_INDEX], t);
        const dlat_dt = VsopDeriv(model[LAT_INDEX], t);
        const drad_dt = VsopDeriv(model[RAD_INDEX], t);
        const coslon = Math.cos(lon);
        const sinlon = Math.sin(lon);
        const coslat = Math.cos(lat);
        const sinlat = Math.sin(lat);
        const vx = +(drad_dt * coslat * coslon) - rad * sinlat * coslon * dlat_dt - rad * coslat * sinlon * dlon_dt;
        const vy = +(drad_dt * coslat * sinlon) - rad * sinlat * sinlon * dlat_dt + rad * coslat * coslon * dlon_dt;
        const vz = +(drad_dt * sinlat) + rad * coslat * dlat_dt;
        const eclip_pos = VsopSphereToRect(lon, lat, rad);
        const eclip_vel = [
          vx / DAYS_PER_MILLENNIUM,
          vy / DAYS_PER_MILLENNIUM,
          vz / DAYS_PER_MILLENNIUM
        ];
        const equ_pos = VsopRotate(eclip_pos);
        const equ_vel = VsopRotate(eclip_vel);
        return new body_state_t(tt, equ_pos, equ_vel);
      }
      function AdjustBarycenter(ssb, time, body, pmass) {
        const shift = pmass / (pmass + SUN_GM);
        const planet = CalcVsop(vsop[body], time);
        ssb.x += shift * planet.x;
        ssb.y += shift * planet.y;
        ssb.z += shift * planet.z;
      }
      function CalcSolarSystemBarycenter(time) {
        const ssb = new Vector(0, 0, 0, time);
        AdjustBarycenter(ssb, time, Body.Jupiter, JUPITER_GM);
        AdjustBarycenter(ssb, time, Body.Saturn, SATURN_GM);
        AdjustBarycenter(ssb, time, Body.Uranus, URANUS_GM);
        AdjustBarycenter(ssb, time, Body.Neptune, NEPTUNE_GM);
        return ssb;
      }
      var PLUTO_NUM_STATES = 51;
      var PLUTO_TIME_STEP = 29200;
      var PLUTO_DT = 146;
      var PLUTO_NSTEPS = 201;
      var PlutoStateTable = [
        [-73e4, [-26.118207232108, -14.376168177825, 3.384402515299], [0.0016339372163656, -0.0027861699588508, -0.0013585880229445]],
        [-700800, [41.974905202127, -0.448502952929, -12.770351505989], [73458569351457e-17, 0.0022785014891658, 48619778602049e-17]],
        [-671600, [14.706930780744, 44.269110540027, 9.353698474772], [-0.00210001479998, 22295915939915e-17, 70143443551414e-17]],
        [-642400, [-29.441003929957, -6.43016153057, 6.858481011305], [84495803960544e-17, -0.0030783914758711, -0.0012106305981192]],
        [-613200, [39.444396946234, -6.557989760571, -13.913760296463], [0.0011480029005873, 0.0022400006880665, 35168075922288e-17]],
        [-584e3, [20.2303809507, 43.266966657189, 7.382966091923], [-0.0019754081700585, 53457141292226e-17, 75929169129793e-17]],
        [-554800, [-30.65832536462, 2.093818874552, 9.880531138071], [61010603013347e-18, -0.0031326500935382, -99346125151067e-17]],
        [-525600, [35.737703251673, -12.587706024764, -14.677847247563], [0.0015802939375649, 0.0021347678412429, 19074436384343e-17]],
        [-496400, [25.466295188546, 41.367478338417, 5.216476873382], [-0.0018054401046468, 8328308359951e-16, 80260156912107e-17]],
        [-467200, [-29.847174904071, 10.636426313081, 12.297904180106], [-63257063052907e-17, -0.0029969577578221, -74476074151596e-17]],
        [-438e3, [30.774692107687, -18.236637015304, -14.945535879896], [0.0020113162005465, 0.0019353827024189, -20937793168297e-19]],
        [-408800, [30.243153324028, 38.656267888503, 2.938501750218], [-0.0016052508674468, 0.0011183495337525, 83333973416824e-17]],
        [-379600, [-27.288984772533, 18.643162147874, 14.023633623329], [-0.0011856388898191, -0.0027170609282181, -49015526126399e-17]],
        [-350400, [24.519605196774, -23.245756064727, -14.626862367368], [0.0024322321483154, 0.0016062008146048, -23369181613312e-17]],
        [-321200, [34.505274805875, 35.125338586954, 0.557361475637], [-0.0013824391637782, 0.0013833397561817, 84823598806262e-17]],
        [-292e3, [-23.275363915119, 25.818514298769, 15.055381588598], [-0.0016062295460975, -0.0023395961498533, -24377362639479e-17]],
        [-262800, [17.050384798092, -27.180376290126, -13.608963321694], [0.0028175521080578, 0.0011358749093955, -49548725258825e-17]],
        [-233600, [38.093671910285, 30.880588383337, -1.843688067413], [-0.0011317697153459, 0.0016128814698472, 84177586176055e-17]],
        [-204400, [-18.197852930878, 31.932869934309, 15.438294826279], [-0.0019117272501813, -0.0019146495909842, -19657304369835e-18]],
        [-175200, [8.528924039997, -29.618422200048, -11.805400994258], [0.0031034370787005, 5139363329243e-16, -77293066202546e-17]],
        [-146e3, [40.94685725864, 25.904973592021, -4.256336240499], [-83652705194051e-17, 0.0018129497136404, 8156422827306e-16]],
        [-116800, [-12.326958895325, 36.881883446292, 15.217158258711], [-0.0021166103705038, -0.001481442003599, 17401209844705e-17]],
        [-87600, [-0.633258375909, -30.018759794709, -9.17193287495], [0.0032016994581737, -25279858672148e-17, -0.0010411088271861]],
        [-58400, [42.936048423883, 20.344685584452, -6.588027007912], [-50525450073192e-17, 0.0019910074335507, 77440196540269e-17]],
        [-29200, [-5.975910552974, 40.61180995846, 14.470131723673], [-0.0022184202156107, -0.0010562361130164, 33652250216211e-17]],
        [0, [-9.875369580774, -27.978926224737, -5.753711824704], [0.0030287533248818, -0.0011276087003636, -0.0012651326732361]],
        [29200, [43.958831986165, 14.214147973292, -8.808306227163], [-14717608981871e-17, 0.0021404187242141, 71486567806614e-17]],
        [58400, [0.67813676352, 43.094461639362, 13.243238780721], [-0.0022358226110718, -63233636090933e-17, 47664798895648e-17]],
        [87600, [-18.282602096834, -23.30503958666, -1.766620508028], [0.0025567245263557, -0.0019902940754171, -0.0013943491701082]],
        [116800, [43.873338744526, 7.700705617215, -10.814273666425], [23174803055677e-17, 0.0022402163127924, 62988756452032e-17]],
        [146e3, [7.392949027906, 44.382678951534, 11.629500214854], [-0.002193281545383, -21751799585364e-17, 59556516201114e-17]],
        [175200, [-24.981690229261, -16.204012851426, 2.466457544298], [0.001819398914958, -0.0026765419531201, -0.0013848283502247]],
        [204400, [42.530187039511, 0.845935508021, -12.554907527683], [65059779150669e-17, 0.0022725657282262, 51133743202822e-17]],
        [233600, [13.999526486822, 44.462363044894, 9.669418486465], [-0.0021079296569252, 17533423831993e-17, 69128485798076e-17]],
        [262800, [-29.184024803031, -7.371243995762, 6.493275957928], [93581363109681e-17, -0.0030610357109184, -0.0012364201089345]],
        [292e3, [39.831980671753, -6.078405766765, -13.909815358656], [0.0011117769689167, 0.0022362097830152, 36230548231153e-17]],
        [321200, [20.294955108476, 43.417190420251, 7.450091985932], [-0.0019742157451535, 53102050468554e-17, 75938408813008e-17]],
        [350400, [-30.66999230216, 2.318743558955, 9.973480913858], [45605107450676e-18, -0.0031308219926928, -99066533301924e-17]],
        [379600, [35.626122155983, -12.897647509224, -14.777586508444], [0.0016015684949743, 0.0021171931182284, 18002516202204e-17]],
        [408800, [26.133186148561, 41.232139187599, 5.00640132622], [-0.0017857704419579, 86046232702817e-17, 80614690298954e-17]],
        [438e3, [-29.57674022923, 11.863535943587, 12.631323039872], [-72292830060955e-17, -0.0029587820140709, -708242964503e-15]],
        [467200, [29.910805787391, -19.159019294, -15.013363865194], [0.0020871080437997, 0.0018848372554514, -38528655083926e-18]],
        [496400, [31.375957451819, 38.050372720763, 2.433138343754], [-0.0015546055556611, 0.0011699815465629, 83565439266001e-17]],
        [525600, [-26.360071336928, 20.662505904952, 14.414696258958], [-0.0013142373118349, -0.0026236647854842, -42542017598193e-17]],
        [554800, [22.599441488648, -24.508879898306, -14.484045731468], [0.0025454108304806, 0.0014917058755191, -30243665086079e-17]],
        [584e3, [35.877864013014, 33.894226366071, -0.224524636277], [-0.0012941245730845, 0.0014560427668319, 84762160640137e-17]],
        [613200, [-21.538149762417, 28.204068269761, 15.321973799534], [-0.001731211740901, -0.0021939631314577, -1631691327518e-16]],
        [642400, [13.971521374415, -28.339941764789, -13.083792871886], [0.0029334630526035, 91860931752944e-17, -59939422488627e-17]],
        [671600, [39.526942044143, 28.93989736011, -2.872799527539], [-0.0010068481658095, 0.001702113288809, 83578230511981e-17]],
        [700800, [-15.576200701394, 34.399412961275, 15.466033737854], [-0.0020098814612884, -0.0017191109825989, 70414782780416e-18]],
        [73e4, [4.24325283709, -30.118201690825, -10.707441231349], [0.0031725847067411, 1609846120227e-16, -90672150593868e-17]]
      ];
      var TerseVector = class _TerseVector {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        clone() {
          return new _TerseVector(this.x, this.y, this.z);
        }
        ToAstroVector(t) {
          return new Vector(this.x, this.y, this.z, t);
        }
        static zero() {
          return new _TerseVector(0, 0, 0);
        }
        quadrature() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        add(other) {
          return new _TerseVector(this.x + other.x, this.y + other.y, this.z + other.z);
        }
        sub(other) {
          return new _TerseVector(this.x - other.x, this.y - other.y, this.z - other.z);
        }
        incr(other) {
          this.x += other.x;
          this.y += other.y;
          this.z += other.z;
        }
        decr(other) {
          this.x -= other.x;
          this.y -= other.y;
          this.z -= other.z;
        }
        mul(scalar) {
          return new _TerseVector(scalar * this.x, scalar * this.y, scalar * this.z);
        }
        div(scalar) {
          return new _TerseVector(this.x / scalar, this.y / scalar, this.z / scalar);
        }
        mean(other) {
          return new _TerseVector((this.x + other.x) / 2, (this.y + other.y) / 2, (this.z + other.z) / 2);
        }
        neg() {
          return new _TerseVector(-this.x, -this.y, -this.z);
        }
      };
      var body_state_t = class _body_state_t {
        constructor(tt, r, v) {
          this.tt = tt;
          this.r = r;
          this.v = v;
        }
        clone() {
          return new _body_state_t(this.tt, this.r, this.v);
        }
        sub(other) {
          return new _body_state_t(this.tt, this.r.sub(other.r), this.v.sub(other.v));
        }
      };
      function BodyStateFromTable(entry) {
        let [tt, [rx, ry, rz], [vx, vy, vz]] = entry;
        return new body_state_t(tt, new TerseVector(rx, ry, rz), new TerseVector(vx, vy, vz));
      }
      function AdjustBarycenterPosVel(ssb, tt, body, planet_gm) {
        const shift = planet_gm / (planet_gm + SUN_GM);
        const planet = CalcVsopPosVel(vsop[body], tt);
        ssb.r.incr(planet.r.mul(shift));
        ssb.v.incr(planet.v.mul(shift));
        return planet;
      }
      function AccelerationIncrement(small_pos, gm, major_pos) {
        const delta = major_pos.sub(small_pos);
        const r2 = delta.quadrature();
        return delta.mul(gm / (r2 * Math.sqrt(r2)));
      }
      var major_bodies_t = class {
        constructor(tt) {
          let ssb = new body_state_t(tt, new TerseVector(0, 0, 0), new TerseVector(0, 0, 0));
          this.Jupiter = AdjustBarycenterPosVel(ssb, tt, Body.Jupiter, JUPITER_GM);
          this.Saturn = AdjustBarycenterPosVel(ssb, tt, Body.Saturn, SATURN_GM);
          this.Uranus = AdjustBarycenterPosVel(ssb, tt, Body.Uranus, URANUS_GM);
          this.Neptune = AdjustBarycenterPosVel(ssb, tt, Body.Neptune, NEPTUNE_GM);
          this.Jupiter.r.decr(ssb.r);
          this.Jupiter.v.decr(ssb.v);
          this.Saturn.r.decr(ssb.r);
          this.Saturn.v.decr(ssb.v);
          this.Uranus.r.decr(ssb.r);
          this.Uranus.v.decr(ssb.v);
          this.Neptune.r.decr(ssb.r);
          this.Neptune.v.decr(ssb.v);
          this.Sun = new body_state_t(tt, ssb.r.mul(-1), ssb.v.mul(-1));
        }
        Acceleration(pos) {
          let acc = AccelerationIncrement(pos, SUN_GM, this.Sun.r);
          acc.incr(AccelerationIncrement(pos, JUPITER_GM, this.Jupiter.r));
          acc.incr(AccelerationIncrement(pos, SATURN_GM, this.Saturn.r));
          acc.incr(AccelerationIncrement(pos, URANUS_GM, this.Uranus.r));
          acc.incr(AccelerationIncrement(pos, NEPTUNE_GM, this.Neptune.r));
          return acc;
        }
      };
      var body_grav_calc_t = class _body_grav_calc_t {
        constructor(tt, r, v, a) {
          this.tt = tt;
          this.r = r;
          this.v = v;
          this.a = a;
        }
        clone() {
          return new _body_grav_calc_t(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
        }
      };
      var grav_sim_t = class {
        constructor(bary, grav) {
          this.bary = bary;
          this.grav = grav;
        }
      };
      function UpdatePosition(dt, r, v, a) {
        return new TerseVector(r.x + dt * (v.x + dt * a.x / 2), r.y + dt * (v.y + dt * a.y / 2), r.z + dt * (v.z + dt * a.z / 2));
      }
      function UpdateVelocity(dt, v, a) {
        return new TerseVector(v.x + dt * a.x, v.y + dt * a.y, v.z + dt * a.z);
      }
      function GravSim(tt2, calc1) {
        const dt = tt2 - calc1.tt;
        const bary2 = new major_bodies_t(tt2);
        const approx_pos = UpdatePosition(dt, calc1.r, calc1.v, calc1.a);
        const mean_acc = bary2.Acceleration(approx_pos).mean(calc1.a);
        const pos = UpdatePosition(dt, calc1.r, calc1.v, mean_acc);
        const vel = calc1.v.add(mean_acc.mul(dt));
        const acc = bary2.Acceleration(pos);
        const grav = new body_grav_calc_t(tt2, pos, vel, acc);
        return new grav_sim_t(bary2, grav);
      }
      var pluto_cache = [];
      function ClampIndex(frac, nsteps) {
        const index = Math.floor(frac);
        if (index < 0)
          return 0;
        if (index >= nsteps)
          return nsteps - 1;
        return index;
      }
      function GravFromState(entry) {
        const state = BodyStateFromTable(entry);
        const bary = new major_bodies_t(state.tt);
        const r = state.r.add(bary.Sun.r);
        const v = state.v.add(bary.Sun.v);
        const a = bary.Acceleration(r);
        const grav = new body_grav_calc_t(state.tt, r, v, a);
        return new grav_sim_t(bary, grav);
      }
      function GetSegment(cache, tt) {
        const t0 = PlutoStateTable[0][0];
        if (tt < t0 || tt > PlutoStateTable[PLUTO_NUM_STATES - 1][0]) {
          return null;
        }
        const seg_index = ClampIndex((tt - t0) / PLUTO_TIME_STEP, PLUTO_NUM_STATES - 1);
        if (!cache[seg_index]) {
          const seg = cache[seg_index] = [];
          seg[0] = GravFromState(PlutoStateTable[seg_index]).grav;
          seg[PLUTO_NSTEPS - 1] = GravFromState(PlutoStateTable[seg_index + 1]).grav;
          let i;
          let step_tt = seg[0].tt;
          for (i = 1; i < PLUTO_NSTEPS - 1; ++i)
            seg[i] = GravSim(step_tt += PLUTO_DT, seg[i - 1]).grav;
          step_tt = seg[PLUTO_NSTEPS - 1].tt;
          var reverse = [];
          reverse[PLUTO_NSTEPS - 1] = seg[PLUTO_NSTEPS - 1];
          for (i = PLUTO_NSTEPS - 2; i > 0; --i)
            reverse[i] = GravSim(step_tt -= PLUTO_DT, reverse[i + 1]).grav;
          for (i = PLUTO_NSTEPS - 2; i > 0; --i) {
            const ramp = i / (PLUTO_NSTEPS - 1);
            seg[i].r = seg[i].r.mul(1 - ramp).add(reverse[i].r.mul(ramp));
            seg[i].v = seg[i].v.mul(1 - ramp).add(reverse[i].v.mul(ramp));
            seg[i].a = seg[i].a.mul(1 - ramp).add(reverse[i].a.mul(ramp));
          }
        }
        return cache[seg_index];
      }
      function CalcPlutoOneWay(entry, target_tt, dt) {
        let sim = GravFromState(entry);
        const n = Math.ceil((target_tt - sim.grav.tt) / dt);
        for (let i = 0; i < n; ++i)
          sim = GravSim(i + 1 === n ? target_tt : sim.grav.tt + dt, sim.grav);
        return sim;
      }
      function CalcPluto(time, helio) {
        let r, v, bary;
        const seg = GetSegment(pluto_cache, time.tt);
        if (!seg) {
          let sim;
          if (time.tt < PlutoStateTable[0][0])
            sim = CalcPlutoOneWay(PlutoStateTable[0], time.tt, -PLUTO_DT);
          else
            sim = CalcPlutoOneWay(PlutoStateTable[PLUTO_NUM_STATES - 1], time.tt, +PLUTO_DT);
          r = sim.grav.r;
          v = sim.grav.v;
          bary = sim.bary;
        } else {
          const left = ClampIndex((time.tt - seg[0].tt) / PLUTO_DT, PLUTO_NSTEPS - 1);
          const s1 = seg[left];
          const s2 = seg[left + 1];
          const acc = s1.a.mean(s2.a);
          const ra = UpdatePosition(time.tt - s1.tt, s1.r, s1.v, acc);
          const va = UpdateVelocity(time.tt - s1.tt, s1.v, acc);
          const rb = UpdatePosition(time.tt - s2.tt, s2.r, s2.v, acc);
          const vb = UpdateVelocity(time.tt - s2.tt, s2.v, acc);
          const ramp = (time.tt - s1.tt) / PLUTO_DT;
          r = ra.mul(1 - ramp).add(rb.mul(ramp));
          v = va.mul(1 - ramp).add(vb.mul(ramp));
        }
        if (helio) {
          if (!bary)
            bary = new major_bodies_t(time.tt);
          r = r.sub(bary.Sun.r);
          v = v.sub(bary.Sun.v);
        }
        return new StateVector(r.x, r.y, r.z, v.x, v.y, v.z, time);
      }
      var Rotation_JUP_EQJ = new RotationMatrix([
        [0.999432765338654, -0.0336771074697641, 0],
        [0.0303959428906285, 0.902057912352809, 0.430543388542295],
        [-0.0144994559663353, -0.430299169409101, 0.902569881273754]
      ]);
      var JupiterMoonModel = [
        // [0] Io
        {
          mu: 282489428433814e-21,
          al: [1.446213296021224, 3.5515522861824],
          a: [
            [0.0028210960212903, 0, 0]
          ],
          l: [
            [-1925258348666e-16, 4.9369589722645, 0.01358483658305],
            [-970803596076e-16, 4.3188796477322, 0.01303413843243],
            [-8988174165e-14, 1.9080016428617, 0.00305064867158],
            [-553101050262e-16, 1.4936156681569, 0.01293892891155]
          ],
          z: [
            [0.0041510849668155, 4.089939635545, -0.01290686414666],
            [6260521444113e-16, 1.446188898627, 3.5515522949802],
            [352747346169e-16, 2.1256287034578, 12727416567e-14]
          ],
          zeta: [
            [3142172466014e-16, 2.7964219722923, -0.002315096098],
            [904169207946e-16, 1.0477061879627, -56920638196e-14]
          ]
        },
        // [1] Europa
        {
          mu: 282483274392893e-21,
          al: [-0.3735263437471362, 1.76932271112347],
          a: [
            [0.0044871037804314, 0, 0],
            [4324367498e-16, 1.819645606291, 1.7822295777568]
          ],
          l: [
            [8576433172936e-16, 4.3188693178264, 0.01303413830805],
            [4549582875086e-16, 1.4936531751079, 0.01293892881962],
            [3248939825174e-16, 1.8196494533458, 1.7822295777568],
            [-3074250079334e-16, 4.9377037005911, 0.01358483286724],
            [1982386144784e-16, 1.907986905476, 0.00305101212869],
            [1834063551804e-16, 2.1402853388529, 0.00145009789338],
            [-1434383188452e-16, 5.622214036663, 0.89111478887838],
            [-771939140944e-16, 4.300272437235, 2.6733443704266]
          ],
          z: [
            [-0.0093589104136341, 4.0899396509039, -0.01290686414666],
            [2988994545555e-16, 5.9097265185595, 1.7693227079462],
            [213903639035e-15, 2.1256289300016, 12727418407e-14],
            [1980963564781e-16, 2.743516829265, 67797343009e-14],
            [1210388158965e-16, 5.5839943711203, 320566149e-13],
            [837042048393e-16, 1.6094538368039, -0.90402165808846],
            [823525166369e-16, 1.4461887708689, 3.5515522949802]
          ],
          zeta: [
            [0.0040404917832303, 1.0477063169425, -5692064054e-13],
            [2200421034564e-16, 3.3368857864364, -12491307307e-14],
            [1662544744719e-16, 2.4134862374711, 0],
            [590282470983e-16, 5.9719930968366, -3056160225e-14]
          ]
        },
        // [2] Ganymede
        {
          mu: 282498184184723e-21,
          al: [0.2874089391143348, 0.878207923589328],
          a: [
            [0.0071566594572575, 0, 0],
            [1393029911e-15, 1.1586745884981, 2.6733443704266]
          ],
          l: [
            [2310797886226e-16, 2.1402987195942, 0.00145009784384],
            [-1828635964118e-16, 4.3188672736968, 0.01303413828263],
            [1512378778204e-16, 4.9373102372298, 0.01358483481252],
            [-1163720969778e-16, 4.300265986149, 2.6733443704266],
            [-955478069846e-16, 1.4936612842567, 0.01293892879857],
            [815246854464e-16, 5.6222137132535, 0.89111478887838],
            [-801219679602e-16, 1.2995922951532, 1.0034433456729],
            [-607017260182e-16, 0.64978769669238, 0.50172167043264]
          ],
          z: [
            [0.0014289811307319, 2.1256295942739, 12727413029e-14],
            [771093122676e-15, 5.5836330003496, 320643411e-13],
            [5925911780766e-16, 4.0899396636448, -0.01290686414666],
            [2045597496146e-16, 5.2713683670372, -0.12523544076106],
            [1785118648258e-16, 0.28743156721063, 0.8782079244252],
            [1131999784893e-16, 1.4462127277818, 3.5515522949802],
            [-65877816921e-15, 2.2702423990985, -1.7951364394537],
            [497058888328e-16, 5.9096792204858, 1.7693227129285]
          ],
          zeta: [
            [0.0015932721570848, 3.3368862796665, -12491307058e-14],
            [8533093128905e-16, 2.4133881688166, 0],
            [3513347911037e-16, 5.9720789850127, -3056101771e-14],
            [-1441929255483e-16, 1.0477061764435, -56920632124e-14]
          ]
        },
        // [3] Callisto
        {
          mu: 282492144889909e-21,
          al: [-0.3620341291375704, 0.376486233433828],
          a: [
            [0.0125879701715314, 0, 0],
            [3595204947e-15, 0.64965776007116, 0.50172168165034],
            [27580210652e-16, 1.808423578151, 3.1750660413359]
          ],
          l: [
            [5586040123824e-16, 2.1404207189815, 0.00145009793231],
            [-3805813868176e-16, 2.7358844897853, 2972965062e-14],
            [2205152863262e-16, 0.649796525964, 0.5017216724358],
            [1877895151158e-16, 1.8084787604005, 3.1750660413359],
            [766916975242e-16, 6.2720114319755, 1.3928364636651],
            [747056855106e-16, 1.2995916202344, 1.0034433456729]
          ],
          z: [
            [0.0073755808467977, 5.5836071576084, 3206509914e-14],
            [2065924169942e-16, 5.9209831565786, 0.37648624194703],
            [1589869764021e-16, 0.28744006242623, 0.8782079244252],
            [-1561131605348e-16, 2.1257397865089, 12727441285e-14],
            [1486043380971e-16, 1.4462134301023, 3.5515522949802],
            [635073108731e-16, 5.9096803285954, 1.7693227129285],
            [599351698525e-16, 4.1125517584798, -2.7985797954589],
            [540660842731e-16, 5.5390350845569, 0.00286834082283],
            [-489596900866e-16, 4.6218149483338, -0.62695712529519]
          ],
          zeta: [
            [0.0038422977898495, 2.4133922085557, 0],
            [0.0022453891791894, 5.9721736773277, -3056125525e-14],
            [-2604479450559e-16, 3.3368746306409, -12491309972e-14],
            [33211214323e-15, 5.5604137742337, 0.00290037688507]
          ]
        }
      ];
      var JupiterMoonsInfo = class {
        constructor(io, europa, ganymede, callisto) {
          this.io = io;
          this.europa = europa;
          this.ganymede = ganymede;
          this.callisto = callisto;
        }
      };
      exports.JupiterMoonsInfo = JupiterMoonsInfo;
      function JupiterMoon_elem2pv(time, mu, elem) {
        const A = elem[0];
        const AL = elem[1];
        const K = elem[2];
        const H = elem[3];
        const Q = elem[4];
        const P = elem[5];
        const AN = Math.sqrt(mu / (A * A * A));
        let CE, SE, DE;
        let EE = AL + K * Math.sin(AL) - H * Math.cos(AL);
        do {
          CE = Math.cos(EE);
          SE = Math.sin(EE);
          DE = (AL - EE + K * SE - H * CE) / (1 - K * CE - H * SE);
          EE += DE;
        } while (Math.abs(DE) >= 1e-12);
        CE = Math.cos(EE);
        SE = Math.sin(EE);
        const DLE = H * CE - K * SE;
        const RSAM1 = -K * CE - H * SE;
        const ASR = 1 / (1 + RSAM1);
        const PHI = Math.sqrt(1 - K * K - H * H);
        const PSI = 1 / (1 + PHI);
        const X1 = A * (CE - K - PSI * H * DLE);
        const Y1 = A * (SE - H + PSI * K * DLE);
        const VX1 = AN * ASR * A * (-SE - PSI * H * RSAM1);
        const VY1 = AN * ASR * A * (+CE + PSI * K * RSAM1);
        const F2 = 2 * Math.sqrt(1 - Q * Q - P * P);
        const P2 = 1 - 2 * P * P;
        const Q2 = 1 - 2 * Q * Q;
        const PQ = 2 * P * Q;
        return new StateVector(X1 * P2 + Y1 * PQ, X1 * PQ + Y1 * Q2, (Q * Y1 - X1 * P) * F2, VX1 * P2 + VY1 * PQ, VX1 * PQ + VY1 * Q2, (Q * VY1 - VX1 * P) * F2, time);
      }
      function CalcJupiterMoon(time, m) {
        const t = time.tt + 18262.5;
        const elem = [0, m.al[0] + t * m.al[1], 0, 0, 0, 0];
        for (let [amplitude, phase, frequency] of m.a)
          elem[0] += amplitude * Math.cos(phase + t * frequency);
        for (let [amplitude, phase, frequency] of m.l)
          elem[1] += amplitude * Math.sin(phase + t * frequency);
        elem[1] %= PI2;
        if (elem[1] < 0)
          elem[1] += PI2;
        for (let [amplitude, phase, frequency] of m.z) {
          const arg = phase + t * frequency;
          elem[2] += amplitude * Math.cos(arg);
          elem[3] += amplitude * Math.sin(arg);
        }
        for (let [amplitude, phase, frequency] of m.zeta) {
          const arg = phase + t * frequency;
          elem[4] += amplitude * Math.cos(arg);
          elem[5] += amplitude * Math.sin(arg);
        }
        const state = JupiterMoon_elem2pv(time, m.mu, elem);
        return RotateState(Rotation_JUP_EQJ, state);
      }
      function JupiterMoons(date) {
        const time = new AstroTime(date);
        return new JupiterMoonsInfo(CalcJupiterMoon(time, JupiterMoonModel[0]), CalcJupiterMoon(time, JupiterMoonModel[1]), CalcJupiterMoon(time, JupiterMoonModel[2]), CalcJupiterMoon(time, JupiterMoonModel[3]));
      }
      exports.JupiterMoons = JupiterMoons;
      function HelioVector(body, date) {
        var time = MakeTime(date);
        if (body in vsop)
          return CalcVsop(vsop[body], time);
        if (body === Body.Pluto) {
          const p = CalcPluto(time, true);
          return new Vector(p.x, p.y, p.z, time);
        }
        if (body === Body.Sun)
          return new Vector(0, 0, 0, time);
        if (body === Body.Moon) {
          var e = CalcVsop(vsop.Earth, time);
          var m = GeoMoon(time);
          return new Vector(e.x + m.x, e.y + m.y, e.z + m.z, time);
        }
        if (body === Body.EMB) {
          const e2 = CalcVsop(vsop.Earth, time);
          const m2 = GeoMoon(time);
          const denom = 1 + EARTH_MOON_MASS_RATIO;
          return new Vector(e2.x + m2.x / denom, e2.y + m2.y / denom, e2.z + m2.z / denom, time);
        }
        if (body === Body.SSB)
          return CalcSolarSystemBarycenter(time);
        const star = UserDefinedStar(body);
        if (star) {
          const sphere = new Spherical(star.dec, 15 * star.ra, star.dist);
          return VectorFromSphere(sphere, time);
        }
        throw `HelioVector: Unknown body "${body}"`;
      }
      exports.HelioVector = HelioVector;
      function HelioDistance(body, date) {
        const star = UserDefinedStar(body);
        if (star)
          return star.dist;
        const time = MakeTime(date);
        if (body in vsop)
          return VsopFormula(vsop[body][RAD_INDEX], time.tt / DAYS_PER_MILLENNIUM, false);
        return HelioVector(body, time).Length();
      }
      exports.HelioDistance = HelioDistance;
      function CorrectLightTravel(func, time) {
        let ltime = time;
        let dt = 0;
        for (let iter = 0; iter < 10; ++iter) {
          const pos = func(ltime);
          const lt = pos.Length() / exports.C_AUDAY;
          if (lt > 1)
            throw `Object is too distant for light-travel solver.`;
          const ltime2 = time.AddDays(-lt);
          dt = Math.abs(ltime2.tt - ltime.tt);
          if (dt < 1e-9)
            return pos;
          ltime = ltime2;
        }
        throw `Light-travel time solver did not converge: dt = ${dt}`;
      }
      exports.CorrectLightTravel = CorrectLightTravel;
      var BodyPosition = class {
        constructor(observerBody, targetBody, aberration, observerPos) {
          this.observerBody = observerBody;
          this.targetBody = targetBody;
          this.aberration = aberration;
          this.observerPos = observerPos;
        }
        Position(time) {
          if (this.aberration) {
            this.observerPos = HelioVector(this.observerBody, time);
          } else {
          }
          const targetPos = HelioVector(this.targetBody, time);
          return new Vector(targetPos.x - this.observerPos.x, targetPos.y - this.observerPos.y, targetPos.z - this.observerPos.z, time);
        }
      };
      function BackdatePosition(date, observerBody, targetBody, aberration) {
        VerifyBoolean(aberration);
        const time = MakeTime(date);
        if (UserDefinedStar(targetBody)) {
          const tvec = HelioVector(targetBody, time);
          if (aberration) {
            const ostate = HelioState(observerBody, time);
            const rvec = new Vector(tvec.x - ostate.x, tvec.y - ostate.y, tvec.z - ostate.z, time);
            const s = exports.C_AUDAY / rvec.Length();
            return new Vector(rvec.x + ostate.vx / s, rvec.y + ostate.vy / s, rvec.z + ostate.vz / s, time);
          }
          const ovec = HelioVector(observerBody, time);
          return new Vector(tvec.x - ovec.x, tvec.y - ovec.y, tvec.z - ovec.z, time);
        }
        let observerPos;
        if (aberration) {
          observerPos = new Vector(0, 0, 0, time);
        } else {
          observerPos = HelioVector(observerBody, time);
        }
        const bpos = new BodyPosition(observerBody, targetBody, aberration, observerPos);
        return CorrectLightTravel((t) => bpos.Position(t), time);
      }
      exports.BackdatePosition = BackdatePosition;
      function GeoVector(body, date, aberration) {
        VerifyBoolean(aberration);
        const time = MakeTime(date);
        switch (body) {
          case Body.Earth:
            return new Vector(0, 0, 0, time);
          case Body.Moon:
            return GeoMoon(time);
          default:
            const vec = BackdatePosition(time, Body.Earth, body, aberration);
            vec.t = time;
            return vec;
        }
      }
      exports.GeoVector = GeoVector;
      function ExportState(terse, time) {
        return new StateVector(terse.r.x, terse.r.y, terse.r.z, terse.v.x, terse.v.y, terse.v.z, time);
      }
      function BaryState(body, date) {
        const time = MakeTime(date);
        if (body === Body.SSB) {
          return new StateVector(0, 0, 0, 0, 0, 0, time);
        }
        if (body === Body.Pluto) {
          return CalcPluto(time, false);
        }
        const bary = new major_bodies_t(time.tt);
        switch (body) {
          case Body.Sun:
            return ExportState(bary.Sun, time);
          case Body.Jupiter:
            return ExportState(bary.Jupiter, time);
          case Body.Saturn:
            return ExportState(bary.Saturn, time);
          case Body.Uranus:
            return ExportState(bary.Uranus, time);
          case Body.Neptune:
            return ExportState(bary.Neptune, time);
          case Body.Moon:
          case Body.EMB:
            const earth = CalcVsopPosVel(vsop[Body.Earth], time.tt);
            const state = body === Body.Moon ? GeoMoonState(time) : GeoEmbState(time);
            return new StateVector(state.x + bary.Sun.r.x + earth.r.x, state.y + bary.Sun.r.y + earth.r.y, state.z + bary.Sun.r.z + earth.r.z, state.vx + bary.Sun.v.x + earth.v.x, state.vy + bary.Sun.v.y + earth.v.y, state.vz + bary.Sun.v.z + earth.v.z, time);
        }
        if (body in vsop) {
          const planet = CalcVsopPosVel(vsop[body], time.tt);
          return new StateVector(bary.Sun.r.x + planet.r.x, bary.Sun.r.y + planet.r.y, bary.Sun.r.z + planet.r.z, bary.Sun.v.x + planet.v.x, bary.Sun.v.y + planet.v.y, bary.Sun.v.z + planet.v.z, time);
        }
        throw `BaryState: Unsupported body "${body}"`;
      }
      exports.BaryState = BaryState;
      function HelioState(body, date) {
        const time = MakeTime(date);
        switch (body) {
          case Body.Sun:
            return new StateVector(0, 0, 0, 0, 0, 0, time);
          case Body.SSB:
            const bary = new major_bodies_t(time.tt);
            return new StateVector(-bary.Sun.r.x, -bary.Sun.r.y, -bary.Sun.r.z, -bary.Sun.v.x, -bary.Sun.v.y, -bary.Sun.v.z, time);
          case Body.Mercury:
          case Body.Venus:
          case Body.Earth:
          case Body.Mars:
          case Body.Jupiter:
          case Body.Saturn:
          case Body.Uranus:
          case Body.Neptune:
            const planet = CalcVsopPosVel(vsop[body], time.tt);
            return ExportState(planet, time);
          case Body.Pluto:
            return CalcPluto(time, true);
          case Body.Moon:
          case Body.EMB:
            const earth = CalcVsopPosVel(vsop.Earth, time.tt);
            const state = body == Body.Moon ? GeoMoonState(time) : GeoEmbState(time);
            return new StateVector(state.x + earth.r.x, state.y + earth.r.y, state.z + earth.r.z, state.vx + earth.v.x, state.vy + earth.v.y, state.vz + earth.v.z, time);
          default:
            if (UserDefinedStar(body)) {
              const vec = HelioVector(body, time);
              return new StateVector(vec.x, vec.y, vec.z, 0, 0, 0, time);
            }
            throw `HelioState: Unsupported body "${body}"`;
        }
      }
      exports.HelioState = HelioState;
      function QuadInterp(tm, dt, fa, fm, fb) {
        let Q = (fb + fa) / 2 - fm;
        let R = (fb - fa) / 2;
        let S = fm;
        let x;
        if (Q == 0) {
          if (R == 0) {
            return null;
          }
          x = -S / R;
          if (x < -1 || x > 1)
            return null;
        } else {
          let u = R * R - 4 * Q * S;
          if (u <= 0)
            return null;
          let ru = Math.sqrt(u);
          let x1 = (-R + ru) / (2 * Q);
          let x2 = (-R - ru) / (2 * Q);
          if (-1 <= x1 && x1 <= 1) {
            if (-1 <= x2 && x2 <= 1)
              return null;
            x = x1;
          } else if (-1 <= x2 && x2 <= 1) {
            x = x2;
          } else {
            return null;
          }
        }
        let t = tm + x * dt;
        let df_dt = (2 * Q * x + R) / dt;
        return { t, df_dt };
      }
      function Search(f, t1, t2, options) {
        const dt_tolerance_seconds = VerifyNumber(options && options.dt_tolerance_seconds || 1);
        const dt_days = Math.abs(dt_tolerance_seconds / SECONDS_PER_DAY);
        let f1 = options && options.init_f1 || f(t1);
        let f2 = options && options.init_f2 || f(t2);
        let fmid = NaN;
        let iter = 0;
        let iter_limit = options && options.iter_limit || 20;
        let calc_fmid = true;
        while (true) {
          if (++iter > iter_limit)
            throw `Excessive iteration in Search()`;
          let tmid = InterpolateTime(t1, t2, 0.5);
          let dt = tmid.ut - t1.ut;
          if (Math.abs(dt) < dt_days) {
            return tmid;
          }
          if (calc_fmid)
            fmid = f(tmid);
          else
            calc_fmid = true;
          let q = QuadInterp(tmid.ut, t2.ut - tmid.ut, f1, fmid, f2);
          if (q) {
            let tq = MakeTime(q.t);
            let fq = f(tq);
            if (q.df_dt !== 0) {
              if (Math.abs(fq / q.df_dt) < dt_days) {
                return tq;
              }
              let dt_guess = 1.2 * Math.abs(fq / q.df_dt);
              if (dt_guess < dt / 10) {
                let tleft = tq.AddDays(-dt_guess);
                let tright = tq.AddDays(+dt_guess);
                if ((tleft.ut - t1.ut) * (tleft.ut - t2.ut) < 0) {
                  if ((tright.ut - t1.ut) * (tright.ut - t2.ut) < 0) {
                    let fleft = f(tleft);
                    let fright = f(tright);
                    if (fleft < 0 && fright >= 0) {
                      f1 = fleft;
                      f2 = fright;
                      t1 = tleft;
                      t2 = tright;
                      fmid = fq;
                      calc_fmid = false;
                      continue;
                    }
                  }
                }
              }
            }
          }
          if (f1 < 0 && fmid >= 0) {
            t2 = tmid;
            f2 = fmid;
            continue;
          }
          if (fmid < 0 && f2 >= 0) {
            t1 = tmid;
            f1 = fmid;
            continue;
          }
          return null;
        }
      }
      exports.Search = Search;
      function LongitudeOffset(diff) {
        let offset = diff;
        while (offset <= -180)
          offset += 360;
        while (offset > 180)
          offset -= 360;
        return offset;
      }
      function NormalizeLongitude(lon) {
        while (lon < 0)
          lon += 360;
        while (lon >= 360)
          lon -= 360;
        return lon;
      }
      function SearchSunLongitude(targetLon, dateStart, limitDays) {
        function sun_offset(t) {
          let pos = SunPosition(t);
          return LongitudeOffset(pos.elon - targetLon);
        }
        VerifyNumber(targetLon);
        VerifyNumber(limitDays);
        let t1 = MakeTime(dateStart);
        let t2 = t1.AddDays(limitDays);
        return Search(sun_offset, t1, t2, { dt_tolerance_seconds: 0.01 });
      }
      exports.SearchSunLongitude = SearchSunLongitude;
      function PairLongitude(body1, body2, date) {
        if (body1 === Body.Earth || body2 === Body.Earth)
          throw "The Earth does not have a longitude as seen from itself.";
        const time = MakeTime(date);
        const vector1 = GeoVector(body1, time, false);
        const eclip1 = Ecliptic(vector1);
        const vector2 = GeoVector(body2, time, false);
        const eclip2 = Ecliptic(vector2);
        return NormalizeLongitude(eclip1.elon - eclip2.elon);
      }
      exports.PairLongitude = PairLongitude;
      function AngleFromSun(body, date) {
        if (body == Body.Earth)
          throw "The Earth does not have an angle as seen from itself.";
        const time = MakeTime(date);
        const sv = GeoVector(Body.Sun, time, true);
        const bv = GeoVector(body, time, true);
        const angle = AngleBetween(sv, bv);
        return angle;
      }
      exports.AngleFromSun = AngleFromSun;
      function EclipticLongitude(body, date) {
        if (body === Body.Sun)
          throw "Cannot calculate heliocentric longitude of the Sun.";
        const hv = HelioVector(body, date);
        const eclip = Ecliptic(hv);
        return eclip.elon;
      }
      exports.EclipticLongitude = EclipticLongitude;
      function VisualMagnitude(body, phase, helio_dist, geo_dist) {
        let c0, c1 = 0, c2 = 0, c3 = 0;
        switch (body) {
          case Body.Mercury:
            c0 = -0.6;
            c1 = 4.98;
            c2 = -4.88;
            c3 = 3.02;
            break;
          case Body.Venus:
            if (phase < 163.6) {
              c0 = -4.47;
              c1 = 1.03;
              c2 = 0.57;
              c3 = 0.13;
            } else {
              c0 = 0.98;
              c1 = -1.02;
            }
            break;
          case Body.Mars:
            c0 = -1.52;
            c1 = 1.6;
            break;
          case Body.Jupiter:
            c0 = -9.4;
            c1 = 0.5;
            break;
          case Body.Uranus:
            c0 = -7.19;
            c1 = 0.25;
            break;
          case Body.Neptune:
            c0 = -6.87;
            break;
          case Body.Pluto:
            c0 = -1;
            c1 = 4;
            break;
          default:
            throw `VisualMagnitude: unsupported body ${body}`;
        }
        const x = phase / 100;
        let mag = c0 + x * (c1 + x * (c2 + x * c3));
        mag += 5 * Math.log10(helio_dist * geo_dist);
        return mag;
      }
      function SaturnMagnitude(phase, helio_dist, geo_dist, gc, time) {
        const eclip = Ecliptic(gc);
        const ir = exports.DEG2RAD * 28.06;
        const Nr = exports.DEG2RAD * (169.51 + 382e-7 * time.tt);
        const lat = exports.DEG2RAD * eclip.elat;
        const lon = exports.DEG2RAD * eclip.elon;
        const tilt = Math.asin(Math.sin(lat) * Math.cos(ir) - Math.cos(lat) * Math.sin(ir) * Math.sin(lon - Nr));
        const sin_tilt = Math.sin(Math.abs(tilt));
        let mag = -9 + 0.044 * phase;
        mag += sin_tilt * (-2.6 + 1.2 * sin_tilt);
        mag += 5 * Math.log10(helio_dist * geo_dist);
        return { mag, ring_tilt: exports.RAD2DEG * tilt };
      }
      function MoonMagnitude(phase, helio_dist, geo_dist) {
        let rad = phase * exports.DEG2RAD;
        let rad2 = rad * rad;
        let rad4 = rad2 * rad2;
        let mag = -12.717 + 1.49 * Math.abs(rad) + 0.0431 * rad4;
        const moon_mean_distance_au = 385000.6 / exports.KM_PER_AU;
        let geo_au = geo_dist / moon_mean_distance_au;
        mag += 5 * Math.log10(helio_dist * geo_au);
        return mag;
      }
      var IlluminationInfo = class {
        constructor(time, mag, phase_angle, helio_dist, geo_dist, gc, hc, ring_tilt) {
          this.time = time;
          this.mag = mag;
          this.phase_angle = phase_angle;
          this.helio_dist = helio_dist;
          this.geo_dist = geo_dist;
          this.gc = gc;
          this.hc = hc;
          this.ring_tilt = ring_tilt;
          this.phase_fraction = (1 + Math.cos(exports.DEG2RAD * phase_angle)) / 2;
        }
      };
      exports.IlluminationInfo = IlluminationInfo;
      function Illumination(body, date) {
        if (body === Body.Earth)
          throw `The illumination of the Earth is not defined.`;
        const time = MakeTime(date);
        const earth = CalcVsop(vsop.Earth, time);
        let phase;
        let hc;
        let gc;
        let mag;
        if (body === Body.Sun) {
          gc = new Vector(-earth.x, -earth.y, -earth.z, time);
          hc = new Vector(0, 0, 0, time);
          phase = 0;
        } else {
          if (body === Body.Moon) {
            gc = GeoMoon(time);
            hc = new Vector(earth.x + gc.x, earth.y + gc.y, earth.z + gc.z, time);
          } else {
            hc = HelioVector(body, date);
            gc = new Vector(hc.x - earth.x, hc.y - earth.y, hc.z - earth.z, time);
          }
          phase = AngleBetween(gc, hc);
        }
        let geo_dist = gc.Length();
        let helio_dist = hc.Length();
        let ring_tilt;
        if (body === Body.Sun) {
          mag = SUN_MAG_1AU + 5 * Math.log10(geo_dist);
        } else if (body === Body.Moon) {
          mag = MoonMagnitude(phase, helio_dist, geo_dist);
        } else if (body === Body.Saturn) {
          const saturn = SaturnMagnitude(phase, helio_dist, geo_dist, gc, time);
          mag = saturn.mag;
          ring_tilt = saturn.ring_tilt;
        } else {
          mag = VisualMagnitude(body, phase, helio_dist, geo_dist);
        }
        return new IlluminationInfo(time, mag, phase, helio_dist, geo_dist, gc, hc, ring_tilt);
      }
      exports.Illumination = Illumination;
      function SynodicPeriod(body) {
        if (body === Body.Earth)
          throw "The Earth does not have a synodic period as seen from itself.";
        if (body === Body.Moon)
          return MEAN_SYNODIC_MONTH;
        let planet = Planet[body];
        if (!planet)
          throw `Not a valid planet name: ${body}`;
        const Te = Planet.Earth.OrbitalPeriod;
        const Tp = planet.OrbitalPeriod;
        const synodicPeriod = Math.abs(Te / (Te / Tp - 1));
        return synodicPeriod;
      }
      function SearchRelativeLongitude(body, targetRelLon, startDate) {
        VerifyNumber(targetRelLon);
        const planet = Planet[body];
        if (!planet)
          throw `Cannot search relative longitude because body is not a planet: ${body}`;
        if (body === Body.Earth)
          throw "Cannot search relative longitude for the Earth (it is always 0)";
        const direction = planet.OrbitalPeriod > Planet.Earth.OrbitalPeriod ? 1 : -1;
        function offset(t) {
          const plon = EclipticLongitude(body, t);
          const elon = EclipticLongitude(Body.Earth, t);
          const diff = direction * (elon - plon);
          return LongitudeOffset(diff - targetRelLon);
        }
        let syn = SynodicPeriod(body);
        let time = MakeTime(startDate);
        let error_angle = offset(time);
        if (error_angle > 0)
          error_angle -= 360;
        for (let iter = 0; iter < 100; ++iter) {
          let day_adjust = -error_angle / 360 * syn;
          time = time.AddDays(day_adjust);
          if (Math.abs(day_adjust) * SECONDS_PER_DAY < 1)
            return time;
          let prev_angle = error_angle;
          error_angle = offset(time);
          if (Math.abs(prev_angle) < 30) {
            if (prev_angle !== error_angle) {
              let ratio = prev_angle / (prev_angle - error_angle);
              if (ratio > 0.5 && ratio < 2)
                syn *= ratio;
            }
          }
        }
        throw `Relative longitude search failed to converge for ${body} near ${time.toString()} (error_angle = ${error_angle}).`;
      }
      exports.SearchRelativeLongitude = SearchRelativeLongitude;
      function MoonPhase(date) {
        return PairLongitude(Body.Moon, Body.Sun, date);
      }
      exports.MoonPhase = MoonPhase;
      function SearchMoonPhase(targetLon, dateStart, limitDays) {
        function moon_offset(t) {
          let mlon = MoonPhase(t);
          return LongitudeOffset(mlon - targetLon);
        }
        VerifyNumber(targetLon);
        VerifyNumber(limitDays);
        const uncertainty = 1.5;
        const ta = MakeTime(dateStart);
        let ya = moon_offset(ta);
        let est_dt, dt1, dt2;
        if (limitDays < 0) {
          if (ya < 0)
            ya += 360;
          est_dt = -(MEAN_SYNODIC_MONTH * ya) / 360;
          dt2 = est_dt + uncertainty;
          if (dt2 < limitDays)
            return null;
          dt1 = Math.max(limitDays, est_dt - uncertainty);
        } else {
          if (ya > 0)
            ya -= 360;
          est_dt = -(MEAN_SYNODIC_MONTH * ya) / 360;
          dt1 = est_dt - uncertainty;
          if (dt1 > limitDays)
            return null;
          dt2 = Math.min(limitDays, est_dt + uncertainty);
        }
        const t1 = ta.AddDays(dt1);
        const t2 = ta.AddDays(dt2);
        return Search(moon_offset, t1, t2, { dt_tolerance_seconds: 0.1 });
      }
      exports.SearchMoonPhase = SearchMoonPhase;
      var MoonQuarter = class {
        constructor(quarter, time) {
          this.quarter = quarter;
          this.time = time;
        }
      };
      exports.MoonQuarter = MoonQuarter;
      function SearchMoonQuarter(dateStart) {
        let phaseStart = MoonPhase(dateStart);
        let quarterStart = Math.floor(phaseStart / 90);
        let quarter = (quarterStart + 1) % 4;
        let time = SearchMoonPhase(90 * quarter, dateStart, 10);
        if (!time)
          throw "Cannot find moon quarter";
        return new MoonQuarter(quarter, time);
      }
      exports.SearchMoonQuarter = SearchMoonQuarter;
      function NextMoonQuarter(mq) {
        let date = new Date(mq.time.date.getTime() + 6 * MILLIS_PER_DAY);
        return SearchMoonQuarter(date);
      }
      exports.NextMoonQuarter = NextMoonQuarter;
      var AtmosphereInfo = class {
        constructor(pressure, temperature, density) {
          this.pressure = pressure;
          this.temperature = temperature;
          this.density = density;
        }
      };
      exports.AtmosphereInfo = AtmosphereInfo;
      function Atmosphere(elevationMeters) {
        const P0 = 101325;
        const T0 = 288.15;
        const T1 = 216.65;
        if (!Number.isFinite(elevationMeters) || elevationMeters < -500 || elevationMeters > 1e5)
          throw `Invalid elevation: ${elevationMeters}`;
        let temperature;
        let pressure;
        if (elevationMeters <= 11e3) {
          temperature = T0 - 65e-4 * elevationMeters;
          pressure = P0 * Math.pow(T0 / temperature, -5.25577);
        } else if (elevationMeters <= 2e4) {
          temperature = T1;
          pressure = 22632 * Math.exp(-15768832e-11 * (elevationMeters - 11e3));
        } else {
          temperature = T1 + 1e-3 * (elevationMeters - 2e4);
          pressure = 5474.87 * Math.pow(T1 / temperature, 34.16319);
        }
        const density = pressure / temperature / (P0 / T0);
        return new AtmosphereInfo(pressure, temperature, density);
      }
      exports.Atmosphere = Atmosphere;
      function HorizonDipAngle(observer, metersAboveGround) {
        const phi = observer.latitude * exports.DEG2RAD;
        const sinphi = Math.sin(phi);
        const cosphi = Math.cos(phi);
        const c = 1 / Math.hypot(cosphi, sinphi * EARTH_FLATTENING);
        const s = c * (EARTH_FLATTENING * EARTH_FLATTENING);
        const ht_km = (observer.height - metersAboveGround) / 1e3;
        const ach = EARTH_EQUATORIAL_RADIUS_KM * c + ht_km;
        const ash = EARTH_EQUATORIAL_RADIUS_KM * s + ht_km;
        const radius_m = 1e3 * Math.hypot(ach * cosphi, ash * sinphi);
        const k = 0.175 * Math.pow(1 - 65e-4 / 283.15 * (observer.height - 2 / 3 * metersAboveGround), 3.256);
        return exports.RAD2DEG * -(Math.sqrt(2 * (1 - k) * metersAboveGround / radius_m) / (1 - k));
      }
      function BodyRadiusAu(body) {
        switch (body) {
          case Body.Sun:
            return SUN_RADIUS_AU;
          case Body.Moon:
            return MOON_EQUATORIAL_RADIUS_AU;
          default:
            return 0;
        }
      }
      function SearchRiseSet(body, observer, direction, dateStart, limitDays, metersAboveGround = 0) {
        if (!Number.isFinite(metersAboveGround) || metersAboveGround < 0)
          throw `Invalid value for metersAboveGround: ${metersAboveGround}`;
        const body_radius_au = BodyRadiusAu(body);
        const atmos = Atmosphere(observer.height - metersAboveGround);
        const dip = HorizonDipAngle(observer, metersAboveGround);
        const altitude = dip - REFRACTION_NEAR_HORIZON * atmos.density;
        return InternalSearchAltitude(body, observer, direction, dateStart, limitDays, body_radius_au, altitude);
      }
      exports.SearchRiseSet = SearchRiseSet;
      function SearchAltitude(body, observer, direction, dateStart, limitDays, altitude) {
        if (!Number.isFinite(altitude) || altitude < -90 || altitude > 90)
          throw `Invalid altitude angle: ${altitude}`;
        return InternalSearchAltitude(body, observer, direction, dateStart, limitDays, 0, altitude);
      }
      exports.SearchAltitude = SearchAltitude;
      var AscentInfo = class {
        constructor(tx, ty, ax, ay) {
          this.tx = tx;
          this.ty = ty;
          this.ax = ax;
          this.ay = ay;
        }
      };
      function FindAscent(depth, altdiff, max_deriv_alt, t1, t2, a1, a2) {
        if (a1 < 0 && a2 >= 0) {
          return new AscentInfo(t1, t2, a1, a2);
        }
        if (a1 >= 0 && a2 < 0) {
          return null;
        }
        if (depth > 17) {
          throw `Excessive recursion in rise/set ascent search.`;
        }
        const dt = t2.ut - t1.ut;
        if (dt * SECONDS_PER_DAY < 1)
          return null;
        const da = Math.min(Math.abs(a1), Math.abs(a2));
        if (da > max_deriv_alt * (dt / 2)) {
          return null;
        }
        const tmid = new AstroTime((t1.ut + t2.ut) / 2);
        const amid = altdiff(tmid);
        return FindAscent(1 + depth, altdiff, max_deriv_alt, t1, tmid, a1, amid) || FindAscent(1 + depth, altdiff, max_deriv_alt, tmid, t2, amid, a2);
      }
      function MaxAltitudeSlope(body, latitude) {
        if (latitude < -90 || latitude > 90)
          throw `Invalid geographic latitude: ${latitude}`;
        let deriv_ra;
        let deriv_dec;
        switch (body) {
          case Body.Moon:
            deriv_ra = 4.5;
            deriv_dec = 8.2;
            break;
          case Body.Sun:
            deriv_ra = 0.8;
            deriv_dec = 0.5;
            break;
          case Body.Mercury:
            deriv_ra = -1.6;
            deriv_dec = 1;
            break;
          case Body.Venus:
            deriv_ra = -0.8;
            deriv_dec = 0.6;
            break;
          case Body.Mars:
            deriv_ra = -0.5;
            deriv_dec = 0.4;
            break;
          case Body.Jupiter:
          case Body.Saturn:
          case Body.Uranus:
          case Body.Neptune:
          case Body.Pluto:
            deriv_ra = -0.2;
            deriv_dec = 0.2;
            break;
          case Body.Star1:
          case Body.Star2:
          case Body.Star3:
          case Body.Star4:
          case Body.Star5:
          case Body.Star6:
          case Body.Star7:
          case Body.Star8:
            deriv_ra = -8e-3;
            deriv_dec = 8e-3;
            break;
          default:
            throw `Body not allowed for altitude search: ${body}`;
        }
        const latrad = exports.DEG2RAD * latitude;
        return Math.abs((360 / SOLAR_DAYS_PER_SIDEREAL_DAY - deriv_ra) * Math.cos(latrad)) + Math.abs(deriv_dec * Math.sin(latrad));
      }
      function InternalSearchAltitude(body, observer, direction, dateStart, limitDays, bodyRadiusAu, targetAltitude) {
        VerifyObserver(observer);
        VerifyNumber(limitDays);
        VerifyNumber(bodyRadiusAu);
        VerifyNumber(targetAltitude);
        if (targetAltitude < -90 || targetAltitude > 90)
          throw `Invalid target altitude angle: ${targetAltitude}`;
        const RISE_SET_DT = 0.42;
        const max_deriv_alt = MaxAltitudeSlope(body, observer.latitude);
        function altdiff(time) {
          const ofdate = Equator(body, time, observer, true, true);
          const hor = Horizon(time, observer, ofdate.ra, ofdate.dec);
          const altitude = hor.altitude + exports.RAD2DEG * Math.asin(bodyRadiusAu / ofdate.dist);
          return direction * (altitude - targetAltitude);
        }
        const startTime = MakeTime(dateStart);
        let t1 = startTime;
        let t2 = startTime;
        let a1 = altdiff(t1);
        let a2 = a1;
        for (; ; ) {
          if (limitDays < 0) {
            t1 = t2.AddDays(-RISE_SET_DT);
            a1 = altdiff(t1);
          } else {
            t2 = t1.AddDays(+RISE_SET_DT);
            a2 = altdiff(t2);
          }
          const ascent = FindAscent(0, altdiff, max_deriv_alt, t1, t2, a1, a2);
          if (ascent) {
            const time = Search(altdiff, ascent.tx, ascent.ty, {
              dt_tolerance_seconds: 0.1,
              init_f1: ascent.ax,
              init_f2: ascent.ay
            });
            if (time) {
              if (limitDays < 0) {
                if (time.ut < startTime.ut + limitDays)
                  return null;
              } else {
                if (time.ut > startTime.ut + limitDays)
                  return null;
              }
              return time;
            }
            throw `Rise/set search failed after finding ascent: t1=${t1}, t2=${t2}, a1=${a1}, a2=${a2}`;
          }
          if (limitDays < 0) {
            if (t1.ut < startTime.ut + limitDays)
              return null;
            t2 = t1;
            a2 = a1;
          } else {
            if (t2.ut > startTime.ut + limitDays)
              return null;
            t1 = t2;
            a1 = a2;
          }
        }
      }
      var HourAngleEvent = class {
        constructor(time, hor) {
          this.time = time;
          this.hor = hor;
        }
      };
      exports.HourAngleEvent = HourAngleEvent;
      function SearchHourAngle(body, observer, hourAngle, dateStart, direction = 1) {
        VerifyObserver(observer);
        let time = MakeTime(dateStart);
        let iter = 0;
        if (body === Body.Earth)
          throw "Cannot search for hour angle of the Earth.";
        VerifyNumber(hourAngle);
        if (hourAngle < 0 || hourAngle >= 24)
          throw `Invalid hour angle ${hourAngle}`;
        VerifyNumber(direction);
        if (direction === 0)
          throw `Direction must be positive or negative.`;
        while (true) {
          ++iter;
          let gast = sidereal_time(time);
          let ofdate = Equator(body, time, observer, true, true);
          let delta_sidereal_hours = (hourAngle + ofdate.ra - observer.longitude / 15 - gast) % 24;
          if (iter === 1) {
            if (direction > 0) {
              if (delta_sidereal_hours < 0)
                delta_sidereal_hours += 24;
            } else {
              if (delta_sidereal_hours > 0)
                delta_sidereal_hours -= 24;
            }
          } else {
            if (delta_sidereal_hours < -12)
              delta_sidereal_hours += 24;
            else if (delta_sidereal_hours > 12)
              delta_sidereal_hours -= 24;
          }
          if (Math.abs(delta_sidereal_hours) * 3600 < 0.1) {
            const hor = Horizon(time, observer, ofdate.ra, ofdate.dec, "normal");
            return new HourAngleEvent(time, hor);
          }
          let delta_days = delta_sidereal_hours / 24 * SOLAR_DAYS_PER_SIDEREAL_DAY;
          time = time.AddDays(delta_days);
        }
      }
      exports.SearchHourAngle = SearchHourAngle;
      function HourAngle(body, date, observer) {
        const time = MakeTime(date);
        const gast = SiderealTime(time);
        const ofdate = Equator(body, time, observer, true, true);
        let hourAngle = (observer.longitude / 15 + gast - ofdate.ra) % 24;
        if (hourAngle < 0)
          hourAngle += 24;
        return hourAngle;
      }
      exports.HourAngle = HourAngle;
      var SeasonInfo = class {
        constructor(mar_equinox, jun_solstice, sep_equinox, dec_solstice) {
          this.mar_equinox = mar_equinox;
          this.jun_solstice = jun_solstice;
          this.sep_equinox = sep_equinox;
          this.dec_solstice = dec_solstice;
        }
      };
      exports.SeasonInfo = SeasonInfo;
      function Seasons(year) {
        function find(targetLon, month, day) {
          let startDate = new Date(Date.UTC(year, month - 1, day));
          let time = SearchSunLongitude(targetLon, startDate, 20);
          if (!time)
            throw `Cannot find season change near ${startDate.toISOString()}`;
          return time;
        }
        if (year instanceof Date && Number.isFinite(year.getTime()))
          year = year.getUTCFullYear();
        if (!Number.isSafeInteger(year))
          throw `Cannot calculate seasons because year argument ${year} is neither a Date nor a safe integer.`;
        let mar_equinox = find(0, 3, 10);
        let jun_solstice = find(90, 6, 10);
        let sep_equinox = find(180, 9, 10);
        let dec_solstice = find(270, 12, 10);
        return new SeasonInfo(mar_equinox, jun_solstice, sep_equinox, dec_solstice);
      }
      exports.Seasons = Seasons;
      var ElongationEvent = class {
        constructor(time, visibility, elongation, ecliptic_separation) {
          this.time = time;
          this.visibility = visibility;
          this.elongation = elongation;
          this.ecliptic_separation = ecliptic_separation;
        }
      };
      exports.ElongationEvent = ElongationEvent;
      function Elongation(body, date) {
        let time = MakeTime(date);
        let lon = PairLongitude(body, Body.Sun, time);
        let vis;
        if (lon > 180) {
          vis = "morning";
          lon = 360 - lon;
        } else {
          vis = "evening";
        }
        let angle = AngleFromSun(body, time);
        return new ElongationEvent(time, vis, angle, lon);
      }
      exports.Elongation = Elongation;
      function SearchMaxElongation(body, startDate) {
        const dt = 0.01;
        function neg_slope(t) {
          const t1 = t.AddDays(-dt / 2);
          const t2 = t.AddDays(+dt / 2);
          let e1 = AngleFromSun(body, t1);
          let e2 = AngleFromSun(body, t2);
          let m = (e1 - e2) / dt;
          return m;
        }
        let startTime = MakeTime(startDate);
        const table = {
          Mercury: { s1: 50, s2: 85 },
          Venus: { s1: 40, s2: 50 }
        };
        const planet = table[body];
        if (!planet)
          throw "SearchMaxElongation works for Mercury and Venus only.";
        let iter = 0;
        while (++iter <= 2) {
          let plon = EclipticLongitude(body, startTime);
          let elon = EclipticLongitude(Body.Earth, startTime);
          let rlon = LongitudeOffset(plon - elon);
          let rlon_lo, rlon_hi, adjust_days;
          if (rlon >= -planet.s1 && rlon < +planet.s1) {
            adjust_days = 0;
            rlon_lo = +planet.s1;
            rlon_hi = +planet.s2;
          } else if (rlon >= +planet.s2 || rlon < -planet.s2) {
            adjust_days = 0;
            rlon_lo = -planet.s2;
            rlon_hi = -planet.s1;
          } else if (rlon >= 0) {
            adjust_days = -SynodicPeriod(body) / 4;
            rlon_lo = +planet.s1;
            rlon_hi = +planet.s2;
          } else {
            adjust_days = -SynodicPeriod(body) / 4;
            rlon_lo = -planet.s2;
            rlon_hi = -planet.s1;
          }
          let t_start = startTime.AddDays(adjust_days);
          let t1 = SearchRelativeLongitude(body, rlon_lo, t_start);
          let t2 = SearchRelativeLongitude(body, rlon_hi, t1);
          let m1 = neg_slope(t1);
          if (m1 >= 0)
            throw `SearchMaxElongation: internal error: m1 = ${m1}`;
          let m2 = neg_slope(t2);
          if (m2 <= 0)
            throw `SearchMaxElongation: internal error: m2 = ${m2}`;
          let tx = Search(neg_slope, t1, t2, { init_f1: m1, init_f2: m2, dt_tolerance_seconds: 10 });
          if (!tx)
            throw `SearchMaxElongation: failed search iter ${iter} (t1=${t1.toString()}, t2=${t2.toString()})`;
          if (tx.tt >= startTime.tt)
            return Elongation(body, tx);
          startTime = t2.AddDays(1);
        }
        throw `SearchMaxElongation: failed to find event after 2 tries.`;
      }
      exports.SearchMaxElongation = SearchMaxElongation;
      function SearchPeakMagnitude(body, startDate) {
        if (body !== Body.Venus)
          throw "SearchPeakMagnitude currently works for Venus only.";
        const dt = 0.01;
        function slope(t) {
          const t1 = t.AddDays(-dt / 2);
          const t2 = t.AddDays(+dt / 2);
          const y1 = Illumination(body, t1).mag;
          const y2 = Illumination(body, t2).mag;
          const m = (y2 - y1) / dt;
          return m;
        }
        let startTime = MakeTime(startDate);
        const s1 = 10;
        const s2 = 30;
        let iter = 0;
        while (++iter <= 2) {
          let plon = EclipticLongitude(body, startTime);
          let elon = EclipticLongitude(Body.Earth, startTime);
          let rlon = LongitudeOffset(plon - elon);
          let rlon_lo, rlon_hi, adjust_days;
          if (rlon >= -s1 && rlon < +s1) {
            adjust_days = 0;
            rlon_lo = +s1;
            rlon_hi = +s2;
          } else if (rlon >= +s2 || rlon < -s2) {
            adjust_days = 0;
            rlon_lo = -s2;
            rlon_hi = -s1;
          } else if (rlon >= 0) {
            adjust_days = -SynodicPeriod(body) / 4;
            rlon_lo = +s1;
            rlon_hi = +s2;
          } else {
            adjust_days = -SynodicPeriod(body) / 4;
            rlon_lo = -s2;
            rlon_hi = -s1;
          }
          let t_start = startTime.AddDays(adjust_days);
          let t1 = SearchRelativeLongitude(body, rlon_lo, t_start);
          let t2 = SearchRelativeLongitude(body, rlon_hi, t1);
          let m1 = slope(t1);
          if (m1 >= 0)
            throw `SearchPeakMagnitude: internal error: m1 = ${m1}`;
          let m2 = slope(t2);
          if (m2 <= 0)
            throw `SearchPeakMagnitude: internal error: m2 = ${m2}`;
          let tx = Search(slope, t1, t2, { init_f1: m1, init_f2: m2, dt_tolerance_seconds: 10 });
          if (!tx)
            throw `SearchPeakMagnitude: failed search iter ${iter} (t1=${t1.toString()}, t2=${t2.toString()})`;
          if (tx.tt >= startTime.tt)
            return Illumination(body, tx);
          startTime = t2.AddDays(1);
        }
        throw `SearchPeakMagnitude: failed to find event after 2 tries.`;
      }
      exports.SearchPeakMagnitude = SearchPeakMagnitude;
      var ApsisKind;
      (function(ApsisKind2) {
        ApsisKind2[ApsisKind2["Pericenter"] = 0] = "Pericenter";
        ApsisKind2[ApsisKind2["Apocenter"] = 1] = "Apocenter";
      })(ApsisKind = exports.ApsisKind || (exports.ApsisKind = {}));
      var Apsis = class {
        constructor(time, kind, dist_au) {
          this.time = time;
          this.kind = kind;
          this.dist_au = dist_au;
          this.dist_km = dist_au * exports.KM_PER_AU;
        }
      };
      exports.Apsis = Apsis;
      function SearchLunarApsis(startDate) {
        const dt = 1e-3;
        function distance_slope(t) {
          let t12 = t.AddDays(-dt / 2);
          let t2 = t.AddDays(+dt / 2);
          let r1 = CalcMoon(t12).distance_au;
          let r2 = CalcMoon(t2).distance_au;
          let m = (r2 - r1) / dt;
          return m;
        }
        function negative_distance_slope(t) {
          return -distance_slope(t);
        }
        let t1 = MakeTime(startDate);
        let m1 = distance_slope(t1);
        const increment = 5;
        for (var iter = 0; iter * increment < 2 * MEAN_SYNODIC_MONTH; ++iter) {
          let t2 = t1.AddDays(increment);
          let m2 = distance_slope(t2);
          if (m1 * m2 <= 0) {
            if (m1 < 0 || m2 > 0) {
              let tx = Search(distance_slope, t1, t2, { init_f1: m1, init_f2: m2 });
              if (!tx)
                throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
              let dist = CalcMoon(tx).distance_au;
              return new Apsis(tx, 0, dist);
            }
            if (m1 > 0 || m2 < 0) {
              let tx = Search(negative_distance_slope, t1, t2, { init_f1: -m1, init_f2: -m2 });
              if (!tx)
                throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
              let dist = CalcMoon(tx).distance_au;
              return new Apsis(tx, 1, dist);
            }
            throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
          }
          t1 = t2;
          m1 = m2;
        }
        throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
      }
      exports.SearchLunarApsis = SearchLunarApsis;
      function NextLunarApsis(apsis) {
        const skip = 11;
        let next = SearchLunarApsis(apsis.time.AddDays(skip));
        if (next.kind + apsis.kind !== 1)
          throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${apsis.kind} @ ${apsis.time.toString()}, next=${next.kind} @ ${next.time.toString()}`;
        return next;
      }
      exports.NextLunarApsis = NextLunarApsis;
      function PlanetExtreme(body, kind, start_time, dayspan) {
        const direction = kind === ApsisKind.Apocenter ? 1 : -1;
        const npoints = 10;
        for (; ; ) {
          const interval = dayspan / (npoints - 1);
          if (interval < 1 / 1440) {
            const apsis_time = start_time.AddDays(interval / 2);
            const dist_au = HelioDistance(body, apsis_time);
            return new Apsis(apsis_time, kind, dist_au);
          }
          let best_i = -1;
          let best_dist = 0;
          for (let i = 0; i < npoints; ++i) {
            const time = start_time.AddDays(i * interval);
            const dist = direction * HelioDistance(body, time);
            if (i == 0 || dist > best_dist) {
              best_i = i;
              best_dist = dist;
            }
          }
          start_time = start_time.AddDays((best_i - 1) * interval);
          dayspan = 2 * interval;
        }
      }
      function BruteSearchPlanetApsis(body, startTime) {
        const npoints = 100;
        const t1 = startTime.AddDays(Planet[body].OrbitalPeriod * (-30 / 360));
        const t2 = startTime.AddDays(Planet[body].OrbitalPeriod * (270 / 360));
        let t_min = t1;
        let t_max = t1;
        let min_dist = -1;
        let max_dist = -1;
        const interval = (t2.ut - t1.ut) / (npoints - 1);
        for (let i = 0; i < npoints; ++i) {
          const time = t1.AddDays(i * interval);
          const dist = HelioDistance(body, time);
          if (i === 0) {
            max_dist = min_dist = dist;
          } else {
            if (dist > max_dist) {
              max_dist = dist;
              t_max = time;
            }
            if (dist < min_dist) {
              min_dist = dist;
              t_min = time;
            }
          }
        }
        const perihelion = PlanetExtreme(body, 0, t_min.AddDays(-2 * interval), 4 * interval);
        const aphelion = PlanetExtreme(body, 1, t_max.AddDays(-2 * interval), 4 * interval);
        if (perihelion.time.tt >= startTime.tt) {
          if (aphelion.time.tt >= startTime.tt && aphelion.time.tt < perihelion.time.tt)
            return aphelion;
          return perihelion;
        }
        if (aphelion.time.tt >= startTime.tt)
          return aphelion;
        throw "Internal error: failed to find Neptune apsis.";
      }
      function SearchPlanetApsis(body, startTime) {
        startTime = MakeTime(startTime);
        if (body === Body.Neptune || body === Body.Pluto)
          return BruteSearchPlanetApsis(body, startTime);
        function positive_slope(t) {
          const dt = 1e-3;
          let t12 = t.AddDays(-dt / 2);
          let t2 = t.AddDays(+dt / 2);
          let r1 = HelioDistance(body, t12);
          let r2 = HelioDistance(body, t2);
          let m = (r2 - r1) / dt;
          return m;
        }
        function negative_slope(t) {
          return -positive_slope(t);
        }
        const orbit_period_days = Planet[body].OrbitalPeriod;
        const increment = orbit_period_days / 6;
        let t1 = startTime;
        let m1 = positive_slope(t1);
        for (let iter = 0; iter * increment < 2 * orbit_period_days; ++iter) {
          const t2 = t1.AddDays(increment);
          const m2 = positive_slope(t2);
          if (m1 * m2 <= 0) {
            let slope_func;
            let kind;
            if (m1 < 0 || m2 > 0) {
              slope_func = positive_slope;
              kind = ApsisKind.Pericenter;
            } else if (m1 > 0 || m2 < 0) {
              slope_func = negative_slope;
              kind = ApsisKind.Apocenter;
            } else {
              throw "Internal error with slopes in SearchPlanetApsis";
            }
            const search = Search(slope_func, t1, t2);
            if (!search)
              throw "Failed to find slope transition in planetary apsis search.";
            const dist = HelioDistance(body, search);
            return new Apsis(search, kind, dist);
          }
          t1 = t2;
          m1 = m2;
        }
        throw "Internal error: should have found planetary apsis within 2 orbital periods.";
      }
      exports.SearchPlanetApsis = SearchPlanetApsis;
      function NextPlanetApsis(body, apsis) {
        if (apsis.kind !== ApsisKind.Pericenter && apsis.kind !== ApsisKind.Apocenter)
          throw `Invalid apsis kind: ${apsis.kind}`;
        const skip = 0.25 * Planet[body].OrbitalPeriod;
        const time = apsis.time.AddDays(skip);
        const next = SearchPlanetApsis(body, time);
        if (next.kind + apsis.kind !== 1)
          throw `Internal error: previous apsis was ${apsis.kind}, but found ${next.kind} for next apsis.`;
        return next;
      }
      exports.NextPlanetApsis = NextPlanetApsis;
      function InverseRotation(rotation) {
        return new RotationMatrix([
          [rotation.rot[0][0], rotation.rot[1][0], rotation.rot[2][0]],
          [rotation.rot[0][1], rotation.rot[1][1], rotation.rot[2][1]],
          [rotation.rot[0][2], rotation.rot[1][2], rotation.rot[2][2]]
        ]);
      }
      exports.InverseRotation = InverseRotation;
      function CombineRotation(a, b) {
        return new RotationMatrix([
          [
            b.rot[0][0] * a.rot[0][0] + b.rot[1][0] * a.rot[0][1] + b.rot[2][0] * a.rot[0][2],
            b.rot[0][1] * a.rot[0][0] + b.rot[1][1] * a.rot[0][1] + b.rot[2][1] * a.rot[0][2],
            b.rot[0][2] * a.rot[0][0] + b.rot[1][2] * a.rot[0][1] + b.rot[2][2] * a.rot[0][2]
          ],
          [
            b.rot[0][0] * a.rot[1][0] + b.rot[1][0] * a.rot[1][1] + b.rot[2][0] * a.rot[1][2],
            b.rot[0][1] * a.rot[1][0] + b.rot[1][1] * a.rot[1][1] + b.rot[2][1] * a.rot[1][2],
            b.rot[0][2] * a.rot[1][0] + b.rot[1][2] * a.rot[1][1] + b.rot[2][2] * a.rot[1][2]
          ],
          [
            b.rot[0][0] * a.rot[2][0] + b.rot[1][0] * a.rot[2][1] + b.rot[2][0] * a.rot[2][2],
            b.rot[0][1] * a.rot[2][0] + b.rot[1][1] * a.rot[2][1] + b.rot[2][1] * a.rot[2][2],
            b.rot[0][2] * a.rot[2][0] + b.rot[1][2] * a.rot[2][1] + b.rot[2][2] * a.rot[2][2]
          ]
        ]);
      }
      exports.CombineRotation = CombineRotation;
      function IdentityMatrix() {
        return new RotationMatrix([
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ]);
      }
      exports.IdentityMatrix = IdentityMatrix;
      function Pivot(rotation, axis, angle) {
        if (axis !== 0 && axis !== 1 && axis !== 2)
          throw `Invalid axis ${axis}. Must be [0, 1, 2].`;
        const radians = VerifyNumber(angle) * exports.DEG2RAD;
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        const i = (axis + 1) % 3;
        const j = (axis + 2) % 3;
        const k = axis;
        let rot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        rot[i][i] = c * rotation.rot[i][i] - s * rotation.rot[i][j];
        rot[i][j] = s * rotation.rot[i][i] + c * rotation.rot[i][j];
        rot[i][k] = rotation.rot[i][k];
        rot[j][i] = c * rotation.rot[j][i] - s * rotation.rot[j][j];
        rot[j][j] = s * rotation.rot[j][i] + c * rotation.rot[j][j];
        rot[j][k] = rotation.rot[j][k];
        rot[k][i] = c * rotation.rot[k][i] - s * rotation.rot[k][j];
        rot[k][j] = s * rotation.rot[k][i] + c * rotation.rot[k][j];
        rot[k][k] = rotation.rot[k][k];
        return new RotationMatrix(rot);
      }
      exports.Pivot = Pivot;
      function VectorFromSphere(sphere, time) {
        time = MakeTime(time);
        const radlat = sphere.lat * exports.DEG2RAD;
        const radlon = sphere.lon * exports.DEG2RAD;
        const rcoslat = sphere.dist * Math.cos(radlat);
        return new Vector(rcoslat * Math.cos(radlon), rcoslat * Math.sin(radlon), sphere.dist * Math.sin(radlat), time);
      }
      exports.VectorFromSphere = VectorFromSphere;
      function EquatorFromVector(vec) {
        const sphere = SphereFromVector(vec);
        return new EquatorialCoordinates(sphere.lon / 15, sphere.lat, sphere.dist, vec);
      }
      exports.EquatorFromVector = EquatorFromVector;
      function SphereFromVector(vector) {
        const xyproj = vector.x * vector.x + vector.y * vector.y;
        const dist = Math.sqrt(xyproj + vector.z * vector.z);
        let lat, lon;
        if (xyproj === 0) {
          if (vector.z === 0)
            throw "Zero-length vector not allowed.";
          lon = 0;
          lat = vector.z < 0 ? -90 : 90;
        } else {
          lon = exports.RAD2DEG * Math.atan2(vector.y, vector.x);
          if (lon < 0)
            lon += 360;
          lat = exports.RAD2DEG * Math.atan2(vector.z, Math.sqrt(xyproj));
        }
        return new Spherical(lat, lon, dist);
      }
      exports.SphereFromVector = SphereFromVector;
      function ToggleAzimuthDirection(az) {
        az = 360 - az;
        if (az >= 360)
          az -= 360;
        else if (az < 0)
          az += 360;
        return az;
      }
      function HorizonFromVector(vector, refraction) {
        const sphere = SphereFromVector(vector);
        sphere.lon = ToggleAzimuthDirection(sphere.lon);
        sphere.lat += Refraction(refraction, sphere.lat);
        return sphere;
      }
      exports.HorizonFromVector = HorizonFromVector;
      function VectorFromHorizon(sphere, time, refraction) {
        time = MakeTime(time);
        const lon = ToggleAzimuthDirection(sphere.lon);
        const lat = sphere.lat + InverseRefraction(refraction, sphere.lat);
        const xsphere = new Spherical(lat, lon, sphere.dist);
        return VectorFromSphere(xsphere, time);
      }
      exports.VectorFromHorizon = VectorFromHorizon;
      function Refraction(refraction, altitude) {
        let refr;
        VerifyNumber(altitude);
        if (altitude < -90 || altitude > 90)
          return 0;
        if (refraction === "normal" || refraction === "jplhor") {
          let hd = altitude;
          if (hd < -1)
            hd = -1;
          refr = 1.02 / Math.tan((hd + 10.3 / (hd + 5.11)) * exports.DEG2RAD) / 60;
          if (refraction === "normal" && altitude < -1) {
            refr *= (altitude + 90) / 89;
          }
        } else if (!refraction) {
          refr = 0;
        } else {
          throw `Invalid refraction option: ${refraction}`;
        }
        return refr;
      }
      exports.Refraction = Refraction;
      function InverseRefraction(refraction, bent_altitude) {
        if (bent_altitude < -90 || bent_altitude > 90)
          return 0;
        let altitude = bent_altitude - Refraction(refraction, bent_altitude);
        for (; ; ) {
          let diff = altitude + Refraction(refraction, altitude) - bent_altitude;
          if (Math.abs(diff) < 1e-14)
            return altitude - bent_altitude;
          altitude -= diff;
        }
      }
      exports.InverseRefraction = InverseRefraction;
      function RotateVector(rotation, vector) {
        return new Vector(rotation.rot[0][0] * vector.x + rotation.rot[1][0] * vector.y + rotation.rot[2][0] * vector.z, rotation.rot[0][1] * vector.x + rotation.rot[1][1] * vector.y + rotation.rot[2][1] * vector.z, rotation.rot[0][2] * vector.x + rotation.rot[1][2] * vector.y + rotation.rot[2][2] * vector.z, vector.t);
      }
      exports.RotateVector = RotateVector;
      function RotateState(rotation, state) {
        return new StateVector(rotation.rot[0][0] * state.x + rotation.rot[1][0] * state.y + rotation.rot[2][0] * state.z, rotation.rot[0][1] * state.x + rotation.rot[1][1] * state.y + rotation.rot[2][1] * state.z, rotation.rot[0][2] * state.x + rotation.rot[1][2] * state.y + rotation.rot[2][2] * state.z, rotation.rot[0][0] * state.vx + rotation.rot[1][0] * state.vy + rotation.rot[2][0] * state.vz, rotation.rot[0][1] * state.vx + rotation.rot[1][1] * state.vy + rotation.rot[2][1] * state.vz, rotation.rot[0][2] * state.vx + rotation.rot[1][2] * state.vy + rotation.rot[2][2] * state.vz, state.t);
      }
      exports.RotateState = RotateState;
      function Rotation_EQJ_ECL() {
        const c = 0.9174821430670688;
        const s = 0.3977769691083922;
        return new RotationMatrix([
          [1, 0, 0],
          [0, +c, -s],
          [0, +s, +c]
        ]);
      }
      exports.Rotation_EQJ_ECL = Rotation_EQJ_ECL;
      function Rotation_ECL_EQJ() {
        const c = 0.9174821430670688;
        const s = 0.3977769691083922;
        return new RotationMatrix([
          [1, 0, 0],
          [0, +c, +s],
          [0, -s, +c]
        ]);
      }
      exports.Rotation_ECL_EQJ = Rotation_ECL_EQJ;
      function Rotation_EQJ_EQD(time) {
        time = MakeTime(time);
        const prec = precession_rot(time, PrecessDirection.From2000);
        const nut = nutation_rot(time, PrecessDirection.From2000);
        return CombineRotation(prec, nut);
      }
      exports.Rotation_EQJ_EQD = Rotation_EQJ_EQD;
      function Rotation_EQJ_ECT(time) {
        const t = MakeTime(time);
        const rot = Rotation_EQJ_EQD(t);
        const step = Rotation_EQD_ECT(t);
        return CombineRotation(rot, step);
      }
      exports.Rotation_EQJ_ECT = Rotation_EQJ_ECT;
      function Rotation_ECT_EQJ(time) {
        const t = MakeTime(time);
        const rot = Rotation_ECT_EQD(t);
        const step = Rotation_EQD_EQJ(t);
        return CombineRotation(rot, step);
      }
      exports.Rotation_ECT_EQJ = Rotation_ECT_EQJ;
      function Rotation_EQD_EQJ(time) {
        time = MakeTime(time);
        const nut = nutation_rot(time, PrecessDirection.Into2000);
        const prec = precession_rot(time, PrecessDirection.Into2000);
        return CombineRotation(nut, prec);
      }
      exports.Rotation_EQD_EQJ = Rotation_EQD_EQJ;
      function Rotation_EQD_HOR(time, observer) {
        time = MakeTime(time);
        const sinlat = Math.sin(observer.latitude * exports.DEG2RAD);
        const coslat = Math.cos(observer.latitude * exports.DEG2RAD);
        const sinlon = Math.sin(observer.longitude * exports.DEG2RAD);
        const coslon = Math.cos(observer.longitude * exports.DEG2RAD);
        const uze = [coslat * coslon, coslat * sinlon, sinlat];
        const une = [-sinlat * coslon, -sinlat * sinlon, coslat];
        const uwe = [sinlon, -coslon, 0];
        const spin_angle = -15 * sidereal_time(time);
        const uz = spin(spin_angle, uze);
        const un = spin(spin_angle, une);
        const uw = spin(spin_angle, uwe);
        return new RotationMatrix([
          [un[0], uw[0], uz[0]],
          [un[1], uw[1], uz[1]],
          [un[2], uw[2], uz[2]]
        ]);
      }
      exports.Rotation_EQD_HOR = Rotation_EQD_HOR;
      function Rotation_HOR_EQD(time, observer) {
        const rot = Rotation_EQD_HOR(time, observer);
        return InverseRotation(rot);
      }
      exports.Rotation_HOR_EQD = Rotation_HOR_EQD;
      function Rotation_HOR_EQJ(time, observer) {
        time = MakeTime(time);
        const hor_eqd = Rotation_HOR_EQD(time, observer);
        const eqd_eqj = Rotation_EQD_EQJ(time);
        return CombineRotation(hor_eqd, eqd_eqj);
      }
      exports.Rotation_HOR_EQJ = Rotation_HOR_EQJ;
      function Rotation_EQJ_HOR(time, observer) {
        const rot = Rotation_HOR_EQJ(time, observer);
        return InverseRotation(rot);
      }
      exports.Rotation_EQJ_HOR = Rotation_EQJ_HOR;
      function Rotation_EQD_ECL(time) {
        const eqd_eqj = Rotation_EQD_EQJ(time);
        const eqj_ecl = Rotation_EQJ_ECL();
        return CombineRotation(eqd_eqj, eqj_ecl);
      }
      exports.Rotation_EQD_ECL = Rotation_EQD_ECL;
      function Rotation_ECL_EQD(time) {
        const rot = Rotation_EQD_ECL(time);
        return InverseRotation(rot);
      }
      exports.Rotation_ECL_EQD = Rotation_ECL_EQD;
      function Rotation_ECL_HOR(time, observer) {
        time = MakeTime(time);
        const ecl_eqd = Rotation_ECL_EQD(time);
        const eqd_hor = Rotation_EQD_HOR(time, observer);
        return CombineRotation(ecl_eqd, eqd_hor);
      }
      exports.Rotation_ECL_HOR = Rotation_ECL_HOR;
      function Rotation_HOR_ECL(time, observer) {
        const rot = Rotation_ECL_HOR(time, observer);
        return InverseRotation(rot);
      }
      exports.Rotation_HOR_ECL = Rotation_HOR_ECL;
      function Rotation_EQJ_GAL() {
        return new RotationMatrix([
          [-0.0548624779711344, 0.4941095946388765, -0.8676668813529025],
          [-0.8734572784246782, -0.4447938112296831, -0.1980677870294097],
          [-0.483800052994852, 0.7470034631630423, 0.4559861124470794]
        ]);
      }
      exports.Rotation_EQJ_GAL = Rotation_EQJ_GAL;
      function Rotation_GAL_EQJ() {
        return new RotationMatrix([
          [-0.0548624779711344, -0.8734572784246782, -0.483800052994852],
          [0.4941095946388765, -0.4447938112296831, 0.7470034631630423],
          [-0.8676668813529025, -0.1980677870294097, 0.4559861124470794]
        ]);
      }
      exports.Rotation_GAL_EQJ = Rotation_GAL_EQJ;
      function Rotation_ECT_EQD(time) {
        const et = e_tilt(MakeTime(time));
        const tobl = et.tobl * exports.DEG2RAD;
        const c = Math.cos(tobl);
        const s = Math.sin(tobl);
        return new RotationMatrix([
          [1, 0, 0],
          [0, +c, +s],
          [0, -s, +c]
        ]);
      }
      exports.Rotation_ECT_EQD = Rotation_ECT_EQD;
      function Rotation_EQD_ECT(time) {
        const et = e_tilt(MakeTime(time));
        const tobl = et.tobl * exports.DEG2RAD;
        const c = Math.cos(tobl);
        const s = Math.sin(tobl);
        return new RotationMatrix([
          [1, 0, 0],
          [0, +c, -s],
          [0, +s, +c]
        ]);
      }
      exports.Rotation_EQD_ECT = Rotation_EQD_ECT;
      var ConstelNames = [
        ["And", "Andromeda"],
        ["Ant", "Antila"],
        ["Aps", "Apus"],
        ["Aql", "Aquila"],
        ["Aqr", "Aquarius"],
        ["Ara", "Ara"],
        ["Ari", "Aries"],
        ["Aur", "Auriga"],
        ["Boo", "Bootes"],
        ["Cae", "Caelum"],
        ["Cam", "Camelopardis"],
        ["Cap", "Capricornus"],
        ["Car", "Carina"],
        ["Cas", "Cassiopeia"],
        ["Cen", "Centaurus"],
        ["Cep", "Cepheus"],
        ["Cet", "Cetus"],
        ["Cha", "Chamaeleon"],
        ["Cir", "Circinus"],
        ["CMa", "Canis Major"],
        ["CMi", "Canis Minor"],
        ["Cnc", "Cancer"],
        ["Col", "Columba"],
        ["Com", "Coma Berenices"],
        ["CrA", "Corona Australis"],
        ["CrB", "Corona Borealis"],
        ["Crt", "Crater"],
        ["Cru", "Crux"],
        ["Crv", "Corvus"],
        ["CVn", "Canes Venatici"],
        ["Cyg", "Cygnus"],
        ["Del", "Delphinus"],
        ["Dor", "Dorado"],
        ["Dra", "Draco"],
        ["Equ", "Equuleus"],
        ["Eri", "Eridanus"],
        ["For", "Fornax"],
        ["Gem", "Gemini"],
        ["Gru", "Grus"],
        ["Her", "Hercules"],
        ["Hor", "Horologium"],
        ["Hya", "Hydra"],
        ["Hyi", "Hydrus"],
        ["Ind", "Indus"],
        ["Lac", "Lacerta"],
        ["Leo", "Leo"],
        ["Lep", "Lepus"],
        ["Lib", "Libra"],
        ["LMi", "Leo Minor"],
        ["Lup", "Lupus"],
        ["Lyn", "Lynx"],
        ["Lyr", "Lyra"],
        ["Men", "Mensa"],
        ["Mic", "Microscopium"],
        ["Mon", "Monoceros"],
        ["Mus", "Musca"],
        ["Nor", "Norma"],
        ["Oct", "Octans"],
        ["Oph", "Ophiuchus"],
        ["Ori", "Orion"],
        ["Pav", "Pavo"],
        ["Peg", "Pegasus"],
        ["Per", "Perseus"],
        ["Phe", "Phoenix"],
        ["Pic", "Pictor"],
        ["PsA", "Pisces Austrinus"],
        ["Psc", "Pisces"],
        ["Pup", "Puppis"],
        ["Pyx", "Pyxis"],
        ["Ret", "Reticulum"],
        ["Scl", "Sculptor"],
        ["Sco", "Scorpius"],
        ["Sct", "Scutum"],
        ["Ser", "Serpens"],
        ["Sex", "Sextans"],
        ["Sge", "Sagitta"],
        ["Sgr", "Sagittarius"],
        ["Tau", "Taurus"],
        ["Tel", "Telescopium"],
        ["TrA", "Triangulum Australe"],
        ["Tri", "Triangulum"],
        ["Tuc", "Tucana"],
        ["UMa", "Ursa Major"],
        ["UMi", "Ursa Minor"],
        ["Vel", "Vela"],
        ["Vir", "Virgo"],
        ["Vol", "Volans"],
        ["Vul", "Vulpecula"]
        // 87
      ];
      var ConstelBounds = [
        [83, 0, 8640, 2112],
        [83, 2880, 5220, 2076],
        [83, 7560, 8280, 2068],
        [83, 6480, 7560, 2064],
        [15, 0, 2880, 2040],
        [10, 3300, 3840, 1968],
        [15, 0, 1800, 1920],
        [10, 3840, 5220, 1920],
        [83, 6300, 6480, 1920],
        [33, 7260, 7560, 1920],
        [15, 0, 1263, 1848],
        [10, 4140, 4890, 1848],
        [83, 5952, 6300, 1800],
        [15, 7260, 7440, 1800],
        [10, 2868, 3300, 1764],
        [33, 3300, 4080, 1764],
        [83, 4680, 5952, 1680],
        [13, 1116, 1230, 1632],
        [33, 7350, 7440, 1608],
        [33, 4080, 4320, 1596],
        [15, 0, 120, 1584],
        [83, 5040, 5640, 1584],
        [15, 8490, 8640, 1584],
        [33, 4320, 4860, 1536],
        [33, 4860, 5190, 1512],
        [15, 8340, 8490, 1512],
        [10, 2196, 2520, 1488],
        [33, 7200, 7350, 1476],
        [15, 7393.2, 7416, 1462],
        [10, 2520, 2868, 1440],
        [82, 2868, 3030, 1440],
        [33, 7116, 7200, 1428],
        [15, 7200, 7393.2, 1428],
        [15, 8232, 8340, 1418],
        [13, 0, 876, 1404],
        [33, 6990, 7116, 1392],
        [13, 612, 687, 1380],
        [13, 876, 1116, 1368],
        [10, 1116, 1140, 1368],
        [15, 8034, 8232, 1350],
        [10, 1800, 2196, 1344],
        [82, 5052, 5190, 1332],
        [33, 5190, 6990, 1332],
        [10, 1140, 1200, 1320],
        [15, 7968, 8034, 1320],
        [15, 7416, 7908, 1316],
        [13, 0, 612, 1296],
        [50, 2196, 2340, 1296],
        [82, 4350, 4860, 1272],
        [33, 5490, 5670, 1272],
        [15, 7908, 7968, 1266],
        [10, 1200, 1800, 1260],
        [13, 8232, 8400, 1260],
        [33, 5670, 6120, 1236],
        [62, 735, 906, 1212],
        [33, 6120, 6564, 1212],
        [13, 0, 492, 1200],
        [62, 492, 600, 1200],
        [50, 2340, 2448, 1200],
        [13, 8400, 8640, 1200],
        [82, 4860, 5052, 1164],
        [13, 0, 402, 1152],
        [13, 8490, 8640, 1152],
        [39, 6543, 6564, 1140],
        [33, 6564, 6870, 1140],
        [30, 6870, 6900, 1140],
        [62, 600, 735, 1128],
        [82, 3030, 3300, 1128],
        [13, 60, 312, 1104],
        [82, 4320, 4350, 1080],
        [50, 2448, 2652, 1068],
        [30, 7887, 7908, 1056],
        [30, 7875, 7887, 1050],
        [30, 6900, 6984, 1044],
        [82, 3300, 3660, 1008],
        [82, 3660, 3882, 960],
        [8, 5556, 5670, 960],
        [39, 5670, 5880, 960],
        [50, 3330, 3450, 954],
        [0, 0, 906, 882],
        [62, 906, 924, 882],
        [51, 6969, 6984, 876],
        [62, 1620, 1689, 864],
        [30, 7824, 7875, 864],
        [44, 7875, 7920, 864],
        [7, 2352, 2652, 852],
        [50, 2652, 2790, 852],
        [0, 0, 720, 840],
        [44, 7920, 8214, 840],
        [44, 8214, 8232, 828],
        [0, 8232, 8460, 828],
        [62, 924, 978, 816],
        [82, 3882, 3960, 816],
        [29, 4320, 4440, 816],
        [50, 2790, 3330, 804],
        [48, 3330, 3558, 804],
        [0, 258, 507, 792],
        [8, 5466, 5556, 792],
        [0, 8460, 8550, 770],
        [29, 4440, 4770, 768],
        [0, 8550, 8640, 752],
        [29, 5025, 5052, 738],
        [80, 870, 978, 736],
        [62, 978, 1620, 736],
        [7, 1620, 1710, 720],
        [51, 6543, 6969, 720],
        [82, 3960, 4320, 696],
        [30, 7080, 7530, 696],
        [7, 1710, 2118, 684],
        [48, 3558, 3780, 684],
        [29, 4770, 5025, 684],
        [0, 0, 24, 672],
        [80, 507, 600, 672],
        [7, 2118, 2352, 672],
        [37, 2838, 2880, 672],
        [30, 7530, 7824, 672],
        [30, 6933, 7080, 660],
        [80, 690, 870, 654],
        [25, 5820, 5880, 648],
        [8, 5430, 5466, 624],
        [25, 5466, 5820, 624],
        [51, 6612, 6792, 624],
        [48, 3870, 3960, 612],
        [51, 6792, 6933, 612],
        [80, 600, 690, 600],
        [66, 258, 306, 570],
        [48, 3780, 3870, 564],
        [87, 7650, 7710, 564],
        [77, 2052, 2118, 548],
        [0, 24, 51, 528],
        [73, 5730, 5772, 528],
        [37, 2118, 2238, 516],
        [87, 7140, 7290, 510],
        [87, 6792, 6930, 506],
        [0, 51, 306, 504],
        [87, 7290, 7404, 492],
        [37, 2811, 2838, 480],
        [87, 7404, 7650, 468],
        [87, 6930, 7140, 460],
        [6, 1182, 1212, 456],
        [75, 6792, 6840, 444],
        [59, 2052, 2076, 432],
        [37, 2238, 2271, 420],
        [75, 6840, 7140, 388],
        [77, 1788, 1920, 384],
        [39, 5730, 5790, 384],
        [75, 7140, 7290, 378],
        [77, 1662, 1788, 372],
        [77, 1920, 2016, 372],
        [23, 4620, 4860, 360],
        [39, 6210, 6570, 344],
        [23, 4272, 4620, 336],
        [37, 2700, 2811, 324],
        [39, 6030, 6210, 308],
        [61, 0, 51, 300],
        [77, 2016, 2076, 300],
        [37, 2520, 2700, 300],
        [61, 7602, 7680, 300],
        [37, 2271, 2496, 288],
        [39, 6570, 6792, 288],
        [31, 7515, 7578, 284],
        [61, 7578, 7602, 284],
        [45, 4146, 4272, 264],
        [59, 2247, 2271, 240],
        [37, 2496, 2520, 240],
        [21, 2811, 2853, 240],
        [61, 8580, 8640, 240],
        [6, 600, 1182, 238],
        [31, 7251, 7308, 204],
        [8, 4860, 5430, 192],
        [61, 8190, 8580, 180],
        [21, 2853, 3330, 168],
        [45, 3330, 3870, 168],
        [58, 6570, 6718.4, 150],
        [3, 6718.4, 6792, 150],
        [31, 7500, 7515, 144],
        [20, 2520, 2526, 132],
        [73, 6570, 6633, 108],
        [39, 5790, 6030, 96],
        [58, 6570, 6633, 72],
        [61, 7728, 7800, 66],
        [66, 0, 720, 48],
        [73, 6690, 6792, 48],
        [31, 7308, 7500, 48],
        [34, 7500, 7680, 48],
        [61, 7680, 7728, 48],
        [61, 7920, 8190, 48],
        [61, 7800, 7920, 42],
        [20, 2526, 2592, 36],
        [77, 1290, 1662, 0],
        [59, 1662, 1680, 0],
        [20, 2592, 2910, 0],
        [85, 5280, 5430, 0],
        [58, 6420, 6570, 0],
        [16, 954, 1182, -42],
        [77, 1182, 1290, -42],
        [73, 5430, 5856, -78],
        [59, 1680, 1830, -96],
        [59, 2100, 2247, -96],
        [73, 6420, 6468, -96],
        [73, 6570, 6690, -96],
        [3, 6690, 6792, -96],
        [66, 8190, 8580, -96],
        [45, 3870, 4146, -144],
        [85, 4146, 4260, -144],
        [66, 0, 120, -168],
        [66, 8580, 8640, -168],
        [85, 5130, 5280, -192],
        [58, 5730, 5856, -192],
        [3, 7200, 7392, -216],
        [4, 7680, 7872, -216],
        [58, 6180, 6468, -240],
        [54, 2100, 2910, -264],
        [35, 1770, 1830, -264],
        [59, 1830, 2100, -264],
        [41, 2910, 3012, -264],
        [74, 3450, 3870, -264],
        [85, 4260, 4620, -264],
        [58, 6330, 6360, -280],
        [3, 6792, 7200, -288.8],
        [35, 1740, 1770, -348],
        [4, 7392, 7680, -360],
        [73, 6180, 6570, -384],
        [72, 6570, 6792, -384],
        [41, 3012, 3090, -408],
        [58, 5856, 5895, -438],
        [41, 3090, 3270, -456],
        [26, 3870, 3900, -456],
        [71, 5856, 5895, -462],
        [47, 5640, 5730, -480],
        [28, 4530, 4620, -528],
        [85, 4620, 5130, -528],
        [41, 3270, 3510, -576],
        [16, 600, 954, -585.2],
        [35, 954, 1350, -585.2],
        [26, 3900, 4260, -588],
        [28, 4260, 4530, -588],
        [47, 5130, 5370, -588],
        [58, 5856, 6030, -590],
        [16, 0, 600, -612],
        [11, 7680, 7872, -612],
        [4, 7872, 8580, -612],
        [16, 8580, 8640, -612],
        [41, 3510, 3690, -636],
        [35, 1692, 1740, -654],
        [46, 1740, 2202, -654],
        [11, 7200, 7680, -672],
        [41, 3690, 3810, -700],
        [41, 4530, 5370, -708],
        [47, 5370, 5640, -708],
        [71, 5640, 5760, -708],
        [35, 1650, 1692, -720],
        [58, 6030, 6336, -720],
        [76, 6336, 6420, -720],
        [41, 3810, 3900, -748],
        [19, 2202, 2652, -792],
        [41, 4410, 4530, -792],
        [41, 3900, 4410, -840],
        [36, 1260, 1350, -864],
        [68, 3012, 3372, -882],
        [35, 1536, 1650, -888],
        [76, 6420, 6900, -888],
        [65, 7680, 8280, -888],
        [70, 8280, 8400, -888],
        [36, 1080, 1260, -950],
        [1, 3372, 3960, -954],
        [70, 0, 600, -960],
        [36, 600, 1080, -960],
        [35, 1392, 1536, -960],
        [70, 8400, 8640, -960],
        [14, 5100, 5370, -1008],
        [49, 5640, 5760, -1008],
        [71, 5760, 5911.5, -1008],
        [9, 1740, 1800, -1032],
        [22, 1800, 2370, -1032],
        [67, 2880, 3012, -1032],
        [35, 1230, 1392, -1056],
        [71, 5911.5, 6420, -1092],
        [24, 6420, 6900, -1092],
        [76, 6900, 7320, -1092],
        [53, 7320, 7680, -1092],
        [35, 1080, 1230, -1104],
        [9, 1620, 1740, -1116],
        [49, 5520, 5640, -1152],
        [63, 0, 840, -1156],
        [35, 960, 1080, -1176],
        [40, 1470, 1536, -1176],
        [9, 1536, 1620, -1176],
        [38, 7680, 7920, -1200],
        [67, 2160, 2880, -1218],
        [84, 2880, 2940, -1218],
        [35, 870, 960, -1224],
        [40, 1380, 1470, -1224],
        [63, 0, 660, -1236],
        [12, 2160, 2220, -1260],
        [84, 2940, 3042, -1272],
        [40, 1260, 1380, -1276],
        [32, 1380, 1440, -1276],
        [63, 0, 570, -1284],
        [35, 780, 870, -1296],
        [64, 1620, 1800, -1296],
        [49, 5418, 5520, -1296],
        [84, 3042, 3180, -1308],
        [12, 2220, 2340, -1320],
        [14, 4260, 4620, -1320],
        [49, 5100, 5418, -1320],
        [56, 5418, 5520, -1320],
        [32, 1440, 1560, -1356],
        [84, 3180, 3960, -1356],
        [14, 3960, 4050, -1356],
        [5, 6300, 6480, -1368],
        [78, 6480, 7320, -1368],
        [38, 7920, 8400, -1368],
        [40, 1152, 1260, -1380],
        [64, 1800, 1980, -1380],
        [12, 2340, 2460, -1392],
        [63, 0, 480, -1404],
        [35, 480, 780, -1404],
        [63, 8400, 8640, -1404],
        [32, 1560, 1650, -1416],
        [56, 5520, 5911.5, -1440],
        [43, 7320, 7680, -1440],
        [64, 1980, 2160, -1464],
        [18, 5460, 5520, -1464],
        [5, 5911.5, 5970, -1464],
        [18, 5370, 5460, -1526],
        [5, 5970, 6030, -1526],
        [64, 2160, 2460, -1536],
        [12, 2460, 3252, -1536],
        [14, 4050, 4260, -1536],
        [27, 4260, 4620, -1536],
        [14, 4620, 5232, -1536],
        [18, 4860, 4920, -1560],
        [5, 6030, 6060, -1560],
        [40, 780, 1152, -1620],
        [69, 1152, 1650, -1620],
        [18, 5310, 5370, -1620],
        [5, 6060, 6300, -1620],
        [60, 6300, 6480, -1620],
        [81, 7920, 8400, -1620],
        [32, 1650, 2370, -1680],
        [18, 4920, 5310, -1680],
        [79, 5310, 6120, -1680],
        [81, 0, 480, -1800],
        [42, 1260, 1650, -1800],
        [86, 2370, 3252, -1800],
        [12, 3252, 4050, -1800],
        [55, 4050, 4920, -1800],
        [60, 6480, 7680, -1800],
        [43, 7680, 8400, -1800],
        [81, 8400, 8640, -1800],
        [81, 270, 480, -1824],
        [42, 0, 1260, -1980],
        [17, 2760, 4920, -1980],
        [2, 4920, 6480, -1980],
        [52, 1260, 2760, -2040],
        [57, 0, 8640, -2160]
        // Oct
      ];
      var ConstelRot;
      var Epoch2000;
      var ConstellationInfo = class {
        constructor(symbol, name, ra1875, dec1875) {
          this.symbol = symbol;
          this.name = name;
          this.ra1875 = ra1875;
          this.dec1875 = dec1875;
        }
      };
      exports.ConstellationInfo = ConstellationInfo;
      function Constellation(ra, dec) {
        VerifyNumber(ra);
        VerifyNumber(dec);
        if (dec < -90 || dec > 90)
          throw "Invalid declination angle. Must be -90..+90.";
        ra %= 24;
        if (ra < 0)
          ra += 24;
        if (!ConstelRot) {
          ConstelRot = Rotation_EQJ_EQD(new AstroTime(-45655.74141261017));
          Epoch2000 = new AstroTime(0);
        }
        const sph2000 = new Spherical(dec, 15 * ra, 1);
        const vec2000 = VectorFromSphere(sph2000, Epoch2000);
        const vec1875 = RotateVector(ConstelRot, vec2000);
        const equ1875 = EquatorFromVector(vec1875);
        const fd = 10 / (4 * 60);
        const fr = fd / 15;
        for (let b of ConstelBounds) {
          const dec2 = b[3] * fd;
          const ra_lo = b[1] * fr;
          const ra_hi = b[2] * fr;
          if (dec2 <= equ1875.dec && ra_lo <= equ1875.ra && equ1875.ra < ra_hi) {
            const c = ConstelNames[b[0]];
            return new ConstellationInfo(c[0], c[1], equ1875.ra, equ1875.dec);
          }
        }
        throw "Unable to find constellation for given coordinates.";
      }
      exports.Constellation = Constellation;
      var EclipseKind;
      (function(EclipseKind2) {
        EclipseKind2["Penumbral"] = "penumbral";
        EclipseKind2["Partial"] = "partial";
        EclipseKind2["Annular"] = "annular";
        EclipseKind2["Total"] = "total";
      })(EclipseKind = exports.EclipseKind || (exports.EclipseKind = {}));
      var LunarEclipseInfo = class {
        constructor(kind, obscuration, peak, sd_penum, sd_partial, sd_total) {
          this.kind = kind;
          this.obscuration = obscuration;
          this.peak = peak;
          this.sd_penum = sd_penum;
          this.sd_partial = sd_partial;
          this.sd_total = sd_total;
        }
      };
      exports.LunarEclipseInfo = LunarEclipseInfo;
      var ShadowInfo = class {
        constructor(time, u, r, k, p, target, dir) {
          this.time = time;
          this.u = u;
          this.r = r;
          this.k = k;
          this.p = p;
          this.target = target;
          this.dir = dir;
        }
      };
      function CalcShadow(body_radius_km, time, target, dir) {
        const u = (dir.x * target.x + dir.y * target.y + dir.z * target.z) / (dir.x * dir.x + dir.y * dir.y + dir.z * dir.z);
        const dx = u * dir.x - target.x;
        const dy = u * dir.y - target.y;
        const dz = u * dir.z - target.z;
        const r = exports.KM_PER_AU * Math.hypot(dx, dy, dz);
        const k = +SUN_RADIUS_KM - (1 + u) * (SUN_RADIUS_KM - body_radius_km);
        const p = -SUN_RADIUS_KM + (1 + u) * (SUN_RADIUS_KM + body_radius_km);
        return new ShadowInfo(time, u, r, k, p, target, dir);
      }
      function EarthShadow(time) {
        const s = GeoVector(Body.Sun, time, true);
        const e = new Vector(-s.x, -s.y, -s.z, s.t);
        const m = GeoMoon(time);
        return CalcShadow(EARTH_ECLIPSE_RADIUS_KM, time, m, e);
      }
      function MoonShadow(time) {
        const s = GeoVector(Body.Sun, time, true);
        const m = GeoMoon(time);
        const e = new Vector(-m.x, -m.y, -m.z, m.t);
        m.x -= s.x;
        m.y -= s.y;
        m.z -= s.z;
        return CalcShadow(MOON_MEAN_RADIUS_KM, time, e, m);
      }
      function LocalMoonShadow(time, observer) {
        const pos = geo_pos(time, observer);
        const s = GeoVector(Body.Sun, time, true);
        const m = GeoMoon(time);
        const o = new Vector(pos[0] - m.x, pos[1] - m.y, pos[2] - m.z, time);
        m.x -= s.x;
        m.y -= s.y;
        m.z -= s.z;
        return CalcShadow(MOON_MEAN_RADIUS_KM, time, o, m);
      }
      function PlanetShadow(body, planet_radius_km, time) {
        const g = GeoVector(body, time, true);
        const e = GeoVector(Body.Sun, time, true);
        const p = new Vector(g.x - e.x, g.y - e.y, g.z - e.z, time);
        e.x = -g.x;
        e.y = -g.y;
        e.z = -g.z;
        return CalcShadow(planet_radius_km, time, e, p);
      }
      function ShadowDistanceSlope(shadowfunc, time) {
        const dt = 1 / 86400;
        const t1 = time.AddDays(-dt);
        const t2 = time.AddDays(+dt);
        const shadow1 = shadowfunc(t1);
        const shadow2 = shadowfunc(t2);
        return (shadow2.r - shadow1.r) / dt;
      }
      function PlanetShadowSlope(body, planet_radius_km, time) {
        const dt = 1 / 86400;
        const shadow1 = PlanetShadow(body, planet_radius_km, time.AddDays(-dt));
        const shadow2 = PlanetShadow(body, planet_radius_km, time.AddDays(+dt));
        return (shadow2.r - shadow1.r) / dt;
      }
      function PeakEarthShadow(search_center_time) {
        const window = 0.03;
        const t1 = search_center_time.AddDays(-window);
        const t2 = search_center_time.AddDays(+window);
        const tx = Search((time) => ShadowDistanceSlope(EarthShadow, time), t1, t2);
        if (!tx)
          throw "Failed to find peak Earth shadow time.";
        return EarthShadow(tx);
      }
      function PeakMoonShadow(search_center_time) {
        const window = 0.03;
        const t1 = search_center_time.AddDays(-window);
        const t2 = search_center_time.AddDays(+window);
        const tx = Search((time) => ShadowDistanceSlope(MoonShadow, time), t1, t2);
        if (!tx)
          throw "Failed to find peak Moon shadow time.";
        return MoonShadow(tx);
      }
      function PeakPlanetShadow(body, planet_radius_km, search_center_time) {
        const window = 1;
        const t1 = search_center_time.AddDays(-window);
        const t2 = search_center_time.AddDays(+window);
        const tx = Search((time) => PlanetShadowSlope(body, planet_radius_km, time), t1, t2);
        if (!tx)
          throw "Failed to find peak planet shadow time.";
        return PlanetShadow(body, planet_radius_km, tx);
      }
      function PeakLocalMoonShadow(search_center_time, observer) {
        const window = 0.2;
        const t1 = search_center_time.AddDays(-window);
        const t2 = search_center_time.AddDays(+window);
        function shadowfunc(time2) {
          return LocalMoonShadow(time2, observer);
        }
        const time = Search((time2) => ShadowDistanceSlope(shadowfunc, time2), t1, t2);
        if (!time)
          throw `PeakLocalMoonShadow: search failure for search_center_time = ${search_center_time}`;
        return LocalMoonShadow(time, observer);
      }
      function ShadowSemiDurationMinutes(center_time, radius_limit, window_minutes) {
        const window = window_minutes / (24 * 60);
        const before = center_time.AddDays(-window);
        const after = center_time.AddDays(+window);
        const t1 = Search((time) => -(EarthShadow(time).r - radius_limit), before, center_time);
        const t2 = Search((time) => +(EarthShadow(time).r - radius_limit), center_time, after);
        if (!t1 || !t2)
          throw "Failed to find shadow semiduration";
        return (t2.ut - t1.ut) * (24 * 60 / 2);
      }
      function MoonEclipticLatitudeDegrees(time) {
        const moon = CalcMoon(time);
        return exports.RAD2DEG * moon.geo_eclip_lat;
      }
      function Obscuration(a, b, c) {
        if (a <= 0)
          throw "Radius of first disc must be positive.";
        if (b <= 0)
          throw "Radius of second disc must be positive.";
        if (c < 0)
          throw "Distance between discs is not allowed to be negative.";
        if (c >= a + b) {
          return 0;
        }
        if (c == 0) {
          return a <= b ? 1 : b * b / (a * a);
        }
        const x = (a * a - b * b + c * c) / (2 * c);
        const radicand = a * a - x * x;
        if (radicand <= 0) {
          return a <= b ? 1 : b * b / (a * a);
        }
        const y = Math.sqrt(radicand);
        const lens1 = a * a * Math.acos(x / a) - x * y;
        const lens2 = b * b * Math.acos((c - x) / b) - (c - x) * y;
        return (lens1 + lens2) / (Math.PI * a * a);
      }
      function SolarEclipseObscuration(hm, lo) {
        const ho = new Vector(hm.x + lo.x, hm.y + lo.y, hm.z + lo.z, hm.t);
        const sun_radius = Math.asin(SUN_RADIUS_AU / ho.Length());
        const moon_radius = Math.asin(MOON_POLAR_RADIUS_AU / lo.Length());
        const sun_moon_separation = AngleBetween(lo, ho);
        const obscuration = Obscuration(sun_radius, moon_radius, sun_moon_separation * exports.DEG2RAD);
        return Math.min(0.9999, obscuration);
      }
      function SearchLunarEclipse(date) {
        const PruneLatitude = 1.8;
        let fmtime = MakeTime(date);
        for (let fmcount = 0; fmcount < 12; ++fmcount) {
          const fullmoon = SearchMoonPhase(180, fmtime, 40);
          if (!fullmoon)
            throw "Cannot find full moon.";
          const eclip_lat = MoonEclipticLatitudeDegrees(fullmoon);
          if (Math.abs(eclip_lat) < PruneLatitude) {
            const shadow = PeakEarthShadow(fullmoon);
            if (shadow.r < shadow.p + MOON_MEAN_RADIUS_KM) {
              let kind = EclipseKind.Penumbral;
              let obscuration = 0;
              let sd_total = 0;
              let sd_partial = 0;
              let sd_penum = ShadowSemiDurationMinutes(shadow.time, shadow.p + MOON_MEAN_RADIUS_KM, 200);
              if (shadow.r < shadow.k + MOON_MEAN_RADIUS_KM) {
                kind = EclipseKind.Partial;
                sd_partial = ShadowSemiDurationMinutes(shadow.time, shadow.k + MOON_MEAN_RADIUS_KM, sd_penum);
                if (shadow.r + MOON_MEAN_RADIUS_KM < shadow.k) {
                  kind = EclipseKind.Total;
                  obscuration = 1;
                  sd_total = ShadowSemiDurationMinutes(shadow.time, shadow.k - MOON_MEAN_RADIUS_KM, sd_partial);
                } else {
                  obscuration = Obscuration(MOON_MEAN_RADIUS_KM, shadow.k, shadow.r);
                }
              }
              return new LunarEclipseInfo(kind, obscuration, shadow.time, sd_penum, sd_partial, sd_total);
            }
          }
          fmtime = fullmoon.AddDays(10);
        }
        throw "Failed to find lunar eclipse within 12 full moons.";
      }
      exports.SearchLunarEclipse = SearchLunarEclipse;
      var GlobalSolarEclipseInfo = class {
        constructor(kind, obscuration, peak, distance, latitude, longitude) {
          this.kind = kind;
          this.obscuration = obscuration;
          this.peak = peak;
          this.distance = distance;
          this.latitude = latitude;
          this.longitude = longitude;
        }
      };
      exports.GlobalSolarEclipseInfo = GlobalSolarEclipseInfo;
      function EclipseKindFromUmbra(k) {
        return k > 0.014 ? EclipseKind.Total : EclipseKind.Annular;
      }
      function GeoidIntersect(shadow) {
        let kind = EclipseKind.Partial;
        let peak = shadow.time;
        let distance = shadow.r;
        let latitude;
        let longitude;
        const rot = Rotation_EQJ_EQD(shadow.time);
        const v = RotateVector(rot, shadow.dir);
        const e = RotateVector(rot, shadow.target);
        v.x *= exports.KM_PER_AU;
        v.y *= exports.KM_PER_AU;
        v.z *= exports.KM_PER_AU / EARTH_FLATTENING;
        e.x *= exports.KM_PER_AU;
        e.y *= exports.KM_PER_AU;
        e.z *= exports.KM_PER_AU / EARTH_FLATTENING;
        const R = EARTH_EQUATORIAL_RADIUS_KM;
        const A = v.x * v.x + v.y * v.y + v.z * v.z;
        const B = -2 * (v.x * e.x + v.y * e.y + v.z * e.z);
        const C = e.x * e.x + e.y * e.y + e.z * e.z - R * R;
        const radic = B * B - 4 * A * C;
        let obscuration;
        if (radic > 0) {
          const u = (-B - Math.sqrt(radic)) / (2 * A);
          const px = u * v.x - e.x;
          const py = u * v.y - e.y;
          const pz = (u * v.z - e.z) * EARTH_FLATTENING;
          const proj = Math.hypot(px, py) * EARTH_FLATTENING_SQUARED;
          if (proj == 0)
            latitude = pz > 0 ? 90 : -90;
          else
            latitude = exports.RAD2DEG * Math.atan(pz / proj);
          const gast = sidereal_time(peak);
          longitude = (exports.RAD2DEG * Math.atan2(py, px) - 15 * gast) % 360;
          if (longitude <= -180)
            longitude += 360;
          else if (longitude > 180)
            longitude -= 360;
          const inv = InverseRotation(rot);
          let o = new Vector(px / exports.KM_PER_AU, py / exports.KM_PER_AU, pz / exports.KM_PER_AU, shadow.time);
          o = RotateVector(inv, o);
          o.x += shadow.target.x;
          o.y += shadow.target.y;
          o.z += shadow.target.z;
          const surface = CalcShadow(MOON_POLAR_RADIUS_KM, shadow.time, o, shadow.dir);
          if (surface.r > 1e-9 || surface.r < 0)
            throw `Unexpected shadow distance from geoid intersection = ${surface.r}`;
          kind = EclipseKindFromUmbra(surface.k);
          obscuration = kind === EclipseKind.Total ? 1 : SolarEclipseObscuration(shadow.dir, o);
        } else {
          obscuration = void 0;
        }
        return new GlobalSolarEclipseInfo(kind, obscuration, peak, distance, latitude, longitude);
      }
      function NextLunarEclipse(prevEclipseTime) {
        prevEclipseTime = MakeTime(prevEclipseTime);
        const startTime = prevEclipseTime.AddDays(10);
        return SearchLunarEclipse(startTime);
      }
      exports.NextLunarEclipse = NextLunarEclipse;
      function SearchGlobalSolarEclipse(startTime) {
        startTime = MakeTime(startTime);
        const PruneLatitude = 1.8;
        let nmtime = startTime;
        let nmcount;
        for (nmcount = 0; nmcount < 12; ++nmcount) {
          const newmoon = SearchMoonPhase(0, nmtime, 40);
          if (!newmoon)
            throw "Cannot find new moon";
          const eclip_lat = MoonEclipticLatitudeDegrees(newmoon);
          if (Math.abs(eclip_lat) < PruneLatitude) {
            const shadow = PeakMoonShadow(newmoon);
            if (shadow.r < shadow.p + EARTH_MEAN_RADIUS_KM) {
              return GeoidIntersect(shadow);
            }
          }
          nmtime = newmoon.AddDays(10);
        }
        throw "Failed to find solar eclipse within 12 full moons.";
      }
      exports.SearchGlobalSolarEclipse = SearchGlobalSolarEclipse;
      function NextGlobalSolarEclipse(prevEclipseTime) {
        prevEclipseTime = MakeTime(prevEclipseTime);
        const startTime = prevEclipseTime.AddDays(10);
        return SearchGlobalSolarEclipse(startTime);
      }
      exports.NextGlobalSolarEclipse = NextGlobalSolarEclipse;
      var EclipseEvent = class {
        constructor(time, altitude) {
          this.time = time;
          this.altitude = altitude;
        }
      };
      exports.EclipseEvent = EclipseEvent;
      var LocalSolarEclipseInfo = class {
        constructor(kind, obscuration, partial_begin, total_begin, peak, total_end, partial_end) {
          this.kind = kind;
          this.obscuration = obscuration;
          this.partial_begin = partial_begin;
          this.total_begin = total_begin;
          this.peak = peak;
          this.total_end = total_end;
          this.partial_end = partial_end;
        }
      };
      exports.LocalSolarEclipseInfo = LocalSolarEclipseInfo;
      function local_partial_distance(shadow) {
        return shadow.p - shadow.r;
      }
      function local_total_distance(shadow) {
        return Math.abs(shadow.k) - shadow.r;
      }
      function LocalEclipse(shadow, observer) {
        const PARTIAL_WINDOW = 0.2;
        const TOTAL_WINDOW = 0.01;
        const peak = CalcEvent(observer, shadow.time);
        let t1 = shadow.time.AddDays(-PARTIAL_WINDOW);
        let t2 = shadow.time.AddDays(+PARTIAL_WINDOW);
        const partial_begin = LocalEclipseTransition(observer, 1, local_partial_distance, t1, shadow.time);
        const partial_end = LocalEclipseTransition(observer, -1, local_partial_distance, shadow.time, t2);
        let total_begin;
        let total_end;
        let kind;
        if (shadow.r < Math.abs(shadow.k)) {
          t1 = shadow.time.AddDays(-TOTAL_WINDOW);
          t2 = shadow.time.AddDays(+TOTAL_WINDOW);
          total_begin = LocalEclipseTransition(observer, 1, local_total_distance, t1, shadow.time);
          total_end = LocalEclipseTransition(observer, -1, local_total_distance, shadow.time, t2);
          kind = EclipseKindFromUmbra(shadow.k);
        } else {
          kind = EclipseKind.Partial;
        }
        const obscuration = kind === EclipseKind.Total ? 1 : SolarEclipseObscuration(shadow.dir, shadow.target);
        return new LocalSolarEclipseInfo(kind, obscuration, partial_begin, total_begin, peak, total_end, partial_end);
      }
      function LocalEclipseTransition(observer, direction, func, t1, t2) {
        function evaluate(time) {
          const shadow = LocalMoonShadow(time, observer);
          return direction * func(shadow);
        }
        const search = Search(evaluate, t1, t2);
        if (!search)
          throw "Local eclipse transition search failed.";
        return CalcEvent(observer, search);
      }
      function CalcEvent(observer, time) {
        const altitude = SunAltitude(time, observer);
        return new EclipseEvent(time, altitude);
      }
      function SunAltitude(time, observer) {
        const equ = Equator(Body.Sun, time, observer, true, true);
        const hor = Horizon(time, observer, equ.ra, equ.dec, "normal");
        return hor.altitude;
      }
      function SearchLocalSolarEclipse(startTime, observer) {
        startTime = MakeTime(startTime);
        VerifyObserver(observer);
        const PruneLatitude = 1.8;
        let nmtime = startTime;
        for (; ; ) {
          const newmoon = SearchMoonPhase(0, nmtime, 40);
          if (!newmoon)
            throw "Cannot find next new moon";
          const eclip_lat = MoonEclipticLatitudeDegrees(newmoon);
          if (Math.abs(eclip_lat) < PruneLatitude) {
            const shadow = PeakLocalMoonShadow(newmoon, observer);
            if (shadow.r < shadow.p) {
              const eclipse = LocalEclipse(shadow, observer);
              if (eclipse.partial_begin.altitude > 0 || eclipse.partial_end.altitude > 0)
                return eclipse;
            }
          }
          nmtime = newmoon.AddDays(10);
        }
      }
      exports.SearchLocalSolarEclipse = SearchLocalSolarEclipse;
      function NextLocalSolarEclipse(prevEclipseTime, observer) {
        prevEclipseTime = MakeTime(prevEclipseTime);
        const startTime = prevEclipseTime.AddDays(10);
        return SearchLocalSolarEclipse(startTime, observer);
      }
      exports.NextLocalSolarEclipse = NextLocalSolarEclipse;
      var TransitInfo = class {
        constructor(start, peak, finish, separation) {
          this.start = start;
          this.peak = peak;
          this.finish = finish;
          this.separation = separation;
        }
      };
      exports.TransitInfo = TransitInfo;
      function PlanetShadowBoundary(time, body, planet_radius_km, direction) {
        const shadow = PlanetShadow(body, planet_radius_km, time);
        return direction * (shadow.r - shadow.p);
      }
      function PlanetTransitBoundary(body, planet_radius_km, t1, t2, direction) {
        const tx = Search((time) => PlanetShadowBoundary(time, body, planet_radius_km, direction), t1, t2);
        if (!tx)
          throw "Planet transit boundary search failed";
        return tx;
      }
      function SearchTransit(body, startTime) {
        startTime = MakeTime(startTime);
        const threshold_angle = 0.4;
        const dt_days = 1;
        let planet_radius_km;
        switch (body) {
          case Body.Mercury:
            planet_radius_km = 2439.7;
            break;
          case Body.Venus:
            planet_radius_km = 6051.8;
            break;
          default:
            throw `Invalid body: ${body}`;
        }
        let search_time = startTime;
        for (; ; ) {
          const conj = SearchRelativeLongitude(body, 0, search_time);
          const conj_separation = AngleFromSun(body, conj);
          if (conj_separation < threshold_angle) {
            const shadow = PeakPlanetShadow(body, planet_radius_km, conj);
            if (shadow.r < shadow.p) {
              const time_before = shadow.time.AddDays(-dt_days);
              const start = PlanetTransitBoundary(body, planet_radius_km, time_before, shadow.time, -1);
              const time_after = shadow.time.AddDays(+dt_days);
              const finish = PlanetTransitBoundary(body, planet_radius_km, shadow.time, time_after, 1);
              const min_separation = 60 * AngleFromSun(body, shadow.time);
              return new TransitInfo(start, shadow.time, finish, min_separation);
            }
          }
          search_time = conj.AddDays(10);
        }
      }
      exports.SearchTransit = SearchTransit;
      function NextTransit(body, prevTransitTime) {
        prevTransitTime = MakeTime(prevTransitTime);
        const startTime = prevTransitTime.AddDays(100);
        return SearchTransit(body, startTime);
      }
      exports.NextTransit = NextTransit;
      var NodeEventKind;
      (function(NodeEventKind2) {
        NodeEventKind2[NodeEventKind2["Invalid"] = 0] = "Invalid";
        NodeEventKind2[NodeEventKind2["Ascending"] = 1] = "Ascending";
        NodeEventKind2[NodeEventKind2["Descending"] = -1] = "Descending";
      })(NodeEventKind = exports.NodeEventKind || (exports.NodeEventKind = {}));
      var NodeEventInfo = class {
        constructor(kind, time) {
          this.kind = kind;
          this.time = time;
        }
      };
      exports.NodeEventInfo = NodeEventInfo;
      var MoonNodeStepDays = 10;
      function SearchMoonNode(startTime) {
        let time1 = MakeTime(startTime);
        let eclip1 = EclipticGeoMoon(time1);
        for (; ; ) {
          const time2 = time1.AddDays(MoonNodeStepDays);
          const eclip2 = EclipticGeoMoon(time2);
          if (eclip1.lat * eclip2.lat <= 0) {
            const kind = eclip2.lat > eclip1.lat ? NodeEventKind.Ascending : NodeEventKind.Descending;
            const result = Search((t) => kind * EclipticGeoMoon(t).lat, time1, time2);
            if (!result)
              throw `Could not find moon node.`;
            return new NodeEventInfo(kind, result);
          }
          time1 = time2;
          eclip1 = eclip2;
        }
      }
      exports.SearchMoonNode = SearchMoonNode;
      function NextMoonNode(prevNode) {
        const time = prevNode.time.AddDays(MoonNodeStepDays);
        const node = SearchMoonNode(time);
        switch (prevNode.kind) {
          case NodeEventKind.Ascending:
            if (node.kind !== NodeEventKind.Descending)
              throw `Internal error: previous node was ascending, but this node was: ${node.kind}`;
            break;
          case NodeEventKind.Descending:
            if (node.kind !== NodeEventKind.Ascending)
              throw `Internal error: previous node was descending, but this node was: ${node.kind}`;
            break;
          default:
            throw `Previous node has an invalid node kind: ${prevNode.kind}`;
        }
        return node;
      }
      exports.NextMoonNode = NextMoonNode;
      var AxisInfo = class {
        constructor(ra, dec, spin2, north) {
          this.ra = ra;
          this.dec = dec;
          this.spin = spin2;
          this.north = north;
        }
      };
      exports.AxisInfo = AxisInfo;
      function EarthRotationAxis(time) {
        const pos2 = nutation([0, 0, 1], time, PrecessDirection.Into2000);
        const nvec = precession(pos2, time, PrecessDirection.Into2000);
        const north = new Vector(nvec[0], nvec[1], nvec[2], time);
        const equ = EquatorFromVector(north);
        const spin2 = 190.41375788700253 + 360.9856122880876 * time.ut;
        return new AxisInfo(equ.ra, equ.dec, spin2, north);
      }
      function RotationAxis(body, date) {
        const time = MakeTime(date);
        const d = time.tt;
        const T = d / 36525;
        let ra, dec, w;
        switch (body) {
          case Body.Sun:
            ra = 286.13;
            dec = 63.87;
            w = 84.176 + 14.1844 * d;
            break;
          case Body.Mercury:
            ra = 281.0103 - 0.0328 * T;
            dec = 61.4155 - 49e-4 * T;
            w = 329.5988 + 6.1385108 * d + 0.01067257 * Math.sin(exports.DEG2RAD * (174.7910857 + 4.092335 * d)) - 112309e-8 * Math.sin(exports.DEG2RAD * (349.5821714 + 8.18467 * d)) - 1104e-7 * Math.sin(exports.DEG2RAD * (164.3732571 + 12.277005 * d)) - 2539e-8 * Math.sin(exports.DEG2RAD * (339.1643429 + 16.36934 * d)) - 571e-8 * Math.sin(exports.DEG2RAD * (153.9554286 + 20.461675 * d));
            break;
          case Body.Venus:
            ra = 272.76;
            dec = 67.16;
            w = 160.2 - 1.4813688 * d;
            break;
          case Body.Earth:
            return EarthRotationAxis(time);
          case Body.Moon:
            const E1 = exports.DEG2RAD * (125.045 - 0.0529921 * d);
            const E2 = exports.DEG2RAD * (250.089 - 0.1059842 * d);
            const E3 = exports.DEG2RAD * (260.008 + 13.0120009 * d);
            const E4 = exports.DEG2RAD * (176.625 + 13.3407154 * d);
            const E5 = exports.DEG2RAD * (357.529 + 0.9856003 * d);
            const E6 = exports.DEG2RAD * (311.589 + 26.4057084 * d);
            const E7 = exports.DEG2RAD * (134.963 + 13.064993 * d);
            const E8 = exports.DEG2RAD * (276.617 + 0.3287146 * d);
            const E9 = exports.DEG2RAD * (34.226 + 1.7484877 * d);
            const E10 = exports.DEG2RAD * (15.134 - 0.1589763 * d);
            const E11 = exports.DEG2RAD * (119.743 + 36096e-7 * d);
            const E12 = exports.DEG2RAD * (239.961 + 0.1643573 * d);
            const E13 = exports.DEG2RAD * (25.053 + 12.9590088 * d);
            ra = 269.9949 + 31e-4 * T - 3.8787 * Math.sin(E1) - 0.1204 * Math.sin(E2) + 0.07 * Math.sin(E3) - 0.0172 * Math.sin(E4) + 72e-4 * Math.sin(E6) - 52e-4 * Math.sin(E10) + 43e-4 * Math.sin(E13);
            dec = 66.5392 + 0.013 * T + 1.5419 * Math.cos(E1) + 0.0239 * Math.cos(E2) - 0.0278 * Math.cos(E3) + 68e-4 * Math.cos(E4) - 29e-4 * Math.cos(E6) + 9e-4 * Math.cos(E7) + 8e-4 * Math.cos(E10) - 9e-4 * Math.cos(E13);
            w = 38.3213 + (13.17635815 - 14e-13 * d) * d + 3.561 * Math.sin(E1) + 0.1208 * Math.sin(E2) - 0.0642 * Math.sin(E3) + 0.0158 * Math.sin(E4) + 0.0252 * Math.sin(E5) - 66e-4 * Math.sin(E6) - 47e-4 * Math.sin(E7) - 46e-4 * Math.sin(E8) + 28e-4 * Math.sin(E9) + 52e-4 * Math.sin(E10) + 4e-3 * Math.sin(E11) + 19e-4 * Math.sin(E12) - 44e-4 * Math.sin(E13);
            break;
          case Body.Mars:
            ra = 317.269202 - 0.10927547 * T + 68e-6 * Math.sin(exports.DEG2RAD * (198.991226 + 19139.4819985 * T)) + 238e-6 * Math.sin(exports.DEG2RAD * (226.292679 + 38280.8511281 * T)) + 52e-6 * Math.sin(exports.DEG2RAD * (249.663391 + 57420.7251593 * T)) + 9e-6 * Math.sin(exports.DEG2RAD * (266.18351 + 76560.636795 * T)) + 0.419057 * Math.sin(exports.DEG2RAD * (79.398797 + 0.5042615 * T));
            dec = 54.432516 - 0.05827105 * T + 51e-6 * Math.cos(exports.DEG2RAD * (122.433576 + 19139.9407476 * T)) + 141e-6 * Math.cos(exports.DEG2RAD * (43.058401 + 38280.8753272 * T)) + 31e-6 * Math.cos(exports.DEG2RAD * (57.663379 + 57420.7517205 * T)) + 5e-6 * Math.cos(exports.DEG2RAD * (79.476401 + 76560.6495004 * T)) + 1.591274 * Math.cos(exports.DEG2RAD * (166.325722 + 0.5042615 * T));
            w = 176.049863 + 350.891982443297 * d + 145e-6 * Math.sin(exports.DEG2RAD * (129.071773 + 19140.0328244 * T)) + 157e-6 * Math.sin(exports.DEG2RAD * (36.352167 + 38281.0473591 * T)) + 4e-5 * Math.sin(exports.DEG2RAD * (56.668646 + 57420.929536 * T)) + 1e-6 * Math.sin(exports.DEG2RAD * (67.364003 + 76560.2552215 * T)) + 1e-6 * Math.sin(exports.DEG2RAD * (104.79268 + 95700.4387578 * T)) + 0.584542 * Math.sin(exports.DEG2RAD * (95.391654 + 0.5042615 * T));
            break;
          case Body.Jupiter:
            const Ja = exports.DEG2RAD * (99.360714 + 4850.4046 * T);
            const Jb = exports.DEG2RAD * (175.895369 + 1191.9605 * T);
            const Jc = exports.DEG2RAD * (300.323162 + 262.5475 * T);
            const Jd = exports.DEG2RAD * (114.012305 + 6070.2476 * T);
            const Je = exports.DEG2RAD * (49.511251 + 64.3 * T);
            ra = 268.056595 - 6499e-6 * T + 117e-6 * Math.sin(Ja) + 938e-6 * Math.sin(Jb) + 1432e-6 * Math.sin(Jc) + 3e-5 * Math.sin(Jd) + 215e-5 * Math.sin(Je);
            dec = 64.495303 + 2413e-6 * T + 5e-5 * Math.cos(Ja) + 404e-6 * Math.cos(Jb) + 617e-6 * Math.cos(Jc) - 13e-6 * Math.cos(Jd) + 926e-6 * Math.cos(Je);
            w = 284.95 + 870.536 * d;
            break;
          case Body.Saturn:
            ra = 40.589 - 0.036 * T;
            dec = 83.537 - 4e-3 * T;
            w = 38.9 + 810.7939024 * d;
            break;
          case Body.Uranus:
            ra = 257.311;
            dec = -15.175;
            w = 203.81 - 501.1600928 * d;
            break;
          case Body.Neptune:
            const N = exports.DEG2RAD * (357.85 + 52.316 * T);
            ra = 299.36 + 0.7 * Math.sin(N);
            dec = 43.46 - 0.51 * Math.cos(N);
            w = 249.978 + 541.1397757 * d - 0.48 * Math.sin(N);
            break;
          case Body.Pluto:
            ra = 132.993;
            dec = -6.163;
            w = 302.695 + 56.3625225 * d;
            break;
          default:
            throw `Invalid body: ${body}`;
        }
        const radlat = dec * exports.DEG2RAD;
        const radlon = ra * exports.DEG2RAD;
        const rcoslat = Math.cos(radlat);
        const north = new Vector(rcoslat * Math.cos(radlon), rcoslat * Math.sin(radlon), Math.sin(radlat), time);
        return new AxisInfo(ra / 15, dec, w, north);
      }
      exports.RotationAxis = RotationAxis;
      function LagrangePoint(point, date, major_body, minor_body) {
        const time = MakeTime(date);
        const major_mass = MassProduct(major_body);
        const minor_mass = MassProduct(minor_body);
        let major_state;
        let minor_state;
        if (major_body === Body.Earth && minor_body === Body.Moon) {
          major_state = new StateVector(0, 0, 0, 0, 0, 0, time);
          minor_state = GeoMoonState(time);
        } else {
          major_state = HelioState(major_body, time);
          minor_state = HelioState(minor_body, time);
        }
        return LagrangePointFast(point, major_state, major_mass, minor_state, minor_mass);
      }
      exports.LagrangePoint = LagrangePoint;
      function LagrangePointFast(point, major_state, major_mass, minor_state, minor_mass) {
        const cos_60 = 0.5;
        const sin_60 = 0.8660254037844386;
        if (point < 1 || point > 5)
          throw `Invalid lagrange point ${point}`;
        if (!Number.isFinite(major_mass) || major_mass <= 0)
          throw "Major mass must be a positive number.";
        if (!Number.isFinite(minor_mass) || minor_mass <= 0)
          throw "Minor mass must be a negative number.";
        let dx = minor_state.x - major_state.x;
        let dy = minor_state.y - major_state.y;
        let dz = minor_state.z - major_state.z;
        const R2 = dx * dx + dy * dy + dz * dz;
        const R = Math.sqrt(R2);
        const vx = minor_state.vx - major_state.vx;
        const vy = minor_state.vy - major_state.vy;
        const vz = minor_state.vz - major_state.vz;
        let p;
        if (point === 4 || point === 5) {
          const nx = dy * vz - dz * vy;
          const ny = dz * vx - dx * vz;
          const nz = dx * vy - dy * vx;
          let ux = ny * dz - nz * dy;
          let uy = nz * dx - nx * dz;
          let uz = nx * dy - ny * dx;
          const U = Math.sqrt(ux * ux + uy * uy + uz * uz);
          ux /= U;
          uy /= U;
          uz /= U;
          dx /= R;
          dy /= R;
          dz /= R;
          const vert = point == 4 ? +sin_60 : -sin_60;
          const Dx = cos_60 * dx + vert * ux;
          const Dy = cos_60 * dy + vert * uy;
          const Dz = cos_60 * dz + vert * uz;
          const Ux = cos_60 * ux - vert * dx;
          const Uy = cos_60 * uy - vert * dy;
          const Uz = cos_60 * uz - vert * dz;
          const px = R * Dx;
          const py = R * Dy;
          const pz = R * Dz;
          const vrad = vx * dx + vy * dy + vz * dz;
          const vtan = vx * ux + vy * uy + vz * uz;
          const pvx = vrad * Dx + vtan * Ux;
          const pvy = vrad * Dy + vtan * Uy;
          const pvz = vrad * Dz + vtan * Uz;
          p = new StateVector(px, py, pz, pvx, pvy, pvz, major_state.t);
        } else {
          const r1 = -R * (minor_mass / (major_mass + minor_mass));
          const r2 = +R * (major_mass / (major_mass + minor_mass));
          const omega2 = (major_mass + minor_mass) / (R2 * R);
          let scale, numer1, numer2;
          if (point === 1 || point === 2) {
            scale = major_mass / (major_mass + minor_mass) * Math.cbrt(minor_mass / (3 * major_mass));
            numer1 = -major_mass;
            if (point == 1) {
              scale = 1 - scale;
              numer2 = +minor_mass;
            } else {
              scale = 1 + scale;
              numer2 = -minor_mass;
            }
          } else if (point === 3) {
            scale = (7 / 12 * minor_mass - major_mass) / (minor_mass + major_mass);
            numer1 = +major_mass;
            numer2 = +minor_mass;
          } else {
            throw `Invalid Langrage point ${point}. Must be an integer 1..5.`;
          }
          let x = R * scale - r1;
          let deltax;
          do {
            const dr1 = x - r1;
            const dr2 = x - r2;
            const accel = omega2 * x + numer1 / (dr1 * dr1) + numer2 / (dr2 * dr2);
            const deriv = omega2 - 2 * numer1 / (dr1 * dr1 * dr1) - 2 * numer2 / (dr2 * dr2 * dr2);
            deltax = accel / deriv;
            x -= deltax;
          } while (Math.abs(deltax / R) > 1e-14);
          scale = (x - r1) / R;
          p = new StateVector(scale * dx, scale * dy, scale * dz, scale * vx, scale * vy, scale * vz, major_state.t);
        }
        return p;
      }
      exports.LagrangePointFast = LagrangePointFast;
      var GravitySimulator = class _GravitySimulator {
        /**
         * @brief Creates a gravity simulation object.
         *
         * @param {Body} originBody
         *      Specifies the origin of the reference frame.
         *      All position vectors and velocity vectors will use `originBody`
         *      as the origin of the coordinate system.
         *      This origin applies to all the input vectors provided in the
         *      `bodyStates` parameter of this function, along with all
         *      output vectors returned by {@link GravitySimulator#Update}.
         *      Most callers will want to provide one of the following:
         *      `Body.Sun` for heliocentric coordinates,
         *      `Body.SSB` for solar system barycentric coordinates,
         *      or `Body.Earth` for geocentric coordinates. Note that the
         *      gravity simulator does not correct for light travel time;
         *      all state vectors are tied to a Newtonian "instantaneous" time.
         *
         * @param {FlexibleDateTime} date
         *      The initial time at which to start the simulation.
         *
         * @param {StateVector[]} bodyStates
         *      An array of zero or more initial state vectors (positions and velocities)
         *      of the small bodies to be simulated.
         *      The caller must know the positions and velocities of the small bodies at an initial moment in time.
         *      Their positions and velocities are expressed with respect to `originBody`, using equatorial
         *      J2000 orientation (EQJ).
         *      Positions are expressed in astronomical units (AU).
         *      Velocities are expressed in AU/day.
         *      All the times embedded within the state vectors must exactly match `date`,
         *      or this constructor will throw an exception.
         */
        constructor(originBody, date, bodyStates) {
          const time = MakeTime(date);
          this.originBody = originBody;
          for (let b of bodyStates) {
            if (b.t.tt !== time.tt) {
              throw "Inconsistent times in bodyStates";
            }
          }
          const smallBodyList = [];
          const largeBodyDict = _GravitySimulator.CalcSolarSystem(time);
          this.curr = new GravSimEndpoint(time, largeBodyDict, smallBodyList);
          const o = this.InternalBodyState(originBody);
          for (let b of bodyStates) {
            const r = new TerseVector(b.x + o.r.x, b.y + o.r.y, b.z + o.r.z);
            const v = new TerseVector(b.vx + o.v.x, b.vy + o.v.y, b.vz + o.v.z);
            const a = TerseVector.zero();
            smallBodyList.push(new body_grav_calc_t(time.tt, r, v, a));
          }
          this.CalcBodyAccelerations();
          this.prev = this.Duplicate();
        }
        /**
         * @brief The body that was selected as the coordinate origin when this simulator was created.
         */
        get OriginBody() {
          return this.originBody;
        }
        /**
         * @brief The time represented by the current step of the gravity simulation.
         */
        get Time() {
          return this.curr.time;
        }
        /**
         * Advances the gravity simulation by a small time step.
         *
         * Updates the simulation of the user-supplied small bodies
         * to the time indicated by the `date` parameter.
         * Returns an array of state vectors for the simulated bodies.
         * The array is in the same order as the original array that
         * was used to construct this simulator object.
         * The positions and velocities in the returned array are
         * referenced to the `originBody` that was used to construct
         * this simulator.
         *
         * @param {FlexibleDateTime} date
         *      A time that is a small increment away from the current simulation time.
         *      It is up to the developer to figure out an appropriate time increment.
         *      Depending on the trajectories, a smaller or larger increment
         *      may be needed for the desired accuracy. Some experimentation may be needed.
         *      Generally, bodies that stay in the outer Solar System and move slowly can
         *      use larger time steps. Bodies that pass into the inner Solar System and
         *      move faster will need a smaller time step to maintain accuracy.
         *      The `date` value may be after or before the current simulation time
         *      to move forward or backward in time.
         *
         * @return {StateVector[]}
         *      An array of state vectors, one for each simulated small body.
         */
        Update(date) {
          const time = MakeTime(date);
          const dt = time.tt - this.curr.time.tt;
          if (dt === 0) {
            this.prev = this.Duplicate();
          } else {
            this.Swap();
            this.curr.time = time;
            this.curr.gravitators = _GravitySimulator.CalcSolarSystem(time);
            for (let i = 0; i < this.curr.bodies.length; ++i) {
              const p = this.prev.bodies[i];
              this.curr.bodies[i].r = UpdatePosition(dt, p.r, p.v, p.a);
            }
            this.CalcBodyAccelerations();
            for (let i = 0; i < this.curr.bodies.length; ++i) {
              const p = this.prev.bodies[i];
              const c = this.curr.bodies[i];
              const acc = p.a.mean(c.a);
              c.tt = time.tt;
              c.r = UpdatePosition(dt, p.r, p.v, acc);
              c.v = UpdateVelocity(dt, p.v, acc);
            }
            this.CalcBodyAccelerations();
          }
          const bodyStates = [];
          const ostate = this.InternalBodyState(this.originBody);
          for (let bcalc of this.curr.bodies) {
            bodyStates.push(new StateVector(bcalc.r.x - ostate.r.x, bcalc.r.y - ostate.r.y, bcalc.r.z - ostate.r.z, bcalc.v.x - ostate.v.x, bcalc.v.y - ostate.v.y, bcalc.v.z - ostate.v.z, time));
          }
          return bodyStates;
        }
        /**
         * Exchange the current time step with the previous time step.
         *
         * Sometimes it is helpful to "explore" various times near a given
         * simulation time step, while repeatedly returning to the original
         * time step. For example, when backdating a position for light travel
         * time, the caller may wish to repeatedly try different amounts of
         * backdating. When the backdating solver has converged, the caller
         * wants to leave the simulation in its original state.
         *
         * This function allows a single "undo" of a simulation, and does so
         * very efficiently.
         *
         * Usually this function will be called immediately after a matching
         * call to {@link GravitySimulator#Update}. It has the effect of rolling
         * back the most recent update. If called twice in a row, it reverts
         * the swap and thus has no net effect.
         *
         * The constructor initializes the current state and previous
         * state to be identical. Both states represent the `time` parameter that was
         * passed into the constructor. Therefore, `Swap` will
         * have no effect from the caller's point of view when passed a simulator
         * that has not yet been updated by a call to {@link GravitySimulator#Update}.
         */
        Swap() {
          const swap = this.curr;
          this.curr = this.prev;
          this.prev = swap;
        }
        /**
         * Get the position and velocity of a Solar System body included in the simulation.
         *
         * In order to simulate the movement of small bodies through the Solar System,
         * the simulator needs to calculate the state vectors for the Sun and planets.
         *
         * If an application wants to know the positions of one or more of the planets
         * in addition to the small bodies, this function provides a way to obtain
         * their state vectors. This is provided for the sake of efficiency, to avoid
         * redundant calculations.
         *
         * The state vector is returned relative to the position and velocity
         * of the `originBody` parameter that was passed to this object's constructor.
         *
         * @param {Body} body
         *      The Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, or Neptune.
         */
        SolarSystemBodyState(body) {
          const bstate = this.InternalBodyState(body);
          const ostate = this.InternalBodyState(this.originBody);
          return ExportState(bstate.sub(ostate), this.curr.time);
        }
        InternalBodyState(body) {
          if (body === Body.SSB)
            return new body_state_t(this.curr.time.tt, TerseVector.zero(), TerseVector.zero());
          const bstate = this.curr.gravitators[body];
          if (bstate)
            return bstate;
          throw `Invalid body: ${body}`;
        }
        static CalcSolarSystem(time) {
          const dict = {};
          const ssb = new body_state_t(time.tt, TerseVector.zero(), TerseVector.zero());
          dict[Body.Mercury] = AdjustBarycenterPosVel(ssb, time.tt, Body.Mercury, MERCURY_GM);
          dict[Body.Venus] = AdjustBarycenterPosVel(ssb, time.tt, Body.Venus, VENUS_GM);
          dict[Body.Earth] = AdjustBarycenterPosVel(ssb, time.tt, Body.Earth, EARTH_GM + MOON_GM);
          dict[Body.Mars] = AdjustBarycenterPosVel(ssb, time.tt, Body.Mars, MARS_GM);
          dict[Body.Jupiter] = AdjustBarycenterPosVel(ssb, time.tt, Body.Jupiter, JUPITER_GM);
          dict[Body.Saturn] = AdjustBarycenterPosVel(ssb, time.tt, Body.Saturn, SATURN_GM);
          dict[Body.Uranus] = AdjustBarycenterPosVel(ssb, time.tt, Body.Uranus, URANUS_GM);
          dict[Body.Neptune] = AdjustBarycenterPosVel(ssb, time.tt, Body.Neptune, NEPTUNE_GM);
          for (let body in dict) {
            dict[body].r.decr(ssb.r);
            dict[body].v.decr(ssb.v);
          }
          dict[Body.Sun] = new body_state_t(time.tt, ssb.r.neg(), ssb.v.neg());
          return dict;
        }
        CalcBodyAccelerations() {
          for (let b of this.curr.bodies) {
            b.a = TerseVector.zero();
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Sun].r, SUN_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Mercury].r, MERCURY_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Venus].r, VENUS_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Earth].r, EARTH_GM + MOON_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Mars].r, MARS_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Jupiter].r, JUPITER_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Saturn].r, SATURN_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Uranus].r, URANUS_GM);
            _GravitySimulator.AddAcceleration(b.a, b.r, this.curr.gravitators[Body.Neptune].r, NEPTUNE_GM);
          }
        }
        static AddAcceleration(acc, smallPos, majorPos, gm) {
          const dx = majorPos.x - smallPos.x;
          const dy = majorPos.y - smallPos.y;
          const dz = majorPos.z - smallPos.z;
          const r2 = dx * dx + dy * dy + dz * dz;
          const pull = gm / (r2 * Math.sqrt(r2));
          acc.x += dx * pull;
          acc.y += dy * pull;
          acc.z += dz * pull;
        }
        Duplicate() {
          const gravitators = {};
          for (let body in this.curr.gravitators) {
            gravitators[body] = this.curr.gravitators[body].clone();
          }
          const bodies = [];
          for (let b of this.curr.bodies) {
            bodies.push(b.clone());
          }
          return new GravSimEndpoint(this.curr.time, gravitators, bodies);
        }
      };
      exports.GravitySimulator = GravitySimulator;
      var GravSimEndpoint = class {
        constructor(time, gravitators, bodies) {
          this.time = time;
          this.gravitators = gravitators;
          this.bodies = bodies;
        }
      };
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/calculations.js
  var require_calculations = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/calculations.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTithi = getTithi;
      exports.getNakshatra = getNakshatra;
      exports.getYoga = getYoga;
      exports.getKarana = getKarana;
      exports.getVara = getVara;
      exports.getSunrise = getSunrise;
      exports.getSunset = getSunset;
      exports.getMoonrise = getMoonrise;
      exports.getMoonset = getMoonset;
      exports.findNakshatraStart = findNakshatraStart;
      exports.findNakshatraEnd = findNakshatraEnd;
      exports.findTithiStart = findTithiStart;
      exports.findTithiEnd = findTithiEnd;
      exports.findYogaEnd = findYogaEnd;
      exports.getPlanetaryPosition = getPlanetaryPosition;
      exports.getRahuPosition = getRahuPosition;
      exports.getKetuPosition = getKetuPosition;
      exports.calculateAbhijitMuhurta = calculateAbhijitMuhurta;
      exports.calculateBrahmaMuhurta = calculateBrahmaMuhurta;
      exports.calculateGovardhanMuhurta = calculateGovardhanMuhurta;
      exports.calculateYamagandaKalam = calculateYamagandaKalam;
      exports.calculateGulikaKalam = calculateGulikaKalam;
      exports.calculateDurMuhurta = calculateDurMuhurta;
      exports.calculateChandraBalam = calculateChandraBalam;
      exports.getCurrentHora = getCurrentHora;
      exports.calculateRahuKalam = calculateRahuKalam;
      exports.findKaranaTransitions = findKaranaTransitions;
      exports.findTithiTransitions = findTithiTransitions;
      exports.findNakshatraTransitions = findNakshatraTransitions;
      exports.findYogaTransitions = findYogaTransitions;
      exports.getPaksha = getPaksha;
      exports.getAyana = getAyana;
      exports.getRitu = getRitu;
      exports.getMasa = getMasa;
      exports.getSamvat = getSamvat;
      exports.getNakshatraPada = getNakshatraPada;
      exports.getRashi = getRashi;
      exports.getSunNakshatra = getSunNakshatra;
      exports.findNextSankranti = findNextSankranti;
      exports.findSankrantisInRange = findSankrantisInRange;
      exports.getSankrantiForDate = getSankrantiForDate;
      exports.getPanchak = getPanchak;
      exports.getUdayaLagna = getUdayaLagna;
      exports.findRashiTransitions = findRashiTransitions;
      exports.calculateTaraBalam = calculateTaraBalam;
      exports.calculateChandraBalamFromRashi = calculateChandraBalamFromRashi;
      exports.calculateVarjyam = calculateVarjyam;
      exports.calculateAmritKalam = calculateAmritKalam;
      exports.getSpecialYoga = getSpecialYoga;
      exports.calculateVimshottariDasha = calculateVimshottariDasha;
      var ayanamsa_1 = require_ayanamsa();
      var tarabalam_1 = require_tarabalam();
      var astronomy_engine_1 = require_astronomy();
      var constants_1 = require_constants();
      var MS_PER_DAY = 24 * 60 * 60 * 1e3;
      var MS_PER_HOUR = 60 * 60 * 1e3;
      var MS_PER_MINUTE = 60 * 1e3;
      var BINARY_SEARCH_MAX_ITERATIONS = 20;
      var BINARY_SEARCH_LOOKAHEAD_MS = 2 * MS_PER_DAY;
      var NAKSHATRA_LOOKBACK_MS = 32 * MS_PER_HOUR;
      var JD_UNIX_EPOCH = 24405875e-1;
      var JD_J2000 = 2451545;
      var DAYS_PER_CENTURY = 36525;
      var MS_PER_YEAR = 365.25 * MS_PER_DAY;
      var SANKRANTI_SEARCH_WINDOW_MS = 40 * MS_PER_DAY;
      var SANKRANTI_LOOKBACK_MS = 35 * MS_PER_DAY;
      var SANKRANTI_ADVANCE_MS = 25 * MS_PER_DAY;
      var SPEED_CALC_HALF_WINDOW_MS = 30 * MS_PER_MINUTE;
      function getTithi(sunLon, moonLon) {
        let longitudeDifference = moonLon - sunLon;
        if (longitudeDifference < 0) {
          longitudeDifference += 360;
        }
        return Math.floor(longitudeDifference / 12);
      }
      function getNakshatra(moonLon) {
        return Math.floor(moonLon / (13 + 1 / 3));
      }
      function getYoga(sunLonSidereal, moonLonSidereal) {
        const totalLongitude = (sunLonSidereal + moonLonSidereal) % 360;
        return Math.floor(totalLongitude / (13 + 1 / 3)) % 27;
      }
      function getKarana(sunLon, moonLon) {
        let longitudeDifference = moonLon - sunLon;
        if (longitudeDifference < 0) {
          longitudeDifference += 360;
        }
        const karanaIndexAbs = Math.floor(longitudeDifference / 6);
        if (karanaIndexAbs === 0) {
          return "Kimstughna";
        }
        if (karanaIndexAbs === 57) {
          return "Shakuni";
        }
        if (karanaIndexAbs === 58) {
          return "Chatushpada";
        }
        if (karanaIndexAbs === 59) {
          return "Naga";
        }
        const repeatingIndex = (karanaIndexAbs - 1) % 7;
        return constants_1.repeatingKaranaNames[repeatingIndex];
      }
      function getVara(date, observer, timezoneOffsetMinutes) {
        if (timezoneOffsetMinutes !== void 0) {
          const tzOffsetMs = timezoneOffsetMinutes * MS_PER_MINUTE;
          const localDate = new Date(date.getTime() + tzOffsetMs);
          return localDate.getUTCDay();
        }
        if (observer) {
          const tzOffsetMs = observer.longitude / 15 * MS_PER_HOUR;
          const localDate = new Date(date.getTime() + tzOffsetMs);
          return localDate.getUTCDay();
        }
        return date.getUTCDay();
      }
      function getStartOfLocalDay(date, observer, options) {
        let tzOffsetMs;
        if (options && options.timezoneOffset !== void 0) {
          tzOffsetMs = options.timezoneOffset * MS_PER_MINUTE;
        } else {
          tzOffsetMs = Math.round(observer.longitude / 15) * MS_PER_HOUR;
        }
        const localDate = new Date(date.getTime() + tzOffsetMs);
        localDate.setUTCHours(0, 0, 0, 0);
        const startOfDay = new Date(localDate.getTime() - tzOffsetMs);
        const endOfDay = new Date(startOfDay.getTime() + MS_PER_DAY - 1);
        return { start: startOfDay, end: endOfDay };
      }
      function getSunrise(date, observer, options) {
        const { start: startOfDay, end: endOfDay } = getStartOfLocalDay(date, observer, options);
        const time = (0, astronomy_engine_1.SearchRiseSet)(astronomy_engine_1.Body.Sun, observer, 1, startOfDay, 1);
        if (!time)
          return null;
        const sunrise = time.date;
        if (sunrise >= startOfDay && sunrise <= endOfDay) {
          return sunrise;
        }
        return null;
      }
      function getSunset(date, observer, options) {
        const { start: startOfDay, end: endOfDay } = getStartOfLocalDay(date, observer, options);
        const time = (0, astronomy_engine_1.SearchRiseSet)(astronomy_engine_1.Body.Sun, observer, -1, startOfDay, 1);
        if (!time)
          return null;
        const sunset = time.date;
        if (sunset >= startOfDay && sunset <= endOfDay) {
          return sunset;
        }
        return null;
      }
      function getMoonrise(date, observer, options) {
        const { start: startOfDay, end: endOfDay } = getStartOfLocalDay(date, observer, options);
        const time = (0, astronomy_engine_1.SearchRiseSet)(astronomy_engine_1.Body.Moon, observer, 1, startOfDay, 1);
        if (!time)
          return null;
        const moonrise = time.date;
        if (moonrise >= startOfDay && moonrise <= endOfDay) {
          return moonrise;
        }
        return null;
      }
      function getMoonset(date, observer, options) {
        const { start: startOfDay, end: endOfDay } = getStartOfLocalDay(date, observer, options);
        const time = (0, astronomy_engine_1.SearchRiseSet)(astronomy_engine_1.Body.Moon, observer, -1, startOfDay, 1);
        if (!time)
          return null;
        const moonset = time.date;
        if (moonset >= startOfDay && moonset <= endOfDay) {
          return moonset;
        }
        return null;
      }
      function search(f, startDate) {
        let a = startDate;
        let b = new Date(startDate.getTime() + BINARY_SEARCH_LOOKAHEAD_MS);
        let fa = f(a);
        let fb = f(b);
        if (fa * fb >= 0) {
          return null;
        }
        for (let i = 0; i < BINARY_SEARCH_MAX_ITERATIONS; i++) {
          const m = new Date((a.getTime() + b.getTime()) / 2);
          const fm = f(m);
          if (fm * fa < 0) {
            b = m;
            fb = fm;
          } else {
            a = m;
            fa = fm;
          }
        }
        return a;
      }
      function findNakshatraStart(date, ayanamsa) {
        const moonLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, date, true)).elon;
        const moonLonSidereal = (moonLonInitial - ayanamsa + 360) % 360;
        const currentNakshatraIndex = Math.floor(moonLonSidereal / (13 + 1 / 3));
        const startNakshatraLongitude = currentNakshatraIndex * (13 + 1 / 3);
        const targetLon = startNakshatraLongitude;
        const nakshatraFunc = (d) => {
          let moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let moonLonSid = (moonLon - ayanamsa + 360) % 360;
          if (moonLonSid > targetLon + 180) {
            moonLonSid -= 360;
          }
          let diff = moonLonSid - targetLon;
          if (diff > 180)
            diff -= 360;
          if (diff < -180)
            diff += 360;
          return diff;
        };
        const searchStartDate = new Date(date.getTime() - NAKSHATRA_LOOKBACK_MS);
        return search(nakshatraFunc, searchStartDate);
      }
      function findNakshatraEnd(date, ayanamsa) {
        const moonLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, date, true)).elon;
        const moonLonSidereal = (moonLonInitial - ayanamsa + 360) % 360;
        const currentNakshatra = Math.floor(moonLonSidereal / (13 + 1 / 3));
        const nextNakshatraLongitude = (currentNakshatra + 1) * (13 + 1 / 3);
        const targetLon = nextNakshatraLongitude % 360;
        const nakshatraFunc = (d) => {
          let moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let moonLonSid = (moonLon - ayanamsa + 360) % 360;
          let diff = moonLonSid - targetLon;
          if (diff > 180)
            diff -= 360;
          if (diff < -180)
            diff += 360;
          return diff;
        };
        return search(nakshatraFunc, date);
      }
      function findTithiStart(date) {
        const sunLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, date, true)).elon;
        const moonLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, date, true)).elon;
        let diffInitial = moonLonInitial - sunLonInitial;
        if (diffInitial < 0)
          diffInitial += 360;
        const currentTithi = Math.floor(diffInitial / 12);
        const startTithiAngle = currentTithi * 12;
        const targetAngle = startTithiAngle % 360;
        const tithiFuncStart = (d) => {
          const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
          const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let diff = moonLon - sunLon;
          if (diff < 0)
            diff += 360;
          if (targetAngle === 0) {
            if (diff > 180) {
              return diff - 360;
            }
            return diff;
          }
          if (diff > targetAngle + 180) {
            diff -= 360;
          }
          if (diff < targetAngle - 180) {
            diff += 360;
          }
          return diff - targetAngle;
        };
        const searchStartDate = new Date(date.getTime() - 25 * MS_PER_HOUR);
        return search(tithiFuncStart, searchStartDate);
      }
      function findTithiEnd(date) {
        const sunLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, date, true)).elon;
        const moonLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, date, true)).elon;
        let diffInitial = moonLonInitial - sunLonInitial;
        if (diffInitial < 0)
          diffInitial += 360;
        const currentTithi = Math.floor(diffInitial / 12);
        const nextTithiAngle = (currentTithi + 1) * 12;
        const targetAngle = nextTithiAngle % 360;
        const tithiFunc = (d) => {
          const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
          const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let diff = moonLon - sunLon;
          if (diff < 0)
            diff += 360;
          if (targetAngle === 0) {
            if (diff > 180) {
              return diff - 360;
            }
            return diff;
          }
          if (diff < targetAngle - 180) {
            diff += 360;
          }
          return diff - targetAngle;
        };
        return search(tithiFunc, date);
      }
      function findYogaEnd(date, ayanamsa) {
        const sunLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, date, true)).elon;
        const moonLonInitial = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, date, true)).elon;
        const sunLonSid = (sunLonInitial - ayanamsa + 360) % 360;
        const moonLonSid = (moonLonInitial - ayanamsa + 360) % 360;
        const totalLongitudeInitial = (sunLonSid + moonLonSid) % 360;
        const yogaWidth = 360 / 27;
        const currentYogaTotalIndex = Math.floor(totalLongitudeInitial / yogaWidth);
        const nextYogaBoundary = (currentYogaTotalIndex + 1) * yogaWidth;
        const yogaFunc = (d) => {
          const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
          const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let sunLonS = (sunLon - ayanamsa + 360) % 360;
          let moonLonS = (moonLon - ayanamsa + 360) % 360;
          let totalLon = (sunLonS + moonLonS) % 360;
          if (totalLon < 90 && nextYogaBoundary > 270) {
            totalLon += 360;
          }
          return totalLon - nextYogaBoundary;
        };
        return search(yogaFunc, date);
      }
      function getPlanetaryPosition(body, date, ayanamsa) {
        const vector = (0, astronomy_engine_1.GeoVector)(body, date, true);
        const ecliptic = (0, astronomy_engine_1.Ecliptic)(vector);
        const tropicalLon = ecliptic.elon;
        const longitude = (tropicalLon - ayanamsa + 360) % 360;
        const rashi = Math.floor(longitude / 30);
        const degree = longitude % 30;
        const tMinus = new Date(date.getTime() - SPEED_CALC_HALF_WINDOW_MS);
        const tPlus = new Date(date.getTime() + SPEED_CALC_HALF_WINDOW_MS);
        const vMinus = (0, astronomy_engine_1.GeoVector)(body, tMinus, true);
        const eMinus = (0, astronomy_engine_1.Ecliptic)(vMinus).elon;
        const vPlus = (0, astronomy_engine_1.GeoVector)(body, tPlus, true);
        const ePlus = (0, astronomy_engine_1.Ecliptic)(vPlus).elon;
        let diff = ePlus - eMinus;
        if (diff > 180)
          diff -= 360;
        if (diff < -180)
          diff += 360;
        const speed = diff * 24;
        const dignity = getPlanetaryDignity(body, rashi);
        return {
          longitude,
          rashi,
          rashiName: constants_1.rashiNames[rashi],
          degree,
          isRetrograde: speed < 0,
          speed,
          dignity
        };
      }
      function getPlanetaryDignity(planet, rashi) {
        if (constants_1.planetExaltation[planet] === rashi)
          return "exalted";
        if (constants_1.planetDebilitation[planet] === rashi)
          return "debilitated";
        if (constants_1.planetOwnSigns[planet]?.includes(rashi))
          return "own";
        return "neutral";
      }
      function getJulianCenturies(date) {
        const jd = date.getTime() / MS_PER_DAY + JD_UNIX_EPOCH;
        return (jd - JD_J2000) / DAYS_PER_CENTURY;
      }
      function getRahuPosition(date, ayanamsa) {
        const T = getJulianCenturies(date);
        let meanNode = 125.04452 - 1934.136261 * T + 20708e-7 * T * T + T * T * T / 45e4;
        meanNode = meanNode % 360;
        if (meanNode < 0)
          meanNode += 360;
        const longitude = (meanNode - ayanamsa + 360) % 360;
        const rashi = Math.floor(longitude / 30);
        const degree = longitude % 30;
        const speed = -0.05295;
        const dignity = getPlanetaryDignity("Rahu", rashi);
        return {
          longitude,
          rashi,
          rashiName: constants_1.rashiNames[rashi],
          degree,
          isRetrograde: true,
          speed,
          dignity
        };
      }
      function getKetuPosition(rahuPos) {
        const ketuLon = (rahuPos.longitude + 180) % 360;
        const rashi = Math.floor(ketuLon / 30);
        const degree = ketuLon % 30;
        const dignity = getPlanetaryDignity("Ketu", rashi);
        return {
          longitude: ketuLon,
          rashi,
          rashiName: constants_1.rashiNames[rashi],
          degree,
          isRetrograde: true,
          speed: rahuPos.speed,
          dignity
        };
      }
      function calculateAbhijitMuhurta(sunrise, sunset) {
        if (!sunrise || !sunset)
          return null;
        const dayDuration = sunset.getTime() - sunrise.getTime();
        const muhurtaDuration = dayDuration / 15;
        const abhijitStart = new Date(sunrise.getTime() + 7 * muhurtaDuration);
        const abhijitEnd = new Date(sunrise.getTime() + 8 * muhurtaDuration);
        return {
          start: abhijitStart,
          end: abhijitEnd
        };
      }
      function calculateBrahmaMuhurta(sunrise, prevSunset) {
        if (!sunrise)
          return null;
        let muhurtaDuration = 48 * MS_PER_MINUTE;
        if (prevSunset) {
          const nightDuration = sunrise.getTime() - prevSunset.getTime();
          muhurtaDuration = nightDuration / 15;
        }
        const brahmaMuhurtaEnd = new Date(sunrise.getTime() - 1 * muhurtaDuration);
        const brahmaMuhurtaStart = new Date(sunrise.getTime() - 2 * muhurtaDuration);
        return {
          start: brahmaMuhurtaStart,
          end: brahmaMuhurtaEnd
        };
      }
      function calculateGovardhanMuhurta(sunrise, sunset) {
        if (!sunrise || !sunset)
          return null;
        const dayDuration = sunset.getTime() - sunrise.getTime();
        const govardhanStart = new Date(sunrise.getTime() + 5 * dayDuration / 8);
        const govardhanEnd = new Date(sunrise.getTime() + 6 * dayDuration / 8);
        return {
          start: govardhanStart,
          end: govardhanEnd
        };
      }
      function calculateYamagandaKalam(sunrise, sunset, vara) {
        if (!sunrise || !sunset)
          return null;
        const daylightMillis = sunset.getTime() - sunrise.getTime();
        const portionMillis = daylightMillis / 8;
        const yamagandaPortionIndex = [5, 4, 3, 2, 1, 7, 6];
        const portionIndex = yamagandaPortionIndex[vara];
        const startMillis = sunrise.getTime() + (portionIndex - 1) * portionMillis;
        const endMillis = sunrise.getTime() + portionIndex * portionMillis;
        return {
          start: new Date(startMillis),
          end: new Date(endMillis)
        };
      }
      function calculateGulikaKalam(sunrise, sunset, vara) {
        if (!sunrise || !sunset)
          return null;
        const daylightMillis = sunset.getTime() - sunrise.getTime();
        const portionMillis = daylightMillis / 8;
        const gulikaPortionIndex = [7, 6, 5, 4, 3, 2, 1];
        const portionIndex = gulikaPortionIndex[vara];
        const startMillis = sunrise.getTime() + (portionIndex - 1) * portionMillis;
        const endMillis = sunrise.getTime() + portionIndex * portionMillis;
        return {
          start: new Date(startMillis),
          end: new Date(endMillis)
        };
      }
      function calculateDurMuhurta(sunrise, sunset, vara) {
        if (!sunrise || !sunset)
          return null;
        const dayDuration = sunset.getTime() - sunrise.getTime();
        const muhurtaDuration = dayDuration / 15;
        const durMuhurtaByVara = [
          [14, 10],
          // Sun
          [8, 2],
          // Mon
          [4, 10],
          // Tue
          [12, 8],
          // Wed
          [10, 2],
          // Thu
          [4, 6],
          // Fri
          [14, 6]
          // Sat
        ];
        const indices = vara !== void 0 && vara >= 0 && vara <= 6 ? durMuhurtaByVara[vara] : [4, 6];
        const durMuhurtas = [];
        for (const idx of indices) {
          const start = new Date(sunrise.getTime() + (idx - 1) * muhurtaDuration);
          const end = new Date(sunrise.getTime() + idx * muhurtaDuration);
          durMuhurtas.push({ start, end });
        }
        durMuhurtas.sort((a, b) => a.start.getTime() - b.start.getTime());
        return durMuhurtas;
      }
      function calculateChandraBalam(moonLon, sunLon) {
        let angularDistance = Math.abs(moonLon - sunLon);
        if (angularDistance > 180) {
          angularDistance = 360 - angularDistance;
        }
        return Math.round(angularDistance / 180 * 100);
      }
      function getCurrentHora(date, sunrise, observer, timezoneOffsetMinutes) {
        if (!sunrise)
          return constants_1.horaRulers[0];
        const dayOfWeek = getVara(date, observer, timezoneOffsetMinutes);
        const millisecondsFromSunrise = date.getTime() - sunrise.getTime();
        if (millisecondsFromSunrise < 0) {
          const prevDay = new Date(date.getTime() - MS_PER_DAY);
          const prevDayOfWeek = getVara(prevDay, observer, timezoneOffsetMinutes);
          const hoursFromPrevSunrise = Math.abs(millisecondsFromSunrise) / (1e3 * 60 * 60);
          const dayStartPlanet2 = [0, 3, 6, 2, 5, 1, 4];
          const startPlanetIndex2 = dayStartPlanet2[prevDayOfWeek];
          const horaIndex2 = (startPlanetIndex2 + Math.floor(24 - hoursFromPrevSunrise)) % 7;
          return constants_1.horaRulers[horaIndex2];
        }
        const hoursFromSunrise = millisecondsFromSunrise / (1e3 * 60 * 60);
        const dayStartPlanet = [0, 3, 6, 2, 5, 1, 4];
        const startPlanetIndex = dayStartPlanet[dayOfWeek];
        const horaIndex = (startPlanetIndex + Math.floor(hoursFromSunrise)) % 7;
        return constants_1.horaRulers[horaIndex];
      }
      function calculateRahuKalam(sunrise, sunset, vara) {
        if (!sunrise || !sunset) {
          return null;
        }
        const daylightMillis = sunset.getTime() - sunrise.getTime();
        const portionMillis = daylightMillis / 8;
        const rahuKalamPortionIndex = [8, 2, 7, 5, 6, 4, 3];
        const portionIndex = rahuKalamPortionIndex[vara];
        const startMillis = sunrise.getTime() + (portionIndex - 1) * portionMillis;
        const endMillis = sunrise.getTime() + portionIndex * portionMillis;
        return {
          start: new Date(startMillis),
          end: new Date(endMillis)
        };
      }
      function findKaranaTransitions(startDate, endDate) {
        const transitions = [];
        let current = new Date(startDate);
        let lastKarana = getKarana((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon, (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon);
        while (current < endDate) {
          const nextKaranaEnd = (() => {
            const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon;
            const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon;
            let diff = moonLon - sunLon;
            if (diff < 0)
              diff += 360;
            const karanaIndexAbs = Math.floor(diff / 6);
            const nextKaranaAngle = (karanaIndexAbs + 1) * 6;
            const targetAngle = nextKaranaAngle % 360;
            const karanaFunc = (d) => {
              const sunLon2 = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
              const moonLon2 = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
              let diff2 = moonLon2 - sunLon2;
              if (diff2 < 0)
                diff2 += 360;
              if (diff2 < targetAngle - 180)
                diff2 += 360;
              return diff2 - targetAngle;
            };
            return search(karanaFunc, current);
          })();
          if (!nextKaranaEnd || nextKaranaEnd > endDate) {
            transitions.push({ name: lastKarana, startTime: new Date(current), endTime: endDate });
            break;
          } else {
            transitions.push({ name: lastKarana, startTime: new Date(current), endTime: nextKaranaEnd });
            current = new Date(nextKaranaEnd.getTime() + MS_PER_MINUTE);
            lastKarana = getKarana((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon, (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon);
          }
        }
        return transitions;
      }
      function findTithiTransitions(startDate, endDate) {
        const transitions = [];
        let current = new Date(startDate);
        let lastTithi = getTithi((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon, (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon);
        while (current < endDate) {
          const nextTithiEnd = (() => {
            const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon;
            const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon;
            let diff = moonLon - sunLon;
            if (diff < 0)
              diff += 360;
            const tithiIndex = Math.floor(diff / 12);
            const nextTithiAngle = (tithiIndex + 1) * 12;
            const targetAngle = nextTithiAngle % 360;
            const tithiFunc = (d) => {
              const sunLon2 = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
              const moonLon2 = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
              let diff2 = moonLon2 - sunLon2;
              if (diff2 < 0)
                diff2 += 360;
              if (targetAngle === 0) {
                if (diff2 > 180) {
                  return diff2 - 360;
                }
                return diff2;
              }
              if (diff2 < targetAngle - 180)
                diff2 += 360;
              return diff2 - targetAngle;
            };
            return search(tithiFunc, current);
          })();
          if (!nextTithiEnd || nextTithiEnd > endDate) {
            transitions.push({ index: lastTithi, name: constants_1.tithiNames[lastTithi] || String(lastTithi), startTime: new Date(current), endTime: endDate });
            break;
          } else {
            transitions.push({ index: lastTithi, name: constants_1.tithiNames[lastTithi] || String(lastTithi), startTime: new Date(current), endTime: nextTithiEnd });
            current = new Date(nextTithiEnd.getTime() + MS_PER_MINUTE);
            lastTithi = getTithi((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon, (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon);
          }
        }
        return transitions;
      }
      function findNakshatraTransitions(startDate, endDate, ayanamsa) {
        const transitions = [];
        let current = new Date(startDate);
        const getSiderealMoon = (d) => {
          const m = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          return (m - ayanamsa + 360) % 360;
        };
        let lastNakshatra = getNakshatra(getSiderealMoon(current));
        while (current < endDate) {
          const nextNakshatraEnd = (() => {
            const moonLonSid = getSiderealMoon(current);
            const nakshatraIndex = Math.floor(moonLonSid / (13 + 1 / 3));
            const nextNakshatraLongitude = (nakshatraIndex + 1) * (13 + 1 / 3);
            const targetLon = nextNakshatraLongitude % 360;
            const nakshatraFunc = (d) => {
              let m = getSiderealMoon(d);
              let diff = m - targetLon;
              if (diff > 180)
                diff -= 360;
              if (diff < -180)
                diff += 360;
              return diff;
            };
            return search(nakshatraFunc, current);
          })();
          if (!nextNakshatraEnd || nextNakshatraEnd > endDate) {
            transitions.push({ index: lastNakshatra, name: constants_1.nakshatraNames[lastNakshatra] || String(lastNakshatra), startTime: new Date(current), endTime: endDate });
            break;
          } else {
            transitions.push({ index: lastNakshatra, name: constants_1.nakshatraNames[lastNakshatra] || String(lastNakshatra), startTime: new Date(current), endTime: nextNakshatraEnd });
            current = new Date(nextNakshatraEnd.getTime() + MS_PER_MINUTE);
            lastNakshatra = getNakshatra(getSiderealMoon(current));
          }
        }
        return transitions;
      }
      function findYogaTransitions(startDate, endDate, ayanamsa) {
        const transitions = [];
        let current = new Date(startDate);
        const getSiderealSum = (d) => {
          const sun = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
          const moon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          return ((sun - ayanamsa + 360) % 360 + (moon - ayanamsa + 360) % 360) % 360;
        };
        let lastYoga = getYoga(((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon - ayanamsa + 360) % 360, ((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon - ayanamsa + 360) % 360);
        while (current < endDate) {
          const nextYogaEnd = (() => {
            const totalLongitude = getSiderealSum(current);
            const yogaWidth = 360 / 27;
            const yogaIndex = Math.floor(totalLongitude / yogaWidth);
            const nextYogaBoundary = (yogaIndex + 1) * yogaWidth;
            const yogaFunc = (d) => {
              let totalLon = getSiderealSum(d);
              if (totalLon < 90 && nextYogaBoundary > 270) {
                totalLon += 360;
              }
              return totalLon - nextYogaBoundary;
            };
            return search(yogaFunc, current);
          })();
          if (!nextYogaEnd || nextYogaEnd > endDate) {
            transitions.push({ index: lastYoga, name: constants_1.yogaNames[lastYoga] || String(lastYoga), startTime: new Date(current), endTime: endDate });
            break;
          } else {
            transitions.push({ index: lastYoga, name: constants_1.yogaNames[lastYoga] || String(lastYoga), startTime: new Date(current), endTime: nextYogaEnd });
            current = new Date(nextYogaEnd.getTime() + MS_PER_MINUTE);
            const s = ((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, current, true)).elon - ayanamsa + 360) % 360;
            const m = ((0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, current, true)).elon - ayanamsa + 360) % 360;
            lastYoga = getYoga(s, m);
          }
        }
        return transitions;
      }
      function getPaksha(tithi) {
        return tithi >= 0 && tithi <= 14 ? constants_1.pakshaNames[0] : constants_1.pakshaNames[1];
      }
      function getAyana(sunLon) {
        if (sunLon >= 90 && sunLon < 270) {
          return constants_1.ayanaNames[1];
        } else {
          return constants_1.ayanaNames[0];
        }
      }
      function getRitu(sunLon) {
        if (sunLon >= 330 || sunLon < 30)
          return constants_1.rituNames[0];
        if (sunLon >= 30 && sunLon < 90)
          return constants_1.rituNames[1];
        if (sunLon >= 90 && sunLon < 150)
          return constants_1.rituNames[2];
        if (sunLon >= 150 && sunLon < 210)
          return constants_1.rituNames[3];
        if (sunLon >= 210 && sunLon < 270)
          return constants_1.rituNames[4];
        return constants_1.rituNames[5];
      }
      function getMasa(sunLon, moonLon, date, calendarType = "purnimanta") {
        let diff = moonLon - sunLon;
        while (diff < 0)
          diff += 360;
        const angleFunc = (t) => {
          const d = t.date;
          const s = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true)).elon;
          const m = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          let df = m - s;
          while (df < 0)
            df += 360;
          while (df >= 360)
            df -= 360;
          if (df > 180)
            df -= 360;
          return df;
        };
        const daysBack = diff / 12.19;
        let newMoonDate;
        const startTime = new Date(date.getTime() - (daysBack + 1) * MS_PER_DAY);
        const backwardEvent = (0, astronomy_engine_1.Search)(angleFunc, (0, astronomy_engine_1.MakeTime)(startTime), (0, astronomy_engine_1.MakeTime)(startTime).AddDays(5));
        newMoonDate = backwardEvent ? backwardEvent.date : date;
        const anchorDate = newMoonDate;
        const ayanamsa = (0, ayanamsa_1.getAyanamsa)(anchorDate);
        const sunVectorStart = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, anchorDate, true);
        const sunTropStart = (0, astronomy_engine_1.Ecliptic)(sunVectorStart).elon;
        const sunSiderealStart = (sunTropStart - ayanamsa + 360) % 360;
        const sunRashiStart = Math.floor(sunSiderealStart / 30);
        const nextNewMoonEst = new Date(anchorDate.getTime() + 29.53 * MS_PER_DAY);
        const nextNewMoonEvent = (0, astronomy_engine_1.Search)(angleFunc, (0, astronomy_engine_1.MakeTime)(nextNewMoonEst), (0, astronomy_engine_1.MakeTime)(nextNewMoonEst).AddDays(2));
        const nextNewMoonDate = nextNewMoonEvent ? nextNewMoonEvent.date : nextNewMoonEst;
        const ayanamsaEnd = (0, ayanamsa_1.getAyanamsa)(nextNewMoonDate);
        const sunVectorEnd = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, nextNewMoonDate, true);
        const sunTropEnd = (0, astronomy_engine_1.Ecliptic)(sunVectorEnd).elon;
        const sunSiderealEnd = (sunTropEnd - ayanamsaEnd + 360) % 360;
        const sunRashiEnd = Math.floor(sunSiderealEnd / 30);
        const isAdhika = sunRashiStart === sunRashiEnd;
        let masaIndex = (sunRashiStart + 1) % 12;
        if (calendarType === "purnimanta") {
          let angleDiff = moonLon - sunLon;
          while (angleDiff < 0)
            angleDiff += 360;
          if (angleDiff >= 180 && !isAdhika) {
            masaIndex = (masaIndex + 1) % 12;
          }
        }
        return {
          index: masaIndex,
          name: constants_1.masaNames[masaIndex],
          isAdhika
        };
      }
      function getSamvat(date, masaIndex) {
        let yearAD = date.getUTCFullYear();
        let shaka = yearAD - 78;
        if (masaIndex > 8 && date.getUTCMonth() < 3) {
          shaka -= 1;
        }
        const vikram = shaka + 135;
        const samvatIndex = (shaka + 11) % 60;
        const samvatsara = constants_1.samvatsaraNames[samvatIndex];
        return { vikram, shaka, samvatsara };
      }
      function getNakshatraPada(moonLon) {
        const padaLen = 3 + 20 / 60;
        const totalPadas = Math.floor(moonLon / padaLen);
        return totalPadas % 4 + 1;
      }
      function getRashi(lon) {
        const index = Math.floor(lon / 30);
        const safeIndex = index % 12;
        return {
          index: safeIndex,
          name: constants_1.rashiNames[safeIndex]
        };
      }
      function getSunNakshatra(sunLon) {
        const index = getNakshatra(sunLon);
        const pada = getNakshatraPada(sunLon);
        return {
          index,
          name: constants_1.nakshatraNames[index],
          pada
        };
      }
      function findNextSankranti(date, ayanamsa) {
        const sunVector = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, date, true);
        const sunTrop = (0, astronomy_engine_1.Ecliptic)(sunVector).elon;
        const sunSidereal = (sunTrop - ayanamsa + 360) % 360;
        const currentRashi = Math.floor(sunSidereal / 30);
        const nextRashi = (currentRashi + 1) % 12;
        const targetLongitude = nextRashi * 30;
        const sankrantiFunc = (d) => {
          const sv = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true);
          const st = (0, astronomy_engine_1.Ecliptic)(sv).elon;
          let sidereal = (st - ayanamsa + 360) % 360;
          let diff = sidereal - targetLongitude;
          if (diff > 180)
            diff -= 360;
          if (diff < -180)
            diff += 360;
          return diff;
        };
        let lo = date.getTime();
        let hi = lo + SANKRANTI_SEARCH_WINDOW_MS;
        let fLo = sankrantiFunc(new Date(lo));
        let fHi = sankrantiFunc(new Date(hi));
        if (fLo * fHi >= 0) {
          return null;
        }
        for (let i = 0; i < 50; i++) {
          const mid = (lo + hi) / 2;
          const fMid = sankrantiFunc(new Date(mid));
          if (Math.abs(fMid) < 1e-5) {
            break;
          }
          if (fLo * fMid < 0) {
            hi = mid;
            fHi = fMid;
          } else {
            lo = mid;
            fLo = fMid;
          }
        }
        const exactTime = new Date((lo + hi) / 2);
        const punyaDurationMs = nextRashi === 9 ? 16 * MS_PER_HOUR : 6.4 * MS_PER_HOUR;
        const punyaKalam = {
          start: new Date(exactTime.getTime() - punyaDurationMs),
          end: new Date(exactTime.getTime() + punyaDurationMs)
        };
        return {
          rashi: nextRashi,
          rashiName: constants_1.rashiNames[nextRashi],
          name: constants_1.sankrantiNames[nextRashi],
          exactTime,
          punyaKalam
        };
      }
      function findSankrantisInRange(startDate, endDate, ayanamsa) {
        const sankrantis = [];
        let current = new Date(startDate);
        while (current < endDate) {
          const currentAyanamsa = (0, ayanamsa_1.getAyanamsa)(current);
          const next = findNextSankranti(current, currentAyanamsa);
          if (!next || next.exactTime > endDate)
            break;
          sankrantis.push(next);
          current = new Date(next.exactTime.getTime() + SANKRANTI_ADVANCE_MS);
        }
        return sankrantis;
      }
      function getSankrantiForDate(date, ayanamsa, timezoneOffsetMinutes = 0) {
        const syntheticObserver = new astronomy_engine_1.Observer(0, timezoneOffsetMinutes / 4, 0);
        const { start: localDayStart, end: localDayEndMinusOne } = getStartOfLocalDay(date, syntheticObserver, { timezoneOffset: timezoneOffsetMinutes });
        const localDayEnd = new Date(localDayEndMinusOne.getTime() + 1);
        const searchStart = new Date(localDayStart.getTime() - SANKRANTI_LOOKBACK_MS);
        const searchAyanamsa = (0, ayanamsa_1.getAyanamsa)(searchStart);
        let current = new Date(searchStart);
        while (current < localDayEnd) {
          const currentAyanamsa = (0, ayanamsa_1.getAyanamsa)(current);
          const next = findNextSankranti(current, currentAyanamsa);
          if (!next)
            return null;
          if (next.exactTime >= localDayStart && next.exactTime < localDayEnd) {
            return next;
          }
          if (next.exactTime >= localDayEnd) {
            return null;
          }
          current = new Date(next.exactTime.getTime() + SANKRANTI_ADVANCE_MS);
        }
        return null;
      }
      function getPanchak(moonNakshatraIndex) {
        const panchakNakshatras = [22, 23, 24, 25, 26];
        if (!panchakNakshatras.includes(moonNakshatraIndex)) {
          return {
            isPanchak: false,
            nakshatra: moonNakshatraIndex,
            nakshatraName: constants_1.nakshatraNames[moonNakshatraIndex],
            type: "None",
            description: "No Panchak - all activities permitted"
          };
        }
        const panchakTypes = {
          22: {
            type: "Mrityu Panchak",
            description: "Avoid funerals, death-related ceremonies, and starting long journeys"
          },
          23: {
            type: "Agni Panchak",
            description: "Avoid fire-related ceremonies, roof construction, and inflammable materials"
          },
          24: {
            type: "Raja Panchak",
            description: "Avoid government dealings, legal matters, and confrontations with authority"
          },
          25: {
            type: "Chora Panchak",
            description: "Avoid long travel, valuable transactions, and leaving valuables unattended"
          },
          26: {
            type: "Roga Panchak",
            description: "Avoid starting medical treatments, surgeries, and health-related decisions"
          }
        };
        const info = panchakTypes[moonNakshatraIndex];
        return {
          isPanchak: true,
          nakshatra: moonNakshatraIndex,
          nakshatraName: constants_1.nakshatraNames[moonNakshatraIndex],
          type: info.type,
          description: info.description
        };
      }
      function getUdayaLagna(date, observer, ayanamsa) {
        const gmst = (0, astronomy_engine_1.SiderealTime)(date);
        const lmstHours = gmst + observer.longitude / 15;
        const lmstNorm = (lmstHours % 24 + 24) % 24;
        const ramc = lmstNorm * 15;
        const time = (0, astronomy_engine_1.MakeTime)(date);
        const oblInfo = (0, astronomy_engine_1.e_tilt)(time);
        const eps = oblInfo.tobl;
        const lat = observer.latitude;
        const rad = (deg2) => deg2 * Math.PI / 180;
        const deg = (rad2) => rad2 * 180 / Math.PI;
        const sin = Math.sin;
        const cos = Math.cos;
        const tan = Math.tan;
        const theta = rad(ramc);
        const epsilon = rad(eps);
        const phi = rad(lat);
        const numerator = cos(theta);
        const denominator = -(sin(epsilon) * tan(phi) + cos(epsilon) * sin(theta));
        let tropicalAscendant = deg(Math.atan2(numerator, denominator));
        if (tropicalAscendant < 0)
          tropicalAscendant += 360;
        const siderealAscendant = (tropicalAscendant - ayanamsa + 360) % 360;
        return siderealAscendant;
      }
      function findRashiTransitions(startDate, endDate, ayanamsa) {
        const transitions = [];
        let current = new Date(startDate);
        const getSiderealMoon = (d) => {
          const m = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true)).elon;
          return (m - ayanamsa + 360) % 360;
        };
        let lastRashi = Math.floor(getSiderealMoon(current) / 30);
        while (current < endDate) {
          const nextRashiEnd = (() => {
            const moonLonSid = getSiderealMoon(current);
            const rashiIndex = Math.floor(moonLonSid / 30);
            const nextRashiLongitude = (rashiIndex + 1) * 30;
            const targetLon = nextRashiLongitude % 360;
            const rashiFunc = (d) => {
              let m = getSiderealMoon(d);
              let diff = m - targetLon;
              if (diff > 180)
                diff -= 360;
              if (diff < -180)
                diff += 360;
              return diff;
            };
            return search(rashiFunc, current);
          })();
          if (!nextRashiEnd || nextRashiEnd > endDate) {
            transitions.push({
              rashi: lastRashi,
              name: constants_1.rashiNames[lastRashi],
              startTime: new Date(current),
              endTime: endDate
            });
            break;
          } else {
            transitions.push({
              rashi: lastRashi,
              name: constants_1.rashiNames[lastRashi],
              startTime: new Date(current),
              endTime: nextRashiEnd
            });
            current = new Date(nextRashiEnd.getTime() + MS_PER_MINUTE);
            lastRashi = Math.floor(getSiderealMoon(current) / 30);
          }
        }
        return transitions;
      }
      function calculateTaraBalam(moonNakshatra, birthNakshatra) {
        if (moonNakshatra < 0 || birthNakshatra < 0)
          return { strength: "Unknown", type: "Invalid" };
        const result = (0, tarabalam_1.getTarabalam)(birthNakshatra, moonNakshatra);
        const isGood = result.isAuspicious;
        return {
          strength: isGood ? "Good" : "Bad",
          type: `${result.taraName} (${result.description})`
        };
      }
      function calculateChandraBalamFromRashi(moonRashi, birthRashi) {
        if (moonRashi < 0 || birthRashi < 0)
          return { strength: "Unknown", type: "Invalid" };
        let diff = moonRashi - birthRashi;
        if (diff < 0)
          diff += 12;
        const count = diff + 1;
        const goodPositions = [1, 3, 6, 7, 10, 11];
        const isGood = goodPositions.includes(count);
        const strength = isGood ? "Good" : "Bad";
        return {
          strength,
          type: `Position ${count} from Birth Rashi`
        };
      }
      function calculateVarjyam(nakshatraIndex, nakshatraStart, nakshatraEnd) {
        const results = [];
        if (!nakshatraStart || !nakshatraEnd)
          return results;
        const durationMillis = nakshatraEnd.getTime() - nakshatraStart.getTime();
        let startGhatis = constants_1.varjyamStartGhatis[nakshatraIndex];
        if (void 0 === startGhatis)
          return results;
        const ghatis = Array.isArray(startGhatis) ? startGhatis : [startGhatis];
        for (const startGhati of ghatis) {
          const startOffsetMillis = durationMillis * startGhati / 60;
          const durationVarjyamMillis = durationMillis * 4 / 60;
          const varjyamStart = new Date(nakshatraStart.getTime() + startOffsetMillis);
          const varjyamEnd = new Date(varjyamStart.getTime() + durationVarjyamMillis);
          results.push({
            start: varjyamStart,
            end: varjyamEnd
          });
        }
        return results;
      }
      function calculateAmritKalam(nakshatraIndex, nakshatraStart, nakshatraEnd) {
        if (!nakshatraStart || !nakshatraEnd)
          return null;
        const durationMillis = nakshatraEnd.getTime() - nakshatraStart.getTime();
        const startGhati = constants_1.amritKalamStartGhatis[nakshatraIndex];
        if (void 0 === startGhati)
          return null;
        const startOffsetMillis = durationMillis * startGhati / 60;
        const durationAmritMillis = durationMillis * 4 / 60;
        const amritStart = new Date(nakshatraStart.getTime() + startOffsetMillis);
        const amritEnd = new Date(amritStart.getTime() + durationAmritMillis);
        return {
          start: amritStart,
          end: amritEnd
        };
      }
      function getSpecialYoga(vara, nakshatraIndex) {
        const yogas = [];
        const amritCombinations = {
          0: 12,
          // Sun + Hasta
          1: 4,
          // Mon + Mriga
          2: 0,
          // Tue + Ashwini
          3: 16,
          // Wed + Anuradha
          4: 7,
          // Thu + Pushya
          5: 26,
          // Fri + Revati
          6: 3
          // Sat + Rohini
        };
        if (amritCombinations[vara] === nakshatraIndex) {
          yogas.push({
            name: "Amrit Siddhi Yoga",
            description: "Auspicious for most activities, but avoid marriage on Thu-Pushya and journey on Sat-Rohini.",
            isAuspicious: true
          });
        }
        if (nakshatraIndex === 7) {
          if (vara === 0) {
            yogas.push({
              name: "Ravi Pushya Yoga",
              description: "Highly auspicious for starting new ventures, buying gold/assets.",
              isAuspicious: true
            });
          }
          if (vara === 4) {
            yogas.push({
              name: "Guru Pushya Yoga",
              description: "Highly auspicious for spiritual activities, education, and investments.",
              isAuspicious: true
            });
          }
        }
        const sarvarthaCombinations = {
          0: [0, 7, 11, 12, 18, 20, 25],
          // Sun: Ashwini, Pushya, U.Phalguni, Hasta, Mula, U.Ashadha, U.Bhadra
          1: [3, 4, 7, 16, 21],
          // Mon: Rohini, Mriga, Pushya, Anuradha, Shravana
          2: [0, 2, 8, 20],
          // Tue: Ashwini, Krittika, Ashlesha, U.Ashadha
          3: [2, 3, 4, 12, 16],
          // Wed: Krittika, Rohini, Mriga, Hasta, Anuradha
          4: [0, 6, 7, 16, 26],
          // Thu: Ashwini, Punarvasu, Pushya, Anuradha, Revati
          5: [0, 16, 26],
          // Fri: Ashwini, Anuradha, Revati
          6: [3, 14]
          // Sat: Rohini, Swati
        };
        if (sarvarthaCombinations[vara] && sarvarthaCombinations[vara].includes(nakshatraIndex)) {
          yogas.push({
            name: "Sarvartha Siddhi Yoga",
            description: "Success in all endeavors.",
            isAuspicious: true
          });
        }
        return yogas;
      }
      function calculateVimshottariDasha(moonLon, birthDate) {
        const lonMinutes = moonLon * 60;
        const nakshatraDurationMin = 800;
        const nakshatraIndex = Math.floor(lonMinutes / nakshatraDurationMin);
        const elapsedInNakshatra = lonMinutes % nakshatraDurationMin;
        const fractionElapsed = elapsedInNakshatra / nakshatraDurationMin;
        const fractionRemaining = 1 - fractionElapsed;
        const lordIndex = nakshatraIndex % 9;
        const lordDurationYears = constants_1.vimshottariDurations[lordIndex];
        const balanceYears = lordDurationYears * fractionRemaining;
        const y = Math.floor(balanceYears);
        const mFraction = (balanceYears - y) * 12;
        const m = Math.floor(mFraction);
        const d = Math.round((mFraction - m) * 30);
        const balanceString = `${constants_1.vimshottariLords[lordIndex]}: ${y}y ${m}m ${d} d`;
        const fullCycle = [];
        let currentStart = new Date(birthDate);
        const firstEnd = new Date(currentStart.getTime());
        const addYears = (date, years) => {
          return new Date(date.getTime() + years * MS_PER_YEAR);
        };
        let currentEnd = addYears(currentStart, balanceYears);
        fullCycle.push({
          planet: constants_1.vimshottariLords[lordIndex],
          startTime: new Date(currentStart),
          endTime: new Date(currentEnd)
        });
        currentStart = currentEnd;
        for (let i = 1; i < 9; i++) {
          const nextIndex = (lordIndex + i) % 9;
          const duration = constants_1.vimshottariDurations[nextIndex];
          currentEnd = addYears(currentStart, duration);
          fullCycle.push({
            planet: constants_1.vimshottariLords[nextIndex],
            startTime: new Date(currentStart),
            endTime: new Date(currentEnd)
          });
          currentStart = currentEnd;
        }
        const elapsedYears = lordDurationYears - balanceYears;
        let runningAntardasha = null;
        let adElapsedAccum = 0;
        const mdLordIndex = lordIndex;
        for (let j = 0; j < 9; j++) {
          const adIndex = (mdLordIndex + j) % 9;
          const adLord = constants_1.vimshottariLords[adIndex];
          const adDurationProp = lordDurationYears * constants_1.vimshottariDurations[adIndex] / 120;
          if (elapsedYears < adElapsedAccum + adDurationProp) {
            const remainingInAD = adElapsedAccum + adDurationProp - elapsedYears;
            runningAntardasha = {
              planet: adLord,
              endTime: addYears(birthDate, remainingInAD)
            };
            break;
          }
          adElapsedAccum += adDurationProp;
        }
        return {
          birthNakshatra: constants_1.nakshatraNames[nakshatraIndex],
          nakshatraPada: getNakshatraPada(moonLon),
          dashaBalance: balanceString,
          currentMahadasha: {
            planet: fullCycle[0].planet,
            endTime: fullCycle[0].endTime
          },
          currentAntardasha: runningAntardasha,
          fullCycle
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/udaya-tithi.js
  var require_udaya_tithi = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/udaya-tithi.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTithiAtTime = getTithiAtTime;
      exports.getTithiAtSunrise = getTithiAtSunrise;
      exports.doesTithiTouchSunrise = doesTithiTouchSunrise;
      exports.getUdayaTithiInfo = getUdayaTithiInfo;
      var astronomy_engine_1 = require_astronomy();
      var calculations_1 = require_calculations();
      function getTithiAtTime(time) {
        const sunLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, time, true)).elon;
        const moonLon = (0, astronomy_engine_1.Ecliptic)((0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, time, true)).elon;
        return (0, calculations_1.getTithi)(sunLon, moonLon) + 1;
      }
      function getTithiAtSunrise(date, sunrise, observer) {
        return getTithiAtTime(sunrise);
      }
      function doesTithiTouchSunrise(tithiIndex, date, sunrise, observer) {
        const udayaTithi = getTithiAtSunrise(date, sunrise, observer);
        return udayaTithi === tithiIndex;
      }
      function getUdayaTithiInfo(date, sunrise, observer) {
        const udayaTithi = getTithiAtSunrise(date, sunrise, observer);
        const paksha = (0, calculations_1.getPaksha)(udayaTithi - 1);
        const searchStart = new Date(sunrise.getTime() - 2 * 24 * 60 * 60 * 1e3);
        const tithiTransition = findTithiTransition(udayaTithi, searchStart, new Date(sunrise.getTime() + 24 * 60 * 60 * 1e3), observer);
        return {
          tithi: udayaTithi,
          paksha,
          tithiStart: tithiTransition.start,
          tithiEnd: tithiTransition.end
        };
      }
      function findTithiTransition(targetTithi, searchStart, searchEnd, observer) {
        const tithiFunc = (d) => {
          const sv = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, d, true);
          const mv = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, d, true);
          const sLon = (0, astronomy_engine_1.Ecliptic)(sv).elon;
          const mLon = (0, astronomy_engine_1.Ecliptic)(mv).elon;
          return (0, calculations_1.getTithi)(sLon, mLon) + 1;
        };
        const getDiff = (t, target) => {
          let d = t - target;
          if (d < -15)
            d += 30;
          if (d > 15)
            d -= 30;
          return d;
        };
        let lo = searchStart.getTime();
        let hi = searchEnd.getTime();
        for (let i = 0; i < 50; i++) {
          const mid = (lo + hi) / 2;
          const tithiAtMid = tithiFunc(new Date(mid));
          if (getDiff(tithiAtMid, targetTithi) < 0) {
            lo = mid;
          } else {
            hi = mid;
          }
          if (hi - lo < 6e4)
            break;
        }
        const startTime = new Date((lo + hi) / 2);
        lo = startTime.getTime();
        hi = searchEnd.getTime();
        for (let i = 0; i < 50; i++) {
          const mid = (lo + hi) / 2;
          const tithiAtMid = tithiFunc(new Date(mid));
          if (getDiff(tithiAtMid, targetTithi) <= 0) {
            lo = mid;
          } else {
            hi = mid;
          }
          if (hi - lo < 6e4)
            break;
        }
        const endTime = new Date((lo + hi) / 2);
        return { start: startTime, end: endTime };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/festivals.js
  var require_festivals = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/festivals.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EKADASHI_NAMES = void 0;
      exports.getEkadashiName = getEkadashiName;
      exports.getFestivals = getFestivals;
      exports.getFestivalsByTithi = getFestivalsByTithi;
      exports.getUpcomingFestivals = getUpcomingFestivals;
      var constants_1 = require_constants();
      var udaya_tithi_1 = require_udaya_tithi();
      var calculations_1 = require_calculations();
      var ayanamsa_1 = require_ayanamsa();
      exports.EKADASHI_NAMES = {
        // Chaitra (0)
        "0-Shukla": "Kamada Ekadashi",
        "0-Krishna": "Varuthini Ekadashi",
        // Vaishakha (1)
        "1-Shukla": "Mohini Ekadashi",
        "1-Krishna": "Apara Ekadashi",
        // Jyeshtha (2)
        "2-Shukla": "Nirjala Ekadashi",
        "2-Krishna": "Yogini Ekadashi",
        // Ashadha (3)
        // NOTE: Devshayani = Ashadha Shukla Ekadashi; handled in major-festivals block
        // with richer metadata; duplicate-check prevents double-entry.
        "3-Shukla": "Devshayani Ekadashi",
        "3-Krishna": "Kamika Ekadashi",
        // Shravana (4)
        "4-Shukla": "Shravana Putrada Ekadashi",
        "4-Krishna": "Aja Ekadashi",
        // Bhadrapada (5)
        // NOTE: Parivartini / Parsva are the same Ekadashi — consolidated here.
        "5-Shukla": "Parsva Ekadashi (Parivartini)",
        "5-Krishna": "Indira Ekadashi",
        // Ashwina (6)
        "6-Shukla": "Papankusha Ekadashi",
        "6-Krishna": "Rama Ekadashi",
        // Kartika (7)
        // NOTE: Devutthana = Kartika Shukla Ekadashi; handled with richer metadata below.
        "7-Shukla": "Devutthana Ekadashi",
        "7-Krishna": "Utpanna Ekadashi",
        // Margashirsha (8)
        "8-Shukla": "Mokshada Ekadashi",
        "8-Krishna": "Saphala Ekadashi",
        // Pausha (9)
        "9-Shukla": "Pausha Putrada Ekadashi",
        "9-Krishna": "Shattila Ekadashi",
        // Magha (10)
        "10-Shukla": "Jaya Ekadashi",
        "10-Krishna": "Vijaya Ekadashi",
        // Phalguna (11)
        "11-Shukla": "Amalaki Ekadashi",
        "11-Krishna": "Papmochani Ekadashi"
      };
      function getEkadashiName(masaIndex, paksha, isAdhika = false) {
        if (isAdhika) {
          return paksha === "Shukla" ? "Padmini Ekadashi" : "Parama Ekadashi";
        }
        const key = `${masaIndex}-${paksha}`;
        return exports.EKADASHI_NAMES[key] || `${constants_1.masaNames[masaIndex]} ${paksha} Ekadashi`;
      }
      function getSolarFestivals(date, options) {
        const festivals = [];
        if (!options.includeSolarFestivals) {
          return festivals;
        }
        const timezoneOffsetMinutes = options.timezoneOffset ?? -date.getTimezoneOffset();
        const ayanamsa = (0, ayanamsa_1.getAyanamsa)(date);
        const sankranti = (0, calculations_1.getSankrantiForDate)(date, ayanamsa, timezoneOffsetMinutes);
        if (!sankranti)
          return festivals;
        const rashiIndex = sankranti.rashi;
        const solarFestivalConfigs = constants_1.SOLAR_FESTIVALS[rashiIndex];
        if (!solarFestivalConfigs)
          return festivals;
        for (const config of solarFestivalConfigs) {
          if (config.type === "span" && config.spanDays && config.dayNames) {
            const sankrantiTime = sankranti.exactTime.getTime();
            const currentTime = date.getTime();
            const daysDiff = Math.floor((currentTime - sankrantiTime) / (24 * 60 * 60 * 1e3));
            if (daysDiff >= -1 && daysDiff < config.spanDays - 1) {
              const dayIndex = daysDiff + 1;
              if (dayIndex >= 0 && dayIndex < config.spanDays) {
                const dayName = config.dayNames[dayIndex];
                festivals.push({
                  name: dayName,
                  type: "span",
                  category: "solar",
                  date,
                  description: config.description,
                  regional: config.regional,
                  spanDays: config.spanDays,
                  dailyNames: config.dayNames
                });
              }
            }
          } else {
            festivals.push({
              name: config.name,
              type: "single",
              category: "solar",
              date,
              description: config.description,
              regional: config.regional
            });
          }
        }
        return festivals;
      }
      function getMultiDayFestivals(masaIndex, udayaTithi, date, options) {
        const festivals = [];
        if (!options.includeMultiDaySpans)
          return festivals;
        for (const [, config] of Object.entries(constants_1.MULTI_DAY_FESTIVALS)) {
          if (config.masaIndex !== masaIndex)
            continue;
          if (udayaTithi >= config.startTithi && udayaTithi <= config.endTithi) {
            const dayIndex = udayaTithi - config.startTithi;
            const dailyName = config.dailyNames[dayIndex] || `${config.name} Day ${dayIndex + 1}`;
            festivals.push({
              name: dailyName,
              type: "span",
              category: "major",
              date,
              tithi: udayaTithi,
              masa: constants_1.masaNames[masaIndex],
              spanDays: config.spanDays,
              dailyNames: config.dailyNames,
              description: `${config.description} (Day ${dayIndex + 1} of ${config.spanDays})`
            });
          }
        }
        return festivals;
      }
      function getFestivals(options) {
        const { date, observer, sunrise, masa, paksha } = options;
        const calendarType = options.calendarType ?? "purnimanta";
        let masaIndex = masa.index;
        if (calendarType === "purnimanta" && paksha === "Krishna" && !masa.isAdhika) {
          masaIndex = (masa.index - 1 + 12) % 12;
        }
        const udayaTithi = (0, udaya_tithi_1.getTithiAtSunrise)(date, sunrise, observer);
        const approxPrevSunrise = new Date(sunrise.getTime() - 24 * 60 * 60 * 1e3);
        const prevSunriseTithi = (0, udaya_tithi_1.getTithiAtTime)(approxPrevSunrise);
        const isVriddhiSecondDay = prevSunriseTithi === udayaTithi;
        const festivals = isVriddhiSecondDay ? [] : detectTithiBasedFestivals(masaIndex, udayaTithi, paksha, date, options.vara, masa.isAdhika);
        const getMasaForTithi = (checkTithi) => {
          if (udayaTithi >= 26 && checkTithi <= 15) {
            return (masaIndex + 1) % 12;
          }
          return masaIndex;
        };
        const addFestivalsForTithi = (tithi, useMasa) => {
          const t0 = tithi - 1;
          const tPaksha = (0, calculations_1.getPaksha)(t0);
          const mIdx = useMasa !== void 0 ? useMasa : getMasaForTithi(tithi);
          const isAdh = mIdx === masaIndex ? masa.isAdhika : false;
          const fests = detectTithiBasedFestivals(mIdx, tithi, tPaksha, date, options.vara, isAdh);
          for (const f of fests) {
            if (!festivals.some((existing) => existing.name === f.name)) {
              festivals.push(f);
            }
          }
        };
        if (options.sunset) {
          const midday = new Date((sunrise.getTime() + options.sunset.getTime()) / 2);
          const middayTithi = (0, udaya_tithi_1.getTithiAtTime)(midday);
          const sunsetTithi = (0, udaya_tithi_1.getTithiAtTime)(options.sunset);
          const approxNextSunrise = new Date(sunrise.getTime() + 24 * 60 * 60 * 1e3);
          const nextSunriseTithi = (0, udaya_tithi_1.getTithiAtTime)(approxNextSunrise);
          const tithisSeen = /* @__PURE__ */ new Set([udayaTithi]);
          if (middayTithi !== udayaTithi || sunsetTithi !== udayaTithi) {
            const endTithi = sunsetTithi;
            let t = udayaTithi;
            while (true) {
              t = t + 1;
              if (t > 30)
                t = 1;
              tithisSeen.add(t);
              if (t !== nextSunriseTithi) {
                addFestivalsForTithi(t);
              }
              if (t === endTithi)
                break;
              if (tithisSeen.size > 5)
                break;
            }
          }
        }
        if (masaIndex === 10 && !masa.isAdhika) {
          const CHATURDASHI = 29;
          const hasChaturdashiAtSunset = options.sunset ? (0, udaya_tithi_1.getTithiAtTime)(options.sunset) === CHATURDASHI : udayaTithi === CHATURDASHI;
          if (hasChaturdashiAtSunset && !festivals.some((f) => f.name === "Maha Shivaratri")) {
            festivals.push({
              name: "Maha Shivaratri",
              type: "single",
              category: "major",
              date,
              tithi: CHATURDASHI,
              paksha: "Krishna",
              masa: constants_1.masaNames[masaIndex],
              description: "Great night of Shiva \u2014 observed on the night when Chaturdashi prevails at Pradosh Kala",
              observances: ["Fasting", "All-night vigil", "Rudrabhishek", "Shiva puja"],
              isFastingDay: true
            });
          }
        }
        if (!isVriddhiSecondDay && !masa.isAdhika) {
          const multiDayFestivals = getMultiDayFestivals(masaIndex, udayaTithi, date, options);
          festivals.push(...multiDayFestivals);
        }
        const solarFestivals = getSolarFestivals(date, options);
        festivals.push(...solarFestivals);
        return festivals;
      }
      function getFestivalsByTithi(masaIndex, isAdhika, udayaTithi, paksha, vara) {
        const stubDate = /* @__PURE__ */ new Date();
        const festivals = detectTithiBasedFestivals(masaIndex, udayaTithi, paksha, stubDate, vara, isAdhika);
        return festivals.map((f) => f.name);
      }
      function detectTithiBasedFestivals(masaIndex, udayaTithi, paksha, date, vara, isAdhika = false) {
        const festivals = [];
        const createFestival = (name, category, metadata) => ({
          name,
          type: "single",
          category,
          date,
          tithi: udayaTithi,
          paksha,
          masa: constants_1.masaNames[masaIndex] || "",
          ...metadata
        });
        if (isAdhika) {
          if (udayaTithi === 11 || udayaTithi === 26) {
            const ekadashiName = getEkadashiName(masaIndex, paksha, isAdhika);
            festivals.push(createFestival(ekadashiName, "ekadashi", {
              isFastingDay: true,
              observances: ["Fasting", "Vishnu worship"]
            }));
          }
          if (udayaTithi === 13 || udayaTithi === 28) {
            const pradoshamType = udayaTithi === 13 ? "Shukla" : "Krishna";
            festivals.push(createFestival(`Pradosham (${pradoshamType})`, "pradosham", {
              description: "Auspicious time for Shiva worship",
              observances: ["Evening Shiva puja"]
            }));
          }
          return festivals;
        }
        if (masaIndex === 0 && udayaTithi === 1) {
          festivals.push(createFestival("Ugadi / Gudi Padwa", "major", {
            description: "Hindu Luni-Solar New Year",
            observances: ["Panchanga reading", "Neem-jaggery prasad", "New clothes"],
            regional: ["South", "Maharashtra"]
          }));
          festivals.push(createFestival("Chaitra Navratri Ghatasthapana", "major", {
            description: "Navratri Day 1 \u2014 Worship of Maa Shailputri; Kalash installation",
            observances: ["Kalash sthapana", "Fasting begins", "Durga puja"]
          }));
        }
        if (masaIndex === 0 && udayaTithi === 2) {
          festivals.push(createFestival("Chaitra Navratri Dwitiya", "minor", {
            description: "Navratri Day 2 \u2014 Worship of Maa Brahmacharini"
          }));
        }
        if (masaIndex === 0 && udayaTithi === 3) {
          festivals.push(createFestival("Chaitra Navratri Tritiya", "minor", {
            description: "Navratri Day 3 \u2014 Worship of Maa Chandraghanta"
          }));
          festivals.push(createFestival("Gangaur", "vrat", {
            description: "Worship of Goddess Gauri (Isari/Gangaur) for marital bliss",
            regional: ["Rajasthan", "MP"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 0 && udayaTithi === 4) {
          festivals.push(createFestival("Chaitra Navratri Chaturthi", "minor", {
            description: "Navratri Day 4 \u2014 Worship of Maa Kushmanda"
          }));
        }
        if (masaIndex === 0 && udayaTithi === 5) {
          festivals.push(createFestival("Chaitra Navratri Panchami", "minor", {
            description: "Navratri Day 5 \u2014 Worship of Maa Skandamata"
          }));
        }
        if (masaIndex === 0 && udayaTithi === 6) {
          festivals.push(createFestival("Chaitra Navratri Shashthi", "minor", {
            description: "Navratri Day 6 \u2014 Worship of Maa Katyayani"
          }));
          festivals.push(createFestival("Yamuna Chhath (Yamuna Jayanti)", "jayanti", {
            description: "Goddess Yamuna descended to Earth",
            regional: ["Brij", "UP"]
          }));
        }
        if (masaIndex === 0 && udayaTithi === 7) {
          festivals.push(createFestival("Chaitra Navratri Saptami", "minor", {
            description: "Navratri Day 7 \u2014 Worship of Maa Kaalratri"
          }));
        }
        if (masaIndex === 0 && udayaTithi === 8) {
          festivals.push(createFestival("Durga Ashtami (Chaitra)", "major", {
            description: "Navratri Day 8 \u2014 Worship of Maa Mahagauri",
            observances: ["Kanya Pujan", "Havan"]
          }));
        }
        if (masaIndex === 0 && udayaTithi === 9) {
          festivals.push(createFestival("Rama Navami", "major", {
            description: "Birth of Lord Rama \u2014 Navratri Day 9",
            observances: ["Rama Katha", "Chariot processions", "Fasting"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 0 && udayaTithi === 15) {
          festivals.push(createFestival("Hanuman Jayanti", "jayanti", {
            description: "Birth of Lord Hanuman",
            observances: ["Hanuman puja", "Sundarkand path"]
          }));
          festivals.push(createFestival("Chaitra Purnima", "minor", {
            description: "Full moon of Chaitra \u2014 Chitragupta worship",
            isFastingDay: true
          }));
        }
        if (masaIndex === 0 && udayaTithi === 23) {
          festivals.push(createFestival("Sheetala Ashtami (Basoda)", "vrat", {
            description: "Worship of Goddess Sheetala for good health; cold food offered",
            isFastingDay: true,
            regional: ["North", "Rajasthan", "UP"]
          }));
        }
        if (masaIndex === 1 && udayaTithi === 3) {
          festivals.push(createFestival("Akshaya Tritiya", "major", {
            description: "Imperishable auspicious day \u2014 new beginnings, charity and gold purchase",
            observances: ["Gold/silver purchases", "Charity", "Pitru tarpan"]
          }));
          festivals.push(createFestival("Parashurama Jayanti", "jayanti", {
            description: "Sixth avatar of Vishnu \u2014 Parashurama's birth anniversary"
          }));
        }
        if (masaIndex === 1 && udayaTithi === 7) {
          festivals.push(createFestival("Ganga Saptami", "minor", {
            description: "Second birth (Punara Janma) of Goddess Ganga",
            observances: ["Ganga puja", "River bathing"]
          }));
        }
        if (masaIndex === 1 && udayaTithi === 9) {
          festivals.push(createFestival("Sita Navami (Janaki Jayanti)", "jayanti", {
            description: "Birth anniversary of Goddess Sita",
            observances: ["Married women observe fast", "Sita-Rama puja"]
          }));
        }
        if (masaIndex === 1 && udayaTithi === 14) {
          festivals.push(createFestival("Narasimha Jayanti", "jayanti", {
            description: "Appearance of Narasimha (man-lion) Avatar of Vishnu",
            observances: ["One-day fast", "Narasimha puja"]
          }));
        }
        if (masaIndex === 1 && udayaTithi === 16) {
          festivals.push(createFestival("Narada Jayanti", "jayanti", {
            description: "Birth anniversary of Devrishi Narada Muni"
          }));
        }
        if (masaIndex === 1 && udayaTithi === 15) {
          festivals.push(createFestival("Buddha Purnima", "major", {
            description: "Birth, Enlightenment and Mahaparinirvana of Gautama Buddha",
            observances: ["Meditation", "Dana (charity)", "Dhamma teachings"]
          }));
          festivals.push(createFestival("Kurma Jayanti", "jayanti", {
            description: "Birth anniversary of Kurma (Tortoise) Avatar of Vishnu"
          }));
          festivals.push(createFestival("Vaishakha Purnima", "minor", {
            description: "Full moon of Vaishakha \u2014 auspicious for bathing and charity",
            isFastingDay: true
          }));
        }
        if (masaIndex === 2 && udayaTithi === 9) {
          festivals.push(createFestival("Mahesh Navami", "minor", {
            description: "Worship of Lord Shiva and Goddess Parvati",
            regional: ["Rajasthan", "North"]
          }));
        }
        if (masaIndex === 2 && udayaTithi === 10) {
          festivals.push(createFestival("Ganga Dussehra", "minor", {
            description: "Descent of Ganga to Earth \u2014 10 sins washed away",
            observances: ["Ganga bathing", "Charity of 10 items"]
          }));
        }
        if (masaIndex === 2 && udayaTithi === 11) {
          festivals.push(createFestival("Gayatri Jayanti (Jyeshtha Shukla)", "jayanti", {
            description: "Minority tradition: Gayatri Jayanti on Jyeshtha Shukla Ekadashi",
            regional: ["Some traditions"]
          }));
        }
        if (masaIndex === 2 && udayaTithi === 15) {
          festivals.push(createFestival("Vat Purnima", "vrat", {
            description: "Married women fast and tie thread around Banyan tree for husband's longevity",
            regional: ["Maharashtra", "Gujarat"],
            isFastingDay: true,
            observances: ["Banyan tree puja", "Savitri-Satyavan story recitation"]
          }));
        }
        if (masaIndex === 2 && udayaTithi === 30) {
          festivals.push(createFestival("Vat Savitri Vrat", "vrat", {
            description: "Married women fast for husband's well-being; Banyan tree circumambulation",
            regional: ["North", "UP", "Bihar", "Rajasthan", "Punjab"],
            isFastingDay: true,
            observances: ["Banyan tree puja", "Savitri-Satyavan story recitation"]
          }));
          festivals.push(createFestival("Shani Jayanti", "jayanti", {
            description: "Birth anniversary of Lord Shani (Saturn)",
            observances: ["Shani puja", "Sesame oil lamp offering"]
          }));
        }
        if (masaIndex === 3 && udayaTithi === 2) {
          festivals.push(createFestival("Jagannath Rathyatra", "major", {
            description: "Annual chariot festival of Lord Jagannath, Balabhadra and Subhadra",
            regional: ["Odisha", "East"],
            observances: ["Chariot procession", "Mahaprasad"]
          }));
        }
        if (masaIndex === 3 && udayaTithi === 11) {
          festivals.push(createFestival("Devshayani Ekadashi", "ekadashi", {
            description: "Lord Vishnu begins cosmic sleep (Yoga Nidra) \u2014 start of Chaturmas",
            isFastingDay: true,
            observances: ["Fasting", "Start of Chaturmas", "No auspicious events for 4 months"]
          }));
        }
        if (masaIndex === 3 && udayaTithi === 15) {
          festivals.push(createFestival("Guru Purnima", "major", {
            description: "Day to honour spiritual and academic teachers; Vyasa Puja",
            observances: ["Guru worship", "Guru Dakshina", "Prayers"]
          }));
          festivals.push(createFestival("Vyasa Puja", "jayanti", {
            description: "Birth anniversary of Sage Veda Vyasa \u2014 compiler of Vedas and Puranas"
          }));
          festivals.push(createFestival("Kokila Vrat", "vrat", {
            description: "Women fast for a happy married life",
            isFastingDay: true,
            regional: ["Maharashtra", "Gujarat"]
          }));
        }
        if (masaIndex === 4 && udayaTithi === 3) {
          festivals.push(createFestival("Hariyali Teej", "vrat", {
            description: "Monsoon festival of greenery, swings and marital happiness",
            regional: ["North", "Rajasthan", "UP"],
            isFastingDay: true,
            observances: ["Swing games", "Songs of Teej", "Shiva-Parvati puja"]
          }));
        }
        if (masaIndex === 4 && udayaTithi === 5) {
          festivals.push(createFestival("Nag Panchami", "minor", {
            description: "Serpent deity worship \u2014 milk and flowers offered to snake idols",
            observances: ["Snake worship", "Milk offering"]
          }));
        }
        if (masaIndex === 4 && udayaTithi === 6) {
          festivals.push(createFestival("Kalki Jayanti", "jayanti", {
            description: "Anticipated birth anniversary of Kalki \u2014 the tenth and future avatar of Vishnu"
          }));
        }
        if (masaIndex === 4 && udayaTithi >= 8 && udayaTithi <= 14 && vara === 5) {
          festivals.push(createFestival("Varalakshmi Vratam", "vrat", {
            description: "Worship of Goddess Varalakshmi for wealth and prosperity \u2014 observed on the Friday nearest to (and before) Shravana Purnima",
            regional: ["South", "Karnataka", "Andhra", "Tamil Nadu"],
            isFastingDay: true,
            observances: ["Lakshmi puja", "Kalasha worship", "New saree offered"]
          }));
        }
        if (masaIndex === 4 && udayaTithi === 15) {
          festivals.push(createFestival("Raksha Bandhan", "major", {
            description: "Festival celebrating the brother-sister bond",
            observances: ["Rakhi tying", "Sister's prayers for brother", "Gift exchange"]
          }));
          festivals.push(createFestival("Gayatri Jayanti", "jayanti", {
            description: "Manifestation anniversary of Goddess Gayatri (Vedmata)"
          }));
          festivals.push(createFestival("Hayagriva Jayanti", "jayanti", {
            description: "Birth anniversary of Hayagriva \u2014 the horse-headed avatar of Vishnu",
            observances: ["Hayagriva puja", "Vedic recitation"]
          }));
          festivals.push(createFestival("Narali Purnima", "minor", {
            description: "Coconut offering to sea god \u2014 start of fishing season",
            regional: ["Maharashtra", "Konkan", "Goa"]
          }));
          festivals.push(createFestival("Shravana Purnima", "minor", {
            description: "Full moon of Shravana \u2014 Avani Avittam (Upakarma) in South India",
            regional: ["South"],
            observances: ["Upakarma", "Sacred thread change"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 4 && udayaTithi === 18) {
          festivals.push(createFestival("Kajari Teej", "vrat", {
            description: "Third Teej of the season \u2014 Shiva-Parvati worship",
            regional: ["North", "UP", "MP", "Bihar"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 4 && udayaTithi === 24) {
          festivals.push(createFestival("Dahi Handi", "major", {
            description: "Breaking of suspended curd pot \u2014 celebrating Krishna's childhood butter theft",
            regional: ["Maharashtra", "Konkan", "Mumbai"],
            observances: ["Human pyramid (Govinda)", "Singing"]
          }));
        }
        if (masaIndex === 4 && udayaTithi === 23) {
          festivals.push(createFestival("Krishna Janmashtami", "major", {
            description: "Birth of Lord Krishna \u2014 Shravana Krishna Ashtami",
            observances: ["Fasting", "Midnight celebrations", "Dahi Handi", "Bhajan Sandhya"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 5 && udayaTithi === 3) {
          festivals.push(createFestival("Hartalika Teej", "vrat", {
            description: "Shiva-Parvati puja for marital bliss \u2014 sandless fast",
            isFastingDay: true,
            observances: ["All-night vigil", "Sand Parvati image worship"]
          }));
          festivals.push(createFestival("Gowri Habba", "vrat", {
            description: "Worship of Goddess Gowri (Parvati) \u2014 eve of Ganesh Chaturthi",
            regional: ["Karnataka", "South"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 4) {
          festivals.push(createFestival("Ganesh Chaturthi", "major", {
            description: "Birth of Lord Ganesha \u2014 10-day festival",
            observances: ["Ganesha idol installation", "Modak offerings", "Aarti", "Visarjan"],
            regional: ["Maharashtra", "Karnataka", "Andhra"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 5) {
          festivals.push(createFestival("Rishi Panchami", "vrat", {
            description: "Worship of Saptarishi (seven sages) \u2014 women observe atonement fast",
            observances: ["Saptarishi puja", "Fasting"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 8) {
          festivals.push(createFestival("Radha Ashtami", "jayanti", {
            description: "Birth anniversary of Goddess Radha \u2014 consort of Krishna",
            observances: ["Radha puja", "Bhajan sandhya"]
          }));
          festivals.push(createFestival("Durva Ashtami", "vrat", {
            description: "Offering Durva (Bermuda grass) to Lord Ganesha",
            observances: ["21 Durva blade offering"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 11) {
          festivals.push(createFestival("Parsva Ekadashi (Parivartini)", "ekadashi", {
            description: "Vishnu turns sides in cosmic sleep (Parsva Parivartana)",
            isFastingDay: true,
            observances: ["Fasting", "Vishnu puja", "Dwadashi parana"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 12) {
          festivals.push(createFestival("Vamana Jayanti", "jayanti", {
            description: "Birth anniversary of Vamana \u2014 the dwarf avatar of Vishnu",
            observances: ["Vamana puja", "Daana (charity)"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 14) {
          festivals.push(createFestival("Anant Chaturdashi", "major", {
            description: "Worship of Ananta (Vishnu) \u2014 Anant Vrat thread tied on wrist",
            observances: ["Ananta puja", "Vrat thread"]
          }));
          festivals.push(createFestival("Ganesh Visarjan", "major", {
            description: "Immersion of Ganesha idols on the 10th day",
            observances: ["Procession", "Immersion in water body"]
          }));
        }
        if (masaIndex === 5 && udayaTithi === 15) {
          festivals.push(createFestival("Purnima Shraddha", "minor", {
            description: "First day of Pitru Paksha \u2014 Purnima Shraddha for ancestors"
          }));
        }
        if (masaIndex === 5 && udayaTithi === 30) {
          festivals.push(createFestival("Sarva Pitru Amavasya (Mahalaya)", "major", {
            description: "Last and most important day of Pitru Paksha \u2014 all ancestor worship",
            observances: ["Tarpan", "Pinda Daan", "Brahmin bhojan"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 1) {
          festivals.push(createFestival("Navaratri Ghatasthapana", "major", {
            description: "Sharad Navaratri Day 1 \u2014 Worship of Maa Shailputri; Kalash installation",
            observances: ["Kalash sthapana", "Fasting begins", "Akhand Jyot"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 2) {
          festivals.push(createFestival("Navaratri Dwitiya", "minor", {
            description: "Navaratri Day 2 \u2014 Worship of Maa Brahmacharini"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 3) {
          festivals.push(createFestival("Navaratri Tritiya", "minor", {
            description: "Navaratri Day 3 \u2014 Worship of Maa Chandraghanta"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 4) {
          festivals.push(createFestival("Navaratri Chaturthi", "minor", {
            description: "Navaratri Day 4 \u2014 Worship of Maa Kushmanda"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 5) {
          festivals.push(createFestival("Navaratri Panchami", "minor", {
            description: "Navaratri Day 5 \u2014 Worship of Maa Skandamata"
          }));
          festivals.push(createFestival("Upang Lalita Vrat", "vrat", {
            description: "Worship of Goddess Lalita Devi on Navaratri Day 5"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 6) {
          festivals.push(createFestival("Navaratri Shashthi", "minor", {
            description: "Navaratri Day 6 \u2014 Worship of Maa Katyayani"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 7) {
          festivals.push(createFestival("Navaratri Saptami", "minor", {
            description: "Navaratri Day 7 \u2014 Worship of Maa Kaalratri"
          }));
        }
        if (masaIndex === 6 && udayaTithi === 8) {
          festivals.push(createFestival("Durga Ashtami (Maha Ashtami)", "major", {
            description: "Navaratri Day 8 \u2014 Worship of Maa Mahagauri",
            observances: ["Durga puja", "Kumari puja", "Sandhi puja at Ashtami-Navami junction"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 9) {
          festivals.push(createFestival("Maha Navami", "major", {
            description: "Navaratri Day 9 \u2014 Worship of Maa Siddhidatri",
            observances: ["Durga worship", "Ayudha puja", "Kanya Pujan"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 10) {
          festivals.push(createFestival("Vijaya Dashami (Dussehra)", "major", {
            description: "Victory of good over evil \u2014 Rama's victory over Ravana",
            observances: ["Ravana effigy burning", "Shami tree worship", "Shaastra puja"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 15) {
          festivals.push(createFestival("Sharad Purnima", "major", {
            description: "Full harvest moon \u2014 Goddess Lakshmi descends; Kheer left in moonlight",
            observances: ["Moonlight kheer offering", "River bathing"]
          }));
          festivals.push(createFestival("Valmiki Jayanti", "jayanti", {
            description: "Birth anniversary of Maharishi Valmiki \u2014 author of Ramayana",
            observances: ["Valmiki puja", "Ramayan recitation"]
          }));
          festivals.push(createFestival("Kojagara Puja", "minor", {
            description: "Night vigil for Lakshmi worship \u2014 'Who is awake?' (Ko Jagara)",
            regional: ["Bengal", "Odisha", "East"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 19) {
          festivals.push(createFestival("Karwa Chauth", "vrat", {
            description: "Married women fast from sunrise to moonrise for husband's long life",
            isFastingDay: true,
            regional: ["North", "UP", "Punjab", "Rajasthan", "Delhi"],
            observances: ["Sunrise-to-moonrise fast", "Moon sighting through sieve"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 23) {
          festivals.push(createFestival("Jivitputrika Vrat (Jitiya)", "vrat", {
            description: "Mothers observe nirjala (waterless) fast for children's well-being",
            regional: ["Bihar", "Jharkhand", "UP", "Nepal"],
            isFastingDay: true,
            observances: ["Nirjala fast", "Jivitputrika story recitation"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 28) {
          festivals.push(createFestival("Dhanteras (Dhanatrayodashi)", "major", {
            description: "Festival of wealth and health \u2014 Lakshmi and Dhanvantari worship",
            observances: ["Gold/silver/utensil purchase", "Lakshmi puja", "Yama Deepak outside home"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 29) {
          festivals.push(createFestival("Naraka Chaturdashi (Choti Diwali)", "major", {
            description: "Celebration of Krishna's victory over demon Narakasura",
            observances: ["Abhyanga snan (oil bath) before sunrise", "Lamps lit"]
          }));
        }
        if (masaIndex === 6 && udayaTithi === 30) {
          festivals.push(createFestival("Diwali (Lakshmi Puja)", "major", {
            description: "Festival of Lights \u2014 Lakshmi-Ganesha puja on Kartika Amavasya",
            observances: ["Lakshmi-Ganesha puja", "Fireworks", "Diyas", "Sweets exchange", "Gambling tradition"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 1) {
          festivals.push(createFestival("Govardhan Puja", "major", {
            description: "Worship of Govardhan Hill \u2014 Krishna lifted it to protect Braj from Indra's wrath",
            observances: ["Annakut (mountain of food offered)", "Cow worship"]
          }));
          festivals.push(createFestival("Bali Pratipada", "major", {
            description: "King Bali's return from netherworld; New Year in some regions",
            regional: ["Maharashtra", "Karnataka", "South"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 2) {
          festivals.push(createFestival("Bhai Dooj (Yama Dwitiya)", "major", {
            description: "Sister-brother bond celebration \u2014 Yama visits sister Yamuna",
            observances: ["Tilak ceremony", "Sister's prayers for brother", "Gift exchange"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 4) {
          festivals.push(createFestival("Karva Chauth (Kartik)", "vrat", {
            description: "Regional variant: some communities observe Karva Chauth in Kartika Shukla",
            regional: ["Some North traditions"],
            isFastingDay: true
          }));
        }
        if (masaIndex === 7 && udayaTithi === 6) {
          festivals.push(createFestival("Chhath Puja", "major", {
            description: "Four-day Sun god (Chhathi Maiya/Surya) worship \u2014 one of the most rigorous Hindu festivals",
            regional: ["Bihar", "Jharkhand", "UP", "Nepal"],
            observances: ["Nahay-Khay", "Kharna", "Sandhya Arghya to setting Sun", "Usha Arghya to rising Sun"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 6) {
          festivals.push(createFestival("Skanda Sashti (Kanda Sashti)", "major", {
            description: "Six-day fast culminating in Lord Murugan's victory over demon Soorapadman (Soorasamharam)",
            regional: ["South", "Tamil Nadu", "Kerala", "Sri Lanka"],
            isFastingDay: true,
            observances: ["6-day fast", "Kavadi", "Vel worship", "Soorasamharam re-enactment"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 8) {
          festivals.push(createFestival("Gopashtami", "minor", {
            description: "Krishna formally becomes a cowherd; cow and cowherd worship",
            regional: ["Brij", "North"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 9) {
          festivals.push(createFestival("Akshaya Navami (Amla Navami)", "minor", {
            description: "Worship of Amla (Indian gooseberry) tree \u2014 Vishnu resides in it this day",
            observances: ["Amla tree circumambulation", "Food cooked under tree"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 10) {
          festivals.push(createFestival("Kansa Vadh", "minor", {
            description: "Commemoration of Krishna slaying the demon king Kansa"
          }));
        }
        if (masaIndex === 7 && udayaTithi === 11) {
          festivals.push(createFestival("Devutthana Ekadashi (Prabodhini)", "ekadashi", {
            description: "Lord Vishnu wakes from cosmic sleep \u2014 end of Chaturmas; auspicious season begins",
            isFastingDay: true,
            observances: ["Fasting", "End of Chaturmas", "Tulsi Vivah performed", "Weddings resume"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 12) {
          festivals.push(createFestival("Tulasi Vivah", "minor", {
            description: "Ceremonial marriage of Tulasi plant with Lord Vishnu (Shaligram)",
            observances: ["Tulasi-Shaligram puja", "Wedding rituals", "Sugarcane canopy"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 23) {
          festivals.push(createFestival("Ahoi Ashtami", "vrat", {
            description: "Mothers fast from sunrise to starrise for children's well-being",
            regional: ["North", "UP", "Rajasthan", "Punjab", "Delhi"],
            isFastingDay: true,
            observances: ["Starrise-time puja", "Ahoi Mata story recitation"]
          }));
        }
        if (masaIndex === 7 && udayaTithi === 15) {
          festivals.push(createFestival("Kartik Purnima / Dev Diwali", "major", {
            description: "Gods celebrate Diwali \u2014 Tripura Nasini (Shiva destroys Tripura); grand lamp festival at Varanasi ghats",
            observances: ["River bathing at Varanasi", "Diyas on river", "Boat puja", "Pushkar Fair"]
          }));
        }
        if (masaIndex === 8 && udayaTithi === 1) {
          festivals.push(createFestival("Margashirsha Shukla Pratipada", "minor", {
            description: "Lord Krishna's favourite month begins (BG 10.35)"
          }));
        }
        if (masaIndex === 8 && udayaTithi === 5) {
          festivals.push(createFestival("Vivah Panchami", "minor", {
            description: "Divine marriage anniversary of Lord Rama and Goddess Sita",
            observances: ["Rama-Sita wedding re-enactment", "Bhajan"]
          }));
        }
        if (masaIndex === 8 && udayaTithi === 11) {
          festivals.push(createFestival("Gita Jayanti", "minor", {
            description: "Anniversary of Lord Krishna's Bhagavad Gita discourse to Arjuna",
            observances: ["Gita recitation", "Gita Yajna", "Gita distribution"]
          }));
        }
        if (masaIndex === 8 && udayaTithi === 15) {
          festivals.push(createFestival("Dattatreya Jayanti", "jayanti", {
            description: "Birth anniversary of Lord Dattatreya \u2014 combined avatar of Brahma, Vishnu, Shiva",
            observances: ["Dattatreya puja", "All-night bhajan"]
          }));
          festivals.push(createFestival("Annapurna Jayanti", "jayanti", {
            description: "Birthday of Goddess Annapurna \u2014 goddess of food and nourishment"
          }));
        }
        if (masaIndex === 8 && udayaTithi === 23) {
          festivals.push(createFestival("Kalabhairav Jayanti", "jayanti", {
            description: "Birth of Lord Kalabhairava \u2014 fierce form of Shiva, guardian of Kashi",
            observances: ["Night puja", "Bhairav ashtami fast"]
          }));
        }
        if (masaIndex === 9 && udayaTithi === 6) {
          festivals.push(createFestival("Skanda Sashti", "vrat", {
            description: "Monthly Shukla Shashthi worship of Lord Murugan (Skanda/Kartikeya). The principal Skanda Sashti is Kartika Shukla Shashthi (Kanda Sashti).",
            regional: ["South", "Tamil Nadu", "Kerala"],
            isFastingDay: true,
            observances: ["Murugan puja", "Vel worship"]
          }));
        }
        if (masaIndex === 9 && udayaTithi === 8) {
          festivals.push(createFestival("Banada Ashtami", "vrat", {
            description: "Shakambhari Navratri observance \u2014 Goddess Shakambhari worship",
            regional: ["Rajasthan", "North"]
          }));
        }
        if (masaIndex === 9 && udayaTithi === 11) {
          festivals.push(createFestival("Pausha Putrada Ekadashi", "ekadashi", {
            description: "Ekadashi for those wishing for progeny \u2014 Vishnu worship",
            isFastingDay: true,
            observances: ["Fasting", "Vishnu worship", "Satyanarayan Katha"]
          }));
        }
        if (masaIndex === 9 && udayaTithi === 15) {
          festivals.push(createFestival("Pausha Purnima", "minor", {
            description: "Sacred bathing day \u2014 start of month-long Magha mela bathing",
            isFastingDay: true
          }));
          festivals.push(createFestival("Shakambhari Purnima", "jayanti", {
            description: "End of Shakambari Navratri \u2014 Goddess Shakambhari (vegetable goddess) worship"
          }));
        }
        if (masaIndex === 10 && udayaTithi === 1) {
          festivals.push(createFestival("Magha Gupta Navratri Begins", "minor", {
            description: "Start of Magha Gupta Navratri \u2014 hidden Navratri for Tantric practice"
          }));
        }
        if (masaIndex === 10 && udayaTithi === 5) {
          festivals.push(createFestival("Vasant Panchami (Shri Panchami)", "major", {
            description: "Arrival of spring \u2014 Goddess Saraswati worship; yellow-clad celebrations",
            observances: ["Saraswati puja", "Yellow clothes worn", "Books/instruments worshipped", "Kite flying in Punjab"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 7) {
          festivals.push(createFestival("Ratha Saptami", "minor", {
            description: "Sun god's chariot turns northward \u2014 Surya's seven-horse chariot worship",
            observances: ["Surya puja", "Ayilyam leaves bath", "108 Surya Namaskara"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 8) {
          festivals.push(createFestival("Bhishma Ashtami", "minor", {
            description: "Death anniversary of Bhishma Pitamaha \u2014 tarpan offered for paternal lineage",
            observances: ["Bhishma tarpan", "Pitru shraddha"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 13 && vara === 0) {
          festivals.push(createFestival("Maghi (approx.)", "minor", {
            description: "Punjabi Maghi \u2014 traditionally on Makar Sankranti (solar). Lunar tithi 13 + Sunday is an approximation; prefer the solar festival entry.",
            regional: ["Punjab", "North"],
            observances: ["Sacred bathing at Muktsar", "Prayers"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 15) {
          festivals.push(createFestival("Magha Purnima", "minor", {
            description: "Most sacred bathing day of Magha mela \u2014 charity and fast",
            isFastingDay: true,
            observances: ["Sangam snan", "Charity", "Lamp offering"]
          }));
          festivals.push(createFestival("Thai Pusam", "major", {
            description: "Worship of Lord Murugan (Skanda) \u2014 Kavadi festival",
            regional: ["South", "Tamil Nadu", "Malaysia", "Singapore"],
            observances: ["Kavadi Attam", "Vel worship", "Piercing rituals"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 19) {
          festivals.push(createFestival("Sakat Chauth (Sankashti)", "vrat", {
            description: "Ganesha worship for removing obstacles \u2014 Tilkuta (sesame-jaggery) offered",
            isFastingDay: true,
            observances: ["Moonrise-time Ganesha puja", "Fasting until moonrise", "Sesame-jaggery offering"]
          }));
        }
        if (masaIndex === 10 && udayaTithi === 30) {
          festivals.push(createFestival("Mauni Amavasya", "minor", {
            description: "Day of silence \u2014 most auspicious bathing day of Magh Mela; mauna (silence) vow kept",
            observances: ["Mauna vrat (silence)", "Sangam snan", "Charity"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 2) {
          festivals.push(createFestival("Phulera Dooj", "minor", {
            description: "Start of Holi festivities \u2014 flower offerings at Krishna temples; only auspicious day of Phalguna",
            observances: ["Flower play at temples", "Phag songs"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 8) {
          festivals.push(createFestival("Holashtak Begins", "minor", {
            description: "Eight inauspicious days before Holi begin on Phalguna Shukla Ashtami",
            observances: ["No auspicious events (weddings, mundan etc.) for 8 days"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 11) {
          festivals.push(createFestival("Amalaki Ekadashi", "ekadashi", {
            description: "Worship of Amla tree and Lord Vishnu \u2014 very auspicious Ekadashi",
            isFastingDay: true,
            observances: ["Fasting", "Amla tree puja", "Vishnu worship", "Charity"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 15) {
          festivals.push(createFestival("Holika Dahan", "major", {
            description: "Bonfire night \u2014 burning of demoness Holika; triumph of devotion over evil",
            observances: ["Bonfire", "Pradakshina (circumambulation)", "Prayers"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 16) {
          festivals.push(createFestival("Holi (Rangwali / Dhulandi)", "major", {
            description: "Festival of colors \u2014 celebrated on Krishna Pratipada, day after Holika Dahan",
            observances: ["Gulal (dry color)", "Pichkari (water guns)", "Bhang", "Community celebrations"]
          }));
        }
        if (masaIndex === 11 && udayaTithi === 20) {
          festivals.push(createFestival("Ranga Panchami", "minor", {
            description: "Holi with dry colors (gulal) \u2014 celebrated 5 days after Holi in Deccan",
            regional: ["Maharashtra", "MP", "Deccan"]
          }));
        }
        if (udayaTithi === 4) {
          festivals.push(createFestival("Vinayaka Chaturthi", "vrat", {
            description: "Monthly Shukla Chaturthi Ganesha worship",
            observances: ["Ganesha puja", "Modak offering"]
          }));
        }
        if (udayaTithi === 19) {
          festivals.push(createFestival("Sankashti Chaturthi", "vrat", {
            description: "Monthly Ganesha worship for removing obstacles \u2014 fast until moonrise",
            isFastingDay: true,
            observances: ["Moonrise-time puja", "Fasting until moonrise"]
          }));
        }
        if (udayaTithi === 15) {
          festivals.push(createFestival("Purnima", "minor", {
            description: "Full Moon \u2014 auspicious for charity, Satyanarayan puja and river bathing",
            isFastingDay: true,
            observances: ["Satyanarayan Puja", "River bathing", "Lamp offering"]
          }));
        }
        if (udayaTithi === 30) {
          festivals.push(createFestival("Amavasya", "minor", {
            description: "New Moon \u2014 ancestral prayers and Pitru Tarpan",
            observances: ["Pitru Tarpan", "Ancestor remembrance", "Shradh"]
          }));
        }
        if (udayaTithi === 29 && masaIndex !== 10) {
          festivals.push(createFestival("Masik Shivaratri", "vrat", {
            description: "Monthly Shiva worship night \u2014 fast and evening puja",
            isFastingDay: true,
            observances: ["Night vigil", "Shiva puja", "Rudrabhishek"]
          }));
        }
        if (udayaTithi === 11 || udayaTithi === 26) {
          const ekadashiName = getEkadashiName(masaIndex, paksha, isAdhika);
          if (!festivals.some((f) => f.name === ekadashiName)) {
            festivals.push(createFestival(ekadashiName, "ekadashi", {
              isFastingDay: true,
              observances: ["Fasting", "Vishnu worship", "Tulasi puja", "Dwadashi parana"]
            }));
          }
        }
        if (udayaTithi === 13 || udayaTithi === 28) {
          const pradoshamType = udayaTithi === 13 ? "Shukla" : "Krishna";
          festivals.push(createFestival(`Pradosham (${pradoshamType})`, "pradosham", {
            description: "Auspicious twilight window (Pradosh Kala) for Shiva worship",
            observances: ["Evening Shiva puja", "Pradosh Vrat", "Shiva Tandava path"]
          }));
        }
        return festivals;
      }
      function getUpcomingFestivals(options) {
        const { date, observer, days = 30, timezoneOffset, categories, calendarType = "purnimanta" } = options;
        const MS_PER_DAY = 24 * 60 * 60 * 1e3;
        const allFestivals = [];
        const seen = /* @__PURE__ */ new Set();
        for (let i = 0; i < days; i++) {
          const d = new Date(date.getTime() + i * MS_PER_DAY);
          const { getSunrise, getSunset, getVara, getMasa, getPaksha, getTithi, getNakshatra } = require_calculations();
          const { getAyanamsa: getAya } = require_ayanamsa();
          const sunrise = getSunrise(d, observer, { timezoneOffset });
          const sunset = getSunset(d, observer, { timezoneOffset });
          const anchorDate = sunrise || d;
          const ayanamsa = getAya(anchorDate);
          const { Body: B, GeoVector: GV, Ecliptic: Ecl } = require_astronomy();
          const sunVec = GV(B.Sun, anchorDate, true);
          const moonVec = GV(B.Moon, anchorDate, true);
          const sunLon = (Ecl(sunVec).elon - ayanamsa + 360) % 360;
          const moonLon = (Ecl(moonVec).elon - ayanamsa + 360) % 360;
          const tithi = getTithi(sunLon, moonLon);
          const masa = getMasa(sunLon, moonLon, anchorDate, calendarType);
          const paksha = getPaksha(tithi);
          const vara = getVara(anchorDate, observer, timezoneOffset);
          const nakshatra = getNakshatra(moonLon);
          const dayFestivals = getFestivals({
            date: d,
            observer,
            sunrise: sunrise || d,
            sunset: sunset || void 0,
            masa,
            paksha,
            tithi: tithi + 1,
            nakshatra,
            vara,
            includeSolarFestivals: true,
            includeMultiDaySpans: false,
            calendarType,
            timezoneOffset
          });
          for (const f of dayFestivals) {
            if (categories && !categories.includes(f.category))
              continue;
            const key = `${f.name}-${d.toISOString().slice(0, 10)}`;
            if (seen.has(key))
              continue;
            seen.add(key);
            f.date = d;
            allFestivals.push(f);
          }
        }
        return allFestivals;
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/choghadiya.js
  var require_choghadiya = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/choghadiya.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.calculateChoghadiya = calculateChoghadiya;
      var RATINGS = {
        "Udveg": "bad",
        "Chal": "neutral",
        "Labh": "good",
        "Amrit": "good",
        "Kaal": "bad",
        "Rog": "bad",
        "Shubh": "good"
      };
      var DAY_SEQUENCES = {
        0: ["Udveg", "Chal", "Labh", "Amrit", "Kaal", "Rog", "Shubh", "Udveg"],
        // Sun
        1: ["Amrit", "Kaal", "Rog", "Shubh", "Udveg", "Chal", "Labh", "Amrit"],
        // Mon
        2: ["Rog", "Udveg", "Chal", "Labh", "Amrit", "Kaal", "Shubh", "Rog"],
        // Tue
        3: ["Labh", "Amrit", "Kaal", "Rog", "Shubh", "Udveg", "Chal", "Labh"],
        // Wed
        4: ["Shubh", "Rog", "Udveg", "Chal", "Labh", "Amrit", "Kaal", "Shubh"],
        // Thu
        5: ["Chal", "Labh", "Amrit", "Kaal", "Rog", "Shubh", "Udveg", "Chal"],
        // Fri
        6: ["Kaal", "Shubh", "Rog", "Udveg", "Chal", "Labh", "Amrit", "Kaal"]
        // Sat
      };
      var NIGHT_SEQUENCES = {
        0: ["Shubh", "Amrit", "Chal", "Rog", "Kaal", "Labh", "Udveg", "Shubh"],
        // Sun
        1: ["Chal", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Chal"],
        // Mon
        2: ["Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Chal", "Rog", "Kaal"],
        // Tue
        3: ["Udveg", "Shubh", "Amrit", "Chal", "Rog", "Kaal", "Labh", "Udveg"],
        // Wed
        4: ["Amrit", "Chal", "Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit"],
        // Thu
        5: ["Rog", "Kaal", "Labh", "Udveg", "Shubh", "Amrit", "Chal", "Rog"],
        // Fri
        6: ["Labh", "Udveg", "Shubh", "Amrit", "Chal", "Rog", "Kaal", "Labh"]
        // Sat
      };
      function getIntervals(start, end, sequence) {
        const totalDuration = end.getTime() - start.getTime();
        const durationPerpart = totalDuration / 8;
        const intervals = [];
        for (let i = 0; i < 8; i++) {
          const segStart = new Date(start.getTime() + i * durationPerpart);
          const segEnd = new Date(start.getTime() + (i + 1) * durationPerpart);
          const name = sequence[i];
          intervals.push({
            name,
            startTime: segStart,
            endTime: segEnd,
            rating: RATINGS[name]
          });
        }
        return intervals;
      }
      function calculateChoghadiya(sunrise, sunset, nextSunrise, vara) {
        const daySeq = DAY_SEQUENCES[vara];
        const dayChoghadiya = getIntervals(sunrise, sunset, daySeq);
        const nightSeq = NIGHT_SEQUENCES[vara];
        const nightChoghadiya = getIntervals(sunset, nextSunrise, nightSeq);
        return {
          day: dayChoghadiya,
          night: nightChoghadiya
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/gowri.js
  var require_gowri = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/gowri.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.calculateGowriPanchangam = calculateGowriPanchangam;
      var GOWRI_RATINGS = {
        "Udyoga": "good",
        "Shubha": "good",
        "Roga": "bad",
        "Laabha": "good",
        "Dhana": "good",
        "Visha": "bad",
        "Amrita": "good",
        "Shunya": "bad"
      };
      var DAY_SEQUENCES = {
        0: ["Udyoga", "Shubha", "Roga", "Laabha", "Dhana", "Visha", "Amrita", "Shunya"],
        // Sun
        1: ["Amrita", "Shunya", "Udyoga", "Shubha", "Roga", "Laabha", "Dhana", "Visha"],
        // Mon
        2: ["Roga", "Laabha", "Dhana", "Visha", "Amrita", "Shunya", "Udyoga", "Shubha"],
        // Tue
        3: ["Laabha", "Dhana", "Visha", "Amrita", "Shunya", "Udyoga", "Shubha", "Roga"],
        // Wed
        4: ["Dhana", "Visha", "Amrita", "Shunya", "Udyoga", "Shubha", "Roga", "Laabha"],
        // Thu
        5: ["Visha", "Amrita", "Shunya", "Udyoga", "Shubha", "Roga", "Laabha", "Dhana"],
        // Fri
        6: ["Shunya", "Udyoga", "Visha", "Amrita", "Roga", "Laabha", "Dhana", "Shubha"]
        // Sat (Fixed based on user verification)
      };
      var NIGHT_SEQUENCES = {
        0: ["Shubha", "Amrita", "Shunya", "Roga", "Visha", "Dhana", "Udyoga", "Laabha"],
        // Sun
        1: ["Udyoga", "Laabha", "Shubha", "Amrita", "Shunya", "Roga", "Visha", "Dhana"],
        // Mon
        2: ["Dhana", "Udyoga", "Laabha", "Shubha", "Amrita", "Shunya", "Roga", "Visha"],
        // Tue
        3: ["Visha", "Dhana", "Udyoga", "Laabha", "Shubha", "Amrita", "Shunya", "Roga"],
        // Wed
        4: ["Roga", "Visha", "Dhana", "Udyoga", "Laabha", "Shubha", "Amrita", "Shunya"],
        // Thu
        5: ["Shunya", "Roga", "Visha", "Dhana", "Udyoga", "Laabha", "Shubha", "Amrita"],
        // Fri
        6: ["Laabha", "Dhana", "Shubha", "Shunya", "Udyoga", "Visha", "Amrita", "Roga"]
        // Sat (Fixed based on user verification)
      };
      function getGowriIntervals(start, end, sequence) {
        const totalDuration = end.getTime() - start.getTime();
        const durationPerpart = totalDuration / 8;
        const intervals = [];
        for (let i = 0; i < 8; i++) {
          const segStart = new Date(start.getTime() + i * durationPerpart);
          const segEnd = new Date(start.getTime() + (i + 1) * durationPerpart);
          const name = sequence[i];
          intervals.push({
            name,
            startTime: segStart,
            endTime: segEnd,
            rating: GOWRI_RATINGS[name]
          });
        }
        return intervals;
      }
      function calculateGowriPanchangam(sunrise, sunset, nextSunrise, vara) {
        const daySeq = DAY_SEQUENCES[vara];
        const dayGowri = getGowriIntervals(sunrise, sunset, daySeq);
        const nightSeq = NIGHT_SEQUENCES[vara];
        const nightGowri = getGowriIntervals(sunset, nextSunrise, nightSeq);
        return {
          day: dayGowri,
          night: nightGowri
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/shoola.js
  var require_shoola = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/shoola.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDishaShoola = getDishaShoola;
      exports.isDirectionSafe = isDirectionSafe;
      var constants_1 = require_constants();
      var SHOOLA_DIRECTIONS = {
        0: "West",
        // Sunday
        1: "East",
        // Monday
        2: "North",
        // Tuesday
        3: "North",
        // Wednesday
        4: "South",
        // Thursday
        5: "West",
        // Friday
        6: "East"
        // Saturday
      };
      var ALL_DIRECTIONS = ["East", "West", "North", "South"];
      function getDishaShoola(vara) {
        const normalizedVara = (vara % 7 + 7) % 7;
        const inauspiciousDirection = SHOOLA_DIRECTIONS[normalizedVara];
        const safeDirections = ALL_DIRECTIONS.filter((d) => d !== inauspiciousDirection);
        return {
          vara: normalizedVara,
          varaName: constants_1.dayNames[normalizedVara],
          inauspiciousDirection,
          safeDirections
        };
      }
      function isDirectionSafe(vara, direction) {
        const shoola = getDishaShoola(vara);
        return direction.toLowerCase() !== shoola.inauspiciousDirection.toLowerCase();
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/chandrashtama.js
  var require_chandrashtama = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/chandrashtama.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getChandrashtama = getChandrashtama;
      exports.getChandrashtamaRashi = getChandrashtamaRashi;
      var constants_1 = require_constants();
      function getChandrashtama(birthRashi, currentMoonRashi) {
        const normalizedBirth = (birthRashi % 12 + 12) % 12;
        const normalizedCurrent = (currentMoonRashi % 12 + 12) % 12;
        const chandrashtamaRashi = (normalizedBirth + 7) % 12;
        const isActive = normalizedCurrent === chandrashtamaRashi;
        return {
          isActive,
          birthRashi: normalizedBirth,
          birthRashiName: constants_1.rashiNames[normalizedBirth],
          chandrashtamaRashi,
          chandrashtamaRashiName: constants_1.rashiNames[chandrashtamaRashi],
          currentMoonRashi: normalizedCurrent,
          currentMoonRashiName: constants_1.rashiNames[normalizedCurrent]
        };
      }
      function getChandrashtamaRashi(birthRashi) {
        return (birthRashi % 12 + 12 + 7) % 12;
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/panchangam.js
  var require_panchangam = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/panchangam.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getPanchangam = getPanchangam2;
      exports.getPanchangamDetails = getPanchangamDetails;
      var astronomy_engine_1 = require_astronomy();
      var ayanamsa_1 = require_ayanamsa();
      var calculations_1 = require_calculations();
      var festivals_1 = require_festivals();
      var choghadiya_1 = require_choghadiya();
      var gowri_1 = require_gowri();
      var shoola_1 = require_shoola();
      var chandrashtama_1 = require_chandrashtama();
      var tarabalam_1 = require_tarabalam();
      function validateInputs(date, observer, options) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
          throw new Error("Invalid date: expected a valid Date object.");
        }
        if (observer == null || typeof observer !== "object") {
          throw new Error("Invalid observer: expected an Observer object with latitude, longitude, and height.");
        }
        if (typeof observer.latitude !== "number" || !isFinite(observer.latitude) || observer.latitude < -90 || observer.latitude > 90) {
          throw new Error(`Invalid observer latitude: ${observer.latitude}. Must be between -90 and 90.`);
        }
        if (typeof observer.longitude !== "number" || !isFinite(observer.longitude) || observer.longitude < -180 || observer.longitude > 180) {
          throw new Error(`Invalid observer longitude: ${observer.longitude}. Must be between -180 and 180.`);
        }
        if (typeof observer.height !== "number" || !isFinite(observer.height) || observer.height < -500 || observer.height > 1e5) {
          throw new Error(`Invalid observer height: ${observer.height}. Must be between -500 and 100000 meters.`);
        }
        if (options != null) {
          if (typeof options !== "object") {
            throw new Error("Invalid options: expected a PanchangamOptions object.");
          }
          if (options.timezoneOffset != null) {
            if (typeof options.timezoneOffset !== "number" || !isFinite(options.timezoneOffset) || options.timezoneOffset < -720 || options.timezoneOffset > 840) {
              throw new Error(`Invalid timezoneOffset: ${options.timezoneOffset}. Must be between -720 and 840 minutes.`);
            }
          }
        }
      }
      function getPanchangam2(date, observer, options) {
        validateInputs(date, observer, options);
        const sunrise = (0, calculations_1.getSunrise)(date, observer, options);
        const sunset = (0, calculations_1.getSunset)(date, observer, options);
        const moonrise = (0, calculations_1.getMoonrise)(date, observer, options);
        const moonset = (0, calculations_1.getMoonset)(date, observer, options);
        const anchorDate = sunrise || date;
        const ayanamsa = (0, ayanamsa_1.getAyanamsa)(anchorDate);
        const sunVector = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Sun, anchorDate, true);
        const moonVector = (0, astronomy_engine_1.GeoVector)(astronomy_engine_1.Body.Moon, anchorDate, true);
        const sunTrop = (0, astronomy_engine_1.Ecliptic)(sunVector).elon;
        const moonTrop = (0, astronomy_engine_1.Ecliptic)(moonVector).elon;
        const sunLon = (sunTrop - ayanamsa + 360) % 360;
        const moonLon = (moonTrop - ayanamsa + 360) % 360;
        const nakshatraStartTime = (0, calculations_1.findNakshatraStart)(anchorDate, ayanamsa);
        const nakshatraEndTime = (0, calculations_1.findNakshatraEnd)(anchorDate, ayanamsa);
        const tithiStartTime = (0, calculations_1.findTithiStart)(anchorDate);
        const tithiEndTime = (0, calculations_1.findTithiEnd)(anchorDate);
        const yogaEndTime = (0, calculations_1.findYogaEnd)(anchorDate, ayanamsa);
        const rahuKalam = sunrise && sunset ? (0, calculations_1.calculateRahuKalam)(sunrise, sunset, (0, calculations_1.getVara)(anchorDate, observer, options?.timezoneOffset)) : null;
        let nextSunrise = null;
        if (sunrise) {
          const nextDay = new Date(sunrise.getTime());
          nextDay.setDate(nextDay.getDate() + 1);
          nextSunrise = (0, calculations_1.getSunrise)(nextDay, observer, options);
        }
        const karanaTransitions = sunrise && nextSunrise ? (0, calculations_1.findKaranaTransitions)(sunrise, nextSunrise) : [];
        const tithiTransitions = sunrise && nextSunrise ? (0, calculations_1.findTithiTransitions)(sunrise, nextSunrise) : [];
        const nakshatraTransitions = sunrise && nextSunrise ? (0, calculations_1.findNakshatraTransitions)(sunrise, nextSunrise, ayanamsa) : [];
        const yogaTransitions = sunrise && nextSunrise ? (0, calculations_1.findYogaTransitions)(sunrise, nextSunrise, ayanamsa) : [];
        const abhijitMuhurta = sunrise && sunset ? (0, calculations_1.calculateAbhijitMuhurta)(sunrise, sunset) : null;
        let prevSunset;
        if (sunrise) {
          const prevDate = new Date(date);
          prevDate.setDate(prevDate.getDate() - 1);
          prevSunset = (0, calculations_1.getSunset)(prevDate, observer, options) || void 0;
        }
        const brahmaMuhurta = sunrise ? (0, calculations_1.calculateBrahmaMuhurta)(sunrise, prevSunset) : null;
        const govardhanMuhurta = sunrise && sunset ? (0, calculations_1.calculateGovardhanMuhurta)(sunrise, sunset) : null;
        const vara = (0, calculations_1.getVara)(anchorDate, observer, options?.timezoneOffset);
        const yamagandaKalam = sunrise && sunset ? (0, calculations_1.calculateYamagandaKalam)(sunrise, sunset, vara) : null;
        const gulikaKalam = sunrise && sunset ? (0, calculations_1.calculateGulikaKalam)(sunrise, sunset, vara) : null;
        const durMuhurta = sunrise && sunset ? (0, calculations_1.calculateDurMuhurta)(sunrise, sunset, vara) : null;
        const rahuPos = (0, calculations_1.getRahuPosition)(date, ayanamsa);
        const planetaryPositions = {
          sun: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Sun, date, ayanamsa),
          moon: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Moon, date, ayanamsa),
          mars: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Mars, date, ayanamsa),
          mercury: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Mercury, date, ayanamsa),
          jupiter: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Jupiter, date, ayanamsa),
          venus: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Venus, date, ayanamsa),
          saturn: (0, calculations_1.getPlanetaryPosition)(astronomy_engine_1.Body.Saturn, date, ayanamsa),
          rahu: rahuPos,
          ketu: (0, calculations_1.getKetuPosition)(rahuPos)
        };
        const chandrabalam = (0, calculations_1.calculateChandraBalam)(moonLon, sunLon);
        const currentHora = (0, calculations_1.getCurrentHora)(date, sunrise || date, observer, options?.timezoneOffset);
        const tithi = (0, calculations_1.getTithi)(sunLon, moonLon);
        const calendarType = options?.calendarType ?? "purnimanta";
        const masa = (0, calculations_1.getMasa)(sunLon, moonLon, anchorDate, calendarType);
        const paksha = (0, calculations_1.getPaksha)(tithi);
        const ritu = (0, calculations_1.getRitu)(sunTrop);
        const ayana = (0, calculations_1.getAyana)(sunTrop);
        const samvat = (0, calculations_1.getSamvat)(anchorDate, masa.index);
        const nakshatraPada = (0, calculations_1.getNakshatraPada)(moonLon);
        const moonRashi = (0, calculations_1.getRashi)(moonLon);
        const sunRashi = (0, calculations_1.getRashi)(sunLon);
        const sunNakshatra = (0, calculations_1.getSunNakshatra)(sunLon);
        const udayaLagna = (0, calculations_1.getUdayaLagna)(sunrise || date, observer, ayanamsa);
        const moonRashiTransitions = sunrise && nextSunrise ? (0, calculations_1.findRashiTransitions)(sunrise, nextSunrise, ayanamsa) : [];
        const nakshatraEnd = nakshatraTransitions.length > 0 ? nakshatraTransitions[0].endTime : nextSunrise;
        const currentNakshatraStart = (0, calculations_1.findNakshatraStart)(date, ayanamsa) || date;
        const amritKalam = [];
        const varjyam = [];
        const checkAndAdd = (nakIndex, start, end) => {
          if (!start || !end)
            return;
          const v = (0, calculations_1.calculateVarjyam)(nakIndex, start, end);
          varjyam.push(...v);
          const a = (0, calculations_1.calculateAmritKalam)(nakIndex, start, end);
          if (a)
            amritKalam.push(a);
        };
        const currentNakIndex = (0, calculations_1.getNakshatra)(moonLon);
        const nStart = nakshatraStartTime || date;
        const nEnd = nakshatraEndTime || nextSunrise || date;
        checkAndAdd(currentNakIndex, nStart, nEnd);
        if (nakshatraStartTime) {
          const prevNakIndex = (currentNakIndex - 1 + 27) % 27;
          const prevSearchDate = new Date(nakshatraStartTime.getTime() - 6e4);
          const prevStart = (0, calculations_1.findNakshatraStart)(prevSearchDate, ayanamsa);
          if (prevStart) {
            checkAndAdd(prevNakIndex, prevStart, nakshatraStartTime);
          }
        }
        if (nakshatraEndTime) {
          const nextNakIndex = (currentNakIndex + 1) % 27;
          const nextSearchDate = new Date(nakshatraEndTime.getTime() + 6e4);
          const nextEnd = (0, calculations_1.findNakshatraEnd)(nextSearchDate, ayanamsa);
          if (nextEnd) {
            checkAndAdd(nextNakIndex, nakshatraEndTime, nextEnd);
          }
        }
        const sortByStart = (a, b) => a.start.getTime() - b.start.getTime();
        amritKalam.sort(sortByStart);
        varjyam.sort(sortByStart);
        return {
          tithi,
          nakshatra: (0, calculations_1.getNakshatra)(moonLon),
          yoga: (0, calculations_1.getYoga)(sunLon, moonLon),
          karana: (0, calculations_1.getKarana)(sunLon, moonLon),
          vara,
          ayanamsa,
          sunrise,
          sunset,
          moonrise,
          moonset,
          nakshatraStartTime,
          nakshatraEndTime,
          tithiStartTime,
          tithiEndTime,
          yogaEndTime,
          rahuKalamStart: rahuKalam?.start || null,
          rahuKalamEnd: rahuKalam?.end || null,
          karanaTransitions,
          tithiTransitions,
          nakshatraTransitions,
          yogaTransitions,
          moonRashiTransitions,
          // Unified List
          tithis: tithiTransitions,
          nakshatras: nakshatraTransitions,
          yogas: yogaTransitions,
          karanas: karanaTransitions,
          rashis: moonRashiTransitions,
          // Enhanced Vedic Features
          amritKalam,
          varjyam,
          // Special Yogas
          specialYogas: (0, calculations_1.getSpecialYoga)(vara, currentNakIndex),
          // Phase 6: Dasha System
          // We calculate Dasha based on the Moon position at the given 'date'.
          // This signifies: "If a child were born at this time, what is the Dasha?"
          // Or "What is the ruling Dasha for the day?"
          vimshottariDasha: (0, calculations_1.calculateVimshottariDasha)(moonLon, anchorDate),
          // Phase 7: Festivals (v3.0.0 API with Udaya Tithi)
          festivals: (0, festivals_1.getFestivals)({
            date,
            observer,
            sunrise: sunrise || date,
            sunset: sunset || void 0,
            masa,
            paksha,
            // tithi from getTithi() is 0-indexed (0-29). Festivals expect 1-indexed (1-30).
            tithi: tithi + 1,
            nakshatra: currentNakIndex,
            vara,
            includeSolarFestivals: true,
            includeMultiDaySpans: true,
            calendarType,
            timezoneOffset: options?.timezoneOffset
          }),
          // Phase 8: Advanced Muhurta (v2.1)
          choghadiya: sunrise && sunset && nextSunrise ? (0, choghadiya_1.calculateChoghadiya)(sunrise, sunset, nextSunrise, vara) : { day: [], night: [] },
          gowri: sunrise && sunset && nextSunrise ? (0, gowri_1.calculateGowriPanchangam)(sunrise, sunset, nextSunrise, vara) : { day: [], night: [] },
          abhijitMuhurta,
          brahmaMuhurta,
          govardhanMuhurta,
          yamagandaKalam,
          gulikaKalam,
          durMuhurta,
          planetaryPositions,
          chandrabalam,
          currentHora,
          dishaShoola: (0, shoola_1.getDishaShoola)(vara),
          chandrashtama: options?.birthMoonRashi !== void 0 ? (0, chandrashtama_1.getChandrashtama)(options.birthMoonRashi, moonRashi.index) : null,
          tarabalam: options?.birthNakshatra !== void 0 ? (0, tarabalam_1.getTarabalam)(options.birthNakshatra, (0, calculations_1.getNakshatra)(moonLon)) : null,
          // Phase 3: Planetary Details
          nakshatraPada,
          moonRashi,
          sunRashi,
          sunNakshatra,
          udayaLagna,
          // Phase 2: Calendar Units
          masa,
          paksha,
          ritu,
          ayana,
          samvat
        };
      }
      function getPanchangamDetails(date, observer, options) {
        validateInputs(date, observer, options);
        const panchangam = getPanchangam2(date, observer, options);
        const sunrise = (0, calculations_1.getSunrise)(date, observer, options);
        const sunset = (0, calculations_1.getSunset)(date, observer, options);
        const nakshatraEndTime = (0, calculations_1.findNakshatraEnd)(date, panchangam.ayanamsa);
        return {
          ...panchangam,
          sunrise,
          sunset,
          nakshatraEndTime
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/types.js
  var require_types2 = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/core/muhurta/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/kundli/houses.js
  var require_houses = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/kundli/houses.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHouses = getHouses;
      function getHouses(ascendantLongitude, system = "whole_sign") {
        const bhavas = [];
        if (system === "whole_sign") {
          const ascendantRashi = Math.floor(ascendantLongitude / 30);
          const startOfRashi = ascendantRashi * 30;
          for (let i = 0; i < 12; i++) {
            const currentRashi = (ascendantRashi + i) % 12;
            const houseStart = (startOfRashi + i * 30) % 360;
            const houseEnd = (houseStart + 30) % 360;
            bhavas.push({
              number: i + 1,
              rashi: currentRashi,
              longitude: houseStart,
              // Cusp is start of sign
              startLongitude: houseStart,
              endLongitude: houseEnd,
              planets: []
              // Populated later
            });
          }
        } else if (system === "equal_house") {
          for (let i = 0; i < 12; i++) {
            const cusp = (ascendantLongitude + i * 30) % 360;
            const end = (cusp + 30) % 360;
            const rashiAtCusp = Math.floor(cusp / 30);
            bhavas.push({
              number: i + 1,
              rashi: rashiAtCusp,
              longitude: cusp,
              startLongitude: cusp,
              endLongitude: end,
              planets: []
              // Populated later
            });
          }
        }
        return bhavas;
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/kundli/vargas.js
  var require_vargas = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/kundli/vargas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getNavamsaSign = getNavamsaSign;
      exports.getAllVargas = getAllVargas;
      exports.getNavamsaChart = getNavamsaChart;
      var constants_1 = require_constants();
      var houses_1 = require_houses();
      function createVargaChart(ascendantLength, planets, calculationFn) {
        const ascRashi = calculationFn(ascendantLength);
        const dPlanets = {};
        for (const [name, data] of Object.entries(planets)) {
          const sign = calculationFn(data.longitude);
          dPlanets[name] = { rashi: sign, rashiName: constants_1.rashiNames[sign] };
        }
        const ascDegree = ascRashi * 30 + 15;
        const houses = (0, houses_1.getHouses)(ascDegree, "whole_sign");
        for (const [pName, pData] of Object.entries(dPlanets)) {
          const pRashi = pData.rashi;
          const house = houses.find((h) => h.rashi === pRashi);
          if (house)
            house.planets.push(pName);
        }
        return {
          ascendant: { rashi: ascRashi, rashiName: constants_1.rashiNames[ascRashi] },
          planets: dPlanets,
          houses
        };
      }
      function getRashiSign(longitude) {
        return Math.floor(longitude / 30);
      }
      function getHoraSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        const isOdd = rashi % 2 === 0;
        if (isOdd) {
          return degrees < 15 ? 4 : 3;
        } else {
          return degrees < 15 ? 3 : 4;
        }
      }
      function getDrekkanaSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        if (degrees < 10)
          return rashi;
        if (degrees < 20)
          return (rashi + 4) % 12;
        return (rashi + 8) % 12;
      }
      function getChaturthamshaSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        const part = Math.floor(degrees / 7.5);
        return (rashi + part * 3) % 12;
      }
      function getSaptamsaSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        const part = Math.floor(degrees / (30 / 7));
        const isOdd = rashi % 2 === 0;
        if (isOdd) {
          return (rashi + part) % 12;
        } else {
          const startSign = (rashi + 6) % 12;
          return (startSign + part) % 12;
        }
      }
      function getNavamsaSign(longitude) {
        const navamsaSpan = 360 / 108;
        const index = Math.floor(longitude / navamsaSpan);
        return index % 12;
      }
      function getDasamsaSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        const part = Math.floor(degrees / 3);
        const isOdd = rashi % 2 === 0;
        if (isOdd) {
          return (rashi + part) % 12;
        } else {
          const startSign = (rashi + 8) % 12;
          return (startSign + part) % 12;
        }
      }
      function getDwadasamsaSign(longitude) {
        const rashi = Math.floor(longitude / 30);
        const degrees = longitude % 30;
        const part = Math.floor(degrees / 2.5);
        return (rashi + part) % 12;
      }
      function getAllVargas(ascendantLength, planets) {
        return {
          d1: createVargaChart(ascendantLength, planets, getRashiSign),
          d2: createVargaChart(ascendantLength, planets, getHoraSign),
          d3: createVargaChart(ascendantLength, planets, getDrekkanaSign),
          d4: createVargaChart(ascendantLength, planets, getChaturthamshaSign),
          d7: createVargaChart(ascendantLength, planets, getSaptamsaSign),
          d9: createVargaChart(ascendantLength, planets, getNavamsaSign),
          d10: createVargaChart(ascendantLength, planets, getDasamsaSign),
          d12: createVargaChart(ascendantLength, planets, getDwadasamsaSign)
        };
      }
      function getNavamsaChart(ascendantLength, planets) {
        return createVargaChart(ascendantLength, planets, getNavamsaSign);
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/kundli/index.js
  var require_kundli = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/kundli/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getKundli = getKundli;
      var astronomy_engine_1 = require_astronomy();
      var ayanamsa_1 = require_ayanamsa();
      var calculations_1 = require_calculations();
      var constants_1 = require_constants();
      var houses_1 = require_houses();
      var vargas_1 = require_vargas();
      function getKundli(date, observer, config = {}) {
        const ayanamsa = (0, ayanamsa_1.getAyanamsa)(date);
        const lagnaLon = (0, calculations_1.getUdayaLagna)(date, observer, ayanamsa);
        const lagnaRashiIndex = Math.floor(lagnaLon / 30);
        const lagnaNakshatraIndex = (0, calculations_1.getNakshatra)(lagnaLon);
        const lagnaPada = (0, calculations_1.getNakshatraPada)(lagnaLon);
        const ascendant = {
          rashi: lagnaRashiIndex,
          rashiName: constants_1.rashiNames[lagnaRashiIndex],
          longitude: lagnaLon,
          nakshatra: constants_1.nakshatraNames[lagnaNakshatraIndex],
          pada: lagnaPada
        };
        const planets = {};
        const bodies = [
          astronomy_engine_1.Body.Sun,
          astronomy_engine_1.Body.Moon,
          astronomy_engine_1.Body.Mercury,
          astronomy_engine_1.Body.Venus,
          astronomy_engine_1.Body.Mars,
          astronomy_engine_1.Body.Jupiter,
          astronomy_engine_1.Body.Saturn,
          astronomy_engine_1.Body.Uranus,
          astronomy_engine_1.Body.Neptune,
          astronomy_engine_1.Body.Pluto
        ];
        const bodyNames = [
          "Sun",
          "Moon",
          "Mercury",
          "Venus",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
          "Pluto"
        ];
        bodies.forEach((body, idx) => {
          const name = bodyNames[idx];
          planets[name] = (0, calculations_1.getPlanetaryPosition)(body, date, ayanamsa);
        });
        const rahuPos = (0, calculations_1.getRahuPosition)(date, ayanamsa);
        planets["Rahu"] = rahuPos;
        planets["Ketu"] = (0, calculations_1.getKetuPosition)(rahuPos);
        const houseSystem = config.houseSystem === "equal_house" ? "equal_house" : "whole_sign";
        const houses = (0, houses_1.getHouses)(lagnaLon, houseSystem);
        for (const [pName, pData] of Object.entries(planets)) {
          const pLon = pData.longitude;
          const house = houses.find((h) => {
            if (h.startLongitude < h.endLongitude) {
              return pLon >= h.startLongitude && pLon < h.endLongitude;
            } else {
              return pLon >= h.startLongitude || pLon < h.endLongitude;
            }
          });
          if (house) {
            house.planets.push(pName);
          }
        }
        const moonLon = planets["Moon"].longitude;
        const dasha = (0, calculations_1.calculateVimshottariDasha)(moonLon, date);
        const vargas = (0, vargas_1.getAllVargas)(lagnaLon, planets);
        return {
          birthDetails: {
            date,
            lat: observer.latitude,
            lon: observer.longitude,
            timezone: 0
          },
          ascendant,
          planets,
          houses,
          dasha,
          vargas
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/kundli/types.js
  var require_types3 = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/kundli/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/matching/constants.js
  var require_constants2 = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/matching/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NADI_NAMES = exports.NAKSHATRA_NADI = exports.GANA_NAMES = exports.NAKSHATRA_GANA = exports.RASHI_LORDS = exports.YONI_NAMES = exports.NAKSHATRA_YONI = exports.RASHI_VASHYA = exports.VASHYA_TYPES = exports.RASHI_VARNA = exports.VARNA_ORDER = void 0;
      exports.VARNA_ORDER = ["Brahmin", "Kshatriya", "Vaishya", "Shudra"];
      exports.RASHI_VARNA = [
        1,
        // Aries (0) -> Kshatriya
        2,
        // Taurus (1) -> Vaishya
        3,
        // Gemini (2) -> Shudra
        0,
        // Cancer (3) -> Brahmin
        1,
        // Leo (4) -> Kshatriya
        2,
        // Virgo (5) -> Vaishya
        3,
        // Libra (6) -> Shudra
        0,
        // Scorpio (7) -> Brahmin
        1,
        // Sag (8) -> Kshatriya
        2,
        // Cap (9) -> Vaishya
        3,
        // Aqua (10) -> Shudra
        0
        // Pisces (11) -> Brahmin
      ];
      exports.VASHYA_TYPES = ["Chatushpad", "Manav", "Jalchar", "Vanchar", "Keet"];
      exports.RASHI_VASHYA = [
        0,
        // Aries: Chatushpad
        0,
        // Taurus: Chatushpad
        1,
        // Gemini: Manav
        2,
        // Cancer: Jalchar
        3,
        // Leo: Vanchar
        1,
        // Virgo: Manav
        1,
        // Libra: Manav
        4,
        // Scorpio: Keet
        1,
        // Sag: Manav (Simplify)
        0,
        // Cap: Chatushpad (Simplify - typically works for most calcs)
        1,
        // Aqua: Manav
        2
        // Pisces: Jalchar
      ];
      exports.NAKSHATRA_YONI = [
        0,
        1,
        2,
        3,
        3,
        4,
        5,
        2,
        5,
        // 0-8
        6,
        6,
        7,
        8,
        9,
        8,
        9,
        10,
        10,
        // 9-17
        4,
        11,
        12,
        11,
        13,
        0,
        13,
        7,
        1
        // 18-26
      ];
      exports.YONI_NAMES = [
        "Horse",
        "Elephant",
        "Sheep",
        "Snake",
        "Dog",
        "Cat",
        "Rat",
        "Cow",
        "Buffalo",
        "Tiger",
        "Deer",
        "Monkey",
        "Mongoose",
        "Lion"
      ];
      exports.RASHI_LORDS = [
        "Mars",
        "Venus",
        "Mercury",
        "Moon",
        "Sun",
        "Mercury",
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn",
        "Saturn",
        "Jupiter"
      ];
      exports.NAKSHATRA_GANA = [
        0,
        // Ashwini - Deva
        1,
        // Bharani - Manushya
        2,
        // Krittika - Rakshasa
        1,
        // Rohini - Manushya
        0,
        // Mrigasira - Deva
        1,
        // Ardra - Manushya (Check: Some say Rakshasa due to Rahu/Rudra). Drik says Manushya.
        0,
        // Punarvasu - Deva
        0,
        // Pushya - Deva
        2,
        // Ashlesha - Rakshasa
        2,
        // Magha - Rakshasa
        1,
        // P.Phalguni - Manushya
        1,
        // U.Phalguni - Manushya
        0,
        // Hasta - Deva
        2,
        // Chitra - Rakshasa
        0,
        // Swati - Deva
        2,
        // Visakha - Rakshasa
        0,
        // Anuradha - Deva
        2,
        // Jyeshtha - Rakshasa
        2,
        // Moola - Rakshasa
        1,
        // P.Ashadha - Manushya
        1,
        // U.Ashadha - Manushya
        0,
        // Shravana - Deva
        2,
        // Dhanishta - Rakshasa
        2,
        // Satabhisha - Rakshasa
        1,
        // P.Bhadrapada - Manushya
        1,
        // U.Bhadrapada - Manushya
        0
        // Revati - Deva
      ];
      exports.GANA_NAMES = ["Deva", "Manushya", "Rakshasa"];
      exports.NAKSHATRA_NADI = [
        0,
        1,
        2,
        2,
        1,
        0,
        0,
        1,
        2,
        2,
        1,
        0,
        0,
        1,
        2,
        2,
        1,
        0,
        0,
        1,
        2,
        2,
        1,
        0,
        0,
        1,
        2
      ];
      exports.NADI_NAMES = ["Adi (Start)", "Madhya (Middle)", "Antya (End)"];
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/matching/kootas.js
  var require_kootas = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/matching/kootas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.calculateVarna = calculateVarna;
      exports.calculateVashya = calculateVashya;
      exports.calculateTara = calculateTara;
      exports.calculateYoni = calculateYoni;
      exports.calculateGrahaMaitri = calculateGrahaMaitri;
      exports.calculateGana = calculateGana;
      exports.calculateBhakoot = calculateBhakoot;
      exports.calculateNadi = calculateNadi;
      var constants_1 = require_constants2();
      function calculateVarna(boyRashi, girlRashi) {
        const bVarna = constants_1.RASHI_VARNA[boyRashi];
        const gVarna = constants_1.RASHI_VARNA[girlRashi];
        let score = 0;
        if (bVarna <= gVarna) {
          score = 1;
        }
        return {
          name: "Varna",
          score,
          maxScore: 1,
          description: `Boy:${constants_1.VARNA_ORDER[bVarna]} - Girl:${constants_1.VARNA_ORDER[gVarna]}`,
          area: "Work/Ego"
        };
      }
      function calculateVashya(boyRashi, girlRashi) {
        const bType = constants_1.RASHI_VASHYA[boyRashi];
        const gType = constants_1.RASHI_VASHYA[girlRashi];
        const table = [
          [2, 1, 1, 0.5, 1],
          // Chatushpad
          [1, 2, 0.5, 0, 1],
          // Manav
          [1, 0.5, 2, 1, 1],
          // Jalchar
          [0.5, 0, 1, 2, 0],
          // Vanchar
          [1, 1, 1, 0, 2]
          // Keet
        ];
        const score = table[bType][gType];
        return {
          name: "Vashya",
          score,
          maxScore: 2,
          description: `Boy:${constants_1.VASHYA_TYPES[bType]} - Girl:${constants_1.VASHYA_TYPES[gType]}`,
          area: "Dominance/Control"
        };
      }
      function calculateTara(boyNak, girlNak) {
        let countGB = boyNak - girlNak;
        if (countGB < 0)
          countGB += 27;
        countGB += 1;
        const remGB = countGB % 9;
        const isGoodGB = [1, 2, 4, 6, 8, 0].includes(remGB);
        let countBG = girlNak - boyNak;
        if (countBG < 0)
          countBG += 27;
        countBG += 1;
        const remBG = countBG % 9;
        const isGoodBG = [1, 2, 4, 6, 8, 0].includes(remBG);
        let score = 0;
        if (isGoodGB && isGoodBG)
          score = 3;
        else if (isGoodGB || isGoodBG)
          score = 1.5;
        else
          score = 0;
        return {
          name: "Tara",
          score,
          maxScore: 3,
          description: `G-B Count:${countGB} (${isGoodGB ? "Good" : "Bad"}) / B-G Count:${countBG} (${isGoodBG ? "Good" : "Bad"})`,
          area: "Destiny/Luck"
        };
      }
      function calculateYoni(boyNak, girlNak) {
        const bYoni = constants_1.NAKSHATRA_YONI[boyNak];
        const gYoni = constants_1.NAKSHATRA_YONI[girlNak];
        if (bYoni === gYoni) {
          return { name: "Yoni", score: 4, maxScore: 4, description: "Same Yoni (Perfect)", area: "Sexual Compatibility" };
        }
        const greatEnemies = [[0, 8], [1, 13], [2, 11], [3, 12], [4, 10], [5, 6], [7, 9]];
        let isGreatEnemy = false;
        greatEnemies.forEach((pair) => {
          if (bYoni === pair[0] && gYoni === pair[1] || bYoni === pair[1] && gYoni === pair[0]) {
            isGreatEnemy = true;
          }
        });
        if (isGreatEnemy)
          return { name: "Yoni", score: 0, maxScore: 4, description: `Boy:${constants_1.YONI_NAMES[bYoni]} - Girl:${constants_1.YONI_NAMES[gYoni]} (Great Enemies)`, area: "Sexual Compatibility" };
        const enemies = [[8, 9], [1, 9], [0, 10]];
        let isEnemy = false;
        enemies.forEach((pair) => {
          if (bYoni === pair[0] && gYoni === pair[1] || bYoni === pair[1] && gYoni === pair[0]) {
            isEnemy = true;
          }
        });
        if (isEnemy)
          return { name: "Yoni", score: 1, maxScore: 4, description: `Boy:${constants_1.YONI_NAMES[bYoni]} - Girl:${constants_1.YONI_NAMES[gYoni]} (Enemies)`, area: "Sexual Compatibility" };
        return {
          name: "Yoni",
          score: 2,
          maxScore: 4,
          description: `Boy:${constants_1.YONI_NAMES[bYoni]} - Girl:${constants_1.YONI_NAMES[gYoni]} (Neutral)`,
          area: "Sexual Compatibility"
        };
      }
      function calculateGrahaMaitri(boyRashi, girlRashi) {
        const bLord = constants_1.RASHI_LORDS[boyRashi];
        const gLord = constants_1.RASHI_LORDS[girlRashi];
        const friends = {
          "Sun": ["Moon", "Mars", "Jupiter"],
          "Moon": ["Sun", "Mercury"],
          "Mars": ["Sun", "Moon", "Jupiter"],
          "Mercury": ["Sun", "Venus"],
          "Jupiter": ["Sun", "Moon", "Mars"],
          "Venus": ["Mercury", "Saturn"],
          "Saturn": ["Mercury", "Venus"]
        };
        const enemies = {
          "Sun": ["Venus", "Saturn"],
          "Moon": [],
          "Mars": ["Mercury"],
          "Mercury": ["Moon"],
          "Jupiter": ["Mercury", "Venus"],
          "Venus": ["Sun", "Moon"],
          "Saturn": ["Sun", "Moon", "Mars"]
        };
        const getRel = (planet, other) => {
          if (planet === other)
            return 1;
          if (friends[planet].includes(other))
            return 1;
          if (enemies[planet].includes(other))
            return -1;
          return 0;
        };
        const bToG = getRel(bLord, gLord);
        const gToB = getRel(gLord, bLord);
        let score = 0;
        if (bToG === 1 && gToB === 1)
          score = 5;
        else if (bToG === 1 && gToB === 0 || bToG === 0 && gToB === 1)
          score = 4;
        else if (bToG === 0 && gToB === 0)
          score = 3;
        else if (bToG === 1 && gToB === -1 || bToG === -1 && gToB === 1)
          score = 1;
        else if (bToG === 0 && gToB === -1 || bToG === -1 && gToB === 0)
          score = 0.5;
        else
          score = 0;
        const relMap = {
          5: "Best Friends",
          4: "Friends",
          3: "Neutral",
          1: "Enemies",
          0.5: "Bad enemies",
          0: "Bitter Enemies"
        };
        return {
          name: "Graha Maitri",
          score,
          maxScore: 5,
          description: `Boy:${bLord} - Girl:${gLord} (${relMap[score] || ""})`,
          area: "Mental Compatibility"
        };
      }
      function calculateGana(boyNak, girlNak) {
        const bGana = constants_1.NAKSHATRA_GANA[boyNak];
        const gGana = constants_1.NAKSHATRA_GANA[girlNak];
        if (bGana === gGana) {
          return { name: "Gana", score: 6, maxScore: 6, description: "Same Gana", area: "Temperament" };
        }
        const matrix = [
          [6, 6, 0],
          // Deva vs [D, M, R]
          [5, 6, 0],
          // Manushya vs [D, M, R]
          [0, 0, 6]
          // Rakshasa vs [D, M, R]
        ];
        const score = matrix[bGana][gGana];
        return {
          name: "Gana",
          score,
          maxScore: 6,
          description: `Boy:${constants_1.GANA_NAMES[bGana]} - Girl:${constants_1.GANA_NAMES[gGana]}`,
          area: "Temperament"
        };
      }
      function calculateBhakoot(boyRashi, girlRashi) {
        let diff = girlRashi - boyRashi;
        if (diff < 0)
          diff += 12;
        const pos = diff + 1;
        const isBad = [2, 12, 5, 9, 6, 8].includes(pos);
        let score = 7;
        let relName = `${pos}-axis`;
        if ([2, 12].includes(pos))
          relName = "Dwirdwadash (2-12)";
        if ([6, 8].includes(pos))
          relName = "Shadashtak (6-8)";
        if ([5, 9].includes(pos))
          relName = "Navpancham (5-9)";
        let description = `Position: ${relName}`;
        if (isBad) {
          const bLord = constants_1.RASHI_LORDS[boyRashi];
          const gLord = constants_1.RASHI_LORDS[girlRashi];
          if (bLord === gLord) {
            score = 7;
            description += ` (Exception: Same Lord ${bLord})`;
          } else {
            score = 0;
            description += " (Bhakoot Dosha)";
          }
        }
        return {
          name: "Bhakoot",
          score,
          maxScore: 7,
          description,
          area: "Love/Happiness"
        };
      }
      function calculateNadi(boyNak, girlNak, boyRashi, girlRashi) {
        const bNadi = constants_1.NAKSHATRA_NADI[boyNak];
        const gNadi = constants_1.NAKSHATRA_NADI[girlNak];
        let score = 8;
        let description = `Boy:${constants_1.NADI_NAMES[bNadi]} - Girl:${constants_1.NADI_NAMES[gNadi]}`;
        if (bNadi === gNadi) {
          score = 0;
          description += " (Nadi Dosha)";
          if (boyRashi !== void 0 && girlRashi !== void 0) {
            if (boyRashi === girlRashi && boyNak !== girlNak) {
              score = 8;
              description += " (Exception: Same Rashi, Diff Nakshatra)";
            }
          }
        }
        return {
          name: "Nadi",
          score,
          maxScore: 8,
          description,
          area: "Health/Genes"
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/matching/index.js
  var require_matching = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/matching/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkMangalDosha = checkMangalDosha;
      exports.matchKundli = matchKundli;
      var kootas_1 = require_kootas();
      function checkMangalDosha(kundli) {
        const getPos = (planetLon, refLon) => {
          let diff = Math.floor(planetLon / 30) - Math.floor(refLon / 30);
          if (diff < 0)
            diff += 12;
          return diff + 1;
        };
        const marsLon = kundli.planets["Mars"].longitude;
        const lagnaLon = kundli.ascendant.longitude;
        const moonLon = kundli.planets["Moon"].longitude;
        const venusLon = kundli.planets["Venus"].longitude;
        const posLagna = getPos(marsLon, lagnaLon);
        const posMoon = getPos(marsLon, moonLon);
        const posVenus = getPos(marsLon, venusLon);
        const doshaHouses = [1, 2, 4, 7, 8, 12];
        const isLagnaDosha = doshaHouses.includes(posLagna);
        const isMoonDosha = doshaHouses.includes(posMoon);
        const isVenusDosha = doshaHouses.includes(posVenus);
        if (!isLagnaDosha && !isMoonDosha && !isVenusDosha) {
          return { hasDosha: false, isHigh: false, description: "No Mangal Dosha" };
        }
        const marsRashi = Math.floor(marsLon / 30);
        const isOwnOrExalted = [0, 7, 9].includes(marsRashi);
        let descParts = [];
        if (isLagnaDosha)
          descParts.push(`Lagna(H${posLagna})`);
        if (isMoonDosha)
          descParts.push(`Moon(H${posMoon})`);
        if (isVenusDosha)
          descParts.push(`Venus(H${posVenus})`);
        const descriptionBase = `Present in: ${descParts.join(", ")}`;
        if (isOwnOrExalted) {
          return {
            hasDosha: false,
            isHigh: false,
            description: `Cancelled: ${descriptionBase} - Mars is Own/Exalted`
          };
        }
        const isHigh = isLagnaDosha;
        return {
          hasDosha: true,
          isHigh,
          description: descriptionBase
        };
      }
      function matchKundli(boy, girl) {
        const getNakIndex = (lon) => Math.floor(lon / (360 / 27));
        const getRashiIndex = (lon) => Math.floor(lon / 30);
        const bMoon = boy.planets["Moon"].longitude;
        const gMoon = girl.planets["Moon"].longitude;
        const bNak = getNakIndex(bMoon);
        const gNak = getNakIndex(gMoon);
        const bRashi = getRashiIndex(bMoon);
        const gRashi = getRashiIndex(gMoon);
        const kootas = [
          (0, kootas_1.calculateVarna)(bRashi, gRashi),
          (0, kootas_1.calculateVashya)(bRashi, gRashi),
          (0, kootas_1.calculateTara)(bNak, gNak),
          (0, kootas_1.calculateYoni)(bNak, gNak),
          (0, kootas_1.calculateGrahaMaitri)(bRashi, gRashi),
          (0, kootas_1.calculateGana)(bNak, gNak),
          (0, kootas_1.calculateBhakoot)(bRashi, gRashi),
          (0, kootas_1.calculateNadi)(bNak, gNak, bRashi, gRashi)
          // Updated signature
        ];
        const totalScore = kootas.reduce((sum, k) => sum + k.score, 0);
        const boyDosha = checkMangalDosha(boy);
        const girlDosha = checkMangalDosha(girl);
        let verdict = "Not Recommended";
        if (totalScore >= 18) {
          if (boyDosha.hasDosha && girlDosha.hasDosha) {
            verdict = "Good (Both Manglik)";
          } else if (!boyDosha.hasDosha && !girlDosha.hasDosha) {
            verdict = "Good to Proceed";
          } else {
            verdict = "Mismatch (Manglik Mismatch)";
            if (totalScore > 25)
              verdict += " - Consult Astrologer (High Score)";
          }
        } else {
          verdict = "Low Score (<18)";
        }
        return {
          ashtakoot: {
            totalScore,
            kootas
          },
          dosha: {
            boy: boyDosha,
            girl: girlDosha
          },
          verdict
        };
      }
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/matching/types.js
  var require_types4 = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/matching/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/types/festivals.js
  var require_festivals2 = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/types/festivals.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@ishubhamx/panchangam-js/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@ishubhamx/panchangam-js/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getUpcomingFestivals = exports.getEkadashiName = exports.getFestivalsByTithi = exports.getFestivals = exports.Observer = void 0;
      __exportStar(require_types(), exports);
      __exportStar(require_constants(), exports);
      __exportStar(require_calculations(), exports);
      __exportStar(require_ayanamsa(), exports);
      __exportStar(require_panchangam(), exports);
      __exportStar(require_types2(), exports);
      var astronomy_engine_1 = require_astronomy();
      Object.defineProperty(exports, "Observer", { enumerable: true, get: function() {
        return astronomy_engine_1.Observer;
      } });
      __exportStar(require_kundli(), exports);
      __exportStar(require_types3(), exports);
      __exportStar(require_matching(), exports);
      __exportStar(require_types4(), exports);
      __exportStar(require_shoola(), exports);
      __exportStar(require_chandrashtama(), exports);
      __exportStar(require_tarabalam(), exports);
      __exportStar(require_festivals2(), exports);
      var festivals_1 = require_festivals();
      Object.defineProperty(exports, "getFestivals", { enumerable: true, get: function() {
        return festivals_1.getFestivals;
      } });
      Object.defineProperty(exports, "getFestivalsByTithi", { enumerable: true, get: function() {
        return festivals_1.getFestivalsByTithi;
      } });
      Object.defineProperty(exports, "getEkadashiName", { enumerable: true, get: function() {
        return festivals_1.getEkadashiName;
      } });
      Object.defineProperty(exports, "getUpcomingFestivals", { enumerable: true, get: function() {
        return festivals_1.getUpcomingFestivals;
      } });
      __exportStar(require_udaya_tithi(), exports);
    }
  });

  // src/app.ts
  var import_panchangam_js = __toESM(require_dist());
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
      return -(/* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    function activePlace() {
      if (state.custom) return state.custom;
      return presets[state.place];
    }
    function render() {
      const place = activePlace();
      const observer = new import_panchangam_js.Observer(place.lat, place.lng, place.elevation || 0);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
      const p = (0, import_panchangam_js.getPanchangam)(/* @__PURE__ */ new Date(), observer, { timezoneOffset: getOffsetMinutes() || 330 });
      placeLabel.textContent = place.label;
      todayLabel.textContent = formatDate(/* @__PURE__ */ new Date());
      const cards = [
        ["Tithi", import_panchangam_js.tithiNames[p.tithi] || String(p.tithi)],
        ["Nakshatra", import_panchangam_js.nakshatraNames[p.nakshatra] || String(p.nakshatra)],
        ["Yoga", import_panchangam_js.yogaNames[p.yoga] || String(p.yoga)],
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
      const festivals = p.festivals && p.festivals.length ? p.festivals.slice(0, 4).map((item) => `<div class="history-card"><strong>${item.name}</strong><span class="muted">${item.category}</span></div>`).join("") : '<div class="history-card"><strong>Festival marker nahi hai</strong><span class="muted">Aaj regular panchang din hai.</span></div>';
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
})();
/*! Bundled license information:

astronomy-engine/astronomy.js:
  (**
      @preserve
  
      Astronomy library for JavaScript (browser and Node.js).
      https://github.com/cosinekitty/astronomy
  
      MIT License
  
      Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>
  
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
  
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
  
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
  *)
  (**
   * @fileoverview Astronomy calculation library for browser scripting and Node.js.
   * @author Don Cross <cosinekitty@gmail.com>
   * @license MIT
   *)
*/
