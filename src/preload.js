const { contextBridge, ipcRenderer } = require('electron/renderer')
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  sendMssg: () => ipcRenderer.sendSync('synchronous-message', 'pinging'), 
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
  counterValue: (value) => ipcRenderer.send('counter-value', value)
})
  
const result = ipcRenderer.sendSync('synchronous-message', 'pinging')
console.log(result) // prints "pong" in the DevTools console
console.log(`from preload${result}`)
