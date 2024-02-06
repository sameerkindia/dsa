function someOfEvenNumber(arr) {
  const result = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((sum, num) => sum + num, 0);

  console.log(result);
}

someOfEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]);
