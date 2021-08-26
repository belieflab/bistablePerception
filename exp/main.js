
// main order in which things are pushed to timeline 

let procedureCalibration= {
    timeline:[calibration0, calibration1, calibration2, calibration3, calibration4, calibration5, calibration6, calibration7, calibration8, calibration9],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
};

let procedureInstructions= {
    timeline:[instructions1, instructions2, instructions3, instructions4, instructions5, instructions6, instructions7, instructions8, instructions9, instructions10],
    // defines which array to draw stimuli from 
    // timeline_variables: imageArrayForPrelikingRating,
    choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
};

let procedurePractice= {
    timeline:[neckerCube],
    timeline_variables: practiceTrials,
    choices: [48, 49],
};

let procedureExperiment= {
    timeline:[neckerCube, interStimulusInterval],
    timeline_variables: experimentTrials,
    choices: [48, 49],
};

timeline.push(instructions0);
timeline.push(procedureCalibration);
timeline.push(procedureInstructions);
timeline.push(procedurePractice);
timeline.push(procedureExperiment);

timeline.push(dataSave);
timeline.push(end);
