// 引入 MenuItem 模块
const { MenuItem } = require('electron')

// MenuItem 的静态方法
  let menuitem = new MenuItem({
    id: '', // 唯一属性值，可以不设，
    label: 'test', // 菜单的展示名称
    sublabel: '', // 菜单名称下的弱文字
    accelerator: 'CmdOrCtrl+Z', // 加速器，用于设定快捷键
    icon: '', // 菜单图标，接受 NativeImage 对象或者 relative path
    enabled: '', // 是否可用
    visible: '', // 是否可见
    submenu: '', // 子菜单属性，只有 type 为 submenu 时使用，接受 Menu 对象，如果不是 Menu 对象，自动 Menu.buildFromTemplate() 转
    checked: '', // 选择属性，只为 type 为 checkbox 和 radio 时可用
    type: '', // 菜单类型，normal、separator、submenu、checkbox 或 radio
    role: '', // 角色，为这个菜单定义一个预设行为。使用 role 时, label 和 accelerator 值是可选的, 并为每个平台，将默认为适当值
    after: [''], // 定位操作，指定目标之后
    before: [''], // 定位操作，指定目标之前
    afterGroupContaining: [''], // 定位操作，指定目标小组之后
    beforeGroupContaining: [''], // 定位操作，指定目标小组之前
    // macOS
    toolTip: '', // 该菜单项的悬停文本
    acceleratorWorksWhenHidden: '', // 如果菜单被禁用，快捷键是否可以用。默认是 true
    // win linux
    registerAccelerator:'', // 是否注册快捷键，默认 true，如果 false，不会进行注册也不会显示
    click: (menuitem, browserWindow, event) => {
      // do something
      // menuitem 是当前菜单项
      // browserWindow 是当前焦点窗口
      // event 事件 { shiftKey: false, ctrlKey: false, altKey: false, metaKey: false }
    }
  });

// 属性
// 正如上述一样，可以被设置的属性大多都是可以在 menuItem 实例中获得的
// 下面是额外多的一些属性

// 菜单项对应的顺序 id
menuitem.commandId

// 一部分菜单
menuitem.menu
