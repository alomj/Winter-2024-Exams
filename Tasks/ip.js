// Split string by the first occurrence of separator
// Step 1: renamed variables
// Step 2: added const`s and let
// Step 3: restiling code and make him more readable
const parseip = (input) => {
const array = [];
  if (input === ''){ 
     return;
  }  else {
  const arrayOfIpEl = input.split('.');
    if (arrayOfIpEl.length !== 4){
       return;
    }
    let index = 0;
    for (const segment of arrayOfIpEl) {
      array[index] = parseInt(segment);
      if (isNaN(array[index])){
       return;
      }
     
      index++;
    }
  }
  return array;
};

module.exports = parseip;
