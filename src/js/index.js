const body = document.querySelector("body");
const rightClickMenu = document.querySelector(".right-click-menu")
const terminalIcon = document.querySelector('[name="terminal-icon"]');

body.addEventListener("contextmenu", e => {
  e.preventDefault();
  rightClickMenu.style.top = e.pageY - window.scrollY + "px";
  rightClickMenu.style.left = e.pageX - window.scrollX + "px";
  rightClickMenu.style.display = "block"
})

body.addEventListener("click", () => {
  rightClickMenu.style.display = "none"
})

terminalIcon.addEventListener("click", e => {
  console.log(e)
})