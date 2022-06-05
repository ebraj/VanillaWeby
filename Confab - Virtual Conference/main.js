const navLists = document.querySelector(".navbar__lists--mobile");
const navHam = document.querySelector(".navbar__ham");
let isNavOpen = false;

navHam.addEventListener("click", () => {
  if (isNavOpen) {
    navLists.classList.remove("open");
    navLists.classList.add("close");
    isNavOpen = false;
  } else {
    navLists.classList.remove("close");
    navLists.classList.add("open");
    isNavOpen = true;
  }
});
