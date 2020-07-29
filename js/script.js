window.onload = function () {


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