// function arrayIntersection(arr1, arr2) {
//   const numObj = {};
//   const result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (!numObj[arr1[i]]) {
//       numObj[arr1[i]] = arr1[i];
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (numObj.hasOwnProperty(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }

//   console.log(result);
// }

// function arrayIntersection(arr1, arr2) {
//   // const biglength = arr1.length > arr2.length ? arr1.length : arr2.length;
//   const result = [];

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }
//   console.log(result);
// }

function arrayIntersection(arr1, arr2) {
  const newSet = new Set(arr1);
  const result = [];

  for (const num of arr2) {
    if (newSet.has(num)) {
      result.push(num);
    }
  }

  console.log(result);
}

arrayIntersection([1, 2, 3, 4, 5], [1, 3]);

arrayIntersection([1, 2, 3, 4, 5], [3, 1, 7, 8, 2]);
arrayIntersection([1], [1]);
