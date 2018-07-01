import React from 'react';
import PropTypes from 'prop-types';
import { addLeadingZeros } from '../utils/utils';

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
        value={addLeadingZeros(value)}
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
      <label className="countdown__label">
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
