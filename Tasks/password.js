// Generate random password
//Step 1: Renamed function from GeneratePaswword to generatePassword. Renamed variables
let generatePassword = (alphabet, length) => {
  const maxPassLen = alphabet.length;
  pasw = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * maxPassLen);
    pasw = pasw + alphabet[Index];
  }
  return pasw;
};

module.exports = generatePassword;
