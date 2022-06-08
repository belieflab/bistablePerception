let trialIterator = 1;

const screenHeight = window.screen.height;
const screenWidth = window.screen.width;
const creditCardHeight = (300*screenHeight)/1080;
const creditCardWidth = (475*screenWidth)/1920;

let k;

// global variable for countdown()
var percentage = ['10%','20%','30%','40%','half','60%','70%','80%','90%'];

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
let delayListRandomizedRunControlAbove = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats
let delayListRandomizedRunControlBelow = jsPsych.randomization.repeat(delayList, 1); //shuffled array no repeats

// practice

let practiceStimuli = [];
for (let i=0; i<100; i++) {
  practiceStimuli.push(neckercubeNeutral);
  // practiceStimuli.push(neckercubeLeft);
  // practiceStimuli.push('stim/neckercube_right.png');
}

let practiceStimuliRight = []; // Display help during practice
for (let i=0; i<100; i++) {
  practiceStimuliRight.push('stim/neckercube_right.png');
}

let practiceStimuliLeft = []; // Display help during practice
for (let i=0; i<100; i++) {
  practiceStimuliLeft.push('stim/neckercube_left.png');
}

// let practiceStimuliRandomized = jsPsych.randomization.repeat(practiceStimuli, 1); //shuffled array no repeats

let practiceTrials = [];

for (let i=0; i<100; i++) {
  practiceTrials.push({stimulus: practiceStimuli[i], stimulusLeft: practiceStimuliLeft[i],  stimulusRight: practiceStimuliRight[i], delay: 600, data: {test_part:"practice", stim:practiceStimuli[i].slice(100)}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

// practice counters to keep track 
let correctPracticeCounter = 0;
let dummyTrialsCounter = 0;

// trial column counters
let practiceIterator = 0;
let experimentIterator = 0;

// experiment

let experimentStimuli = [];
for (let i=0; i<delayList.length; i++) {
  experimentStimuli.push(neckercubeNeutral);
}

// let practiceStimuliRandomized = jsPsych.randomization.repeat(practiceStimuli, 1); //shuffled array no repeats

// let experimentTrials = [];

// for (let i=0; i<delayList.length; i++) {
//   experimentTrials.push({stimulus: experimentStimuli[i], delay: delayListRandomized[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5)}}); //creating csv file "baseline_ratings" with liking ratings data saved
// }

let experimentTrialsRun1 = []; // creating RUN 1

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun1.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun1[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:1, delay: delayListRandomizedRun1[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun1.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:1}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun2 = []; // creating RUN 2

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun2.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun2[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:2, delay: delayListRandomizedRun2[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun2.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:2}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun3 = []; // creating RUN 3

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun3.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun3[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:3, delay: delayListRandomizedRun3[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun3.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:3}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun4 = []; // creating RUN 4

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun4.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun4[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:4, delay: delayListRandomizedRun4[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun4.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:4}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun5 = []; // creating RUN 5

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun5.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun5[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:5, delay: delayListRandomizedRun5[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun5.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:5}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun6 = []; // creating RUN 6

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun6.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun6[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:6, delay: delayListRandomizedRun6[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun6.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:6}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun7 = []; // creating RUN 7

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun7.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun7[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:7, delay: delayListRandomizedRun7[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun7.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:7}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun8 = []; // creating RUN 8

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun8.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun8[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:8, delay: delayListRandomizedRun8[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun8.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:8}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun9 = []; // creating RUN 9

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun9.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun9[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:9, delay: delayListRandomizedRun9[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun9.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:9}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRun10 = []; // creating RUN 10

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRun10.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRun10[i], data: {test_part:"experiment", stim:experimentStimuli[i].slice(5), trial:i, run:10, delay: delayListRandomizedRun10[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRun10.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:10}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRunControlAbove = []; // creating RUN ABOVE

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRunControlAbove.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRunControlAbove[i], data: {test_part:"control", stim:experimentStimuli[i].slice(5), trial:i, run:'above', delay: delayListRandomizedRunControlAbove[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRunControlAbove.push({stimulus: neckercubeLeft, delay: 600, data: {test_part:"catch", stim:'neckercube_left', run:'above'}}); //creating csv file "baseline_ratings" with liking ratings data saved

let experimentTrialsRunControlBelow = []; // creating RUN BELOW

for (let i=0; i<delayList.length; i++) {
  experimentTrialsRunControlBelow.push({stimulus: experimentStimuli[i], delay: delayListRandomizedRunControlBelow[i], data: {test_part:"control", stim:experimentStimuli[i].slice(5), trial:i, run:'below', delay: delayListRandomizedRunControlBelow[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
}

experimentTrialsRunControlBelow.push({stimulus: neckercubeRight, delay: 600, data: {test_part:"catch", stim:'neckercube_right', run:'below'}}); //creating csv file "baseline_ratings" with liking ratings data saved
