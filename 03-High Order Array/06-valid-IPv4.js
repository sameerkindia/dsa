function isValidIPv4(input) {
  const octets = input.split(".");

  if (octets.length !== 4) {
    console.log(false);
    return;
  }

  const result = octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });

  console.log(result);
}

isValidIPv4("122.164.32.21");
isValidIPv4("122.164.32.21.33");
isValidIPv4("257.164.32.21");
