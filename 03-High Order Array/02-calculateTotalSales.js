function calculateTotalSales(arr) {
  const totalPrice = arr.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log((totalPrice + totalPrice * 0.05).toFixed(2));
}

calculateTotalSales([
  {
    name: "apple",
    price: 4,
    quantity: 5,
  },
  {
    name: "banana",
    price: 1,
    quantity: 10,
  },
  {
    name: "graps",
    price: 2,
    quantity: 2,
  },
]);
