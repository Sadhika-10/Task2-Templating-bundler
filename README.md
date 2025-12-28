# Internship Task 2 – Strict Tech Stack Implementation

## Overview
This repository contains **Internship Task 2**, where the Internship Task Document from **Task 1** is recreated using a **strictly enforced technology stack**.  
The final compiled HTML output exactly matches the original document in layout, formatting, emojis, styling, and clickable links.

---

## Technology Stack
- **Templating Engine:** Nunjucks  
- **Bundler / Task Runner:** Vite  

Both a templating engine and a bundler were mandatory and have been used consistently throughout the project.

---

## Project Structure

internship-task-2/
│
├── src/
│ ├── templates/ # Nunjucks template files (.njk)
│ │ ├── index.njk
│ │ └── partials/ # Optional: header, footer, reusable components
│ │
│ ├── assets/
│ │ ├── css/ # Stylesheets
│ │ │ └── style.css
│ │ ├── js/ # JavaScript files
│ │ │ └── main.js
│ │ └── images/ # Images used in the document
│
├── dist/ # Compiled HTML output (auto-generated)
│ └── index.html
│
├── package.json # Node.js dependencies and scripts
├── vite.config.js # Vite configuration
