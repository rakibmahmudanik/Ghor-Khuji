document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const menu = document.getElementById("dropdownMenu");
  const links = document.querySelectorAll(".nav-bar a");
  const detailsNave = document.querySelector(".details-nav");
  const rightSide = document.querySelector(".right-side");
  console.log(detailsNave);
  console.log(rightSide);

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

  1550;

  // rightSide.classList.add("absulute");

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("sticky-header", "animate");

      if (window.innerWidth <= 768) {
        header.classList.remove("sticky-header", "animate");
      }
    } else {
      header.classList.remove("sticky-header", "animate");
    }

    if (window.scrollY > 600) {
      detailsNave.classList.add("sticky-nav", "animate");
      detailsNave.classList.remove("d-none");
      // rightSide.classList.remove("absulute");
    } else {
      detailsNave.classList.remove("sticky-nav", "animate");
      detailsNave.classList.add("d-none");
    }

    if (window.innerWidth > 768) {
      if (window.scrollY > 600 && window.scrollY < 1550) {
        rightSide.classList.add("right-side-fixed");
      } else {
        rightSide.classList.remove("right-side-fixed");
        rightSide.classList.add("right-side-absulute");
      }

      if (window.scrollY > 1550) {
        rightSide.classList.add("right-side-relative");
        rightSide.classList.remove("right-side-absulute");
      }
    } else {
      rightSide.classList.remove("right-side-relative");
    }
  });
});
