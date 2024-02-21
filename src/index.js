const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const path = require('node:path')


function handleSetTitle (event, title) {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  win.setTitle(title)
  console.log(title)
}


function receivedFromRender(event, text ){
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  console.log(text)
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })


  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.openDevTools()
  
}

app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle)
  ipcMain.on('send-input', receivedFromRender)
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
    }
  })
})



try {
  require('electron-reloader')(module)
} catch (_) {}