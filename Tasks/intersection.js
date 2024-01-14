// Find an intersection of two dictionaries
// Step 1: Renaming variables
// Step 2: I have added const to my function and "element"
// Step 3: Making code more readable
// Step 4: I`ve used  not-equal-to operator to provide cleaner code
const intersection = function intersection(firstDictionary, secondDictionary) {
  keys = Object.keys(firstDictionary);
  
  for (const element of keys) {
    if (firstDictionary[element] !== secondDictionary[element]) {
       delete firstDictionary[element];
    }
    
  }
  return firstDictionary;
};

module.exports = intersection;
