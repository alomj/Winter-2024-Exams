// Get one random element from an array
//Step 1: Renamed the function from SAMPLE to getRandomElement
//Step 2: Renamed variable arr to a new const variable randomIndex to store the randomly generated index value
//Step 3 Created a new variable randomElement to store the randomly selected element from the array using the randomIndex.
const getRandomElement = (arr) => {
  const randomIndex = [Math.floor(Math.random() * arr.length)];
  const randomElement = arr[randomIndex];
  return arr;
};

module.exports = getRandomElement;
