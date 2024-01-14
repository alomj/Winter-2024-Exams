// Extract substring between prefix and suffix
// Step 1: Renaming variables
// Step 2: Adding const`s and let
const getValuebetween = (fullString, prefix, suffix) => {
const index = fullString.indexOf(prefix);
  if (index === -1) return '';
  else {
  let prefixLength = index + prefix.length;
    fullString = fullString.substring(prefixLengh);
    if (suffix) {
      index = fullString.indexOf(suffix);
      if (index === -1) {
        return '';
      } else {
        fullString = fullString.substring(0, index);
      }
    }
  }
  return fullstring;
};

module.exports = getValuebetween;
