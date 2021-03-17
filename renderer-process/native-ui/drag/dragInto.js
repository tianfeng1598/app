var dropBtn = document.getElementById('file-path')
var pathMsg = document.getElementById('path')

dropBtn.addEventListener("drop", (e) => {
  console.log("=============================");
  //阻止默认行为
  e.preventDefault();
  //获取文件列表
  const files = e.dataTransfer.files;

  if (files && files.length > 0) {
    //获取文件路径
    const path = files[0].path;
    console.log('path:', path);
    pathMsg.innerHTML = path;
  }
})

//这个事件也需要屏蔽,这个事件是指拖动到这个上面时触发，可以被重复触发
dropBtn.addEventListener("dragover",(e)=>{
  e.preventDefault();
})