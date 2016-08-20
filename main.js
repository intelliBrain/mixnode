const electron = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
let urlToLoad = '';

switch (process.env.NODE_ENV) {
    case 'prod':
        urlToLoad = path.join('file://', __dirname, '/build/index.html');
        break;
    default:
        urlToLoad = 'http://localhost:9090';
}

function createWindow () {
    mainWindow = new BrowserWindow(
        {
            width: 1280, height: 720
        }
    );

    mainWindow.loadURL(urlToLoad);

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
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
