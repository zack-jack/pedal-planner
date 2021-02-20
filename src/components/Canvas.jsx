import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Pedal from './Pedal';
import Pedalboard from './Pedalboard';

const Canvas = ({ pedalSelections, pedalboardSelections }) => {
  const [scale] = useState(100);

  return (
    <div className="canvas">
      {
        pedalSelections.map(({
          id, width, height, image,
        }) => (
          <Pedal
            key={id}
            width={width}
            height={height}
            image={image}
            scale={scale}
          />
        ))
      }
      {
        pedalboardSelections.map(({
          id, width, height, image,
        }) => (
          <Pedalboard
            key={id}
            width={width}
            height={height}
            image={image}
            scale={scale}
          />
        ))
      }
    </div>
  );
};

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
