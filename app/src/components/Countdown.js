import React from 'react';
import PropTypes from 'prop-types';

const Countdown = (props) => {
  const {
    id,
    value,
    start,
    text,
    handleChangeTime,
  } = props;
  return (
    <div className="countdown">
      <input
        className="countdown__input"
        type="number"
        step={1}
        min={0}
        value={String(value).padStart(2, '0')}
        disabled={start}
        onChange={(e) => {
          const time = {};
          time[id] = parseInt(e.target.value, 10);

          // Check valid numbers
          if (!Number.isNaN(time[id])) {
            handleChangeTime(time);
          }
        }}
      />
      <label
        htmlFor="countdown__input"
        className="countdown__label"
      >
        {text}
      </label>
    </div>
  );
};

Countdown.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  start: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleChangeTime: PropTypes.func.isRequired,
};

export default Countdown;
