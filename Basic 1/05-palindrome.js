function palindrome(value) {
  let isPalindrome = false;
  const strValue = "" + value;

  for (let i = 0; i < Math.floor(strValue.length / 2); i++) {
    if (strValue[i] === strValue[strValue.length - i - 1]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }

  console.log(isPalindrome);
}

// function palindrome(value) {
//   const str = "" + value;
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = formattedStr.split("").reverse().join("");

//   console.log(formattedStr === reversedStr);
// }

// palindrome(12345654321);
palindrome("abcdmadamdcba");
// palindrome(12345678987654321);
palindrome(232313232);
palindrome("");
