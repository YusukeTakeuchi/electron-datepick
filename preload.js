const { ipcRenderer } = require('electron');


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }

  document.getElementById('submit-button').addEventListener('click', () => {
    const value = document.getElementById('date').value;
    ipcRenderer.send('print-value', value);
  });
})