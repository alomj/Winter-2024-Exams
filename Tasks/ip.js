// Split string by the first occurrence of separator
// Step 1: renamed variables
parseip = (input) => {
  array = [];
  if (input === '') return;
  else {
    arrayOfIpEl = input.split('.');
    if (arrayOfIpEl.length != 4){return;};
    j = 0;
    for (const b of B) {
      a[j] = parseInt(b);
      if (isNaN(a[j])) return;
      j++;
    }
  }
  return array;
};

module.exports = parseip;
