function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(false);
    return;
  }

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  const { sum1, sum2 } = str1Arr.reduce(
    ({ sum1, sum2 }, word, i) => {
      sum1 = sum1 + word.charCodeAt() - 96;
      sum2 = sum2 + str2Arr[i].charCodeAt() - 96;

      return { sum1, sum2 };
    },
    { sum1: 0, sum2: 0 }
  );

  console.log(sum1 === sum2);
}

validAnagrams("sameer", "reemae");
