const body = document.querySelector("body");
const rightClickMenu = document.querySelector(".right-click-menu")

body.addEventListener("contextmenu", e => {
  e.preventDefault();
  console.log(e.clientX, e.clientY)
  rightClickMenu.style.top = e.pageY - window.scrollY + "px";
  rightClickMenu.style.left = e.pageX - window.scrollX + "px";
  rightClickMenu.style.display = "block"
})

body.addEventListener("click", () => {
  rightClickMenu.style.display = "none"
})