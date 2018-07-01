import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
  const {
    start,
    handleToggleTimer,
  } = props;

  return (
    <div>
      <button
        className={`toggle-button ${start && 'toggle-button--stop'}`}
        type="button"
        onClick={handleToggleTimer}
      >
        {start ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

ToggleButton.propTypes = {
  start: PropTypes.bool.isRequired,
  handleToggleTimer: PropTypes.func.isRequired,
};

export default ToggleButton;
