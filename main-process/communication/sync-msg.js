const {ipcMain} = require('electron')

ipcMain.on('synchronous-message', (event, arg) => {
  // returnValue 属性放置返回信息
  event.returnValue = 'pong'
})
