(()=>{const e=document.querySelector("body"),t=document.querySelector(".right-click-menu"),l=document.querySelector('[name="terminal-icon"]');e.addEventListener("contextmenu",(e=>{e.preventDefault(),t.style.top=e.pageY-window.scrollY+"px",t.style.left=e.pageX-window.scrollX+"px",t.style.display="block"})),e.addEventListener("click",(()=>{t.style.display="none"})),l.addEventListener("click",(e=>{console.log(e)}))})();