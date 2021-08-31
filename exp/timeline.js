let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Welcome to the experiment!</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

// visual angle calibration


let calibration0 = {
  type: "html-keyboard-response",
  stimulus: "<p>First, we need your help to properly adjust your screen:</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

// add switch for mac v pc (control v command key)
let calibration1 = {
  type: "html-keyboard-response",
  stimulus: "<p> Please resize this image to match the size of a standard credit card:</p>"+
  "<img height='320px' width='510px' src='stim/creditcard.png'>"+
  "<p> Press command and the + key to increase the size of the image.</p>"+
  "<p> Press command and the - key to decrease the size of the image.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration2 = {
  type: "html-keyboard-response",
  stimulus: "<p>Now, we need to make sure you are seated at the correct distance from your screen.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration3 = {
  type: "html-keyboard-response",
  stimulus: "<p>First, we need your help to properly adjust the distance betwen you and your screen.</p>"+
  "<video autoplay='autoplay'>"+
  "<source src='stim/distance.mp4' type='video/mp4'>"+
  "</video>"+

  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration4 = {
  type: "html-keyboard-response",
  stimulus: "<p>It should be 60cm / 24inches (The lenght of two A4 sheets of paper)</p>"+
  "<img height='490px' width='450px' src='stim/correctdistance.jpg'>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration5 = {
  type: "html-keyboard-response",
  stimulus: "<p>Next, we need your help to properly adjust the angle of your screen:</p>"+
  "<video autoplay='autoplay'>"+
  "<source src='stim/angle.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration6 = {
  type: "html-keyboard-response",
  stimulus:   "<p>It should be perpendicular to the top of your desk or level surface.</p>"+
  "<img height='350px' width='450px' src='stim/correctangle.jpg'>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let calibration7 = {
  type: "html-keyboard-response",
  stimulus: "<p>Last, we need your help to adjust the height of your screen.</p>"+
  "<video autoplay='autoplay'>"+
  "<source src='stim/screenheight.mp4' type='video/mp4'>"+
  "</video>"+  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};


let calibration8 = {
  type: "html-keyboard-response",
  stimulus:   "<p>The middle of the screen should be aligned at eye level.<p>"+
  "<p>If you have a laptop, please use books to achieve the correct height.</p>"+
  "<img height='350px' width='450px' src='stim/correctheight.jpg'>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};


let calibration9 = {
  type: "html-keyboard-response",
  stimulus: "<p>Are you sure everything is set up correctly?<p>"+
  "<p>If you are sure, press spacebar to continue.</p>"+
  "<p>If not, please restart the experiment by refreshing your browser.</p>",
  choices: [32]
};


// instructions

let instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p> Thank you, we are now ready to begin the experiment!</p>"+
    "<p> <i> Press spacebar to continue</i> </p>",
    choices: [32]
};

let instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>This image will be presented to you repeatedly:</p>"+
    "<video width='320' height='240' autoplay='autoplay'>"+
    "<source src='stim/nc.mp4' type='video/mp4'>"+
    "</video>"+
    "<p> <i> Press the spacebar to continue</i> </p>",
    choices: [32]
};

let instructions3 = {
  type: "html-keyboard-response",
  stimulus: "<p>There are two ways of seeing it:</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/nc.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let instructions4 = {
  type: "html-keyboard-response",
  stimulus:   "<br><br><br>"+
  "<p>You can interpret it as a cube seen from above...</p>"+
  "<video width='320' height='240'a utoplay='autoplay'>"+
  "<source src='stim/all.mp4' type='video/mp4'>"+
  "</video>"+
  "<p>...or as a cube seen from below:</p>"+
  "<br>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};


let instructions5 = {
  type: "html-keyboard-response",
  stimulus: "<p>The cube will appear and disappear very quickly:</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/intermittent.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let instructions6 = {
  type: "html-keyboard-response",
  stimulus: "<p>For each appearance of the cube, we will ask you to indicate how you perceive it, at the moment:</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/all.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let instructions7 = {
  type: "html-keyboard-response",
  stimulus: "<p>You will need to answer as fast as possible:</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/all.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let instructions8 = {
  type: "html-keyboard-response",
  stimulus: "<p>Press the 0 key when you perceive the cube from above:</p>"+
  "<p>(When the front side of the cube appears on the right)</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/sfa.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the 0 key to continue</i> </p>",
  choices: [48]
};

let instructions9 = {
  type: "html-keyboard-response",
  stimulus: "<p>Press the 1 key when you perceive the cube from below:</p>"+
  "<p>(When the front side of the cube appears on the left)</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/sfb.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the 1 key to continue</i> </p>",
  choices: [49]
};

let instructions10 = {
  type: "html-keyboard-response",
  stimulus: "<p>Just one last thing: Please focus your gaze on the central cross throughout the experiment!</p>"+
  "<video width='320' height='240' autoplay='autoplay'>"+
  "<source src='stim/nc.mp4' type='video/mp4'>"+
  "</video>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let instructions11 = {
  type: "html-keyboard-response",
  stimulus: "<p id='practiceCountdown'></p>",
  on_start: practiceCountdown(),
  trial_duration: 10000,
  response_ends_trial: false
};

let initializeExperiment = {
  type: "html-keyboard-response",
  stimulus: "<p id='experimentCountdown'></p>",
  on_start: experimentCountdown(),
  trial_duration: 10000,
  response_ends_trial: false
};

// experiment

let break1 = {
  type: "html-keyboard-response",
  stimulus:"<p id='countdown'></p>",
  // stimulus: "<p id='countdown'>You completed 10% of the experiment!</p>",
  on_start: countdown(),
  trial_duration: 10000,
  response_ends_trial: false
};

// let instr_1 = {
//   type:"html-keyboard-response",
//   stimulus:'<p style="color:black; font-size:60px;" id="countdown"></p>',
//   trial_duration: 5200,
//   on_start: countdown(),
//   response_ends_trial: false,
//   }

let break2 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 20% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break3 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 30% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break4 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 40% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break5 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed half the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break6 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 60% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break7 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 70% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break8 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 90% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

let break9 = {
  type: "html-keyboard-response",
  stimulus: "<p>You completed 90% of the experiment!</p>"+
  "<p> <i> Press the spacebar to continue</i> </p>",
  choices: [32]
};

// let fixation? = {
//   type: "html-keyboard-response",
//   stimulus: "<p>Just one last thing: Please focus your gaze on the central cross throughout the experiment!</p>"+
//   "<video width='320' height='240' autoplay='autoplay'>"+
//   "<source src='stim/nc.mp4' type='video/mp4'>"+
//   "</video>"+
//   "<p> <i> Press the spacebar to continue</i> </p>",
//   choices: [32]
// };

let neckerCube = {
  type: "html-keyboard-response",
  stimulus: function(){
    var html="<img height='250' width='300' src='"+jsPsych.timelineVariable('stimulus', true)+"'>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [48, 49]
};

let attentionCheck = {
  type: "html-keyboard-response",
  stimulus: function(){
    var html="<img height='250' width='300' src='"+jsPsych.timelineVariable('stimulus', true)+"'>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [48, 49]
};

let interStimulusInterval = {
  type: "html-keyboard-response",
  stimulus: function(){
    var html="";
    return html;
  },
  response_ends_trial: false,
  trial_duration: jsPsych.timelineVariable("delay"),
  choices: [48, 49]
};

// let neckerCubeRight = {
//   type: "html-keyboard-response",
//   stimulus: "<img width='320' height='280' src='stim/neckercube_right.png'>",
//   data: "right",
//   response_ends_trial: true,
//   choices: [48, 49]
// };

// let neckerCubeLeft = {
//   type: "html-keyboard-response",
//   stimulus: "<img width='320' height='280' src='stim/neckercube_left.png'>",
//   data: "left",
//   response_ends_trial: true,
//   choices: [48, 49]
// };


let dataSave = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Data saving...</p>"+
  '<div class="sk-cube-grid">'+
  '<div class="sk-cube sk-cube1"></div>'+
  '<div class="sk-cube sk-cube2"></div>'+
  '<div class="sk-cube sk-cube3"></div>'+
  '<div class="sk-cube sk-cube4"></div>'+
  '<div class="sk-cube sk-cube5"></div>'+
  '<div class="sk-cube sk-cube6"></div>'+
  '<div class="sk-cube sk-cube7"></div>'+
  '<div class="sk-cube sk-cube8"></div>'+
  '<div class="sk-cube sk-cube9"></div>'+
  '</div>'+
  "<p style='color:white;'>Do not close this window until the text dissapears.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function() {
    saveData("bistable_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload=''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function() {
    $("body").addClass("showCursor");
    });
  }
};
let end = {
  type: "html-keyboard-response",
  stimulus:   "<p style='color:white;'>Thank you!</p>"+
  "<p style='color:white;'>You have successfully completed the experiment and your data has been saved.</p>"+
  // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
  // "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
  // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
  "<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
  // on_load: function() {
  //   alert(reward);
  // }
};

$.getScript("exp/main.js");