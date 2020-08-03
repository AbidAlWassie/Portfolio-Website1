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
      console.log("timeElapsed : " + timeElapsed + " duration : " + duration);
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
  // var startLocation = ".navbar";
  

  // buttons config
  var mouseBtn = document.getElementById("mouseBtn");

  var portfolioBtn = document.getElementById("getToPortfolio");
  var projectsBtn = document.getElementById("getToProjects");
  var aboutBtn = document.getElementById("getToAbout");
  var servicesBtn = document.getElementById("getToServices");
  var skillsBtn = document.getElementById("getToSkills");
  var contactBtn = document.getElementById("getToContact");
  var topBtn = document.getElementById("getToTop");
  
  
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
      sideMenu.style.transform = 'translateY(-600px)';
    } else {
      sideMenu.style.transform = 'translateY(55px)';
    }
  }

  var maxWidth = window.matchMedia("(max-width: 1030px)");
  functionQuery(maxWidth);
  maxWidth.addListener(functionQuery);

  function functionQuery(maxWidth) {
    if (maxWidth.matches) {
      openSlide.className = "menu-btn";
      showMenu = false;
    } else {
      openSlide.className = "menu-btn close";
      showMenu = true;
    }
  }

  
var scrollWindow = function() {
  $(window).scroll(function(){
    var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');	
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake');	
      }
      
      if(sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if(sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();

  // window.onscroll = function() {
  //   scrollFunction()
  // };
  // function scrollFunction() {
  //   if (document.body.scrollTop <= 200 || document.documentElement.scrollTop <= 200) {
  //     navbar.className = "navbar";
  //   }
  // }

}
