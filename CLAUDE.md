# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website based on the **HTML5 UP Editorial template** - a responsive blog/magazine-style template featuring a toggleable sidebar with accordion navigation. The template is licensed under CCA 3.0 for both personal and commercial use.

## Project Structure

```
html5up-editorial/
├── index.html           # Main homepage
├── generic.html         # Generic content page template
├── elements.html        # UI elements reference page
├── assets/
│   ├── css/            # Compiled CSS (main.css)
│   ├── sass/           # SASS source files
│   │   ├── base/       # Base styles and resets
│   │   ├── components/ # Reusable UI components
│   │   ├── layout/     # Layout-specific styles (sidebar, header, etc.)
│   │   ├── libs/       # Third-party library styles
│   │   └── main.scss   # Main SASS entry point
│   ├── js/             # JavaScript files
│   │   ├── main.js     # Core functionality (sidebar, menu, breakpoints)
│   │   ├── util.js     # Utility functions
│   │   └── *.min.js    # Third-party libraries (jQuery, breakpoints, browser)
│   └── webfonts/       # Font Awesome icon fonts
└── images/             # Image assets
```

## Key Architecture

### Layout System

The template uses a **two-column layout** with a main content area and a toggleable sidebar:

- **#wrapper**: Top-level container
- **#main**: Primary content area on the left
  - **#header**: Top header with logo and social icons
  - **#banner**: Hero section (homepage only)
  - Content sections with various components
- **#sidebar**: Right sidebar (toggleable on smaller screens)
  - **#search**: Search form
  - **#menu**: Accordion navigation menu
  - Contact section and footer

### Responsive Behavior

Breakpoints defined in [assets/js/main.js](html5up-editorial/assets/js/main.js):
- `xlarge`: 1281px - 1680px
- `large`: 981px - 1280px
- `medium`: 737px - 980px
- `small`: 481px - 736px
- `xsmall`: 361px - 480px
- `xxsmall`: ≤360px

The sidebar is:
- **Active/visible** by default on screens **>large** (>1280px)
- **Inactive/hidden** by default on screens **≤large** (≤1280px)
- **Toggleable** via a toggle button on smaller screens

### Sidebar Locking Mechanism

The sidebar implements a sophisticated scroll-locking feature (see [assets/js/main.js:166-235](html5up-editorial/assets/js/main.js#L166-L235)):
- On large screens, the sidebar locks in position when scrolling
- Prevents sidebar from scrolling out of view when content is longer than viewport
- Uses fixed positioning with dynamic top offset calculation

### Menu System

The accordion menu in the sidebar ([assets/js/main.js:237-260](html5up-editorial/assets/js/main.js#L237-L260)):
- Uses `.opener` class for expandable menu items
- Only one submenu can be active at a time
- Triggers resize events to update sidebar lock calculations

## Styling Architecture

### SASS Organization

Styles are organized using a modular SASS structure:
- **base/**: Typography, page resets, base element styles
- **components/**: Buttons, forms, icons, lists, tables, etc.
- **layout/**: Header, sidebar, menu, banner, footer layouts
- **libs/**: Third-party library customizations

Compile SASS to CSS: Changes to `.scss` files in `assets/sass/` must be compiled to `assets/css/main.css`

### CSS Compilation

This template uses SASS. If you modify styles:
1. Edit files in `assets/sass/`
2. Compile using a SASS compiler: `sass assets/sass/main.scss assets/css/main.css`
3. The compiled `main.css` is what the HTML files reference

## JavaScript Dependencies

The template requires these scripts to be loaded in order:
1. jQuery (jquery.min.js)
2. Browser detection (browser.min.js)
3. Breakpoint utilities (breakpoints.min.js)
4. Utility functions (util.js)
5. Main functionality (main.js)

## Common Customization Points

### Updating Content
- **Homepage**: Edit [index.html](html5up-editorial/index.html)
- **Navigation menu**: Modify the `#menu` section in sidebar (lines 162-194 in index.html)
- **Social links**: Update header icons section (lines 26-32)
- **Contact info**: Edit sidebar contact section (lines 221-232)

### Styling Changes
- **Colors and fonts**: Modify SASS variables in `assets/sass/base/`
- **Component styles**: Edit specific component files in `assets/sass/components/`
- **Layout adjustments**: Modify files in `assets/sass/layout/`

### Adding New Pages
1. Copy `generic.html` as a template
2. Update the `<title>` tag
3. Modify the main content area inside `#main > .inner`
4. Add link to navigation menu in sidebar
5. Ensure all asset paths are correct

## Browser Compatibility

The template includes polyfills and workarounds for:
- Object-fit images (Safari fallback)
- Chrome/Android scrollbar positioning bugs
- Responsive image handling

## Third-Party Libraries

- **jQuery**: DOM manipulation and event handling
- **Font Awesome**: Icon set (fontawesome-all.min.css)
- **Responsive Tools**: Breakpoint management (by @ajlkn)
- **Fonts**: Open Sans and Roboto Slab (Google Fonts)
