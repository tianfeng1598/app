const {ipcRenderer} = require('electron')

const syncMsgBtn = document.getElementById('sync-msg')

syncMsgBtn.addEventListener('click', () => {
  // ipcRenderer.sendSync 同步消息，发送结束必定有返回
  const reply = ipcRenderer.sendSync('synchronous-message', 'ping')
  const message = `Synchronous message reply: ${reply}`
  document.getElementById('sync-reply').innerHTML = message
})
