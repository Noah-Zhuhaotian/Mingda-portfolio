const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');
const aboutLink = document.getElementById('about-link');
const autosignLink = document.getElementById('autosign-link');


let btn = document.getElementById("nav-btn");
let  nav =  document.getElementById("nav-item");




let hide = true;

btn.addEventListener('click', function () {
    if (hide){
        nav.style.display = "block";
        hide = false;
    } else {
        nav.style.display = "none";
        hide = true;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index.html" ){
      homeLink.classList.add('active');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('notactive');
    }
    else if (currentPage === "projects.html") 
    {
      homeLink.classList.add('notactive');
      projectsLink.classList.add('active');
      aboutLink.classList.add('notactive');
    } 
    else if (currentPage === "about.html")
    {
      homeLink.classList.add('notactive');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('active');
    }
    else{
      homeLink.classList.add('notactive');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('notactive');
    }
  
    console.log("Current Page:", currentPage);
  });
  
  
  
  
  // 监听 projectsLink 和 autosignLink 的点击事件
  function setupNavigation() {
    const currentPage = window.location.pathname.split("/").pop();
    homeLink.addEventListener('click', (event) => {
      if (currentPage === 'index.html') {
        event.preventDefault(); // 阻止默认跳转行为
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // window.location.href = "index.html";
      } else {
        window.location.href = "index.html";
      }
    });
  
    autosignLink.addEventListener('click', (event) => {
      if (currentPage === 'index.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "index.html";
      }
    });
  
    projectsLink.addEventListener('click', (event) => {
      if ( currentPage === 'projects.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "projects.html";
      }
    });
  
    aboutLink.addEventListener('click', (event) => {
      if ( currentPage === 'about.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "about.html";
      }
    });
  }
  
  
  document.querySelectorAll(".send-email, .footer-email").forEach(function(element) {
      element.addEventListener("click", function () {
          window.location.href = "mailto:claudia.mingdalin@outlook.com?subject=Hey%20Mingda";
      });
  });
  
  document.querySelector(".footer-linkdein").addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/mingda-lin/", "_blank");
  });
  
  

  
  document.querySelectorAll(".project-container").forEach((container, index) => {
    container.addEventListener("click", function () {
        const urls = [
            "/projects/Repayment.html",   
            "/projects/Loan.html",       
            "/projects/DesignSystem.html",
            "/projects/SharePoint.html",  
            "/projects/Inside9.html",     
            "/projects/LoveStory.html" 
        ];

        if (urls[index]) {
            window.location.href = urls[index];
        }
    });
});

  
  
  setupNavigation();

