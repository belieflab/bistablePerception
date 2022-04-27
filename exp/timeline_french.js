let timeline = [];



let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Bonjour, merci de prendre part à notre éxpérience !</p>" +
    "<p>Celle-ci durera environ 30 minutes.</p>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};

// visual angle calibration




let calibration1 = {
  type: "html-keyboard-response",
  stimulus: "<p>D'abord, nous allons calibrer votre écran ensemble:</p>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};

// add switch for mac v pc (control v command key)
// let calibration1 = {
//   type: "html-keyboard-response",
//   stimulus: "<p> Please resize this image to match the size of a standard credit card:</p>" +
//     "<img height='320px' width='510px' src='stim/creditcard.png'>" +
//     "<p> Press command and the + key to increase the size of the image.</p>" +
//     "<p> Press command and the - key to decrease the size of the image.</p>" +
//     "<p> <i> Press spacebar to continue</i> </p>",
//   choices: [32]
// };

// let calibration2 = {
//   type: "html-keyboard-response",
//   stimulus: "<p>First, we need to make sure you are seated at the correct distance from your screen.</p>" +
//     "<p> <i> Press spacebar to continue</i> </p>",
//   choices: [32]
// };

// let calibration2 = {
//   type: "html-keyboard-response",
//   stimulus: "<p>D'abord, nous devons nous assurer que vous êtes assis(e) à la bonne distance de votre écran.</p>" +
//     "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
//   choices: [32]
// };



let calibration3 = {
  type: "html-keyboard-response",
  stimulus: "<p>D'abord, nous allons régler ensemble la distance entre votre écran et vous.</p>" +
    "<video autoplay='autoplay' loop>" +
    "<source src='stim/distance.mp4' type='video/mp4'>" +
    "</video>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};



let calibration4 = {
  type: "html-keyboard-response",
  stimulus: "<p>Elle devrait être d'environ 60cm / 24pouces (La longueur de deux feuilles de papier A4 environ)</p>" +
    "<img height='490px' width='450px' src='stim/correctdistance.jpg'>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};



let calibration5 = {
  type: "html-keyboard-response",
  stimulus: "<p>Ensuite, nous allons régler ensemble l'angle de votre écran.</p>" +
    "<video autoplay='autoplay' loop>" +
    "<source src='stim/angle.mp4' type='video/mp4'>" +
    "</video>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};



let calibration6 = {
  type: "html-keyboard-response",
  stimulus: "<p>Celui-ci devrait être perpendiculaire à votre bureau, ou au niveau du sol.</p>" +
    "<img height='350px' width='450px' src='stim/correctangle.jpg'>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};



let calibration7 = {
  type: "html-keyboard-response",
  stimulus: "<p>Enfin, nous allons régler ensemble la hauteur de votre écran.</p>" +
    "<video autoplay='autoplay' loop>" +
    "<source src='stim/screenheight.mp4' type='video/mp4'>" +
    "</video>" + "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};




let calibration8 = {
  type: "html-keyboard-response",
  stimulus: "<p>Le milieu de l'écran devrait être aligné au niveau des yeux.<p>" +
    "<p>Si vous avez un ordinateur portable, vous pouvez utiliser des livres pour faire ce réglage, soyez créatif(ve) !</p>" +
    "<img height='350px' width='450px' src='stim/correctheight.jpg'>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};




let calibration9 = {
  type: "html-keyboard-response",
  stimulus: "<p>Êtes-vous sûr(e) que tout est réglé comme il faut ?<p>" +
    "<p>Si oui, veuillez appuyer sur la touche espace.</p>" +
    "<p>Sinon, merci de relancer l'expérience en rafraîchissant cette page internet.</p>",
  choices: [32]
};




let calibration10 = {
  type: "html-keyboard-response",
  stimulus: "<p>Plus qu'une dernière chose : il est très important que vous réalisiez cette expérience dans le noir.<p>" +
    "<p>Veillez à éteindre toutes les lumières et à fermer vos rideaux ou vos stores pour rendre la pièce aussi sombre que possible.</p>" +
    "<p>Une fois que cela est fait, veuillez appuyer sur la touche espace pour continuer.</p>",
  choices: [32]
};

// instructions



let instructions1 = {
  type: "html-keyboard-response",
  stimulus: "<p> Merci, nous pouvons maintenant commencer l'expérience !</p>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};



let instructions2 = {
  type: "html-keyboard-response",
  stimulus: "<p>Cette image va vous petre présentée de façon répétée.</p>" +
    "<video width='320' height='240' autoplay='autoplay'>" +
    "<source src='stim/nc.mp4' type='video/mp4'>" +
    "</video>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};



let instructions3 = {
  type: "html-keyboard-response",
  stimulus: "<p>Il y a deux façons de la voir:</p>" +
    "<video width='320' height='240' autoplay='autoplay'>" +
    "<source src='stim/nc.mp4' type='video/mp4'>" +
    "</video>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};





let instructions4 = {
  type: "html-keyboard-response",
  stimulus: "<br><br><br>" +
    "<p>Vous pouvez l'interpréter comme un cube vu du dessus...</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/all.mp4' type='video/mp4'>" +
    "</video>" +
    "<p>...ou comme un cube vu du dessous.</p>" +
    "<br>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
  choices: [jsPsych.NO_KEYS],
  trial_duration: 4000,
  response_ends_trial: false,
};

let instructions4_1 = {
  type: "html-keyboard-response",
  stimulus: "<br><br><br>" +
    "<p>Vous pouvez l'interpréter comme un cube vu du dessus...</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/all.mp4' type='video/mp4'>" +
    "</video>" +
    "<p>...ou comme un cube vu du dessous.</p>" +
    "<br>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
  choices: [32],
  trial_duration: null,
  response_ends_trial: true,
  on_load: function() {
    document.getElementById('instructionDelay').innerHTML = '<i>Veuillez appuyer sur la touche espace pour continuer.</i>';
  }
};





let instructions5 = { 
  // TO CHANGE
  type: "html-keyboard-response",
  stimulus: "<p>Le cube va apparaître et disparaître très rapidement:</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/intermittent.mp4' type='video/mp4'>" +
    "</video>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
    choices: [jsPsych.NO_KEYS],
    trial_duration: 4000,
    response_ends_trial: false,
};

let instructions5_1 = {
  type: "html-keyboard-response",
  stimulus: "<p>Le cube va apparaître et disparaître très rapidement:</p>" +
  "<video width='320' height='240' autoplay='autoplay' loop>" +
  "<source src='stim/intermittent.mp4' type='video/mp4'>" +
  "</video>" +
  "<p id='instructionDelay'> <i>&nbsp</i> </p>",
    choices: [32],
    trial_duration: null,
    response_ends_trial: true,
    on_load: function() {
      document.getElementById('instructionDelay').innerHTML = '<i>Veuillez appuyer sur la touche espace pour continuer.</i>';
    }
};





let instructions6 = {
  type: "html-keyboard-response",
  stimulus: "<p>Pour chaque apparition du cube nous vous demanderons comment vous le percevez sur le moment:</p>" +
  "<video width='320' height='240' autoplay='autoplay' loop>" +
  "<source src='stim/all.mp4' type='video/mp4'>" +
  "</video>" +
  "<p id='instructionDelay'> <i>&nbsp</i> </p>",
    choices: [jsPsych.NO_KEYS],
    trial_duration: 4000,
    response_ends_trial: false,
};

let instructions6_1 = {
  type: "html-keyboard-response",
  stimulus: "<p>Pour chaque apparition du cube nous vous demanderons comment vous le percevez sur le moment:</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/all.mp4' type='video/mp4'>" +
    "</video>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
    choices: [32],
    trial_duration: null,
    response_ends_trial: true,
    on_load: function() {
      document.getElementById('instructionDelay').innerHTML = '<i>Veuillez appuyer sur la touche espace pour continuer.</i>';
    }
};



let instructions7 = {
  type: "html-keyboard-response",
  stimulus: "<p>Vous devrez répondre aussi vite que possible:</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/all.mp4' type='video/mp4'>" +
    "</video>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
    // "<p id='instructionDelay'> <i>&nbsp</i> </p>",
  choices: [32, 'y', 'n'],
  // on_finish: function () {
  //   // clear the spacebar message before the next slide
  //   document.getElementById('instructionDelay').innerHTML = '<p> </p>';
  // }
};



let instructions8 = {
  type: "html-keyboard-response",
  stimulus: "<p>Appuyez sur la touche 0 de votre clavier lorque vous percevez le cube comme vu du dessus.</p>" +
    "<p>(Lorsque la face avant du cube apparaît à droite)</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/sfa.mp4' type='video/mp4'>" +
    "</video>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
  choices: [48, 'y', 'n'],
  trial_duration: 20000,
  response_ends_trial: true,
  // on_start: instructionDelay()
  on_start: function () {
    // document.getElementById('instructionDelay').innerHTML = '<p> </p>';
    // first clear the spacebar message
    var sec = 4; // set timer in seconds
    var timer = setInterval(function () {
      sec--;
      if (sec == -1) {
        document.getElementById('instructionDelay').innerHTML = '<i>Veuillez appuyer sur la touche 0 pour continuer.</i>';
      }
    }, 1000);
  }
};



let instructions9 = {
  type: "html-keyboard-response",
  stimulus: "<p>Appuyez sur la touche 1 de votre clavier lorque vous percevez le cube comme vu du dessous.</p>" +
    "<p>((Lorsque la face avant du cube apparaît à gauche)</p>" +
    "<video width='320' height='240' autoplay='autoplay' loop>" +
    "<source src='stim/sfb.mp4' type='video/mp4'>" +
    "</video>" +
    "<p id='instructionDelay'> <i>&nbsp</i> </p>",
  choices: [49, 'y', 'n'],
  trial_duration: 20000,
  response_ends_trial: true,
  // on_start: instructionDelay()
  on_start: function () {
    var sec = 4; // set timer in seconds
    var timer = setInterval(function () {
      sec--;
      if (sec == -1) {
        document.getElementById('instructionDelay').innerHTML = '<i>Veuillez appuyer sur la touche 1 pour continuer.</i>';
      }
    }, 1000);
  }
};



let instructions10a = {
  type: "html-keyboard-response",
  stimulus: "<p>Une dernière chose ! Veuillez garder votre regard fixé sur la croix centrale pendant toute la durée de l'experience.</p>" +
    "<img height='250' width='300' src='stim/nc_fixation.png'>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};



let instructions10b = {
  type: "html-keyboard-response",
  stimulus: "<p>Une dernière chose ! Veuillez garder votre regard fixé sur la croix centrale pendant toute la durée de l'experience.</p>" +
    "<img height='250' width='300' src='stim/nc.png'>" +
    "<p> <i> Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};



let frenchRepeatInstructions = {
  type: "html-keyboard-response",
  stimulus: "<p>Veuillez appuyer sur la touche 'Y' si vous voulez rejouer les instructions.</p>" +
    "<p> <i>or</i> </p>" +
    "<p> Appuyez sur la touche 'N' pour continuer vers l'expérience.</p>",
  // stimulus: '<p>Hello. This is in a loop. Press R to repeat this trial, or C to continue.<p>',
  choices: ['n', 'y'],
  on_finish: function () {
    'use strict';
    k = false;
  }
};

let beginPractice = {
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

// let breakTime = {
//   type: "html-keyboard-response",
//   stimulus:"<p id='countdown'></p>",
//   on_start: countdown(),
//   on_finish: function() {
//     percentage.shift();
//   },
//   trial_duration: 10000,
//   response_ends_trial: false
// };

let break1 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown1'></p>",
  on_start: countdown1(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break2 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown2'></p>",
  on_start: countdown2(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break3 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown3'></p>",
  on_start: countdown3(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break4 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown4'></p>",
  on_start: countdown4(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break5 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown5'></p>",
  on_start: countdown5(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break6 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown6'></p>",
  on_start: countdown6(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break7 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown7'></p>",
  on_start: countdown7(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break8 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown8'></p>",
  on_start: countdown8(),
  trial_duration: 10000,
  response_ends_trial: false
};

let break9 = {
  type: "html-keyboard-response",
  stimulus: "<p id='countdown9'></p>",
  on_start: countdown9(),
  trial_duration: 10000,
  response_ends_trial: false
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
  stimulus: function () {
    var html = "<img height='250' width='300' src='" + jsPsych.timelineVariable('stimulus', true) + "'>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [48, 49],
  on_finish: function () {
    if (dummyTrialsCounter < 5) {
      dummyTrialsCounter++;
      console.log(dummyTrialsCounter);
    }
  },
  on_start: function (data) {
    // keeps track of experiment trial count
    experimentIterator++;
    data.index = experimentIterator;
  },
};



let neckerCubePractice = {
  type: "html-keyboard-response",
  stimulus: function () {
    var html = "<p>Comment percevez vous le cube en ce moment ?</p>" +
      "<img height='125' width='150' src='" + jsPsych.timelineVariable('stimulusLeft', true) + "'>" +
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "<img height='250' width='300' src='" + jsPsych.timelineVariable('stimulus', true) + "'>" +
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
      "<img height='125' width='150' src='" + jsPsych.timelineVariable('stimulusRight', true) + "'>";
    return html;
  },
  on_start: function (data) {
    // keeps track of practice trial count
    practiceIterator++;
    data.index = practiceIterator;
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [48, 49],
  prompt: "<p>1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 0</p>"
};


let neckerCubePracticeCheckout = {
  type: "html-keyboard-response",
  stimulus: function (data) {
    var data = jsPsych.data.get().last(1).values()[0];
    if (jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press) === '1') {
      var html = "<p>Voulez-vous dire que vous avez perçu le cube comme ceci ?</p>" +
        "<img height='250' width='300' src='stim/neckercube_left.png'>";
      return html;
    } else if (jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press) === '0') {
      var html = "<p>Voulez-vous dire que vous avez perçu le cube comme ceci ?</p>" +
        "<img height='250' width='300' src='stim/neckercube_right.png'>";
      return html;
    }
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [78, 89],
  prompt: "<p>Appuyez sur 'Y' pour oui, sur 'N' pour non.</p>",
  on_finish: function (data) {
    var data = jsPsych.data.get().last(1).values()[0];
    if (jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press) === 'y') {
      correctPracticeCounter++;
      console.log(correctPracticeCounter);
    } else if (jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press) === 'n') {
      correctPracticeCounter = 0;
      console.log(correctPracticeCounter);
    }
  }
};


let dummyTrialsInstructions = {
  type: "html-keyboard-response",
  stimulus: "<p> Parfait ! Nous allons maintenant procéder à quelques essais d'entraînement !</p>" +
    "<p> <i>  Veuillez appuyer sur la touche espace pour continuer.</i> </p>",
  choices: [32]
};

let attentionCheck = {
  type: "html-keyboard-response",
  stimulus: function () {
    var html = "<img height='250' width='300' src='" + jsPsych.timelineVariable('stimulus', true) + "'>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_ends_trial: true,
  choices: [48, 49]
};

let interStimulusInterval = {
  type: "html-keyboard-response",
  stimulus: function () {
    var html = "<p style='font-size:24px'>+</p>";
    return html;
  },
  response_ends_trial: false,
  trial_duration: jsPsych.timelineVariable("delay"),
  choices: [48, 49],

  // on_finish: function() {
  //   if (dummyTrialsCounter == 5) {
  //     i = 5;
  //     while (i < practiceTrials.length){ // loops through to the end of all possible trials
  //       jsPsych.endCurrentTimeline();
  //       console.log('killProcess');
  //       i++;
  //     } 
  //   }
  // }
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

let controlRunInstructionsAbove = {
  type: "html-keyboard-response",
  stimulus: "<p>Beau travail ! Pour cette partie, nous aimerions que vous effectuiez le même exercice,  mais, pendant que vous le faites, nous aimerions que vous essayiez de forcer votre perception sur 'vu d'en haut' autant que vous le pouvez.</p>" +
    "<p> <i>Appuyez sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};

let controlRunInstructionsBelow = {
  type: "html-keyboard-response",
  stimulus: "<p>Beau travail ! Pour cette partie, nous aimerions que vous effectuiez le même exercice,  mais, pendant que vous le faites, nous aimerions que vous essayiez de forcer votre perception sur 'vu d'en dessous' autant que vous le pouvez.</p>" +
    "<p> <i>Appuyez sur la touche espace pour continuer.</i> </p>",
  choices: [32, 'y', 'n']
};

let dataSave = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Données en cours de sauvergarde...</p>" +
    '<div class="sk-cube-grid">' +
    '<div class="sk-cube sk-cube1"></div>' +
    '<div class="sk-cube sk-cube2"></div>' +
    '<div class="sk-cube sk-cube3"></div>' +
    '<div class="sk-cube sk-cube4"></div>' +
    '<div class="sk-cube sk-cube5"></div>' +
    '<div class="sk-cube sk-cube6"></div>' +
    '<div class="sk-cube sk-cube7"></div>' +
    '<div class="sk-cube sk-cube8"></div>' +
    '<div class="sk-cube sk-cube9"></div>' +
    '</div>' +
    "<p style='color:white;'>Ne fermez pas cette fenêtre tant que le texte n'a pas disparu.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function () {
    saveData("bistable_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload = ''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function () {
      $("body").addClass("showCursor");
    });
  }
};


let end = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Merci!</p>" +
    "<p style='color:white;'>Vous avez terminé l'experience avec succès et vos données ont été enregistrées.</p>" +
    // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
    // "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
    // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
    "<p style='color:white;'><i>Vous pouvez désormais fermer cette fenêtre.</i></p>",
  choices: jsPsych.NO_KEYS,
  // on_load: function() {
  //   alert(reward);
  // }
};

$.getScript("exp/main.js");