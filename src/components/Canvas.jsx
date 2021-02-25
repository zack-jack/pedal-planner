import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Pedal from './Pedal';
import Pedalboard from './Pedalboard';

const Canvas = ({
  pedalSelections, pedalboardSelections, removePedal, removePedalboard,
}) => {
  const [scale] = useState(100);

  return (
    <div className="canvas">
      {
        Object.keys(pedalSelections).map((key) => (
          <Pedal
            key={key}
            id={key}
            width={pedalSelections[key].width}
            height={pedalSelections[key].height}
            image={pedalSelections[key].image}
            scale={scale}
            remove={removePedal}
          />
        ))
      }
      {
        Object.keys(pedalboardSelections).map((key) => (
          <Pedalboard
            key={key}
            id={key}
            width={pedalboardSelections[key].width}
            height={pedalboardSelections[key].height}
            image={pedalboardSelections[key].image}
            scale={scale}
            remove={removePedalboard}
          />
        ))
      }
    </div>
  );
};

Canvas.defaultProps = {
  pedalSelections: {},
  pedalboardSelections: {},
};

Canvas.propTypes = {
  pedalSelections: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  }),
  pedalboardSelections: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
  }),
  removePedal: PropTypes.func.isRequired,
  removePedalboard: PropTypes.func.isRequired,
};

export default Canvas;
