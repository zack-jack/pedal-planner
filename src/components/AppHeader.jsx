import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Toolbar from './Toolbar';

const AppHeader = ({ showPedals, showPedalboards, toggleDrawer }) => (
  <header className="bg-white shadow-md z-90">
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
    <Toolbar
      showPedals={showPedals}
      showPedalboards={showPedalboards}
      toggleDrawer={toggleDrawer}
    />
  </header>
);

AppHeader.propTypes = {
  showPedals: PropTypes.bool.isRequired,
  showPedalboards: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppHeader;
