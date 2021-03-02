const {app, dialog, globalShortcut} = require('electron')

app.on('ready', () => {
  // app ready 之后进行 shortcuts 的 register
  globalShortcut.register('CommandOrControl+Alt+K', () => {
    dialog.showMessageBox({
      type: 'info',
      message: 'Success!',
      detail: 'You pressed the registered global shortcut keybinding. 你触发了全局注册的快捷键绑定。',
      // 弹窗的按钮
      buttons: ['OK','close']
    })
  })
})

app.on('will-quit', () => {
  // 窗口关闭，注销所有注册内容
  globalShortcut.unregisterAll()
})
