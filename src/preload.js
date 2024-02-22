const { contextBridge, ipcRenderer } = require('electron/renderer')
const fs = require('fs');

contextBridge.exposeInMainWorld('electronAPI', {
  sendToMain: (text) => ipcRenderer.send('send-input', text, console.log(text)),
})
  

