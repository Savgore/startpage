/* ========================================================
   Startpage — App Logic
   ======================================================== */

(function () {
    "use strict";

    // ---- Helpers ----
    const $ = (sel) => document.querySelector(sel);
    const pad = (n) => String(n).padStart(2, "0");

    // ---- Background ----
    function setBackground() {
        const bg = $("#bg");
        const src = CONFIG.background || "bg.jpg";
        bg.style.backgroundImage = `url('${src}')`;
    }

    // ---- Greeting ----
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 5) return "Good night";
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        return "Good evening";
    }

    function updateGreeting() {
        const el = $("#greeting");
        el.textContent = `${getGreeting()}, ${CONFIG.name}.`;
    }

    // ---- Date ----
    function updateDate() {
        const el = $("#date");
        const now = new Date();
        el.textContent = now.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    // ---- Clock ----
    function updateClock() {
        const el = $("#clock");
        const now = new Date();
        el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }

    // ---- Weather (Open-Meteo — free, no API key) ----
    const WMO_CODES = {
        0: ["☀️", "Clear sky"],
        1: ["🌤️", "Mainly clear"],
        2: ["⛅", "Partly cloudy"],
        3: ["☁️", "Overcast"],
        45: ["🌫️", "Fog"],
        48: ["🌫️", "Rime fog"],
        51: ["🌦️", "Light drizzle"],
        53: ["🌦️", "Drizzle"],
        55: ["🌧️", "Heavy drizzle"],
        56: ["🌧️", "Freezing drizzle"],
        57: ["🌧️", "Heavy freezing drizzle"],
        61: ["🌧️", "Light rain"],
        63: ["🌧️", "Rain"],
        65: ["🌧️", "Heavy rain"],
        66: ["🌧️", "Freezing rain"],
        67: ["🌧️", "Heavy freezing rain"],
        71: ["🌨️", "Light snow"],
        73: ["🌨️", "Snow"],
        75: ["❄️", "Heavy snow"],
        77: ["❄️", "Snow grains"],
        80: ["🌦️", "Light showers"],
        81: ["🌧️", "Showers"],
        82: ["🌧️", "Heavy showers"],
        85: ["🌨️", "Light snow showers"],
        86: ["🌨️", "Snow showers"],
        95: ["⛈️", "Thunderstorm"],
        96: ["⛈️", "Thunderstorm with hail"],
        99: ["⛈️", "Thunderstorm with heavy hail"],
    };

    async function fetchWeather() {
        const { latitude, longitude } = CONFIG.weather;
        const unit = CONFIG.weather.units === "imperial" ? "fahrenheit" : "celsius";
        const symbol = CONFIG.weather.units === "imperial" ? "°F" : "°C";
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=${unit}&timezone=auto`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Weather fetch failed");
            const data = await res.json();

            const temp = Math.round(data.current.temperature_2m);
            const code = data.current.weather_code;
            const [icon, desc] = WMO_CODES[code] || ["🌡️", "Unknown"];

            $("#weather-icon").textContent = icon;
            $("#weather-temp").textContent = `${temp}${symbol}`;
            $("#weather-desc").textContent = desc;
        } catch (err) {
            console.warn("Weather error:", err);
            $("#weather-desc").textContent = "Weather unavailable";
        }
    }

    // ---- Render Groups ----
    function renderGroups() {
        const container = $("#groups");

        CONFIG.groups.forEach((group) => {
            const card = document.createElement("div");
            card.className = "group-card";

            const title = document.createElement("div");
            title.className = "group-title";
            title.innerHTML = `<span class="group-title-icon">${group.icon}</span>${group.title}`;

            const list = document.createElement("ul");
            list.className = "group-links";

            group.links.forEach((link) => {
                const li = document.createElement("li");
                li.className = "link-item";
                li.innerHTML = `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer">
            <span class="link-icon">${link.icon}</span>
            ${link.name}
          </a>`;
                list.appendChild(li);
            });

            const openAll = document.createElement("button");
            openAll.className = "open-all-btn";
            openAll.textContent = "Open All";
            openAll.addEventListener("click", () => {
                group.links.forEach((link) => window.open(link.url, "_blank"));
            });

            card.appendChild(title);
            card.appendChild(list);
            card.appendChild(openAll);
            container.appendChild(card);
        });
    }

    // ---- Init ----
    function init() {
        setBackground();
        updateGreeting();
        updateDate();
        updateClock();
        fetchWeather();

        renderGroups();

        // Tick clock every 15 seconds
        setInterval(() => {
            updateClock();
            updateGreeting();
        }, 15000);

        // Refresh weather every 30 minutes
        setInterval(fetchWeather, 30 * 60 * 1000);
    }

    document.addEventListener("DOMContentLoaded", init);
})();
