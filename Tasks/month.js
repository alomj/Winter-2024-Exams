// Get month number
// Step 1: renamed variables
months = [
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

nonthNumber = (givenMonth) => {
  l = Months.length;
  for (let i = 0; i < l; i++) {
    if (givenMonth.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
