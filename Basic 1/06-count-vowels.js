function countVowels(str) {
  let vowels = 0;
  const formated = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const word = formated[i];
    if (
      word === "a" ||
      word === "e" ||
      word === "i" ||
      word === "o" ||
      word === "u"
    ) {
      vowels++;
    }
  }

  console.log(vowels);
}

countVowels("sameer");
