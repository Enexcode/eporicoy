// ================ Site Dark and Light Mode Setting 
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    // Check user's previous preference (if saved in localStorage)
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Update button and logo based on initial theme
    updateThemeAssets(currentTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);

        // Save user's preference in localStorage
        localStorage.setItem("theme", theme);

        // Update button and logo
        updateThemeAssets(theme);
    });

    function updateThemeAssets(theme) {
        if (theme === "dark") {
            themeIcon.classList.remove("fa-sun-o");
            themeIcon.classList.add("fa-moon-o"); // Dark mode icon
            logo.src = "assets/images/logo/dark_logo.png"; // Dark mode logo
        } else {
            themeIcon.classList.remove("fa-moon-o");
            themeIcon.classList.add("fa-sun-o"); // Light mode icon
            logo.src = "assets/images/logo/light_logo.png"; // Light mode logo
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    toggler.addEventListener("click", () => {
        toggler.querySelector(".ham").classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const bsCollapse = new bootstrap.Collapse(collapse, {
                toggle: true
            });
            toggler.querySelector(".ham").classList.remove("active");
        });
    });
    collapse.addEventListener("hidden.bs.collapse", () => {
        toggler.querySelector(".ham").classList.remove("active");
    });
});


// ====== Hero Video Start
document.getElementById("video-thumbnail").addEventListener("click", function () {
    // Replace "VIDEO_ID" with your actual YouTube video ID
    const videoId = "MJCmjTz_gLc"; // Example YouTube Video ID
    const iframe = document.getElementById("youtube-video");
  
    // Set the YouTube video URL with autoplay enabled
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
    // Hide the thumbnail
    this.style.display = "none";
  
    // Show the iframe
    iframe.style.display = "block";
  });

// ====== Hero Video End

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


//   ==== Scroll And Navbar Fix Top 
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 50) {
      navbar.classList.add("fixed");

      if (scrollTop > lastScrollTop) {
        // scrolling down
        navbar.classList.remove("show");
      } else {
        // scrolling up
        navbar.classList.add("show");
      }
    } else {
      navbar.classList.remove("fixed", "show");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

// Show the button when scrolled down 100px
window.onscroll = function () {
  let btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
