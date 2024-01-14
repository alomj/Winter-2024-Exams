// Generate random password
//Step 1: Renamed function from GeneratePaswword to generatePassword. Renamed variables
//Step 2: Used const instead of let for the function declaration to indicate that the function reference will not be reassigned.
const generatePassword = (alphabet, length) => {
  const maxPassLen = alphabet.length;
  pasw = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * maxPassLen);
    pasw = pasw + alphabet[Index];
  }
  return pasw;
};

module.exports = generatePassword;
