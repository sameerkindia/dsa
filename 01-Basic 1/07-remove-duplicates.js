function removeDuplicates(arr) {
  const removed = {};
  for (let i = 0; i < arr.length; i++) {
    if (!removed[arr[i]]) {
      removed[arr[i]] = arr[i];
    }
  }

  console.log(Object.values(removed));
}

// function removeDuplicates(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   console.log(uniqueArr);
// }

removeDuplicates([1, 2, 3, 4, 2, 3, 6, 8, "sameer", "sameer"]);
