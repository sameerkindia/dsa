function reverseString(str) {
  const reverseArr = [];

  let reverseStr = "";

  for (let i = 0; i < str.length; i++) {
    // method 1
    // reverseArr.push(str[str.length - 1 - i]);

    // method 2
    reverseStr += str[str.length - 1 - i];
  }

  // console.log(reverseArr.join(""));
  console.log("without arr ", reverseStr);
}

reverseString("sameer");
