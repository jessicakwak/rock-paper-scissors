let myScore = 0;
let yourScore = 0;
let winFace =
  "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/face-with-party-horn-and-party-hat_1f973.png' height='45' width='45'>";
let tieFace =
  "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/face-with-one-eyebrow-raised_1f928.png' width='45' height='45'>";
let loseFace =
  "<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/face-screaming-in-fear_1f631.png' width='45' height='45'>";

const play = hand => {
  //when played, clear up the screen
  resetScreen();
  //Randomly generate opponent hand
  let opponent = opponentHand();
  //Update the opponent div so it shows opponent hand
  document.querySelector(`#${opponent}`).classList.remove("hidden");
  //display the outcome in the outcome div
  displayScore(hand, opponent);
};

//function to randomly generate opponent hand
const opponentHand = () => {
  let rn = Number((Math.random() * 2 + 1).toFixed(0));
  return rn == 1 ? "paper" : rn == 2 ? "rock" : "scissors";
};

//Check it I won or lost
const getScore = (myHand, opponentHand) => {
  return myHand == opponentHand
    ? 0
    : (myHand == "paper" && opponentHand == "scissors") ||
      (myHand == "rock" && opponentHand == "paper") ||
      (myHand == "scissors" && opponentHand == "rock")
    ? -1
    : 1;
};

//reset score once the user choose to end the game
const resetScore = () => {
  //if game has started, allows to reset score. otherwise do nothing
  if (
    document.querySelector(".finalOutcome").classList.value.includes("hidden")
  ) {
    document.querySelectorAll("#opponent div").forEach(e => {
      e.classList.add("hidden");
    });
    let final;
    if (myScore > yourScore) {
      final = `You  won this round by ${myScore} vs ${yourScore}`;
      document.querySelector("#outcome").innerHTML = winFace;
    } else if (myScore == yourScore) {
      final = "This round was tie";
      document.querySelector("#outcome").innerHTML = tieFace;
    } else {
      final = `You lost this round by ${myScore} vs ${yourScore}`;
      document.querySelector("#outcome").innerHTML = loseFace;
    }
    document.querySelector(".finalOutcome").classList.remove("hidden");
    document.querySelector(".finalOutcome").innerHTML = final;
    document.querySelector(".start").classList.remove("hidden");
    document.querySelector("#myScore").classList.add("hidden");
    document.querySelector(".vs").classList.add("hidden");
    document.querySelector("#yourScore").classList.add("hidden");
    myScore = 0;
    yourScore = 0;
    document.querySelector(`#${opponent}`).classList.add("hidden");
    document.querySelector("#outcome").classList.add("hidden");
  }
};

//function to clear up the screen
const resetScreen = () => {
  document.querySelector(".finalOutcome").classList.add("hidden");
  document.querySelectorAll("#opponent div").forEach(e => {
    e.classList.add("hidden");
  });
  document.querySelector(".start").classList.add("hidden");
};

//display the score
const displayScore = (hand, opponent) => {
  let outcome = getScore(hand, opponent);
  let message =
    outcome == 0
      ? "Tie" + tieFace
      : outcome == 1
      ? "Win!" + winFace
      : "Lose" + loseFace;
  myScore += outcome;
  yourScore -= outcome;
  document.querySelector("#outcome").innerHTML = message;
  document.querySelector("#myScore").classList.remove("hidden");
  document.querySelector(
    "#myScore"
  ).innerHTML = `<p><strong>YOU</strong><br><br>${myScore}`;
  document.querySelector(".vs").classList.remove("hidden");
  document.querySelector("#yourScore").classList.remove("hidden");
  document.querySelector(
    "#yourScore"
  ).innerHTML = `<p><strong>Opponent</strong><br><br>${yourScore}`;
};
