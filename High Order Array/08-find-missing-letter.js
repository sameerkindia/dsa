function findMissingLetter(str) {
  const missingCharCode = str.split("").filter((char, index) => {
    if (index === 0) return;

    const prevCharCode = str[index - 1].charCodeAt(0);

    const currentCharCode = char.charCodeAt(0);

    console.log(currentCharCode - prevCharCode > 1);

    return currentCharCode - prevCharCode > 1;
  })[0];

  console.log(
    missingCharCode
      ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
      : ""
  );
}

findMissingLetter("abce");
