const timeDiv = document.querySelector(".time");

setInterval(() => {
  const today = new Date();
  const time = today.getHours() + ":" + 
               today.getMinutes() + ":" + 
              (today.getSeconds().toString().length > 1 ? today.getSeconds() : "0" + today.getSeconds())
  
  timeDiv.innerText = time;
}, 1000)