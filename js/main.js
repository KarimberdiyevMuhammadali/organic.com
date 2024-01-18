// toggle
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
  //toggle

  // navbar shrink
  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
  //navbar-shrink
  // owl carousel
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 40,
      padding: 40,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      // stagePadding: 70,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        650: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  });
  // owl carousel

