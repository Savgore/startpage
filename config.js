const CONFIG = {
  // Personalisation
  name: "Sav",

  // Weather settings
  weather: {
    location: "Coventry",     // City name for weather lookup
    units: "metric",         // "metric" (°C) or "imperial" (°F)
  },

  // Background — local file path or full URL
  background: "bg.jpg",


  // Shortcut groups
  groups: [
    {
      title: "Business",
      icon: "💼",
      links: [
        { name: "Slack", url: "https://slack.com", icon: "💬" },
        { name: "Jira", url: "https://jira.atlassian.com", icon: "📋" },
        { name: "Confluence", url: "https://confluence.atlassian.com", icon: "📝" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "🔗" },
        { name: "Teams", url: "https://teams.microsoft.com", icon: "👥" },
        { name: "OneDrive", url: "https://onedrive.live.com", icon: "☁️" },
      ],
    },
    {
      title: "Personal",
      icon: "🏠",
      links: [
        { name: "YouTube", url: "https://youtube.com", icon: "▶️" },
        { name: "Reddit", url: "https://reddit.com", icon: "🗨️" },
        { name: "Twitter / X", url: "https://x.com", icon: "🐦" },
        { name: "Instagram", url: "https://instagram.com", icon: "📷" },
        { name: "Amazon", url: "https://amazon.co.uk", icon: "📦" },
        { name: "Netflix", url: "https://netflix.com", icon: "🎬" },
      ],
    },
    {
      title: "Mail",
      icon: "📧",
      links: [
        { name: "Work Outlook", url: "https://outlook.office.com", icon: "📨" },
        { name: "Gmail", url: "https://mail.google.com", icon: "📩" },
        { name: "ProtonMail", url: "https://mail.proton.me", icon: "🔒" },
      ],
    },
    {
      title: "Tools",
      icon: "🛠",
      links: [
        { name: "GitHub", url: "https://github.com", icon: "🐙" },
        { name: "ChatGPT", url: "https://chat.openai.com", icon: "🤖" },
        { name: "Figma", url: "https://figma.com", icon: "🎨" },
        { name: "Vercel", url: "https://vercel.com", icon: "▲" },
        { name: "Notion", url: "https://notion.so", icon: "📓" },
        { name: "CodePen", url: "https://codepen.io", icon: "✏️" },
      ],
    },
  ],
};
