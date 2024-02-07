// function firstNonRepeatingChar(str) {
//   const charObj = {};

//   let nonRepeatingChar = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!charObj[char]) {
//       charObj[char] = 1;
//     } else {
//       charObj[char] = charObj[char] + 1;
//     }
//   }

//   for (const [key, value] of Object.entries(charObj)) {
//     if (value < 2) {
//       nonRepeatingChar = key;
//       break;
//     }
//     nonRepeatingChar = null;
//   }

//   console.log(nonRepeatingChar);
// }

// function firstNonRepeatingChar(str) {
//   let firstChar = null;

//   for (let i = 0; i < str.length; i += 2) {
//     let char1 = str[i]; // 0
//     let char2 = str[i + 1]; // 0 + 1 = 1

//     if (char1 !== char2) {
//       firstChar = str[i];
//       break;
//     }
//   }

//   console.log(firstChar);
// }

// function firstNonRepeatingChar(str) {
//   const charObj = {};

//   let firstChar = null;

//   for (const char of str) {
//     charObj[char] = (charObj[char] || 0) + 1;
//   }

//   for (const char of str) {
//     if (charObj[char] === 1) {
//       firstChar = char;
//       break;
//     }
//   }

//   console.log(firstChar);
// }


function firstNonRepeatingChar(str) {
  const charObj = new Map()

  let firstChar = null;

  for (const char of str) {
    charObj.set(char , (charObj.get(char) || 0) + 1)
  }

  for (const char of str) {
    if (charObj.get(char) === 1) {
      firstChar = char;
      break;
    }
  }

  console.log(firstChar);
}

firstNonRepeatingChar("abcde");
firstNonRepeatingChar("aabbcdde");
