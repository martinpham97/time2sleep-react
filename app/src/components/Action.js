import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';
import ToggleButton from './ToggleButton';

const Action = (props) => {
  const {
    options,
    option,
    isOpen,
    start,
    handleSelectOption,
    handleToggleOptions,
    handleToggleTimer,
  } = props;

  return (
    <div className="action">
      <Options
        options={options}
        option={option}
        isOpen={isOpen}
        start={start}
        handleSelectOption={handleSelectOption}
        handleToggleOptions={handleToggleOptions}
      />
      <ToggleButton
        start={start}
        handleToggleTimer={handleToggleTimer}
      />
    </div>
  );
};

Action.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      cmd: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
  option: PropTypes.shape({
    cmd: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  start: PropTypes.bool.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleToggleOptions: PropTypes.func.isRequired,
  handleToggleTimer: PropTypes.func.isRequired,
};

export default Action;
