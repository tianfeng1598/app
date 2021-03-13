const {ipcMain} = require('electron')

// ipcMain 监听指定渠道信息
ipcMain.on('asynchronous-message', (event, arg) => {
  // event.sender.send 是发送消息的方法，ipcMain 是没有这个方法的
  event.sender.send('asynchronous-reply', 'pong')
})

