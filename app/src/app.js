import React from 'react';
import { render } from 'react-dom';
import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './styles/styles.scss';
import Time2SleepApp from './components/Time2SleepApp';

render(
  <Time2SleepApp />, document.getElementById('app'),
);
