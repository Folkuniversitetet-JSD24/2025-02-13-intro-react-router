Here’s a filled-out version of your lesson content with explanations and descriptions. You can add your own code examples where needed.

---

# 2025-02-13 Intro React Router

<details open>
  <summary>Table of content</summary>

- [What is React Router?](#what-is-react-router)
- [Choose Router - createBrowserRouter()](#choose-router---createbrowserrouter)
- [Configure the router object](#configure-the-router-object)
- [Implement router in main](#implement-router-in-main)
- [Outlet](#outlet)
- [Links](#links)
- [Hooks in React Router](#hooks-in-react-router)

</details>

## What is React Router?

React Router is a library that enables client-side routing in React applications. Instead of relying on full-page reloads like traditional websites, React Router allows navigation between different views within a single-page application (SPA) without reloading the browser.

Key benefits:

- **Efficient navigation**: Users can switch views quickly without reloading the page.
- **Dynamic routing**: Routes can be defined based on parameters, making it easy to handle user-specific pages.
- **Nested routes**: Components can be structured in a way that reflects UI hierarchy.
- **Built-in hooks**: Provides hooks like `useNavigate` and `useParams` for handling navigation and route parameters.

[Back to top](#2025-02-13-intro-react-router)

## Choose Router - createBrowserRouter()

React Router provides multiple routers, but in most modern applications, `createBrowserRouter()` is the preferred choice.

Why?

- Uses the **browser’s history API** (same as real websites) instead of using hash-based URLs (`/#/page`).
- Provides better SEO support compared to `createHashRouter()`.
- Works well with the newer **data loading APIs** in React Router.

Other router options include:

- **createHashRouter()** – Uses hash-based URLs (useful for older browsers or static file hosting).
- **createMemoryRouter()** – Used for testing or non-browser environments.

[Back to top](#2025-02-13-intro-react-router)

## Configure the router object

To define application routes, we use a router object that contains route definitions. This is where we specify different paths and associate them with components.

A route typically consists of:

- **Path (`path`)** – The URL pattern for the route.
- **Element (`element`)** – The React component that should be rendered.
- **Children (`children`)** – Nested routes that define subpages.

React Router v6 introduces **data-aware routing**, where routes can also define:

- **Loaders** – Functions that fetch data before rendering a page.
- **Actions** – Functions that handle form submissions.
- **Error elements** – Components to display errors when a route fails to load.

[Back to top](#2025-02-13-intro-react-router)

## Implement router in main

Once the router object is defined, it needs to be integrated into the React application. This is done by wrapping the app with `RouterProvider`.

Why?

- Ensures that React knows about the routing structure.
- Allows navigation between different views.
- Makes router-specific hooks (like `useNavigate`) work properly.

This step is similar to how we wrap an app with providers (e.g., Context API) to make global state available.

[Back to top](#2025-02-13-intro-react-router)

## Outlet

The `<Outlet>` component is a placeholder for **nested routes**. It acts as a "window" where child components of a parent route will be rendered.

Why is this useful?

- Helps maintain a **consistent layout** across different views.
- Reduces redundancy by allowing shared UI elements (like a navbar) to persist across pages.
- Allows complex UI hierarchies where routes are structured logically.

For example, if a layout component has a sidebar that should remain while different child views change, `<Outlet>` ensures only the child content updates while keeping the sidebar intact. _( If you know about Context API that is )_

[Back to top](#2025-02-13-intro-react-router)

## Links

In React Router, we use `<Link>` instead of `<a>` for navigation. Unlike traditional `<a>` tags, `<Link>`:

- **Prevents full-page reloads**, making navigation seamless.
- **Improves performance** by keeping React in control of UI updates.
- **Supports active styling**, so you can highlight the current page.

Additionally, `<NavLink>` is a special type of `<Link>` that automatically adds an "active" class when the link matches the current route, useful for menus and navigation bars.

[Back to top](#2025-02-13-intro-react-router)

## Hooks in React Router

React Router provides several hooks that help with navigation and accessing route-related data:

- **`useNavigate()`** – Programmatically navigate to a different route.
- **`useParams()`** – Access route parameters (e.g., `/:id` in a dynamic route).
- **`useLocation()`** – Get information about the current URL.
- **`useSearchParams()`** – Read and update query parameters.
- **`useRouteError()`** – Handle errors in routes.

These hooks replace older concepts like `withRouter` and are the recommended way to interact with routing in modern React applications.

---

[Back to top](#2025-02-13-intro-react-router)
