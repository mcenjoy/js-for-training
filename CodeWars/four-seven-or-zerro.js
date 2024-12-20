const aliasGen = (firstNameInput, surnameInput) => {
  const isValidLetter = (char) => /^[A-Z]$/i.test(char);

  const firstLetterFirstName = firstNameInput.charAt(0).toUpperCase();
  const firstLetterSurname = surnameInput.charAt(0).toUpperCase();

  return isValidLetter(firstLetterFirstName) &&
    isValidLetter(firstLetterSurname)
    ? `${firstName[firstLetterFirstName]} ${surname[firstLetterSurname]}`
    : "Your name must start with a letter from A - Z.";
};

