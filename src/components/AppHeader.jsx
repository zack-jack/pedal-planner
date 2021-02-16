import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <div className="bg-white shadow-md z-90">
    <div className="flex justify-between p-4">
      <Link to="/" className="text-2xl">Pedal Tetris</Link>
      <nav className="flex items-center">
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default AppHeader;
