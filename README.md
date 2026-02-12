# Startpage

A personal browser startpage hosted on GitHub Pages. Grouped shortcuts, weather widget, search bar, and a dark glassmorphism design.

## Quick Start

1. Clone or download this repo
2. Open `index.html` in a browser — that's it

For local development with live reload:
```bash
npx serve .
```

## Configuration

Edit **`config.js`** to customise:

- **`name`** — Your name (used in the greeting)
- **`weather.location`** — City for the weather widget
- **`weather.units`** — `"metric"` (°C) or `"imperial"` (°F)
- **`background`** — Path or URL to a background image
- **`searchEngine`** — `"google"`, `"duckduckgo"`, or `"bing"`
- **`groups`** — Array of shortcut groups, each with a title, icon, and links array

### Adding a Link

In `config.js`, add to the relevant group's `links` array:
```javascript
{ name: "My Link", url: "https://example.com", icon: "🔗" }
```

### Adding a Group

Add a new object to the `groups` array:
```javascript
{
  title: "Group Name",
  icon: "🎯",
  links: [
    { name: "Link 1", url: "https://example.com", icon: "🔗" },
  ]
}
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your startpage is live at `https://<username>.github.io/startpage/`

## Setting as New Tab

| Browser | Method |
|---|---|
| Chrome / Edge | Install [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/) extension |
| Firefox | Install [New Tab Override](https://addons.mozilla.org/en-GB/firefox/addon/new-tab-override/) |
| Safari | Preferences → General → Set homepage |

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | Styles & theme |
| `app.js` | Weather, clock, search, rendering |
| `config.js` | **All your settings & shortcuts** |
| `bg.jpg` | Background image |
