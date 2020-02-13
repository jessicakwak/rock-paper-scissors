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
};
