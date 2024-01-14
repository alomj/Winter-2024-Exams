// Get one random element from an array
//Step 1: Renamed the function from SAMPLE to getRandomElement
//Step 2: renamed varieble arr to a new const variable randomIndex to store the randomly generated index value
const getRandomElement = (arr) => {
const randomIndex = [Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = getRandomElement;
