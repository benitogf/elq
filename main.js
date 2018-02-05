const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

const loadURL = serve({directory: 'dist'});

app.on('ready', () => {
	mainWindow = new BrowserWindow();
	loadURL(mainWindow);
});
