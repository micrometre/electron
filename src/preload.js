const { contextBridge, ipcRenderer } = require('electron/renderer')
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title, console.log(title) ),
  sendToMain: (text) => ipcRenderer.send('send-input', text, console.log(text))
})
  

