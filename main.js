require('dotenv').config();

const electron = require('electron');
const {ipcMain} = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
let authWindow = null;
let urlToLoad = '';

switch (process.env.NODE_ENV) {
    case 'prod':
        urlToLoad = path.join('file://', __dirname, '/dist/index.html');
        break;
    default:
        urlToLoad = 'http://localhost:9090/';
}

function createWindow () {
    mainWindow = new BrowserWindow(
        {
            width: 1280,
            height: 720,
            autoHideMenuBar: true
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

ipcMain.on('user-auth', () => {
    const clientId = process.env.MIXNODE_ID || null;
    authWindow = new BrowserWindow({
        width: 500,
        height: 720,
        parent: mainWindow,
        modal: true,
        autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true
        }
    });

    const redirectUrl = 'http://localhost:9090/callback';
    authWindow.loadURL('https://www.mixcloud.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirectUrl);

    authWindow.on('closed', function () {
        authWindow = null;
    });
});

ipcMain.on('oauth-token', (event, arg) => {
    mainWindow.webContents.send('user-log-in', arg);
    authWindow.close();
});
