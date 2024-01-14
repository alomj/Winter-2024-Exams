// Split string by the first occurrence of separator
// Step 1: renamed variables
// Step 2: added const`s and let
const parseip = (input) => {
 let array = [];
  if (input === ''){ return;
  }  else {
  const arrayOfIpEl = input.split('.');
    if (arrayOfIpEl.length != 4){return;};
    j = 0;
    for (const b of B) {
      arrayj] = parseInt(b);
      if (isNaN(array[j])) return;
      j++;
    }
  }
  return array;
};

module.exports = parseip;
