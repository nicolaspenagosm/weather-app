export const isValidCity = (value: string) => {
  let regExpExcludeSpecialChar = /^[a-zA-Z ]+$/;
  return regExpExcludeSpecialChar.test(value) && value!=="";
};
