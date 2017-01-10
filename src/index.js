const electron = require('electron');
const {ipcMain} = require('electron');
const app = electron.app;
const Axios = require('axios');
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
let authWindow = null;
const urlToLoad = `file://${__dirname}/app.html`;

const createWindow = () => {
    mainWindow = new BrowserWindow(
        {
            width: 1280,
            height: 720,
            autoHideMenuBar: true
        }
    );

    mainWindow.loadURL(urlToLoad);
    mainWindow.on('closed', () => mainWindow = null);
};

app.on('ready', createWindow);

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
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

    authWindow.loadURL(`https://www.mixcloud.com/oauth/authorize?client_id=${clientId}&redirect_uri=${urlToLoad}`);

    authWindow.on('closed', () => authWindow = null);

    authWindow.webContents.on('did-get-redirect-request', (e, oldUrl, newUrl) => {
        let redirectUrl = oldUrl.split('redirect_uri=')[1];
        let code = newUrl.split('code=')[1];
        let url = `https://beta.mixcloud.com/oauth/access_token?client_id=${process.env.MIXNODE_ID}&redirect_uri=${redirectUrl}&client_secret=${process.env.MIXNODE_SECRET}&code=${code}`;
        Axios.get(url).then((res) => {
            mainWindow.webContents.send('user-log-in', res.data.access_token);
            authWindow.close();
        });
    });
});
