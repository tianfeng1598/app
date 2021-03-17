const {
  BrowserWindow,
  Menu,
  MenuItem,
  ipcMain,
  shell,
  app
} = require('electron')

// 创建菜单
const menu = new Menu()
// 可以通过 menu.append 添加菜单内容，也可以通过 Menu.buildFromTemplate(template) 的方法 template = [{label:'hello'...},...]
menu.append(new MenuItem({ label: 'Hello', sublabel:'sublabel',icon:'assets/app-icon/png/16.png',registerAccelerator:false}))
// 这个是分割线
menu.append(new MenuItem({ type: 'separator' }))
// 这个啥也不是
menu.append(new MenuItem({ label: 'normal', type: 'normal' }))
// 这个是单选框
menu.append(new MenuItem({ label: 'radio', type: 'radio', checked: true }))
// 这个是复选框
menu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true }))
// 这个是带子菜单的
menu.append(new MenuItem({
  label: 'reopenMenuItem', type: 'submenu', key: 'reopenMenuItem', submenu: [{
    label: 'Undo',
    accelerator: 'CmdOrCtrl+Z',
    click: (item, focusedWindow, event) => {
      // do something
      // 主线程的输出位置默认是在控制台
      console.log("-------submenu click------------")
      // shell.openExternal('http://electron.atom.io')
      // focusedWindow.loadURL('http://www.baidu.com')
    }
  }]
}))

app.on('browser-window-created', (event, win) => {
  win.webContents.on('context-menu', (e, params) => {
    menu.popup(win, params.x, params.y)
  })
})

ipcMain.on('show-context-menu', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  win.loadURL('http://www.baidu.com')
  console.log(menu.items);
  menu.popup(win)
})
