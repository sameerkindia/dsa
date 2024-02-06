function formatPhoneNumber(arr) {
  const first3num = arr.slice(0, 3).join("");
  const middle3num = arr.slice(3, 6).join("");
  const last4num = arr.slice(6).join("");

  console.log(`(${first3num}) ${middle3num}-${last4num}`);
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
