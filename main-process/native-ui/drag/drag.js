const {ipcMain} = require('electron')
const path = require('path')

ipcMain.on('ondragstart', (event, filepath) => {
  const iconName = 'codeIcon.png'
  console.log(filepath);
  // 这个方法就是用来实现拖放的
  // 对于这个方法，理论上应该也是支持从操作系统拖拽文件到软件中的
  event.sender.startDrag({
    file: filepath,
    icon: path.join(__dirname, iconName)
  })
})
