const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('fs');



function receivedFromRender(event, text) {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  console.log(text)
  let writer = fs.createWriteStream("sample.txt");
  writer.write(text);

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
  ipcMain.on('send-input', receivedFromRender)
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
    }
  })
})




