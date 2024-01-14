// Extract substring between prefix and suffix
// Step 1: Renaming variables
// Step 2: Adding const`s and let
// Step 3: Restiling
const getValueBetween = (fullString, prefix, suffix) => {
  let index = fullString.indexOf(prefix);
  if (index === -1) return '';  
  else {
    let prefixLength = index + prefix.length;
    fullString = fullString.substring(prefixLength);
    if (suffix) {
      index = fullString.indexOf(suffix);
      if (index === -1)  return '';
      else fullString = fullString.substring(0, index);
    }
  }
  return fullString;
};

module.exports = getValueBetween;
