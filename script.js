// ***************** ACTIVE NAV LINK *********************
// const mainNavList = document.getElementById("mainNavList");

// let navLi = mainNavList.querySelectorAll(".nav-li");

// for (let i = 0; i < navLi.length; i++) {
//   navLi[i].addEventListener("click", function () {
//     let current = document.querySelectorAll(".main-nav-link");

//     current[0].classList = current[0].classList.replace("active", " ");

//     this.classList.add("active");
//   });
// }

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   EventTarget: "#navbar",
// });

// ************************* STICKY NAV **********************
//
const heroSection = document.querySelector(".hi");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-64px",
  }
);
obs.observe(heroSection);

// ************************* NAV DROPDOWN **********************
const dropdownIcon = document.querySelector(".dropdown-icon");
const solutionDropdownCont = document.querySelector(".solution-dropdown-cont");

function displayDropdown() {
  solutionDropdownCont.classList.remove("hidden");
}

function hideDropdown() {
  solutionDropdownCont.classList.add("hidden");
}

function eventDropdown() {
  if (!solutionDropdownCont.classList.contains("hidden")) {
    hideDropdown();
  } else {
    displayDropdown();
  }
}

dropdownIcon.addEventListener("click", eventDropdown);

// ********** MOBILE NAVIGATION **************************
const mobileNavMenu = document.getElementById("mobileNavMenu");
const mobileNavClose = document.getElementById("mobileNavClose");
const header = document.querySelector(".headerq");

const navToggle = () => {
  header.classList.toggle("nav-open");
};

mobileNavMenu.addEventListener("click", navToggle);

mobileNavClose.addEventListener("click", navToggle);

// ********** DARK THEME **************************
const themeImg = document.querySelector(".theme-dark-img");
const lightImg = document.querySelector(".theme-light-img");
const displaydiv = document.querySelector(".displaydiv");

themeImg.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark");
  displaydiv.classList.toggle("display");
});

lightImg.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark");
  displaydiv.classList.toggle("display");
});
