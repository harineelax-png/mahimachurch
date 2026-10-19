# Mahima Church website

A React single-page website for Mahima Church. Page navigation is handled by React Router; the shared navigation bar is rendered by the app around each page.

## Technology

- JavaScript and JSX, using React 19
- Create React App (`react-scripts`) for the development server and production build
- React Router DOM 7 for client-side routes
- React-Bootstrap and Bootstrap 5 for shared UI components and styles
- Page-specific styling uses CSS files, inline styles, and (in some components) `styled-components`
- Other installed integrations include FullCalendar and EmailJS

Dependencies and available commands are listed in [package.json](./package.json). This is a frontend-only project; no backend server is defined in the package scripts.

## Run locally

Install a current Node.js LTS release, then from the project root run:

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads after source changes.

On Windows PowerShell, if the `npm` command is blocked by the script execution policy, use the Windows command shim instead:

```powershell
npm.cmd install
npm.cmd start
```

Other available commands:

```sh
npm test       # Start the Create React App test runner
npm run build  # Create an optimized production build in build/
```

## Project layout

```text
src/
  App.js                    App shell and URL-to-page route definitions
  index.js                  React application entry point
  index.css                 Global base styles
  components/
    Navbar.jsx              Active shared navigation bar
    Navbar.css              Older custom-nav styles (not currently imported)
    pages/                  Route-level page components
    sections/               Sections reused within pages
  images/                   Images imported by components
public/                     Static files served as-is
```

## Add a page

1. Create a component in `src/components/pages/`, for example `src/components/pages/Contact.jsx`:

   ```jsx
   function Contact() {
     return <main><h1>Contact</h1></main>;
   }

   export default Contact;
   ```

2. Import it and register its URL in the `<Routes>` block in [src/App.js](./src/App.js):

   ```jsx
   import Contact from "./components/pages/Contact";

   // Inside <Routes>:
   <Route path="/contact" element={<Contact />} />
   ```

3. If visitors should reach it from the shared navigation, add a React-Bootstrap link in [src/components/Navbar.jsx](./src/components/Navbar.jsx), using React Router's `Link`:

   ```jsx
   <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
   ```

   For a link inside the About dropdown, add a `NavDropdown.Item` there instead. Use `<Link to="...">` for internal pages; use a regular `<a href="...">` for external sites.

4. Add a page-specific stylesheet next to the page (for example `Contact.css`) and import it from the component if needed. Put shared base styles in `src/index.css`. Put reusable visual sections in `src/components/sections/`.

## Update an existing page or navigation

- **Page content/behavior:** edit its component in `src/components/pages/`. For example, the home page is assembled from section components in `Home.jsx`; edit those in `src/components/sections/` when changing a specific home-page section.
- **URL or page component mapping:** edit the route in `src/App.js`.
- **Navigation labels, destinations, dropdown, and layout:** edit `src/components/Navbar.jsx`. This is the navbar imported by `App.js`.
- **Global styling:** edit `src/index.css`; for page-specific styles, edit or add the page's imported CSS file.
- **Images:** add assets under `src/images/` and import them in the JSX component that uses them.

`src/components/Navbar.css` is **not currently imported** by `Navbar.jsx`; editing it alone will not change the active navbar. The active navbar is built with React-Bootstrap. If you want to use the custom CSS rules in `Navbar.css`, first connect that stylesheet to the active component and ensure its selectors match the rendered markup.

## Current routes

| URL | Page component |
| --- | --- |
| `/` | `Home` |
| `/about` | `About` |
| `/about/our-story` | `OurStory` |
| `/about/leadership` | `Leadership` |
| `/about/mission` | `Mission` |
| `/about/beliefs` | `Beliefs` |
| `/watch-online` | `VideoSection` |
| `/locations` | `Sundays` |
| `/donate` | `Donate` |
| `/what-to-expect` | `Whattoexpect` |
| `/care` | `Care` |
| `/events` | `COMEvents` |
| `/prayer` | `PrayerRequest` |
