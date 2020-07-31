window.onload = function () {

  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if(startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
  
  // distinations config
  var skillsLocation = "#skillsSect";
  // var 
  

  // buttons config
  var mouseBtn = document.getElementById("mouseBtn");

  var portfolioBtn = document.getElementById("getToPortfolio");
  var workBtn = document.getElementById("getToWork");
  var aboutBtn = document.getElementById("getToAbout");
  var servicesBtn = document.getElementById("getToServices");
  var skillsBtn = document.getElementById("getToSkills");
  var contactBtn = document.getElementById("getToContact");
  
  mouseBtn.addEventListener("click", getToSkillsSect);
  skillsBtn.addEventListener("click", getToSkillsSect);

  
  function getToSkillsSect() {
    smoothScroll(skillsLocation, 500);
  }


  const menuBtn = document.querySelector(".menu-btn");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if(!showMenu) {
      menuBtn.classList.add("close");
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      showMenu = false;
    }
  }

  var sideMenu = document.getElementById('side-menu');
  var openSlide = document.getElementById('menuBtn');

  document.getElementById('menuBtn').addEventListener('click', onToggle);

  function onToggle() {
    if (sideMenu.style.transform == 'translateY(55px)') {
      // && openSlide.className === "hamburger hamburger--collapse menu-btn"
      // openSlide.className = "hamburger hamburger--collapse is-active menu-btn";
      sideMenu.style.transform = 'translateY(-600px)';
      // sideMenu.className = "";
    } else {
      // openSlide.className = "hamburger hamburger--collapse menu-btn";
      sideMenu.style.transform = 'translateY(55px)';
      // sideMenu.className = "hide";
    }
  }



  var sideMenu = document.getElementById('side-menu');
  var openSlide = document.getElementById('menuBtn');

  document.getElementById('menuBtn').addEventListener('click', onToggle);

  function onToggle() {
    if (sideMenu.style.transform == 'translateY(55px)') {
      // && openSlide.className === "hamburger hamburger--collapse menu-btn"
      // openSlide.className = "hamburger hamburger--collapse is-active menu-btn";
      sideMenu.style.transform = 'translateY(-600px)';
      // sideMenu.className = "";
    } else {
      // openSlide.className = "hamburger hamburger--collapse menu-btn";
      sideMenu.style.transform = 'translateY(55px)';
      // sideMenu.className = "hide";
    }
  }

  var maxWidth = window.matchMedia("(max-width: 1030px)");
  functionQuery(maxWidth);
  maxWidth.addListener(functionQuery);

  function functionQuery(maxWidth) {
    if (maxWidth.matches) {
      openSlide.className = "menu-btn";
      showMenu = false;
      // sideMenu.className = "hide";
    } else {
      sideMenu.style.transform = 'translateY(-600px)';
      openSlide.className = "menu-btn close";
      showMenu = true;
    }
  }




}