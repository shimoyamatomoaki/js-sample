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



  var minCount = document.getElementById("min__count");
  var minNumCount = 9;

  function minCountShow() {
    minCount.textContent = "." + minNumCount;
  }

  function minCountDown() {
    minNumCount--;

    if ( minNumCount < 0 ) {
      minNumCount = 9;
    }
    minCountShow();
  }

  function numLength() {
      if ( countStart < 10 ) {
      minCount.style.display = "inline-block";
    } else {
      minCount.style.display = "none";
    }
  }

  minCountShow();
  setInterval(minCountDown, 100);
  setInterval(numLength,1000);
};
