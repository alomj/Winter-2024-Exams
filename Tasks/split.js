// Split an array into two parts
// Step 1: Renamed Function and Variables
let splitArray = (splitIndex, array) => {
  begin = array.slice(0, splitIndex);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = splitArray;
