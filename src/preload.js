const { contextBridge, ipcRenderer } = require('electron/renderer')
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  sendMssg: () => ipcRenderer.sendSync('synchronous-message', 'pinging'), 
})
  

