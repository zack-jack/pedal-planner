import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <header className="bg-white z-100">
    <div className="flex justify-between p-4">
      <Link
        to="/"
        className="text-2xl"
      >
        Pedal Planner
      </Link>
      <nav className="flex items-center">
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default AppHeader;
