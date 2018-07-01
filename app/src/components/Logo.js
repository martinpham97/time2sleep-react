import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const { src } = props;
  return (
    <div className="logo">
      <img draggable={false} src={src} className="logo__img" alt="time2sleep" />
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Logo;
