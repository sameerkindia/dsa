// function countOccurences(str, word) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === word) {
//       count++;
//     }
//   }

//   console.log(count);
// }

function countOccurences(str, word) {
  console.log(str.split(word).length - 1);
}

countOccurences("sameer", "e");
