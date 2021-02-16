import React from 'react';
import { PropTypes } from 'prop-types';

import menuIcon from '../assets/menu.svg';
import plusIcon from '../assets/plus.svg';

const Toolbar = ({ showPedals, showPedalboards, toggleDrawer }) => (
  <div className="toolbar">
    <ul className="flex">
      <li
        className={showPedalboards ? 'toolbar__item active' : 'toolbar__item'}
      >
        <button
          id="toolbar-pedalboard-btn"
          type="button"
          className="toolbar__btn"
          onClick={(e) => toggleDrawer(e.target.id)}
        >
          <img
            alt="menu icon"
            src={menuIcon}
            className="toolbar__btn-icon"
          />
          Pedalboard
        </button>
      </li>
      <li
        className={showPedals ? 'toolbar__item active' : 'toolbar__item'}
      >
        <button
          id="toolbar-add-pedal-btn"
          type="button"
          className="toolbar__btn"
          onClick={(e) => toggleDrawer(e.target.id)}
        >
          <img
            alt="plus icon"
            src={plusIcon}
            className="toolbar__btn-icon"
          />
          Add Pedal
        </button>
      </li>
    </ul>
  </div>
);

Toolbar.propTypes = {
  showPedals: PropTypes.bool.isRequired,
  showPedalboards: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Toolbar;
