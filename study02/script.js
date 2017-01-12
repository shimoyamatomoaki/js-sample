window.onload = function() {
  var time = document.getElementById("time");
  var timeCount = document.getElementById("time__count");
  var countStart = 30;
  var Numcount = 0;

  function countshow() {
    time.textContent = countStart;
    timeCount.textContent = Numcount;
  }

  function countdown() {
    countStart--;

    if ( countStart < 0 ) {
      countStart = 30;
      Numcount++;
    }
    countshow();
  }

  countshow();
  setInterval(countdown, 1000);


  var minTime = document.getElementById("min__time");
  var minNumCount = 9;
  minTime.style.display = "none";

  function numLength() {
    if ( countStart < 10 ) {
      minTime.textContent = "." + minNumCount;
      minTime.style.display = "inline-block";
    } else {
      minTime.textContent = "";
      minTime.style.display = "none";
    }
  }

  function minTimeDown() {
    minNumCount--;

    if ( minNumCount < 0 ) {
      minNumCount = 9;
    }

    numLength();
  }

  setInterval(numLength, 100);
  setInterval(minTimeDown, 100);
};
