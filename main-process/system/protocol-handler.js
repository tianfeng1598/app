const {app, dialog} = require('electron')
const path = require('path')

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    // setAsDefaultProtocolClient 方法用于设置协议默认app （app名称，执行方式默认process.execPath,[操作命令]）
    app.setAsDefaultProtocolClient('electron-api-demos', process.execPath, [path.resolve(process.argv[1])])
  }
} else {
  // 参数除了 app名称 其他都是可选项
  app.setAsDefaultProtocolClient('electron-api-demos')
}

app.on('open-url', (event, url) => {
  dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
})
