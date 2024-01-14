// Find an intersection of two dictionaries
// Step 1: Renaming variables
intersection = function intersection(firstDictionary, secondDictionary) {
  keys = Object.keys(firstDictionary);
  {
  }
  for (element of keys) {
    if (firstDictionary[element] === secondDictionary[element]) {
     secodnDictionary[element] = firstDictionary[element];
      {
      }
    } else {
      delete firstDictionary[element];
      {
      }
    }
    {
    }
  }
  {
  }
  return firstDictionary;
};

module.exports = intersection;
