import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { capitalize } from '../utils/utils';

const Options = (props) => {
  const {
    options,
    option,
    isOpen,
    start,
    handleToggleOptions,
    handleSelectOption,
  } = props;

  return (
    <div className="options">
      <button
        type="button"
        className={`options__button ${isOpen && 'is-open'}`}
        disabled={start}
        onClick={handleToggleOptions}
      >
        <Option
          icon={option.icon}
          text={capitalize(option.cmd)}
        />
      </button>
      <div
        className={`options__list ${isOpen && 'is-open'}`}
      >
        {
          options.map(key => (
            <a
              key={key.cmd}
              className="options__item"
              href={`#${key.cmd}`}
              onClick={() => {
                handleSelectOption(key);
              }}
            >
              <Option
                icon={key.icon}
                text={capitalize(key.cmd)}
              />
            </a>
          ))
        }
      </div>
    </div>
  );
};

Options.propTypes = {
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
  handleToggleOptions: PropTypes.func.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
};

export default Options;
