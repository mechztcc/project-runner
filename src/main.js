const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

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
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Carregar a interface Vue renderizada pelo Vite
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173"); // Porta padrão do Vite
  } else {
    win.loadFile(path.join(__dirname, "renderer/index.html"));
  }
}

function getFoldersInDev() {
  const devPath = path.join("/home/alberto/dev");

  try {
    const folders = fs
      .readdirSync(devPath)
      .filter((file) => fs.statSync(path.join(devPath, file)).isDirectory());

    return folders;
  } catch (error) {
    console.error("Erro ao ler a pasta:", error);
    return [];
  }
}

app.whenReady().then(createWindow);

ipcMain.handle("get-folders", () => {
  return getFoldersInDev();
});
