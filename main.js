// only add update server if it's not being run from cli
// 只有在更新服务器不是从cli运行时才添加它
if (require.main !== module) {
  require('update-electron-app')({
    logger: require('electron-log')
  })
}

const path = require('path')
const glob = require('glob')
const {app, BrowserWindow} = require('electron')

// 判断是否是调试模式启动 process.argv[2] 是命令行启动时的第三个参数
const debug = /--debug/.test(process.argv[2])

// 设定全局 app 名称
if (process.mas) app.setName('Electron APIs')

// 定义主窗口
let mainWindow = null

// 初始化操作
function initialize () {
  // 创建单例 app 
  makeSingleInstance()

  // 导入依赖 JS
  loadDemos()

  // 创建窗口的方法
  function createWindow () {
    const windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }

    // process.platform 当前系统
    if (process.platform === 'linux') {
      windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
    }

    // 启动窗口
    mainWindow = new BrowserWindow(windowOptions)
    // 加载主页
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

    // Launch fullscreen with DevTools open, usage: npm run debug
    // 通过 npm run debug 全屏启动 DevTools
    if (debug) {
      // 开启 开发者工具
      mainWindow.webContents.openDevTools()
      // 最大化窗口
      // mainWindow.maximize()
      require('devtron').install()
    }

    // 主窗口关闭时 重置主窗口
    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  // 程序 ready 时，创建窗口
  app.on('ready', () => {
    createWindow()
  })

  // 所有窗口关闭时，退出程序
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  // 激活程序，如果没有窗口，创建一个新的
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

// Make this app a single instance app.
// 让这个应用程序成为一个单实例应用程序
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
// 当用户试图启动第二个实例时，主窗口将被恢复并聚焦，而不是打开第二个窗口。
// Returns true if the current version of the app should quit instead of
// launching.
// 如果应用程序的当前版本应该退出而不是启动，则返回true。
function makeSingleInstance () {
  // 对于Mac App Store构建，此属性true对于其他构建而言是undefined
  if (process.mas) return

  app.requestSingleInstanceLock()

  // 创建第二个实例的时候
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

// Require each JS file in the main-process dir
// 从 main-process 文件夹下引入需要的每个 JS
function loadDemos () {
  const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  files.forEach((file) => { require(file) })
}

initialize()
