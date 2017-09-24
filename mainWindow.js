const { BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

exports.win
exports.createWindow = () => {
  let winState = windowStateKeeper({defaultWidth: 800, defaultHeight: 600})

  this.win = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    minWidth: 300,
    minHeight: 150,
    x: winState.x,
    y: winState.y
  })
  this.win.loadURL(`file://${__dirname}/renderer/main.html`)
  this.win.on('closed', () => this.win = null)
}
