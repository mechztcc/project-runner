
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Carregar a interface Vue renderizada pelo Vite
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Porta padrão do Vite
  } else {
    win.loadFile(path.join(__dirname, 'renderer/index.html'));
  }
}

app.whenReady().then(createWindow);
