# Professional Developer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Projects are managed via a JSON file for easy updates.

## 🎨 Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern Aesthetics**: Clean, professional dark theme with cyan accents
- **Dynamic Projects**: Projects loaded from `projects.json` (easy to add new ones)
- **Smooth Animations**: Scroll-triggered fade-ins and hover effects
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Performance**: Lightweight, no external dependencies except Font Awesome

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # Complete CSS styling
├── script.js           # JavaScript for interactions & project loading
├── projects.json       # Project data (easily editable)
├── images/             # Portfolio images
│   ├── meshack.jpg     # Profile picture
│   ├── afya.png
│   ├── coders.png
│   └── plus.png
└── README.md           # This file
```

## 🚀 Quick Start

### Local Testing

1. **Using Python 3** (recommended):
   ```bash
   cd /path/to/Portfolio
   python3 -m http.server 8000
   ```
   Then open: `http://localhost:8000`

2. **Using Node.js**:
   ```bash
   npx http-server -p 8000
   ```
   Then open: `http://localhost:8000`

3. **Using VS Code Live Server**:
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

