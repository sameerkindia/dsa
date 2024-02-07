/*
function analyzeCarMileage(carsArr){
  const totalMileage = carsArr.reduce((sum, car) => {
    return (sum += car.mileage);
  }, 0);

  const highestMileage = carsArr.reduce(
    (highest, car) => {
      if (car.mileage > highest?.mileage) {
        return (highest = { ...car });
      }
      return (highest = highest);
    },
    { ...carsArr[0] }
  );

  const lowestMileage = carsArr.reduce(
    (lowest, car) => {
      if (car.mileage < lowest?.mileage) {
        return (lowest = { ...car });
      }
      return (lowest = lowest);
    },
    { ...carsArr[0] }
  );

  console.log(totalMileage);
  console.log(highestMileage);
  console.log(lowestMileage);
  console.log((totalMileage / carsArr.length).toFixed(2));
}
*/

function analyzeCarMileage(carsArr) {
  const carsOutput = carsArr.reduce(
    (output, car) => {
      const highestMileage =
        output.highestMileage.mileage < car.mileage
          ? (output.highestMileage = { ...car })
          : output.highestMileage;

      const lowestMileage =
        output.highestMileage.mileage > car.mileage
          ? (output.highestMileage = { ...car })
          : output.highestMileage;

      return {
        lowestMileage,
        highestMileage,
        totalMileage: (output.totalMileage += car.mileage),
        averageMileage: (output.totalMileage / carsArr.length).toFixed(2) * 1,
      };
    },
    {
      averageMileage: 0,
      highestMileage: { ...carsArr[0] },
      lowestMileage: { ...carsArr[0] },
      totalMileage: 0,
    }
  );

  console.log(carsOutput);
}

analyzeCarMileage([
  { make: "Toyota", model: "corolla", year: 2020, mileage: 25000 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
  { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
]);
