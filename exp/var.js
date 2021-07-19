trialIterator = 1;

delayList = [
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200,
100,
200,
400,
600,
800,
1000,
1200
];


let delayListRandomized = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats


// practice

let practiceStimuli = [];
for (let i=0; i<3; i++) {
  practiceStimuli.push('stim/neckercube.png');
  practiceStimuli.push('stim/neckercube_left.png');
  practiceStimuli.push('stim/neckercube_right.png');
}

let practiceStimuliRandomized = jsPsych.randomization.repeat(practiceStimuli, 1); //shuffled array no repeats

let practiceTrials = [];

for (let i=0; i<9; i++) {
  practiceTrials.push({stimulus: practiceStimuliRandomized[i], data: {test_part:"practice", stim:practiceStimuliRandomized[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

// experiment

let experimentStimuli = [];
for (let i=0; i<delayList.length; i++) {
  experimentStimuli.push('stim/neckercube.png');
}

// let practiceStimuliRandomized = jsPsych.randomization.repeat(practiceStimuli, 1); //shuffled array no repeats

let experimentTrials = [];

for (let i=0; i<delayList.length; i++) {
  experimentTrials.push({stimulus: experimentStimuli[i], delay: delayListRandomized[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}