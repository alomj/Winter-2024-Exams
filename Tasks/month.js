// Get month number
// Step 1: renamed variables
// Step 2: added const`s and removed useless line
const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];


const monthNumber = (givenMonth) => {

  for (let i = 0; i < months.length; i++) {
    if (givenMonth.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNumber;
