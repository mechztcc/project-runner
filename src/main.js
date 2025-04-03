
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200, // Largura da janela
    height: 800, // Altura da janela
    minWidth: 800, // Largura mínima
    minHeight: 600, // Altura mínima
    maxWidth: 1920, // Largura máxima (opcional)
    maxHeight: 1080, // Altura máxima (opcional)
    resizable: true, // Permitir redimensionamento (defina como `false` para fixo)
    fullscreen: false, // Abrir em tela cheia
    fullscreenable: true, // Permitir alternar para tela cheia
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Carregar a interface Vue renderizada pelo Vite
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Porta padrão do Vite
  } else {
    win.loadFile(path.join(__dirname, 'renderer/index.html'));
  }
}

app.whenReady().then(createWindow);
