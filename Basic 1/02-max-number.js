// function maxNumber(arr){
//   console.log(Math.max(...arr))
// }

function maxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

maxNumber([1, 2, 3, 7, 6, 8, 4, 3]);
