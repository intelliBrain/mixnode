const electron = require('electron');
const fs = require('fs');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

let mainWindow = null;
let urlToLoad = '';

console.log('process.node', process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'prod':
    urlToLoad = 'file://' + __dirname + '/build/index.html';
    break;
  default:
    urlToLoad = 'http://localhost:9090';
}

function createWindow() {
  mainWindow = new BrowserWindow({width: 1152, height: 648});

  mainWindow.loadURL(urlToLoad);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('load-split', (evt, args) => {
  console.log(args);
  fs.readFile(path.join(__dirname, 'src/split_examples/gtaIII.json'), (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(JSON.parse(data));
    evt.sender.send('loaded-split', JSON.parse(data));
  });
});
