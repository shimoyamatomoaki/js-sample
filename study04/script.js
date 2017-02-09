window.onload = function (){
  var btn = document.getElementById("menu");
  btn.addEventListener("click",active,false)
  function active() {
    btn.classList.toggle("active");
  }
}
