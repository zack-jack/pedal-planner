import React from 'react';
import { PropTypes } from 'prop-types';

import Pedal from './Pedal';
import Pedalboard from './Pedalboard';

const Canvas = ({ pedalSelections, pedalboardSelections }) => (
  <div className="canvas">
    {
      pedalSelections.map(({
        id, brand, name, width, height, image,
      }) => (
        <Pedal
          key={id}
          id={id}
          brand={brand}
          name={name}
          width={width}
          height={height}
          image={image}
        />
      ))
    }
    {
      pedalboardSelections.map(({
        id, brand, name, width, height, image,
      }) => (
        <Pedalboard
          key={id}
          id={id}
          brand={brand}
          name={name}
          width={width}
          height={height}
          image={image}
        />
      ))
    }
  </div>
);

Canvas.defaultProps = {
  pedalSelections: [],
  pedalboardSelections: [],
};

Canvas.propTypes = {
  pedalSelections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  })),
  pedalboardSelections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  })),
};

export default Canvas;
