const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  sendToMain: (text) => ipcRenderer.send('send-input', text, console.log(text))
})
  

