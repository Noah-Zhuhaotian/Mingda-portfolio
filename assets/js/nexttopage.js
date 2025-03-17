// const pages = [
//     "/projects/Repayment.html",
//     "/projects/Loan.html",
//     "/projects/DesignSystem.html",
//     "/projects/SharePoint.html",
//     "/projects/Inside9.html",
//     "/projects/LoveStory.html"
// ];

// // 获取当前页面的索引
// const currentPage = window.location.pathname;

// // 找到当前页面在页面数组中的位置
// const currentIndex = pages.indexOf(currentPage);

// // 获取“下一页”和“上一页”的元素
// const nextPageButton = document.getElementById("next-page");
// const prevPageButton = document.getElementById("prev-page");

// // 如果是最后一页，点击“下一页”会跳到第一页
// nextPageButton.addEventListener("click", () => {
//     const nextPage = currentIndex === pages.length - 1 ? pages[0] : pages[currentIndex + 1];
//     window.location.href = nextPage; // 跳转到下一页
// });

// // 如果是第一页，点击“上一页”会跳到最后一页
// prevPageButton.addEventListener("click", () => {
//     const prevPage = currentIndex === 0 ? pages[pages.length - 1] : pages[currentIndex - 1];
//     window.location.href = prevPage; // 跳转到上一页
// });

const pages = [
    "/projects/Repayment.html",
    "/projects/Loan.html",
    "/projects/DesignSystem.html",
    "/projects/SharePoint.html",
    "/projects/Inside9.html",
    "/projects/LoveStory.html"
];

// 获取当前页面路径（只保留 "/projects/xxx.html" 部分）
const currentPath = window.location.pathname.split("/").slice(-2).join("/");

// 找到当前页面在数组中的索引
const currentIndex = pages.indexOf("/" + currentPath);

// 获取“下一页”和“上一页”的元素
const nextPageButton = document.getElementById("next-page");
const prevPageButton = document.getElementById("prev-page");

// 防止 `indexOf` 找不到时代码崩溃
if (currentIndex !== -1) {
    nextPageButton.addEventListener("click", () => {
        const nextPage = currentIndex === pages.length - 1 ? pages[0] : pages[currentIndex + 1];
        window.location.href = nextPage;
    });

    prevPageButton.addEventListener("click", () => {
        const prevPage = currentIndex === 0 ? pages[pages.length - 1] : pages[currentIndex - 1];
        window.location.href = prevPage;
    });
} else {
    console.error("当前页面不在 pages 数组中:", currentPath);
}
