import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <>
      <Navbar />
      <h1>App Component</h1>
      <Outlet />
    </>
  );
}
