window.onload = function () {

  var bar1 = new ProgressBar.Circle(circle1, {
    color: '#2b2b2b',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3366ff', width: 5 },
    to: { color: '#3366ff', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar1.text.style.fontFamily = '"Open sans", Helvetica, sans-serif';
  bar1.text.style.fontSize = '3rem';
  
  
  var bar2 = new ProgressBar.Circle(circle2, {
    color: '#2b2b2b',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3366ff', width: 5 },
    to: { color: '#3366ff', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar2.text.style.fontFamily = '"Open sans", Helvetica, sans-serif';
  bar2.text.style.fontSize = '3rem';
  
  var bar3 = new ProgressBar.Circle(circle3, {
    color: '#2b2b2b',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3366ff', width: 5 },
    to: { color: '#3366ff', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar3.text.style.fontFamily = '"Open sans", Helvetica, sans-serif';
  bar3.text.style.fontSize = '3rem';
  
  
      window.addEventListener("scroll", loadSkills);
  
      function loadSkills () {
        const scrolled = window.scrollY;
        if (scrolled >= 750) {
          bar1.animate(0.95);
          bar2.animate(0.90);
          bar3.animate(0.75);
  
          setTimeout(() => {
            window.removeEventListener("scroll", loadSkills);
          }, 2000);
        }
      }
  
  
    var checkbox = document.querySelector('input[name=theme]');
    var main = document.getElementById("html");
  
    checkbox.addEventListener('change', function() {
        if(this.checked) {
          trans();
          main.className = "";
            // document.documentElement.setAttribute('data-theme', 'dark')
        } else {
          trans();
          main.className = "dark";
            // document.documentElement.setAttribute('data-theme', 'light')
        }
    })
  
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 500);
    }
  
    
  
    
  
      new Glider(document.querySelector(".projectGlider"), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next"
        },
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            // breakpoint: 575,
            // settings: {
              //   slidesToShow: 2,
              //   slidesToScroll: 2
              // },
              
            }
          ]
        });
  
        new Glider(document.querySelector(".testimonialGlider"), {
          slidesToShow: 1,
          dots: "#dots",
          slidesToScroll: 1,
          draggable: true,
          arrows: {
            prev: ".glider-prev2",
            next: ".glider-next2"
          },
          responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              // breakpoint: 575,
              // settings: {
                //   slidesToShow: 2,
                //   slidesToScroll: 2
                // },
                
              }
            ]
        });
  
        let counter = 0;
        AOS.init({offset: 80, duration: 300});
  
  
    
  
  // const sendHttpRequest = (method, url) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(method, url);
  //
  //   xhr.onload = () => {
  //     const data = JSON.parse(xhr.response);
  //     console.log(data);
  //
  //     if (data.alpha2 === "BD") {
  //       console.log("Hello, ", data.alpha2);
  //     }
  //   };
  //
  //   xhr.send();
  //
  //   // console.log()
  // };
  //
  //
  // function getData() {
  //   sendHttpRequest("GET", "https://api.ipgeolocationapi.com/geolocate/103.106.239.34");
  // }
  //
  // getData();

  $(document).ready(function(){
  
    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(function (p) {
    //     var latitude = p.coords.latitude;
    //     var longitude = p.coords.longitude;
    //     $("#latitude").text(latitude);
    //     $("#longitude").text(longitude);
    //   }, function (e) {
    //     ipLookup();
    //   });
    // } else {
    //   ipLookup();
    // }
    
    
    // function ipLookup() {
    //   var jsx = $.get('http://ip-api.com/json', function (r) {
    //     if (r.country === "Bangladesh") {
    //       location.replace("https://abidalwassie.netlify.app/bd.html")
    //     }
    //     console.log(r.country);
    //     console.log(jsx.country);
    //   });
    //
    // }
    //   ipLookup();
    //
    //
    //
    // $("body").scrollspy({
    //   target: ".navbar",
    //   offset: "72"
    // });

    var scrollWindow = function() {
      $(window).scroll(function(){
        var $w = $(this),
            st = $w.scrollTop(),
            navbar = $(".navbar"),
            sd = $(".js-scroll-wrap");
            navLink = $(".nav-link");
            navbarExtended = $(".navbar-nav");
            brandOtherLetters = $(".otherLetters");
            btnLine = $(".btn-line");
    
        if (st > 150) {
          if ( !navbar.hasClass("scrolled") ) {
            navbar.addClass("scrolled");	
            navLink.addClass("nav-link-dark");
            navbarExtended.addClass("navbar-nav-dark");
            brandOtherLetters.addClass("brandLettersDark");
            btnLine.addClass("btn-line-dark");
          }
        } 
        if (st < 150) {
          if ( navbar.hasClass("scrolled") ) {
            navbar.removeClass("scrolled sleep");
            navLink.removeClass("nav-link-dark");
            navbarExtended.removeClass("navbar-nav-dark");
            brandOtherLetters.removeClass("brandLettersDark");
            btnLine.removeClass("btn-line-dark");
          }
        } 
        if ( st > 350 ) {
          if ( !navbar.hasClass("awake") ) {
            navbar.addClass("awake");	
          }
          
          if(sd.length > 0) {
            sd.addClass("sleep");
          }
        }
        if ( st < 350 ) {
          if ( navbar.hasClass("awake") ) {
            navbar.removeClass("awake");
            navbar.addClass("sleep");
          }
          if(sd.length > 0) {
            sd.removeClass("sleep");
          }
        }
      });
    };
    scrollWindow();
    
    
    var anchor = $(".nav-link");
    anchor.on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        var target = $(hash).offset().top-150;
        $('html, body').animate({
          scrollTop: target
        }, 500, function(){
          // window.location.hash = hash;
        });
      }
    });

    var context;
    var $window = $(window);


    // if ($window.width() <= 768) {
    //   context = 'small';
    // } else if (768 < $window.width() < 992) {
    //   context = 'medium';
    // } else {
    //   context = 'large';
    // }
    //
    // $(window).resize(function() {
    //   if(($window.width() <= 768) && (context != 'small')) {
    //     //refresh the page
    //     location.reload();
    //   } else if ((768 < $window.width()  < 992) && (context != 'medium')) {
    //     location.reload();
    //   } else if (context != 'large') {
    //     location.reload();
    //   }
    // });

    });

  // function smoothScroll(target, duration) {
  //   var target = document.querySelector(target);
  //   var targetPosition = target.getBoundingClientRect().top;
  //   var startPosition = window.pageYOffset;
  //   var distance = targetPosition - startPosition;
  //   var startTime = null;

  //   function animation(currentTime) {
  //     if(startTime === null) startTime = currentTime;
  //     var timeElapsed = currentTime - startTime;
  //     var run = ease(timeElapsed, startPosition, distance, duration);
  //     window.scrollTo(0, run);
  //     if (timeElapsed < duration) requestAnimationFrame(animation);
  //     console.log("timeElapsed : " + timeElapsed + " duration : " + duration);
  //   }

  //   function ease(t, b, c, d) {
  //     t /= d / 2;
  //     if (t < 1) return c / 2 * t * t + b;
  //     t--;
  //     return -c / 2 * (t * (t - 2) - 1) + b;
  //   }

  //   requestAnimationFrame(animation);
  // }
  
  // // distinations config
  // var portfolioLocation = ".work-section";
  // var skillsLocation = ".heading";
  // // var startLocation = ".navbar";
  

  // // buttons config
  // var mouseBtn = document.getElementById("mouseBtn");

  // var portfolioBtn = document.getElementById("getToPortfolio");
  // var projectsBtn = document.getElementById("getToProjects");
  // var aboutBtn = document.getElementById("getToAbout");
  // var servicesBtn = document.getElementById("getToServices");
  // var skillsBtn = document.getElementById("getToSkills");
  // var contactBtn = document.getElementById("getToContact");
  // var topBtn = document.getElementById("getToTop");
  
  
  // mouseBtn.addEventListener("click", getToPortfolioSect);
  // skillsBtn.addEventListener("click", getToSkillsSect);

  

  
  // function getToPortfolioSect() {
  //   smoothScroll(portfolioLocation, 500);
  // }

  // function getToSkillsSect() {
  //   smoothScroll(skillsLocation, 500);
  // }

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

  //Media Queries
  var navbarNav = document.querySelector('.navbar-nav');
  
  var openSlide = document.getElementById('menuBtn');

  

  var maxWidth = window.matchMedia("(max-width: 992px)");
  functionQuery(maxWidth);
  maxWidth.addListener(functionQuery);
  var navbar = document.querySelector('.navbar');

  function functionQuery(maxWidth) {

    if (maxWidth.matches) {
      if(showMenu === true) {
        navbarNav.style.top = '-600px';
        openSlide.className = "menu-btn";
        showMenu = false;
        // navbar.classList.add('nav-expand');
      }
    } else {
      if (showMenu === false) {
        navbarNav.style.top = '0';
        openSlide.className = "menu-btn close";
        navbar.classList.remove('nav-expand');
        showMenu = true;
      }
    }

    openSlide.addEventListener('click', onToggle);

    function onToggle() {
      console.log(navbar);
      if (navbarNav.style.top === '160px') {
        navbarNav.style.top = '-600px';
        navbar.classList.remove('nav-expand');
      } else {
        navbarNav.style.top = '160px';
        navbar.classList.add('nav-expand');
      }
    }
    
  }
}
