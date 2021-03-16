const {desktopCapturer, screen, shell} = require('electron')

const fs = require('fs')
const os = require('os')
const path = require('path')

const screenshot = document.getElementById('screen-shot')
const screenshotMsg = document.getElementById('screenshot-path')

screenshot.addEventListener('click', (event) => {
  screenshotMsg.textContent = 'Gathering screens...'
  const thumbSize = determineScreenShotSize()
  let options = { types: ['screen'], thumbnailSize: thumbSize, fetchWindowIcons: false }

  // 获取截图
  desktopCapturer.getSources(options, (error, sources) => {
    if (error) return console.log(error)

    sources.forEach((source) => {
      if (source.name === 'Entire screen' || source.name === 'Screen 1') {
        const screenshotPath = path.join(os.tmpdir(), 'screenshot.png')
        if (fs.existsSync(screenshotPath)) {
          // fs 删除文件
          fs.unlinkSync(screenshotPath)
        }
        fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
          if (error) return console.log(error)
          shell.openExternal(`file://${screenshotPath}`)

          const message = `Saved screenshot to: ${screenshotPath}`
          screenshotMsg.textContent = message
        })
      }
    })
  })
})

function determineScreenShotSize () {
  // getPrimaryDisplay 返回主窗口的尺寸 
  const screenSize = screen.getPrimaryDisplay().workAreaSize
  const maxDimension = Math.max(screenSize.width, screenSize.height)
  return {
    // window.devicePixelRatio 返回当前显示设备的物理像素分辨率与 CSS 像素分辨率的比率
    width: maxDimension * window.devicePixelRatio,
    height: maxDimension * window.devicePixelRatio
  }
}
