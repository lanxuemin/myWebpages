/*1.参考QQ群中script.js文件和课本239页中onclick等事件的代码，实现
①点击这七本书时，出现弹窗：“你点击了：书名-评分”；
②鼠标停留在这七本书和鼠标离开这七本书时发生颜色的改变。*/
document.addEventListener("DOMContentLoaded", function() {
    const employeeCard = document.querySelectorAll(".employee-card");
    // 添加点击事件（onclick）
    employeeCard.forEach(function(card) {
      card.onclick = function() {
        alert("你点击了： " + this.textContent);
      };
    });


    // 添加鼠标悬停事件（onmouseover）
    employeeCard.forEach(function(card) {
      card.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });


  // 添加鼠标移出事件（onmouseout）
  employeeCard.forEach(function(card) {
    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });


});