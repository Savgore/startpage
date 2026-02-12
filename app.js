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

    // ---- Weather (wttr.in) ----
    const WEATHER_ICONS = {
        Clear: "☀️",
        Sunny: "☀️",
        "Partly cloudy": "⛅",
        "Partly Cloudy": "⛅",
        Cloudy: "☁️",
        Overcast: "☁️",
        Mist: "🌫️",
        Fog: "🌫️",
        "Patchy rain possible": "🌦️",
        "Patchy rain nearby": "🌦️",
        "Light rain": "🌧️",
        "Light drizzle": "🌧️",
        "Moderate rain": "🌧️",
        Rain: "🌧️",
        "Heavy rain": "🌧️",
        Thunderstorm: "⛈️",
        Snow: "🌨️",
        "Light snow": "🌨️",
        Sleet: "🌨️",
        Blizzard: "❄️",
    };

    function getWeatherIcon(desc) {
        for (const [key, icon] of Object.entries(WEATHER_ICONS)) {
            if (desc.toLowerCase().includes(key.toLowerCase())) return icon;
        }
        return "🌡️";
    }

    async function fetchWeather() {
        const loc = encodeURIComponent(CONFIG.weather.location);
        try {
            const res = await fetch(`https://wttr.in/${loc}?format=j1`);
            if (!res.ok) throw new Error("Weather fetch failed");
            const data = await res.json();

            const current = data.current_condition[0];
            const desc = current.weatherDesc[0].value;
            const tempKey = CONFIG.weather.units === "imperial" ? "temp_F" : "temp_C";
            const unit = CONFIG.weather.units === "imperial" ? "°F" : "°C";

            $("#weather-icon").textContent = getWeatherIcon(desc);
            $("#weather-temp").textContent = `${current[tempKey]}${unit}`;
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
          <a href="${link.url}" target="_self" rel="noopener">
            <span class="link-icon">${link.icon}</span>
            ${link.name}
          </a>`;
                list.appendChild(li);
            });

            card.appendChild(title);
            card.appendChild(list);
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
