
window.onload = function() {
  var study = document.getElementById("study");
  var i = 0;
  var x = window.innerWidth;
  var y = window.innerHeight;
  (function move(){
    move.endTime || (move.endTime = Date.now() + 1000);
    var ratio = Math.min(1, 1 - (move.endTime - Date.now()) / 1000);
    study.style.left = Math.random() * (x - 1) + 1 * ratio * ratio - 100 + "px"; 
    study.style.top = Math.random() * (y - 1) + 1 * ratio * ratio - 100 + "px";
    if(ratio < 1){
      setTimeout(move, 100);
    } else {
      disappear();
    }
  })();

  var disappear = function() {
    disappear.endTime || (disappear.endTime = Date.now() + 1000);
    var ratio = Math.max(0, (disappear.endTime - Date.now()) / 1000);
    study.style.opacity = ratio;
    if(ratio > 0){
      setTimeout(disappear, 0.5);
    }
  };


  elem = document.getElementById("btn");
  transSec = "0.2s";
  elem.onmouseover = function() {
    elem.style.backgroundColor = "blue";
    elem.style.transition = transSec;
    console.log("マウスが乗りました。");
  }

  elem.onmouseout = function() {
    elem.style.backgroundColor = "red";
    elem.style.transition = transSec;
    console.log("マウスが外れました。");
   }


  var slideItem = document.getElementById("slide-item");
  var slideList = document.getElementById("slide-list");
  elem.onclick = function () {
    slideList.classList.toggle("slide-list--hidden");
  }
 };

