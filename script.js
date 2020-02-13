// alert("connected");
const play = hand => {
  //First, remove the previous opponent hand if there is any
  document.querySelectorAll("#opponent div").forEach(e => {
    e.classList.add("hidden");
  });
  //Randomly generate opponent hand
  let opponent;
  let rn = (Math.random() * 2 + 1).toFixed(0);
  rn == 1
    ? (opponent = "paper")
    : rn == 2
    ? (opponent = "rock")
    : (opponent = "scissors");
  //Update the opponent div so it shows opponent hand
  document.querySelector(`#${opponent}`).classList.remove("hidden");

  //display the outcome in the outcome div
  let message = "";
  if (hand == opponent) {
    message = "it is tie";
  } else if (
    (hand == "paper" && opponent == "scissors") ||
    (hand == "rock" && opponent == "paper") ||
    (hand == "scissors" && opponent == "rock")
  ) {
    message = "You lose :(";
  } else {
    message = "You win! :)";
  }
  document.querySelector("#outcome").innerHTML = message;
};
