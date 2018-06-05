/**
 * 选择图片库
 * imageId显示的ID
 * url 后台接收地址
 */
function fetchPictures(imageId, url) {
  navigator.camera.getPicture(fetchPictureSuccess, fetchPictureFail, {
    quality: 50,
    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,//打开系统的图片库
    destinationType: 1,
    saveToPhotoAlbum: true

  });

  function fetchPictureSuccess(imageURI) {
    var image = document.getElementById(imageId);
    image.src = imageURI;
    uploadFile(imageURI, imageId, url);
  }

//获取文件失败
  function fetchPictureFail(message) {
    alert('获取拍照文件失败:' + message);
  }
}


/**
 * 拍照上传
 */
function capturePictures(imageId, url) {
  navigator.camera.getPicture(takePictureSuccess, takePictureFail, {
    quality: 50,
    sourceType: 1,       //拍照
    destinationType: 1 //存储照片的数据/0data 1url 2native url// 路径
  });

  function takePictureSuccess(imageURI) {
    var image = document.getElementById(imageId);
    image.src = imageURI;
    uploadFile(imageURI, imageId, url);

  }

//获取文件失败
  function takePictureFail(message) {
    alert('获取拍照文件失败:' + message);
  }

}

/**
 * 文件上传start
 */
function uploadFile(imageURI, imageId, url) {
  if (imageURI === null || imageURI === undefined || imageURI === '') {
    return;
  }
  if (url === null || url === undefined || url === '') {
    return;
  }

  function fileTransferSuccess() {
  }

  function fileTransferError(error) {
    alert("出现网络异常，异常代码" + error.code);
  }

  var fileUploadOptions = new FileUploadOptions();
  fileUploadOptions.fileKey = "file";
  fileUploadOptions.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
  fileUploadOptions.mimeType = "image/jpeg";
  var fileTransfer = new FileTransfer();
  fileTransfer.upload(imageURI, url, fileTransferSuccess, fileTransferError, fileUploadOptions);
}

/**
 * 弹出框
 */
/**
 *
 * @param message
 * @param title
 * @param buttonName 确认按钮名称，用来关闭
 */
function warn(message, title, buttonName) {
  navigator.notification.alert(message, alertCallback, title, buttonName);

  function alertCallback() {
  }
}

//当按下 CONFIRM 按钮时，将弹出新对话框。
/**
 *
 * @param message
 * @param title
 * @param buttonLabels 一个字符串数组   ["YES","NO"];
 */
function dialogConfirm(message, title, buttonLabels) {
  navigator.notification.confirm(message, confirmCallback, title, buttonLabels);

  function confirmCallback(buttonIndex) {
  }

}

/**
 * 允许用户在对话框输入元素 中键入文本,
 * 回调函数是异步方法
 */
function dialogPrompt(message, title, buttonLabels, defaultText) {
  navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);

  function promptCallback(result) {
  }

}

/**
 * 振动
 */
function dialogBeep() {
  var times = 2;
  navigator.notification.beep(times);
}

/**
 * 退出
 */
function exit() {
  navigator.notification.confirm("确认退出？", confirmCallback, "确认", ["是", "否"]);

  function confirmCallback(buttonIndex) {
    if (buttonIndex === 1) {
      navigator.app.exitApp();
    }
  }
}


/**
 * 弹窗提示
 */
function showShortTop(message) {
  window.plugins.toast.showShortCenter(message);
}

function showShortCenter(message) {
  window.plugins.toast.showShortCenter(message);
}

function showShortBottom(message) {
  window.plugins.toast.showShortCenter(message);
}

function showLongTop(message) {
  window.plugins.toast.showShortCenter(message);
}

function showLongCenter(message) {
  window.plugins.toast.showShortCenter(message);
}

function showLongBottom(message) {
  window.plugins.toast.showShortCenter(message);
}


export {
  capturePictures,
  fetchPictures,
  warn,
  dialogConfirm,
  dialogPrompt,
  dialogBeep,
  exit,
  showShortTop,
  showShortCenter,
  showShortBottom,
  showLongTop,
  showLongCenter,
  showLongBottom
}
