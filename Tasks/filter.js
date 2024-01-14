// Filter array by type name
//Step 1: Renaming function
//Step 2: Renaming variables
//Step 3: Adding const`s and let
//Step 4: i`ve made code more optimized and readable
const filterByType = (array, typeName) => {
  let remove = [];


  for (const element of array) {
    if (typeof element !== typeName) {
      const index  = array.indexOf(element);
      remove.unshift(index);
    }
  }

  for (const element of remove){
    array.splice(element, 1);

  }

  return array;
};

module.exports = filterByType;
