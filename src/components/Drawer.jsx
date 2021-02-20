import React from 'react';
import { PropTypes } from 'prop-types';

const Drawer = ({
  closeDrawer, pedals, pedalboards, selectPedal, selectPedalboard, showPedals, showPedalboards,
}) => {
  const classList = (showPedals || showPedalboards) ? 'drawer open' : 'drawer';
  const pedalBrands = [...new Set(pedals.map(({ brand }) => brand))];
  const pedalboardBrands = [...new Set(pedalboards.map(({ brand }) => brand))];

  const itemsList = () => {
    if (showPedals) {
      return pedalBrands.map((brand) => (
        <div key={brand} className="drawer__group">
          <p className="drawer__group-heading">{brand}</p>
          {
            pedals
              .filter((item) => item.brand === brand)
              .map(({ id, name }) => (
                <ul key={id} className="drawer__list">
                  <li className="drawer__list-item">
                    <button
                      type="button"
                      className="drawer__button"
                      onClick={() => selectPedal(id)}
                    >
                      {name}
                    </button>
                  </li>
                </ul>
              ))
          }
        </div>
      ));
    }

    if (showPedalboards) {
      return pedalboardBrands.map((brand) => (
        <div key={brand} className="drawer__group">
          <p className="drawer__group-heading">{brand}</p>
          {
            pedalboards
              .filter((item) => item.brand === brand)
              .map(({ id, name }) => (
                <ul key={id} className="drawer__list">
                  <li className="drawer__list-item">
                    <button
                      type="button"
                      className="drawer__button"
                      onClick={() => selectPedalboard(id)}
                    >
                      {name}
                    </button>
                  </li>
                </ul>
              ))
          }
        </div>
      ));
    }

    return <div />;
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
      { itemsList() }
    </div>
  );
};

Drawer.defaultProps = {
  pedals: [],
  pedalboards: [],
};

Drawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  pedals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  })),
  pedalboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  })),
  selectPedal: PropTypes.func.isRequired,
  selectPedalboard: PropTypes.func.isRequired,
  showPedals: PropTypes.bool.isRequired,
  showPedalboards: PropTypes.bool.isRequired,
};

export default Drawer;
