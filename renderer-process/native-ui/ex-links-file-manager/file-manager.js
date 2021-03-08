const {shell} = require('electron')
const os = require('os')

const fileManagerBtn = document.getElementById('open-file-manager')

fileManagerBtn.addEventListener('click', (event) => {
  // os 对象是系统对象，可以用来获取系统属性
  // shell.showItemInFolder(os.homedir())
  // 可以打开指定路径
  // shell.showItemInFolder('D:\\effie\\resources\\app.asar.unpacked\\node_modules\\phantomjs-prebuilt')
  shell.showItemInFolder('D:/effie/resources/app.asar.unpacked/node_modules/phantomjs-prebuilt')
})
