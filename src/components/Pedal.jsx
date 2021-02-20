import React from 'react';
import { PropTypes } from 'prop-types';

const Pedal = ({
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
    >
      <img
        alt={`${brand}-${name}`}
        src={image}
        className="w-full h-full"
      />
    </div>
  );
};

Pedal.propTypes = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pedal;
