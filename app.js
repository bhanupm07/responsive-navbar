const togglebtnEl = document.querySelector(".toggle_btn");
const dropdownMenuEl = document.querySelector(".dropdown_menu");
const pagesEl = document.querySelector(".pages");
const closebtnEl = document.querySelector(".close_btn");
const mainEl = document.querySelector(".main");

togglebtnEl.addEventListener("click", function () {
  togglebtnEl.style.display = "none";
  dropdownMenuEl.style.display = "block";
  closebtnEl.style.display = "block";
  mainEl.style.marginTop = "3rem";
  //   console.log("clicked");
});

closebtnEl.addEventListener("click", function () {
  togglebtnEl.style.display = "block";
  dropdownMenuEl.style.display = "none";
  closebtnEl.style.display = "none";
  mainEl.style.marginTop = "21rem";
});

function windowSizeChanged() {
  if (window.innerWidth > 700) {
    togglebtnEl.style.display = "none";
    dropdownMenuEl.style.display = "none";
    closebtnEl.style.display = "none";
    // console.log("working");
  } else if (window.innerWidth <= 700) {
    togglebtnEl.style.display = "block";
  }
}

window.onresize = windowSizeChanged;
