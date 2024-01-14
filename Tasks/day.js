// Get day number
// Step 1: Renamed the function _parse_day_ to numDay. Changed variable name D to daysOfWeek and changed name variable s to dayString
// Step 2: Used const instead of let for the daysOfWeek array and add const for numDay
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const numDay = (dayString) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (dayString.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = numDay;
