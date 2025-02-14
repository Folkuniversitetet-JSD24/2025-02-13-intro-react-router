import { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* NavLink will inject an 'active' class that we can style whenever its 'to'-attribute matches the url */}
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
