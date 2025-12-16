# ReactOne

A React.js project built with Vite and React Router DOM.

## Features

- ⚡️ Vite - Lightning fast build tool
- ⚛️ React 19 - Latest React version
- 🚀 React Router DOM v7 - Client-side routing
- 🎨 Modern UI with navigation
- 📱 Responsive design
- 🔍 ESLint configuration included

## Project Structure

```
ReactOne/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── App.css
│   ├── main.jsx         # Application entry point
│   └── index.css
├── public/              # Static assets
├── index.html
├── vite.config.js       # Vite configuration
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

## Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 Not Found page

## Technologies

- **React**: ^19.2.0
- **React DOM**: ^19.2.0
- **React Router DOM**: ^7.10.1
- **Vite**: ^7.2.4
- **ESLint**: ^9.39.1
