// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getFolders: () => ipcRenderer.invoke('get-folders'),
  runScript: (projectName, scriptName) => ipcRenderer.invoke("run-script", projectName, scriptName),
  stopScript: (projectName) => ipcRenderer.invoke("stop-script", projectName),
  selectFolder: () => ipcRenderer.invoke("select-folder"),
});


