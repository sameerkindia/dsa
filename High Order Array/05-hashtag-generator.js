// function hashtagGenerator(str) {
//   const trimedStr = str.trim();
//   if (trimedStr.length === 0 || trimedStr.length > 140) {
//     console.log(trimedStr.length);
//     console.log(false);
//     return;
//   }

//   const hashtag =
//     "#" +
//     trimedStr
//       .split(" ")
//       .map((word) => {
//         const firstWord = word[0].toUpperCase();
//         const restWords = word.slice(1);
//         return firstWord + restWords;
//       })
//       .join("");

//   console.log(hashtag);
// }

function hashtagGenerator(str) {
  const hashtag = str
    .trim()
    .split(" ")
    .reduce((tag, word) => {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, "#");

  console.log(hashtag.length === 1 || hashtag.length > 140 ? false : hashtag);
}

hashtagGenerator("sameer khan pali");
hashtagGenerator(" ");
