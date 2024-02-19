const { contextBridge, ipcRenderer } = require('electron/renderer')
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')

})



ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


