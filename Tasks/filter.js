// Filter array by type name
//Step 1: Renaming function
//Step 2: Renaming variables
filterByType = (array, typeName) => {
  remove = [];
  for (C of array) {
    x = array.indexOf(C);
    if (typeof array[x] !== typeName) {
      remove.unshift(x);
    }
  }
  for (x of remove) array.splice(x, 1);
  return array;
};

module.exports = filterByType;
