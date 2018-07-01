import React from 'react';
import { render } from 'react-dom';
import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './styles/styles.scss';
import Time2SleepApp from './components/Time2SleepApp';

const electron = window.require('electron');
const { ipcRenderer } = electron;

// Default options for all systems
const options = ['shutdown', 'reboot'];

ipcRenderer.on('osinfo', (e, osinfo) => {
  if (osinfo === 'win32') {
    options.push('hibernate', 'log-off');
  } else if (osinfo === 'darwin') {
    options.push('sleep');
  }

  render(
    <Time2SleepApp options={options} />, document.getElementById('app'),
  );
});
