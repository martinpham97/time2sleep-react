const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, ipcMain } = electron;
const shutdown = require('electron-shutdown-command');

require('dotenv').config();

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd'),
});

// To avoid being garbage collected
let mainWindow;

// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow = new BrowserWindow({
    width: 600,
    height: 480,
    radii: [3, 3, 3, 3],
    resizable: false,
    title: `${app.getName()} - ${app.getVersion()}`,
    transparent: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Prevent title changed to default
  mainWindow.on('page-title-updated', e => e.preventDefault());

  // Load html into window from file://dirname/app/index.html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app', 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Quit app on closed
  mainWindow.on('close', () => {
    app.quit();
  });

  // Remove default menu
  mainWindow.setMenu(null);

  // Developer Mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.toggleDevTools();
  }

  // Send OS info
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('osinfo', process.platform);
  });

  // Catch timer Complete
  ipcMain.on('timer:completed', (e, option) => {
    const settings = {
      force: true,
      timerseconds: 0,
      sudo: true,
      debug: process.env.NODE_ENV === 'development',
      quitapp: true,
    };

    switch (option) {
      case 'shutdown':
        shutdown.shutdown(settings);
        break;
      case 'reboot':
        shutdown.reboot(settings);
        break;
      case 'sleep':
        shutdown.sleep(settings);
        break;
      case 'log-off':
        shutdown.logoff(settings);
        break;
      case 'hibernate':
        shutdown.hibernate(settings);
        break;
      case 'abort':
        shutdown.abort(settings);
        break;
      default:
        shutdown.shutdown(settings);
        break;
    }
  });
});
