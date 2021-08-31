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

// // Countdown
// function countdown(){ // initialize timer
//     var sec = 10; // set timer in seconds
//     var percentage = ['10%','10%','20%','20%','30%','30%','40%','40%','half','half','60%','60%','70%','70%','80%','80%','90%','90%' ];
//     var countdownHtml = ['countdown1','countdown2','countdown2','countdown3','countdown3','countdown4','countdown4','countdown5','countdown5','countdown6','countdown6','countdown7','countdown7','countdown8','countdown8','countdown9','countdown9']
//     var timer = setInterval(function(){
//     var i = 0;
//     console.log(i);
//     document.getElementById(countdownHtml[i]).innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
//     sec--;
//     if (sec==-1){
//       sec = 10;
//       i++;
//       console.log('increment'+i);
//       jsPsych.finishTrial();
//       }
//     }, 1000);
//     percentage.shift();
//     // countdownHtml.shift();
//     console.log(countdownHtml);
//     console.log(countdownHtml[0]);
//     console.log(countdownHtml[1]);
//     console.log(countdownHtml[2]);
//     console.log(countdownHtml[3]);
//   }

// Countdown
function countdown(){ // initialize timer
  var sec = 10; // set timer in seconds
  var percentage = ['10%','10%','20%','20%','30%','30%','40%','40%','half','half','60%','60%','70%','70%','80%','80%','90%','90%' ];
  var timer = setInterval(function(){
  var i = 0;
  console.log(i);
  document.getElementById('countdown1').innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
  sec--;
  if (sec==-1){
    sec = 10;
    i++;
    console.log('increment'+i);
    jsPsych.finishTrial();
    }
  }, 1000);
  percentage.shift();
}

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