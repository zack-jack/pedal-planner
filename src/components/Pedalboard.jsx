import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Draggable from 'react-draggable';

import removeIcon from '../assets/close-x-white.svg';
import rotateIcon from '../assets/rotate-white.svg';

const Pedalboard = ({
  id, width, height, image, scale, remove,
}) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  const imgUrl = `${process.env.REACT_APP_PEDAL_PLANNER_API}/${image}`;
  // 1/3 scale is arbitrary and just worked well with window size
  const imgStyles = {
    width: `${width * (scale / 3)}px`,
    height: `${height * (scale / 3)}px`,
    backgroundImage: `url(${imgUrl})`,
  };

  const handleDrag = (e, data) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + data.deltaX,
      y: y + data.deltaY,
    });
  };

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      onDrag={handleDrag}
    >
      <div className="pedalboard">
        <div className="pedalboard__actions">
          <button
            type="button"
            className="mr-2"
          >
            <img
              alt="rotate icon"
              src={rotateIcon}
              className="pedalboard__btn-icon"
            />
          </button>
          <button
            type="button"
            onClick={() => remove(id)}
          >
            <img
              alt="remove icon"
              src={removeIcon}
              className="pedalboard__btn-icon"
            />
          </button>
        </div>
        <div style={imgStyles} className="pedalboard__image" />
      </div>
    </Draggable>
  );
};

Pedalboard.defaultProps = {
  scale: 100,
};

Pedalboard.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  scale: PropTypes.number,
  remove: PropTypes.func.isRequired,
};

export default Pedalboard;
