# Magnifico - Fine Dining Restaurant Website

**Magnifico** is a mock restaurant homepage built with Webpack and modular JavaScript. It demonstrates a complete multi-tab SPA (Single Page Application) featuring a homepage, menu, and about/contact section — all dynamically rendered using JavaScript DOM manipulation. The UI is styled with CSS and includes award graphics, chef bios, and even a looping interior GIF background.

## Demo Website
https://junehyukyoo.github.io/restaurant-page/

## 🚀 Features

- **Modular JavaScript Design** using ES Modules
- **Fully Dynamic DOM Rendering** (No hardcoded HTML content in `index.html`)
- **Three Tab Navigation:**
  - **Home:** Restaurant intro, awards, and background animation
  - **Menu:** Elegant course layout (starters, mains, desserts)
  - **About:** Contact details, embedded Google Maps, and chef bios
- **Sticky Header Navigation**
- **Dark Elegant UI Theme**
- **Webpack Development Server**

## 📁 File Structure

```
magnifico/
│
├── dist/                     # Webpack output (gitignored)
├── node_modules/             # Dependencies (gitignored)
├── src/
│   ├── index.js              # Main entry point, sets up tab-switching
│   ├── home.js               # Renders the home tab
│   ├── menu.js               # Renders the menu tab
│   ├── about.js              # Renders the about/contact tab
│   ├── createElement.js      # Helper for cleaner DOM element creation
│   ├── style.css             # Global styles
│   └── template.html         # HTML template loaded by Webpack
│
├── package.json
├── webpack.config.js
└── .gitignore
```

## 🧰 Technologies Used

- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Webpack** (with `webpack-cli`, `webpack-dev-server`)
- **Google Fonts** and embedded Google Maps
- **CSS Flexbox & Gradients** for layout/styling

## 🛠️ Setup Instructions

1. **Clone the Repo:**

```bash
git clone https://github.com/your-username/magnifico.git
cd magnifico
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Run Development Server:**

```bash
npx webpack serve
```

4. Open your browser to [http://localhost:8080](http://localhost:8080)


## 📄 .gitignore

```
node_modules
dist
```

## ✨ Highlighted Features

- **Responsive Layout:** Images and sections scale within the viewport.
- **GIF Background:** Seamlessly looped restaurant interior animation.
- **Reusable DOM Helper:** `createElement(type, content, className, id)` simplifies creating elements.
- **Modular Tabs:** Each tab lives in its own module for clean code separation.
- **Awards Section:** Displays honors like Michelin Stars and Luxury Restaurant Awards.
- **Chef Bios:** Highlight the fictional culinary team with elegant formatting.
- **Map Embed:** Uses Google Maps iframe to simulate restaurant location.

## 📌 Assignment Objectives Checklist

- ✅ Webpack setup with `package.json`, `webpack.config.js`
- ✅ `template.html` used as HTML entry point
- ✅ `.gitignore` includes `node_modules` and `dist`
- ✅ `index.js` initializes JS and controls tab-switching
- ✅ Each tab (Home, Menu, About) is modularized
- ✅ DOM fully generated via JS (not hardcoded HTML)
- ✅ CSS and layout provide professional, clean aesthetic
- ✅ Navigation buttons switch views with JavaScript

## 🧠 Credits & Acknowledgments

- Project idea based on The Odin Project's **Restaurant Page** assignment.
- Chef and dish names are fictional and used for demonstration purposes only.
- Google Maps embed used for educational use only.



## 📜 License

This project is for educational use and is not intended for production or commercial deployment.