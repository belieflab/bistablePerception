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

// 10 runs total
let delayListRandomized = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats

let delayListRandomizedRun1 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun2 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun3 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun4 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun5 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun6 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun7 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun8 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun9 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRun10 = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats

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

// let experimentTrials = [];

// for (let i=0; i<delayList.length; i++) {
//   experimentTrials.push({stimulus: experimentStimuli[i], delay: delayListRandomized[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
// }

let experimentTrialsRun1 = []; // creating RUN 1

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun1.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun1[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun2 = []; // creating RUN 2

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun2.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun2[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun3 = []; // creating RUN 3

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun3.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun3[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun4 = []; // creating RUN 4

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun4.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun4[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun5 = []; // creating RUN 5

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun5.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun5[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun6 = []; // creating RUN 6

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun6.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun6[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun7 = []; // creating RUN 7

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun7.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun7[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun8 = []; // creating RUN 8

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun8.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun8[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun9 = []; // creating RUN 9

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun9.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun9[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

let experimentTrialsRun10 = []; // creating RUN 10

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun10.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun10[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}
