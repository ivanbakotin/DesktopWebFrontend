const programClose = document.querySelector(".close-program");
const taskbarProgram = document.querySelector(".taskbar-program");
const notepadProgram = document.querySelector(".notepad-program");

programClose.addEventListener("click", e => {
  programClose.parentNode.parentNode.style.display = "none";
})

taskbarProgram.addEventListener("dragstart", e => {
  notepadProgram.style.top = e.clientY + "px";
  notepadProgram.style.left = e.clientX + "px";
})

taskbarProgram.addEventListener("drag", e => {
  notepadProgram.style.top = e.clientY + "px";
  notepadProgram.style.left = e.clientX + "px";
})

taskbarProgram.addEventListener("dragend", e => {
  notepadProgram.style.top = e.clientY + "px";
  notepadProgram.style.left = e.clientX + "px";
})
