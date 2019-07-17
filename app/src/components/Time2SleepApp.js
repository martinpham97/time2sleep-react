import React, { Component } from 'react';
import Action from './Action';
import Logo from './Logo';
import Timer from './Timer';
import LogoImg from '../assets/img/time2sleep.png';
import { getTimeRemaining, getTotalTime } from '../utils/utils';

const { ipcRenderer } = require('electron');

// Default options for all systems
const defaultOptions = ['shutdown', 'reboot'];

const allOptions = [
  {
    cmd: 'shutdown',
    icon: 'md-power',
  },
  {
    cmd: 'reboot',
    icon: 'md-refresh',
  },
  {
    cmd: 'hibernate',
    icon: 'md-sunny',
  },
  {
    cmd: 'log-off',
    icon: 'md-lock',
  },
  {
    cmd: 'sleep',
    icon: 'md-moon',
  },
];

export default class Time2SleepApp extends Component {
  state = {
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    options: allOptions.filter(key => defaultOptions.includes(key.cmd)),
    option: allOptions.filter(key => defaultOptions.includes(key.cmd))[0],
    isOpen: false,
    start: false,
    raf: undefined,
  };

  componentWillMount() {
    ipcRenderer.on('osinfo', (e, osinfo) => {
      if (osinfo === 'win32') {
        defaultOptions.push('hibernate', 'log-off');
      } else if (osinfo === 'darwin') {
        defaultOptions.push('sleep');
      }

      const availableOptions = allOptions.filter(key => defaultOptions.includes(key.cmd));

      this.setState({
        options: availableOptions,
        option: availableOptions[0],
      });
    });
  }

  handleToggleOptions = () => {
    const { isOpen } = this.state;

    // Handles outside clicks
    if (!isOpen) {
      document.addEventListener('click', this.handleToggleOptions, false);
    } else {
      document.removeEventListener('click', this.handleToggleOptions, false);
    }

    this.setState(() => ({
      isOpen: !isOpen,
    }));
  };

  handleChangeTime = (newTime) => {
    const { time } = this.state;

    this.setState(() => ({
      time: {
        ...time,
        ...newTime,
      },
    }));
  };

  handleToggleTimer = () => {
    const {
      start,
      time,
    } = this.state;

    if (!start) {
      this.startTimer(getTotalTime(time));
    } else {
      this.stopTimer();
    }

    this.setState(() => ({
      start: !start,
    }));
  };

  startTimer = (time) => {
    const { option } = this.state;

    // More consistent and accurate than setInterval
    const raf = requestAnimationFrame(() => {
      const timeLeft = getTimeRemaining(time);

      if (timeLeft.seconds < 0) {
        // Countdown completed
        this.stopTimer();
        ipcRenderer.send('timer:completed', option.cmd);
      } else {
        // Update current time
        this.setState({ time: timeLeft });
      }

      this.startTimer(time);
    });

    this.setState({ raf });
  };

  stopTimer = () => {
    const { raf } = this.state;
    cancelAnimationFrame(raf);

    this.setState(() => ({
      start: false,
    }));
  };

  handleSelectOption = (key) => {
    this.setState(() => ({
      option: key,
    }));

    this.handleToggleOptions();
  };

  render() {
    const {
      time,
      options,
      option,
      start,
      isOpen,
    } = this.state;

    return (
      <div className="container">
        <Logo src={LogoImg} />
        <Timer
          start={start}
          time={time}
          handleChangeTime={this.handleChangeTime}
        />
        <Action
          options={options}
          option={option}
          start={start}
          isOpen={isOpen}
          handleToggleTimer={this.handleToggleTimer}
          handleSelectOption={this.handleSelectOption}
          handleToggleOptions={this.handleToggleOptions}
        />
      </div>
    );
  }
}
