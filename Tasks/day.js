// Get day number
// Step 1: Renamed the function _parse_day_ to numDay. Changed variable name D to daysOfWeek and changed name variable s to dayString
// Step 2: Used const instead of let for the daysOfWeek array and add const for numDay
// Step 3: Removed the unnecessary variable i declaration outside the loop and initialized it directly in the loop statement.
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const numDay = (dayString) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (dayString.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = numDay;
