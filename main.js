const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 200,
    height: 80,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })

  win.loadFile('index.html')

  ipcMain.on('print-value', (_event, value) => {
    console.log(value);
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow()
})