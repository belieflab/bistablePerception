// Practice countdown
function practiceCountdown(){ // initialize timer
    var sec = 10; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('practiceCountdown').innerHTML= 'The practice is about to start !' + '<br>'+sec;
    sec--;
    if (sec==-1){
      jsPsych.finishTrial();
      }
    }, 1000);
  }

// Experiment countdown
function experimentCountdown(){ // initialize timer
  var sec = 10; // set timer in seconds
  var timer = setInterval(function(){
  document.getElementById('experimentCountdown').innerHTML= 'The experiment is about to start !' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

// Countdown
function countdown(){ // initialize timer
    var sec = 10;
    var timer = setInterval(function(){
    var countdownHTML = document.getElementById("countdown2");
    countdownHTML.innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
    sec--;
    if (sec==-1){
      jsPsych.finishTrial();
      }
    }, 1000);
  }

// Countdowns

function countdown1(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '10%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown2(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '20%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown3(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '30%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown4(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '40%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown4').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown5(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = 'half';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown5').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown6(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '60%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown6').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown7(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '70%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown7').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown8(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '80%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown8').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown9(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '90%';
  var timer = setInterval(function(){
  var i = 1;
  document.getElementById('countdown9').innerHTML= 'You completed '+percentage+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    jsPsych.finishTrial();
    }
  }, 1000);
}

// // Countdown
// function countdown(){ // initialize timer
//   var sec = 10; // set timer in seconds
//   var percentage = ['10%','10%','20%','20%','30%','30%','40%','40%','half','half','60%','60%','70%','70%','80%','80%','90%','90%' ];
//   var timer = setInterval(function(){
//   var i = 0;
//   console.log(i);
//   document.getElementById('countdown1').innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
//   sec--;
//   if (sec==-1){
//     sec = 10;
//     i++;
//     console.log('increment'+i);
//     jsPsych.finishTrial();
//     }
//   }, 1000);
//   percentage.shift();
// }

// // Countdown
// function countdownRun2(){ // initialize timer
//   var sec = 10; // set timer in seconds
//   var percentage = ['20%'];
//   var timer = setInterval(function(){
//   document.getElementById('countdown2').innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
//   sec--;
//   if (sec==-1){
//     jsPsych.finishTrial();
//     }
//   }, 1000);
// }