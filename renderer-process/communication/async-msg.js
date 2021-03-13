const {ipcRenderer} = require('electron')

const asyncMsgBtn = document.getElementById('async-msg')

// 按钮事件监听
asyncMsgBtn.addEventListener('click', () => {
  // ipcRenderer 发送消息 send(渠道，参数...)
  ipcRenderer.send('asynchronous-message', 'ping')
})

// ipcRenderer 监听指定渠道信息
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('async-reply').innerHTML = message
})
