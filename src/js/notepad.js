const notepadIcon = document.querySelector(".notepad-icon");
const notepadProgram = document.querySelector(".notepad-program");

notepadIcon.addEventListener("click", e => {
  notepadProgram.style.display = "block";
  notepadProgram.style.top = e.clientY + "px";
  notepadProgram.style.left = e.clientX + "px";
})

