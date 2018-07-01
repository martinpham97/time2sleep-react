import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

const Option = (props) => {
  const {
    icon,
    text,
  } = props;
  return (
    <div className="option">
      <Ionicon
        icon={icon}
        className="option__icon"
      />
      {text}
    </div>
  );
};

Option.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
