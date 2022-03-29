// Practice countdown
function practiceCountdown() { // initialize timer
  var sec = 10; // set timer in seconds
  var timer = setInterval(function () {
    switch (language) {
      case 'english':
        document.getElementById('practiceCountdown').innerHTML = 'The practice is about to start !' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('practiceCountdown').innerHTML = 'FRENCH: The practice is about to start !' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

// Experiment countdown
function experimentCountdown() { // initialize timer
  var sec = 10; // set timer in seconds
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('experimentCountdown').innerHTML = 'Good job ! The experiment is about to start !' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('experimentCountdown').innerHTML = 'FRENCH: Good job ! The experiment is about to start !' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

// // Instruction delays
// function instructionDelay(){ // initialize timer
//   var sec = 3; // set timer in seconds
//   var timer = setInterval(function(){
//   sec--;
//   if (sec==-1){
//     document.getElementById('instructionDelay').innerHTML= 'Press the spacebar to continue';
//     }
//   }, 1000);
// }


// // Countdown
// function countdown(){ // initialize timer
//     var sec = 10;
//     var timer = setInterval(function(){
//     var countdownHTML = document.getElementById("countdown");
//     countdownHTML.innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
//     sec--;
//     if (sec==-1){
//       sec = 10;
//       jsPsych.finishTrial();
//       }
//     }, 1000);
//   }

// Countdowns

function countdown1() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '10%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown2() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '20%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown3() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '30%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown4() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '40%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown5() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = 'half';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown6() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '60%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown7() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '70%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown8() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '80%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}

function countdown9() { // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = '90%';
  var timer = setInterval(function () {
    switch(language) {
      case 'english':
        document.getElementById('countdown1').innerHTML = 'You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
      case 'french':
        document.getElementById('countdown1').innerHTML = 'FRENCH You completed ' + percentage + ' of the experiment!' + '<br>' + sec;
        break;
    }
    sec--;
    if (sec == -1) {
      jsPsych.finishTrial();
    }
  }, 1000);
}