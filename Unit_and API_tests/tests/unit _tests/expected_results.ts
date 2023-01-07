import { actualResultsPositive } from "./actual_results";

export const expectedResults = {
  firstNameStartFromTitleCaseLetter: /^[A-Z]/,
  firstNameTypeString: "string",
  lastNameStartFromTitleCaseLetter: /^[A-Z]/,
  lastNameTypeString: "string",
  emailContainAtSign: /@/,
  emailContainDot: /\./,
  phoneStartsFromPlus: /^\+/,
  phoneStartsFromNumbers: /^[^a-g]/,
  passwordContainTitleCaseLetter: /[A-Z]/,
  passwordContainSentenceCaseLetter: /[a-z]/,
  passwordContainDigits: /[0-9]/,
  passwordContainSpecialCharacters: /[_!@#$%^&*-=]/,
  confirmPasswordMatchPassword: actualResultsPositive.password,
  ageGreaterOrEqualEighteen: 18,
};
