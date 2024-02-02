function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGame(n) {
  const diceResult = [];

  for (let i = 0; i < n; i++) {
    const dice1 = randomNum();
    const dice2 = randomNum();
    const sum = dice1 + dice2;
    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    diceResult.push({ dice1, dice2, sum, result });
  }

  console.log(diceResult);
}

diceGame(3);
