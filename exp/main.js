// main order in which things are pushed to timeline 

let procedureCalibration = {
    timeline: [calibration1, calibration3, calibration4, calibration5, calibration6, calibration7, calibration8, calibration9, calibration10],
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsContinuousFixation = {
    timeline: [instructions1, instructions2, instructions3, instructions4, instructions4_1, instructions5, instructions5_1, instructions6, instructions6_1, instructions7, instructions8, instructions9, instructions10a],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

let procedureInstructionsDiscontinuousFixation = {
    timeline: [instructions1, instructions2, instructions3, instructions4, instructions4_1, instructions5, instructions5_1, instructions6, instructions6_1, instructions7, instructions8, instructions9, instructions10b],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57]
};

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

let continuousFixationInstructions = {
    timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a],
    // choices: [48, 49]
};

let discontinuousFixationInstructions = {
    timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a],
    // choices: [48, 49]
};

// Experimental plan

timeline.push(instructions0);
timeline.push(procedureCalibration);

switch (version) {
    case "continuous fixation":
        timeline.push(procedureInstructionsContinuousFixation);
        // timeline.push(continuousInstructions);
        break;
    case "discontinuous fixation":
        timeline.push(procedureInstructionsDiscontinuousFixation);
        // timeline.push(discontinuousInstructions);
        break;
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

// var loop_node = {
//     timeline: [trials],
//     // timeline: [instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10a, trial2],
//     loop_function: function (data) {
//         if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             return true;
//         } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             lol = false;
//             return false;
//         }
//     }
// };

// var loop_node_fixation_ = {
//     timeline: [continuousFixationInstructions],
//     loop_function: function (data) {
//         if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             return true;
//         } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             lol = false;
//             return false;
//         }
//     }
// };

// var loop_node_discontinuous_ = {
//     timeline: [discontinuousFixationInstructions],
//     loop_function: function (data) {
//         if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('y') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             return true;
//         } else if (jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n') == data.values()[0].key_press) {
//             console.log(jsPsych.data.get().last(1).values()[0]);
//             lol = false;
//             return false;
//         }
//     }
// };

// let practiceDiscontinuous = {
//     timeline: [loop_node_discontinuous_],
//     // timeline: [repeatProcedureInstructions],
//     // choices: [78, 89],
//     // kills all processes until last trial
//     on_load: function () {
//         if (lol == false) {
//             jsPsych.endCurrentTimeline();
//         }
//     }
// };

// let practiceFixation = {
//     timeline: [loop_node_fixation_],
//     // timeline: [repeatProcedureInstructions],
//     // choices: [78, 89],
//     // kills all processes until last trial
//     on_load: function () {
//         if (lol == false) {
//             jsPsych.endCurrentTimeline();
//         }
//     }
// };

// let instructionslol = {
//     timeline: [loop_node],
//     choices: [48, 49, 78, 89],
//     // kills all processes until last trial
//     on_load: function () {
//         if (lol == false) {
//             jsPsych.endCurrentTimeline();
//         }
//     }
// };

// switch (version) {
//     case "continuous fixation":
//         timeline.push(practiceFixation);
//         break;
//     case "discontinuous fixation":
//         timeline.push(practiceDiscontinuous);
//         break;
// }




timeline.push(beginPractice);
timeline.push(procedurePractice);
timeline.push(initializeExperiment);
timeline.push(procedureExperimentRun1);
timeline.push(break1);
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
     