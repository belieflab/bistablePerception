// Initial countdown
function initialCountdown(){ // initialize timer
    var sec = 10; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('initialCountdown').innerHTML= 'The practice is about to start !' + '<br>'+sec;
    sec--;
    if (sec==-1){
      jsPsych.finishTrial();
      }
    }, 1000);
  }

// Countdown
function countdown(){ // initialize timer
    var sec = 10; // set timer in seconds
    var percentage = ['10%','10%','20%','20%','30%','30%','40%','40%','half','half','60%','60%','70%','70%','80%','80%','90%','90%' ];
    var timer = setInterval(function(){
    document.getElementById('countdown').innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
    sec--;
    if (sec==-1){
      jsPsych.finishTrial();
      }
    }, 1000);
    percentage.shift();
  }