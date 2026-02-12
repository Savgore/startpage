const CONFIG = {
  // Personalisation
  name: "Sav",

  // Weather settings
  weather: {
    latitude: 52.41,           // Coventry
    longitude: -1.51,
    units: "metric",           // "metric" (°C) or "imperial" (°F)
  },

  // Background — local file path or full URL
  background: "bg.jpg",


  // Shortcut groups
  groups: [
    {
      title: "Work",
      icon: "💼",
      links: [
        { name: "Outlook", url: "https://outlook.office.com", icon: "�" },
        { name: "QuickBooks", url: "https://quickbooks.intuit.com/uk/login/", icon: "�" },
        { name: "Twenty CRM", url: "https://adas-ltd.twenty.com/", icon: "�️" },
        { name: "Tenable", url: "https://cloud.tenable.com", icon: "�️" },
        { name: "IASME Certs", url: "https://iasme.co.uk/cyber-essentials/ncsc-certificate-search/", icon: "🏅" },
        { name: "ADAS Website", url: "https://adas-ltd.com", icon: "🌐" },
        { name: "OneDrive", url: "https://onedrive.live.com", icon: "☁️" },
      ],
    },
    {
      title: "Turtledove",
      icon: "🐢",
      links: [
        { name: "Gmail", url: "https://mail.google.com", icon: "📩" },
        { name: "GitHub", url: "https://github.com", icon: "�" },
        { name: "Cloudflare", url: "https://dash.cloudflare.com/", icon: "�" },
        { name: "Kansoban", url: "https://www.kansoban.com", icon: "📋" },
      ],
    },
    {
      title: "Personal",
      icon: "🏠",
      links: [
        { name: "Claude", url: "https://claude.ai", icon: "�" },
        { name: "ChatGPT", url: "https://chat.openai.com", icon: "🤖" },
        { name: "Gemini", url: "https://gemini.google.com", icon: "�" },
        { name: "CoPilot", url: "https://copilot.microsoft.com", icon: "✈️" },
        { name: "Hacker News", url: "https://news.ycombinator.com", icon: "🟧" },
        { name: "Readwise", url: "https://read.readwise.io/", icon: "📖" },
        { name: "YouTube", url: "https://youtube.com", icon: "▶️" },
        { name: "myNoise", url: "https://mynoise.net/", icon: "🎧" },
      ],
    },
  ],
};
