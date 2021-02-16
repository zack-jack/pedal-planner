import React from 'react';
import { PropTypes } from 'prop-types';

const Drawer = ({ closeDrawer, showPedals, showPedalboards }) => {
  const classList = (showPedals || showPedalboards) ? 'drawer open' : 'drawer';

  const text = () => {
    if (showPedals) {
      return 'Pedals';
    }

    if (showPedalboards) {
      return 'Pedalboards';
    }

    return '';
  };

  return (
    <div className={classList}>
      <div className="drawer__top-bar">
        <button
          id="close-btn"
          aria-label="Close"
          type="button"
          className="drawer__close-btn"
          onClick={() => closeDrawer()}
        >
          <span className="w-full h-full sr-only">Close</span>
        </button>
      </div>
      { text() }
    </div>
  );
};

Drawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  showPedals: PropTypes.bool.isRequired,
  showPedalboards: PropTypes.bool.isRequired,
};

export default Drawer;
