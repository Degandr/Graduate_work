import { RegistrationForm } from "./tested_class";
import { actualResultsPositive } from "./actual_results";
import { actualResultsNegative } from "./actual_results";
import { expectedResults } from "./expected_results";

const registrationBlank = new RegistrationForm();

describe("Check First Name", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.firstName(actualResultsPositive.firstName)} and ${registrationBlank.firstName(
        actualResultsNegative.firstName,
      )} values`,
    );
  });
  test("Positive: Should be a string and start from capital latter", () => {
    expect(registrationBlank.firstName(actualResultsPositive.firstName)).toMatch(
      expectedResults.firstNameStartFromTitleCaseLetter,
    );
    expect(typeof registrationBlank.firstName(actualResultsPositive.firstName)).toBe(
      expectedResults.firstNameTypeString,
    );
  });
  test("Negative: Should be a string and start from capital latter", () => {
    expect(registrationBlank.firstName(actualResultsNegative.firstName)).toMatch(
      expectedResults.firstNameStartFromTitleCaseLetter,
    );
    expect(typeof registrationBlank.firstName(actualResultsNegative.firstName)).toBe(
      expectedResults.firstNameTypeString,
    );
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.firstName(
        actualResultsPositive.firstName,
      )} value is Valid and the ${registrationBlank.firstName(actualResultsNegative.firstName)} value is invalid`,
    );
  });
});

describe("Check Last Name", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.lastName(actualResultsPositive.lastName)} and ${registrationBlank.lastName(
        actualResultsNegative.lastName,
      )} values`,
    );
  });
  test("Positive: Should be a string and start from capital latter", () => {
    expect(registrationBlank.lastName(actualResultsPositive.lastName)).toMatch(
      expectedResults.lastNameStartFromTitleCaseLetter,
    );
    expect(typeof registrationBlank.lastName(actualResultsPositive.lastName)).toBe(expectedResults.lastNameTypeString);
  });
  test("Negative: Should be a string and start from capital latter", () => {
    expect(registrationBlank.lastName(actualResultsNegative.lastName)).toMatch(
      expectedResults.lastNameStartFromTitleCaseLetter,
    );
    expect(typeof registrationBlank.lastName(actualResultsNegative.lastName)).toBe(expectedResults.lastNameTypeString);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.lastName(
        actualResultsPositive.lastName,
      )} value is Valid and the ${registrationBlank.firstName(actualResultsNegative.lastName)} value is invalid`,
    );
  });
});

describe("Check Email", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.email(
        actualResultsPositive.emailNamePart,
        actualResultsPositive.emailAtSign,
        actualResultsPositive.emailDomainPart,
      )} and ${registrationBlank.email(
        actualResultsNegative.emailNamePart,
        actualResultsNegative.emailAtSign,
        actualResultsNegative.emailDomainPart,
      )} values`,
    );
  });
  test("Positive: Should have @ and dot as separator", () => {
    expect(
      registrationBlank.email(
        actualResultsPositive.emailNamePart,
        actualResultsPositive.emailAtSign,
        actualResultsPositive.emailDomainPart,
      ),
    ).toMatch(expectedResults.emailContainAtSign);
    expect(
      registrationBlank.email(
        actualResultsPositive.emailNamePart,
        actualResultsPositive.emailAtSign,
        actualResultsPositive.emailDomainPart,
      ),
    ).toMatch(expectedResults.emailContainDot);
  });
  test("Negative: Should have @ and dot as separator", () => {
    expect(
      registrationBlank.email(
        actualResultsNegative.emailNamePart,
        actualResultsNegative.emailAtSign,
        actualResultsNegative.emailDomainPart,
      ),
    ).toMatch(expectedResults.emailContainAtSign);
    expect(
      registrationBlank.email(
        actualResultsNegative.emailNamePart,
        actualResultsNegative.emailAtSign,
        actualResultsNegative.emailDomainPart,
      ),
    ).toMatch(expectedResults.emailContainDot);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.email(
        actualResultsPositive.emailNamePart,
        actualResultsPositive.emailAtSign,
        actualResultsPositive.emailDomainPart,
      )} value is Valid and the ${registrationBlank.email(
        actualResultsNegative.emailNamePart,
        actualResultsNegative.emailAtSign,
        actualResultsNegative.emailDomainPart,
      )} value is invalid`,
    );
  });
});

