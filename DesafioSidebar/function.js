let btn = document.querySelector("#menuBtn");
let sidebar =  document.querySelector(".sideBar");
let hideLogo = document.getElementById("logo");

btn.onclick = function menu() {
    sidebar.classList.toggle("close");
   
}