import './program.js';
import './notepad.js';
import './taskbar.js';

const desktop = document.querySelector(".desktop");
const rightClickMenu = document.querySelector(".right-click-menu")

desktop.addEventListener("contextmenu", e => {
  e.preventDefault();
  rightClickMenu.style.top = e.pageY - window.scrollY + "px";
  rightClickMenu.style.left = e.pageX - window.scrollX + "px";
  rightClickMenu.style.display = "block"
})

desktop.addEventListener("click", () => {
  rightClickMenu.style.display = "none"
})