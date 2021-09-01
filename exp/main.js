
// main order in which things are pushed to timeline 

let procedureCalibration= {
    timeline:[calibration0, calibration1, calibration2, calibration3, calibration4, calibration5, calibration6, calibration7, calibration8, calibration9],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
};

let procedureInstructions= {
    timeline:[instructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10, instructions11],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
};

let procedureDummyTrials= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: practiceTrials.slice(0,5), // 5 trials only
    choices: [48, 49],
};

let if_node= {
    timeline: [procedureDummyTrials],
    conditional_function: function practiceCounter(){
        // if correct answers = 3 in a row -> proceed to dummy trials then quit practice after 5 dummy trials, elseif continue practice
        if (correctPracticeCounter == 3) {
            return true;
        } else if (correctPracticeCounter < 3) {
            return false;
        } 
    },
    on_start: function(){
        if (dummyTrialsCounter == 5) {
            // prevents start if all processes are killed
            jsPsych.finishTrial();
        }
    }
};

let procedurePractice= {
    timeline:[neckerCubePractice, neckerCubePracticeCheckout, if_node],
    timeline_variables: practiceTrials,
    choices: [48, 49, 78, 89],
    // kills all processes until last trial
    on_finish: function() {
        if (dummyTrialsCounter == 5) {
          i = 0;
          while (i < practiceTrials.length){ // loops through to the end of all possible trials
            jsPsych.endCurrentTimeline();
            console.log('killProcess');
            practiceIterator++;
            i++;
          } 
        }
      }
};

let procedureExperimentRun1= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun1,
    choices: [48, 49],
};

let procedureExperimentRun2= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun2,
    choices: [48, 49]
};

let procedureExperimentRun3= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun3,
    choices: [48, 49],
};

let procedureExperimentRun4= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun4,
    choices: [48, 49],
};

let procedureExperimentRun5= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun5,
    choices: [48, 49],
};

let procedureExperimentRun6= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun6,
    choices: [48, 49],
};

let procedureExperimentRun7= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun7,
    choices: [48, 49],
};

let procedureExperimentRun8= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun8,
    choices: [48, 49],
};

let procedureExperimentRun9= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun9,
    choices: [48, 49],
};

let procedureExperimentRun10= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun10,
    choices: [48, 49],
};
// Experimental plan

timeline.push(instructions0);
// timeline.push(procedureCalibration);
// timeline.push(procedureInstructions);
timeline.push(procedurePractice);
// timeline.push(initializeExperiment);
// timeline.push(procedureExperimentRun1);
// timeline.push(break1);
// timeline.push(procedureExperimentRun2);
// timeline.push(break2);
// timeline.push(procedureExperimentRun3);
// timeline.push(break3);
// timeline.push(procedureExperimentRun4);
// timeline.push(break4);
// timeline.push(procedureExperimentRun5);
// timeline.push(break5);
// timeline.push(procedureExperimentRun6);
// timeline.push(break6);
// timeline.push(procedureExperimentRun7);
// timeline.push(break7);
// timeline.push(procedureExperimentRun8);
// timeline.push(break8);
// timeline.push(procedureExperimentRun9);
// timeline.push(break9);
// timeline.push(procedureExperimentRun10);

timeline.push(dataSave);
timeline.push(end);
