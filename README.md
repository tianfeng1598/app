# <img src="https://cloud.githubusercontent.com/assets/378023/15172388/b2b81950-1790-11e6-9a7c-ccc39912bb3a.png" width="60px" align="center" alt="Electron API Demos icon"> Electron API Demos

[![Build Status](https://travis-ci.org/electron/electron-api-demos.svg?branch=master)](https://travis-ci.org/electron/electron-api-demos)
[![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com)

This is a desktop app that interactively and with sample code demonstrates core features of the [Electron](http://electronjs.org) API. It's built with Electron, too, of course. This app works on Windows, macOS and Linux operating systems.

这是一个桌面应用，通过交互和简单代码的方式展示 Electron API 的核心特性。它当然也是由 Electron 构成的。这个应用适用于 Windows, macOS 和 Linux 操作系统。 

Use this app to see what you can do with Electron and use the source code to learn how to create a basic Electron app.

通过这个 app 可以看到你用 Electron 可以做些什么并且通过这些源代码文件学习如何创建一个基础的 Electron 应用。

![Electron API Demos Screenshots](https://cloud.githubusercontent.com/assets/378023/15016148/ae06cc80-124a-11e6-80dd-076d83e492f6.png)

---

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to [coc@electronjs.org](mailto:coc@electronjs.org).

这个项目遵循贡献者契约的行为准则。通过参与，你将维护这个准则。请向 coc@electronjs.org 发送你不能接受的行为。

Follow [@ElectronJS](https://twitter.com/electronjs) on Twitter for important
announcements. Visit the [electron website](http://electronjs.org).

重要公告请在 Twitter 上关注 @ElectronJS。或者浏览 Electron 的网址。

## Using

You can [download the latest release](https://github.com/electron/electron-api-demos/releases) for your operating system or build it yourself (see below).

你可以下载你操作系统的最新版本或者按照下面的方法自己编译一个。

## Building

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app.
你需要在你的电脑上安装 Node.js 为了构建这个 app。 

```bash
$ git clone https://github.com/electron/electron-api-demos
$ cd electron-api-demos
$ npm install
$ npm start
```

If you don't wish to clone, you can [download the source code](https://github.com/electron/electron-api-demos/archive/master.zip).
如果你不想克隆，你可以下载源代码。

For easier developing you can launch the app in fullscreen with DevTools open:
为了更容易开发，你可以打开 DevTools 全屏启动应用程序。
```bash
$ npm run dev
```

## Extending

 [Read the docs](docs.md) to learn more about how this app is built or how to [add a new demo](docs.md#add-a-section-or-demo).
 阅读这个文档取学习更多关于如何构建这个app或者如何添加一个新的demo。

## Translations

* Simplified Chinese translation of this app is available at [`demopark/electron-api-demos-Zh_CN`](https://github.com/demopark/electron-api-demos-Zh_CN).
简体中文翻译版本可以看这个。

* Traditional Chinese translation of this app is available at [`CalvertYang/electron-api-demos-zh-Hant`](https://github.com/CalvertYang/electron-api-demos-zh-Hant).
繁体中文版翻译可以看这个。

Note: these versions are maintained by outside contributors and may not always be in sync with this version.
这些版本是外部贡献者在维护，可能版本上不一定总是和这个版本同步。

tips：
好吧，直到现在这部分我才直到，已经有人翻译过这个文档了。crying。。。不过翻译一个文档还是一个很不错的过程，可以让自己更投入的学习一个知识，也可以更加熟悉一个语言。

## 开始
计划通过对原有demo的处理，整理成为一个易用的模板，用于后续PC端的简易开发。

## 资源分类
首先明确一下文件夹的资源分类
- assets 
静态资源文件夹
- main-process 
主进程的文件夹
- rederer-process
渲染进程的文件夹
- script
脚本文件夹
- sections
模组文件夹
- test
测试用文件夹
- out
打包输出文件夹
- node_modules
node 模组依赖文件夹 