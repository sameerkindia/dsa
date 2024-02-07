// function numberRange(startNum, lastNum) {
//   if (startNum === lastNum) return [startNum];

//   return [startNum, ...numberRange(startNum + 1, lastNum)];
// }

function numberRange(startNum, lastNum) {
  if (startNum === lastNum) return [startNum];

  const number = numberRange(startNum, lastNum - 1);
  number.push(lastNum);

  return number;
}

console.log(numberRange(1, 5));
