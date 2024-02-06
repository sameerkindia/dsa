function highestScoringWord(str) {
  const words = str.split(" ");
  const arrOfWord = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt() - 96;
    }

    return score;
  });

  let highestScore = 0;
  let highestScoreIndex = 0;

  for (let i = 0; i < arrOfWord.length; i++) {
    if (highestScore < arrOfWord[i]) {
      highestScore = arrOfWord[i];

      highestScoreIndex = i;
    }
  }

  console.log(words[highestScoreIndex]);
}

highestScoringWord("sameer khan is a web developer");