describe("Check Phone", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.phoneNumber(
        actualResultsPositive.phoneNumberPlus,
        actualResultsPositive.phoneNumberNum,
      )} and ${registrationBlank.phoneNumber(
        actualResultsNegative.phoneNumberPlus,
        actualResultsNegative.phoneNumberNum,
      )} values`,
    );
  });
  test("Positive: Should start from plus and contain numbers only", () => {
    expect(
      registrationBlank.phoneNumber(actualResultsPositive.phoneNumberPlus, actualResultsPositive.phoneNumberNum),
    ).toMatch(expectedResults.phoneStartsFromPlus);
    expect(
      registrationBlank.phoneNumber(actualResultsPositive.phoneNumberPlus, actualResultsPositive.phoneNumberNum),
    ).toMatch(expectedResults.phoneStartsFromNumbers);
  });
  test("Negative: Should start from plus and contain numbers only", () => {
    expect(
      registrationBlank.phoneNumber(actualResultsNegative.phoneNumberPlus, actualResultsNegative.phoneNumberNum),
    ).toMatch(expectedResults.phoneStartsFromPlus);
    expect(
      registrationBlank.phoneNumber(actualResultsNegative.phoneNumberPlus, actualResultsNegative.phoneNumberNum),
    ).toMatch(expectedResults.phoneStartsFromNumbers);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.phoneNumber(
        actualResultsPositive.phoneNumberPlus,
        actualResultsPositive.phoneNumberNum,
      )} value is Valid and the ${registrationBlank.phoneNumber(
        actualResultsNegative.phoneNumberPlus,
        actualResultsNegative.phoneNumberNum,
      )} value is invalid`,
    );
  });
});

describe("Check Password", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.password(actualResultsPositive.password)} and ${registrationBlank.password(
        actualResultsNegative.password,
      )} values`,
    );
  });
  test("Positive: Should have Title and Sentence case latter with Digits and Special characters", () => {
    expect(registrationBlank.password(actualResultsPositive.password)).toMatch(
      expectedResults.passwordContainTitleCaseLetter,
    );
    expect(registrationBlank.password(actualResultsPositive.password)).toMatch(
      expectedResults.passwordContainSentenceCaseLetter,
    );
    expect(registrationBlank.password(actualResultsPositive.password)).toMatch(expectedResults.passwordContainDigits);
    expect(registrationBlank.password(actualResultsPositive.password)).toMatch(
      expectedResults.passwordContainSpecialCharacters,
    );
  });
  test("Negative: Should have Title and Sentence case latter with Digits and Special characters", () => {
    expect(registrationBlank.password(actualResultsNegative.password)).toMatch(expectedResults.passwordContainDigits);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.password(
        actualResultsPositive.password,
      )} value is Valid and the ${registrationBlank.password(actualResultsNegative.password)} value is invalid`,
    );
  });
});

describe("Check Confirm Password", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.confirmPassword(
        actualResultsPositive.confirmPassword,
      )} and ${registrationBlank.confirmPassword(actualResultsNegative.confirmPassword)} values`,
    );
  });
  test("Positive: Should match Password value", () => {
    expect(registrationBlank.confirmPassword(actualResultsPositive.confirmPassword)).toMatch(
      registrationBlank.password(expectedResults.confirmPasswordMatchPassword),
    );
  });
  test("Negative: Should match Password value", () => {
    expect(registrationBlank.confirmPassword(actualResultsNegative.confirmPassword)).toMatch(
      registrationBlank.password(expectedResults.confirmPasswordMatchPassword),
    );
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.confirmPassword(
        actualResultsPositive.confirmPassword,
      )} value is Valid and the ${registrationBlank.confirmPassword(
        actualResultsNegative.confirmPassword,
      )} value is invalid`,
    );
  });
});

describe("Check Age", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.age(actualResultsPositive.age)} and ${registrationBlank.age(
        actualResultsNegative.age,
      )} values`,
    );
  });
  test("Positive: Should be 18 and more ", () => {
    expect(registrationBlank.age(actualResultsPositive.age)).toBeGreaterThanOrEqual(
      expectedResults.ageGreaterOrEqualEighteen,
    );
  });
  test("Negative: Should be 18 and more", () => {
    expect(registrationBlank.age(actualResultsNegative.age)).toBeGreaterThanOrEqual(
      expectedResults.ageGreaterOrEqualEighteen,
    );
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.age(actualResultsPositive.age)} value is Valid and the ${registrationBlank.age(
        actualResultsNegative.age,
      )} value is invalid`,
    );
  });
});
