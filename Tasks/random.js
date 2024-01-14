// Generate random integer value in given range
//Step 1: Renamed the function from Random to getRandom 
//Step 2: Used const instead of let for the function declaration to indicate that the function reference will not be reassigned.

const getRandom = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = getRandom;
