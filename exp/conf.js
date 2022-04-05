  //******************************************/
  //   BISTABLE PERCEPTION                    /
  //******************************************/

  let workerId = getParamFromURL('workerId');

  // select embedded fixation cross inside neckercube
  // continuous fixation is the embedded version
  // const version = "continuous fixation";
  const version = "discontinuous fixation";

  let neckercubeNeutral;
  let neckercubeLeft;
  let neckercubeRight;

  switch (version) {
    case "continuous fixation":
      neckercubeNeutral = 'stim/neckercube_fixation.png';
      neckercubeLeft = 'stim/neckercube_left_fixation.png';
      neckercubeRight = 'stim/neckercube_right_fixation.png';
      break;
    case "discontinuous fixation":
      neckercubeNeutral = 'stim/neckercube.png';
      neckercubeLeft = 'stim/neckercube_left.png';
      neckercubeRight = 'stim/neckercube_right.png';
      break;
      // default:
      //   let neckercubeNeutral = 'stim/neckercube_fixation.png';
      //   let neckercubeLeft = 'stim/neckercube_left_fixation.png';
      //   let neckercubeRight = 'stim/neckercube_right_fixation.png';
  }