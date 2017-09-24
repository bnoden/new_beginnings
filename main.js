const { app } = require('electron'), mainWindow = require('./mainWindow')

app.on('ready', mainWindow.createWindow)
app.on('window-all-closed', () => 'darwin' !== process.platform && app.quit())
app.on('activate', () => mainWindow || mainWindow.createWindow())
