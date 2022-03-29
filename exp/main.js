// main order in which things are pushed to timeline 

let procedureCalibration = {
    timeline: [calibration0, calibration1, calibration2, calibration3, calibration4, calibration5, calibration6, calibration7, calibration8, calibration9, calibration10],
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsContinuousFixationEnglish = {
    timeline: [instructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsDiscontinuousFixationEnglish = {
    timeline: [instructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10b],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsContinuousFixationFrench = {
    timeline: [frenchInstructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsDiscontinuousFixationFrench = {
    timeline: [frenchInstructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10b],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let trial = {
    type: 'html-keyboard-response',
    stimulus: '<p>Hello. This is in a loop. Press Y to repeat this trial, or N to continue.<p>',
    choices: ['y', 'n']
};


let trial2 = {
    type: 'html-keyboard-response',
    stimulus: '<p>Hello. This is still a loop. Press Y to repeat this trial, or N to continue.<p>',
    choices: ['y', 'n']
};

let trials = {
    timeline: [trial, trial2],
    choices: [48, 49]
};




// let loop_node_procedural = {
//     timeline: [procedureInstructions],
//     loop_function: function (data) {
//         if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
//             console.log(data.values()[0].key_press);
//             return true;
//         } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
//             console.log(data.values()[0].key_press);
//             return false;
//         }
//     },
//     on_start: function () {
//         'use strict';
//         if (k == false) {
//             // prevents last trial if all processes are killed
//             jsPsych.finishTrial();
//         }
//     }

// };

// let loop_node_fixation = {
//     timeline: [procedureInstructionsFixation],
//     loop_function: function (data) {
//         if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
//             console.log(data.values()[0].key_press);
//             return true;
//         } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
//             console.log(data.values()[0].key_press);
//             return false;
//         }
//     },
//     on_start: function () {
//         'use strict';
//         if (k == false) {
//             // prevents last trial if all processes are killed
//             jsPsych.finishTrial();
//         }
//     }

// };



let procedureDummyTrials = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: practiceTrials.slice(0, 5), // 5 trials only
    choices: [48, 49]
};

let if_node = {
    timeline: [dummyTrialsInstructions, procedureDummyTrials],
    conditional_function: function practiceCounter() {
        // if correct answers = 3 in a row -> proceed to dummy trials then quit practice after 5 dummy trials, elseif continue practice
        if (correctPracticeCounter == 3) {
            return true;
        } else if (correctPracticeCounter < 3) {
            return false;
        }
    },
    on_start: function () {
        if (dummyTrialsCounter == 5) {
            // prevents last trial if all processes are killed
            jsPsych.finishTrial();
        }
    }
};

let procedurePractice = {
    timeline: [neckerCubePractice, neckerCubePracticeCheckout, if_node],
    timeline_variables: practiceTrials,
    choices: [48, 49, 78, 89],
    // kills all processes until last trial
    on_finish: function () {
        if (dummyTrialsCounter == 5) {
            i = 0;
            while (i < practiceTrials.length) { // loops through to the end of all possible trials
                jsPsych.endCurrentTimeline();
                console.log('killProcess');
                i++;
            }
        }
    }
};

let procedureExperimentRun1 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun1,
    choices: [48, 49],
};

let procedureExperimentRun2 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun2,
    choices: [48, 49]
};

let procedureExperimentRun3 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun3,
    choices: [48, 49],
};

let procedureExperimentRun4 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun4,
    choices: [48, 49],
};

let procedureExperimentRun5 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun5,
    choices: [48, 49],
};

let procedureExperimentRun6 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun6,
    choices: [48, 49],
};

let procedureExperimentRun7 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun7,
    choices: [48, 49],
};

let procedureExperimentRun8 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun8,
    choices: [48, 49],
};

let procedureExperimentRun9 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun9,
    choices: [48, 49],
};

let procedureExperimentRun10 = {
    timeline: [neckerCube, interStimulusInterval],
    timeline_variables: experimentTrialsRun10,
    choices: [48, 49],
};
// Experimental plan

timeline.push(instructions0);
timeline.push(procedureCalibration);

switch (language) {
    case "english":
        switch(version) {
            case "continuous fixation":
                timeline.push(procedureInstructionsContinuousFixationEnglish);
                break;
            case "discontinuous fixation":
                timeline.push(procedureInstructionsDiscontinuousFixationEnglish);
                break;
        }
    case "french":
        switch(version) {
            case "continuous fixation":
                timeline.push(procedureInstructionsContinuousFixationFrench);
                break;
            case "discontinuous fixation":
                timeline.push(procedureInstructionsDiscontinuousFixationFrench);
                break;
        }
}

// repeat instructions

// switch (version) {
//     case "continuous fixation":
//         timeline.push(loop_node_fixation);
//         break;
//     case "discontinuous fixation":
//         timeline.push(loop_node_discontinuous);
//         break;
// }

var loop_node = {
    timeline: [trials],
    // timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a, trial2],
    loop_function: function (data) {
        if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            return true;
        } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            lol = false;
            return false;
        }
    }
};

let fixationInstructions = {
    timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a, trial2],
    // choices: [48, 49]
};

let discontinuousInstructions = {
    timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a, trial2],
    // choices: [48, 49]
};

var lol;

var loop_node_fixation = {
    timeline: [fixationInstructions],
    loop_function: function (data) {
        if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            return true;
        } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            lol = false;
            return false;
        }
    }
};

var loop_node_discontinuous = {
    timeline: [discontinuousInstructions],
    loop_function: function (data) {
        if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            return true;
        } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
            console.log(jsPsych.data.get().last(1).values()[0]);
            lol = false;
            return false;
        }
    }
};

let practiceDiscontinuous = {
    timeline: [loop_node_discontinuous],
    // timeline: [repeatProcedureInstructions],
    // choices: [78, 89],
    // kills all processes until last trial
    on_load: function () {
        if (lol == false) {
            jsPsych.endCurrentTimeline();
        }
    }
};

let practiceFixation = {
    timeline: [loop_node_fixation],
    // timeline: [repeatProcedureInstructions],
    // choices: [78, 89],
    // kills all processes until last trial
    on_load: function () {
        if (lol == false) {
            jsPsych.endCurrentTimeline();
        }
    }
};

let instructionslol = {
    timeline: [loop_node],
    choices: [48, 49, 78, 89],
    // kills all processes until last trial
    on_load: function () {
        if (lol == false) {
            jsPsych.endCurrentTimeline();
        }
    }
};

switch (version) {
    case "continuous fixation":
        timeline.push(practiceFixation);
        break;
    case "discontinuous fixation":
        timeline.push(practiceDiscontinuous);
        break;
}

// timeline.push(instructionslol);


timeline.push(beginPractice);

timeline.push(procedurePractice);
timeline.push(initializeExperiment);
timeline.push(procedureExperimentRun1);
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