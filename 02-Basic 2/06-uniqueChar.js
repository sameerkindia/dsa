// function uniqueChar(str) {
//   const charObj = {};

//   let isUnque = true;
//   for (let i = 0; i < str.length; i++) {
//     if (!charObj.hasOwnProperty(str[i])) {
//       charObj[str[i]] = 0;
//     } else {
//       isUnque = false;
//       break;
//     }
//   }

//   console.log(isUnque);
// }

// function uniqueChar(str) {
//   const strObj = {};

//   let isUnque = true;
//   for (let i = 0; i < str.length; i++) {
//     if (strObj[str[i]]) {
//       isUnque = false;
//       break;
//     }

//     strObj[str[i]] = true;
//   }

//   console.log(isUnque);
// }

function uniqueChar(str) {
  const uniqueArr = new Set();

  // console.log(uniqueArr);
  let isUnque = true;
  for (let i = 0; i < str.length; i++) {
    if (uniqueArr.has(str[i])) {
      isUnque = false;
      break;
    }

    uniqueArr.add(str[i]);
  }

  console.log(isUnque);
}

uniqueChar("samEer");
uniqueChar("abcdef");
uniqueChar("aabcdef");
