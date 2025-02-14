import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
import { StartPage } from './pages/StartPage';
import { ContactPage } from './pages/ContactPage';
import { ProductsPage } from './pages/ProductsPage';

// Object version of the router
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <StartPage /> },
//       { path: 'about', element: <AboutPage /> },
//     ],
//   },
// ]);

// JSX version of the router
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="products/:id" element={<ProductsPage />} />
    </Route>
  )
);
