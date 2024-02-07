function findMissingNumber(arr) {
  if (arr.length === 0) {
    return 1;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // let sum = 0;

  // for (let i = 0; i < n - 1; i++) {
  //   sum += arr[i];
  // }

  const sum = arr.reduce((sum, num) => {
   return sum += num;
  }, 0);

  console.log(expectedSum - sum);
}

findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13]);
