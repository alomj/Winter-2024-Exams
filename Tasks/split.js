// Split an array into two parts
// Step 1: Renamed Function and Variables
// Step 2: Used const instead of let for the function declaration to indicate that the function reference will not be reassigned.
const splitArray = (splitIndex, array) => {
  const begin = array.slice(0, splitIndex);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = splitArray;
