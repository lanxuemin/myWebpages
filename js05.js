/*5.参考lastModified.js或实例5-23，输出本网页最后更新的时间和日期。*/
// 获取当前网页的最后修改时间
function displayLastModified() {
    const lastModified = document.lastModified;  // 获取网页最后修改时间
    const lastModifiedElement = document.getElementById('last-modified');
  
    // 将最后修改时间显示在页面上
    lastModifiedElement.textContent = `网页最后修改时间: ${lastModified}`;
  }
  
  // 调用函数显示网页最后修改时间
  displayLastModified();