import React from 'react';
import PropTypes from 'prop-types';
import Countdown from './Countdown';
import { capitalize } from '../utils/utils';

const Timer = (props) => {
  const {
    start,
    time,
    handleChangeTime,
  } = props;

  return (
    <div className="timer">
      {
        Object.keys(time).map(key => (
          <Countdown
            key={key}
            id={key}
            text={time[key] > 1 ? capitalize(key) : capitalize(key.slice(0, -1))}
            start={start}
            value={time[key]}
            handleChangeTime={handleChangeTime}
          />
        ))
      }
    </div>
  );
};

Timer.propTypes = {
  start: PropTypes.bool.isRequired,
  time: PropTypes.shape({
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
  }).isRequired,
  handleChangeTime: PropTypes.func.isRequired,
};

export default Timer;
