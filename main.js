const { app, BrowserWindow, ipcMain } = require('electron');

const serve = require('electron-serve');

const loadURL = serve({ directory: 'dist' });

// In main process.
ipcMain.on('asynchronous-message', (event, arg) => {
	console.log(arg) // prints "ping"
	event.reply('asynchronous-reply', 'pong')
  })
  
ipcMain.on('synchronous-message', (event, arg) => {
	console.log(arg) // prints "ping"
	event.returnValue = 'pong'
})

let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			webSecurity: false,
		},
		fullscreen: true
	});
	mainWindow.setMenuBarVisibility(false)

	await loadURL(mainWindow);

	// The above is equivalent to this:
	// await mainWindow.loadURL('app://-');
	// The `-` is just the required hostname
})();