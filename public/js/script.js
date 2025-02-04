document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const menu = document.getElementById("dropdownMenu");
  const links = document.querySelectorAll(".nav-bar a");

  const header = document.querySelector("header"); // Header element select
  const scrollThreshold = 200; //  scroll korle effect apply count

  button.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });

  // Click outside to close the menu
  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });

  // Nav bar active

  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      links.forEach((nav) => nav.classList.remove("nav-active"));

      // Add active class to the clicked link
      this.classList.add("nav-active");
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("sticky-header");
      header.classList.add("animate");
      if (window.innerWidth <= 768) {
        header.classList.remove("sticky-header");
        header.classList.remove("animate");
      }
    } else {
      header.classList.remove("sticky-header");
      header.classList.remove("animate");
    }
  });
});
