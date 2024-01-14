// Split an array into two parts
// Step 1: Renamed Function and Variables
// Step 2: Used const instead of let for the function declaration to indicate that the function reference will not be reassigned.
// Step 3: I`ve deleted useless line for better code readability
const splitArray = (splitIndex, array) => {
  const begin = array.slice(0, splitIndex);
  array = array.slice(splitIndex, array.length);
  return [begin, array];
};

module.exports = splitArray;
