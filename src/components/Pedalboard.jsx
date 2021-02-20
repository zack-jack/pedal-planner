import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Draggable from 'react-draggable';

const Pedalboard = ({
  width, height, image, scale,
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
      <div style={imgStyles} className="pedalboard" />
    </Draggable>
  );
};

Pedalboard.defaultProps = {
  scale: 100,
};

Pedalboard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  scale: PropTypes.number,
};

export default Pedalboard;
