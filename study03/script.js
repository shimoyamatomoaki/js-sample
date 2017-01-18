
window.onload = function (){
  // button1
  var target = document.getElementById("button");
  target.addEventListener('mouseover',sample,false);
  var style = target.style;

  function sample() {
    console.log("マウスが乗りました");
    style.opacity = "0.7";
    style.transition = "0.3s";
  }

  target.addEventListener('mouseout',sample2,false);
  function sample2() {
    console.log("マウスが外れました。");
    style.opacity = "1";
    style.transition = "0.3s";
  }

  function clickEvent() {
    target.addEventListener('mousedown',sample3,false);
    function sample3() {
      console.log("クリックされました");
      style.opacity = "0.2";
      style.width = "70px";
      style.height = "70px";
      style.transition = "0.05s";
    }

    target.addEventListener('mouseup',sample4,false);
    function sample4() {
      style.opacity = "0.7";
      style.width = "50px";
      style.height = "50px";
      style.transition = "0.3s";
    }
  }
  clickEvent();

  // button2
  function play() {
    var target2 = document.getElementById("button2");
    var style2 = target2.style;

    target2.addEventListener('mouseover',play1,false);
    function play1() {
      style2.transform = "rotateY(180deg)";
      style2.transition = "0.6s";
      style2.backgroundColor = "red";
    }

    target2.addEventListener('mouseout',play2,false);
    function play2() {
      style2.transform = "rotate(0)";
      style2.transition = "0.6s";
      style2.backgroundColor = "#e7e7e7";
    }
  }
  play();
}
