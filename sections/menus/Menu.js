// 引入 Menu 模块
const { Menu, MenuItem } = require('electron')

// Menu 的静态方法

// 设置菜单，方法接受 menu 对象，展示 menu 实例内容；传入 null，将会禁用默认菜单功能(win\linux)；如果不传值，展示默认菜单
// macOS 中如果要禁用菜单应该传入一个空的 menu 实例
Menu.setApplicationMenu(menu|null)
// 获得菜单, 如果有菜单得到一个 menu 实例对象，如果没有菜单，则返回一个 null
// 如果没有设置，走的默认呢？
// 得到的 menu 实例对象是不支持动态增删内容的，但是可以动态修改它的实例属性
Menu.getApplicationMenu()
// template 是一个数组，可以用于创建 MenuItem 对象
// 返回一个 menu 实例
Menu.buildFromTemplate(template)
// macOS 专用
// 将 action 发送到应用程序的第一个响应方。 这用于模拟默认的 macOS 菜单行为。 通常你可以使用MenuItem的role属性
Menu.sendActionToFirstResponder(action)

// menu 实例方法
const menu = new Menu();

// 弹出菜单
// [options] 可选项，可以有：window（哪个窗口显示）、x、y（这两个参数成对出现）、callback(回调方法)、positioningItem(菜单项的索引在指定的坐标下放置在鼠标光标下)
menu.popup([options])
// 关闭菜单
// window 可选项，默认是选中窗口
menu.closePopup(window)
// 追加菜单
menu.append(MenuItem)
// 获取指定的菜单
// id 必填项，通过id选择特定的 MenuItem 对象
// return MenuItem|null
menu.getMenuItemById(id)
// 插入菜单
// position 必填项，插入的位置,从0开始；MenuItem 菜单项；
menu.insert(position,MenuItem)
// 属性
menu.items

// 事件

// menu-will-show
app.on('menu-will-show', (event) => {
  // do something
  // menu.popup() emit
})

// menu-will-close
app.on('menu-will-close', (event) => {
  // do something
  // menu.closePopup() emit
})

// 菜单位置
// 一般情况是，菜单的顺序都是自己定好的；但是如果需要通过某些条件来限定菜单的加载顺序，那就需要对菜单的位置选项进行了解
// before, after, beforeGroupContaining, afterGroupContaining 和 id
// 

