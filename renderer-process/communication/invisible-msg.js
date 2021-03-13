const {BrowserWindow} = require('electron').remote
const ipcRenderer = require('electron').ipcRenderer
const path = require('path')

const invisMsgBtn = document.getElementById('invis-msg')
const invisReply = document.getElementById('invis-reply')

invisMsgBtn.addEventListener('click', (clickEvent) => {
  const windowID = BrowserWindow.getFocusedWindow().id
  const invisPath = `file://${path.join(__dirname, '../../sections/communication/invisible.html')}`
  let win = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  })
  win.loadURL(invisPath)

  win.webContents.on('did-finish-load', (event) => {
    const input = 100
    // 作为一个父窗口，通过 webContents 调用 send 方法进行信息发送
    win.webContents.send('compute-factorial', input, windowID)
    // 如果是 event 需要通过 sender 获取 webContexts 对象
    // event.sender.send('compute-factorial', input, windowID)
  })
})

ipcRenderer.on('factorial-computed', (event, input, output) => {
  // input, output 属于自定义形参，有多少返回值，定义多少
  const message = `The factorial of ${input} is ${output}`
  invisReply.textContent = message
})
