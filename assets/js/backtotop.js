document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top");
  
    if (!backToTopButton) {
      console.error("Error: .back-to-top button not found!");
      return;
    }
  
    function toggleBackToTop() {
      console.log("Scroll Position:", window.scrollY); // 调试滚动值
  
      if (window.scrollY > 700) {
        backToTopButton.classList.add("show"); // 添加 show 类
      } else {
        backToTopButton.classList.remove("show"); // 移除 show 类
      }
    }
  
    window.addEventListener("scroll", toggleBackToTop);
  
    // 点击按钮返回顶部
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // 初始检查滚动状态
    toggleBackToTop();
  });