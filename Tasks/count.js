// Sum all number values in dict
// Step: 1  adding const`s and let
// Step 2: replacing forEach to For of
// Step 3: Restiling
const count = (obj) => {
let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys){
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }
  return sum;
}

module.exports = count;
