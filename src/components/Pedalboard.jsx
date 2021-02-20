import React from 'react';
import { PropTypes } from 'prop-types';

const Pedalboard = ({
  id, brand, name, width, height, image,
}) => {
  const sizeStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      key={id}
      style={sizeStyles}
      className="z-10"
    >
      <img
        alt={`${brand}-${name}`}
        src={image}
        className="w-full h-full"
      />
    </div>
  );
};

Pedalboard.propTypes = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pedalboard;
