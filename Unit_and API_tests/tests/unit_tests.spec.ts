class RegistrationForm {
  public firstName(first: any) {
    return first;
  }

  public lastName(last: any) {
    return last;
  }

  public email(namePart: any, atSign: any, domainPart: any) {
    return namePart + atSign + domainPart;
  }

  public phoneNumber(plus: any, num: any) {
    return plus + num;
  }

  public password(paswd: any) {
    return paswd;
  }

  public confirmPassword(paswd2: any) {
    return paswd2;
  }

  public age(age: any) {
    return age;
  }
}

const registrationBlank = new RegistrationForm();

describe("Check First Name", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.firstName("Andrew")} and ${registrationBlank.firstName("12ASD3456")} values`,
    );
  });
  test("Positive: Should be a string and start from capital latter", () => {
    expect(registrationBlank.firstName("Andrew")).toMatch(/^[A-Z]/);
    expect(typeof registrationBlank.firstName("Andrew")).toBe("string");
  });
  test("Negative: Should be a string and start from capital latter", () => {
    expect(registrationBlank.firstName("12ASD3456")).toMatch(/^[A-Z]/);
    expect(typeof registrationBlank.firstName("12ASD3456")).toBe("string");
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.firstName("Andrew")} value is Valid and the ${registrationBlank.firstName(
        "12ASD3456",
      )} value is invalid`,
    );
  });
});

describe("Check Last Name", () => {
  beforeAll(() => {
    console.log(`Check ${registrationBlank.lastName("AQA")} and ${registrationBlank.lastName("5677567")} values`);
  });
  test("Positive: Should be a string and start from capital latter", () => {
    expect(registrationBlank.lastName("AQA")).toMatch(/^[A-Z]/);
    expect(typeof registrationBlank.lastName("AQA")).toBe("string");
  });
  test("Negative: Should be a string and start from capital latter", () => {
    expect(registrationBlank.lastName("5677567")).toMatch(/^[A-Z]/);
    expect(typeof registrationBlank.lastName("567567657")).toBe("string");
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.lastName("AQA")} value is Valid and the ${registrationBlank.firstName(
        "567567657",
      )} value is invalid`,
    );
  });
});

describe("Check Email", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.email("asdsada", "@", "dasd.com")} and ${registrationBlank.email(
        "asdsada",
        "#",
        "dasdcom",
      )} values`,
    );
  });
  test("Positive: Should have @ and dot as separator", () => {
    expect(registrationBlank.email("asdsada", "@", "dasd.com")).toMatch(/@/);
    expect(registrationBlank.email("asdsada", "@", "dasd.com")).toMatch(/\./);
  });
  test("Negative: Should have @ and dot as separator", () => {
    expect(registrationBlank.email("asdsada", "#", "dasdcom")).toMatch(/@/);
    expect(registrationBlank.email("asdsada", "#", "dasdcom")).toMatch(/\./);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.email("asdsada", "@", "dasd.com")} value is Valid and the ${registrationBlank.email(
        "asdsada",
        "#",
        "dasdcom",
      )} value is invalid`,
    );
  });
});

describe("Check Phone", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.phoneNumber("+", 123456789)} and ${registrationBlank.phoneNumber(
        "#",
        "a123456789",
      )} values`,
    );
  });
  test("Positive: Should start from plus and contain numbers only", () => {
    expect(registrationBlank.phoneNumber("+", 123456789)).toMatch(/^\+/);
    expect(registrationBlank.phoneNumber("+", 123456798)).toMatch(/^[^a-g]/);
  });
  test("Negative: Should start from plus and contain numbers only", () => {
    expect(registrationBlank.phoneNumber("#", "a123456789")).toMatch(/^\+/);
    expect(registrationBlank.phoneNumber("#", "a123456789")).toMatch(/^[^a-g]/);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.phoneNumber("+", 123456798)} value is Valid and the ${registrationBlank.phoneNumber(
        "#",
        "a123456789",
      )} value is invalid`,
    );
  });
});

describe("Check Password", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.password("aAFD5265_@Dfds561")} and ${registrationBlank.password("dasdfdsfsd")} values`,
    );
  });
  test("Positive: Should have Title and Sentence case latter with Digits and Special characters", () => {
    expect(registrationBlank.password("aAFD5265_@Dfds561")).toMatch(/[A-Z]/);
    expect(registrationBlank.password("aAFD5265_@Dfds561")).toMatch(/[a-z]/);
    expect(registrationBlank.password("aAFD5265_@Dfds561")).toMatch(/[0-9]/);
    expect(registrationBlank.password("aAFD5265_@Dfds561")).toMatch(/[_!@#$%^&*-=]/);
  });
  test("Negative: Should have Title and Sentence case latter with Digits and Special characters", () => {
    expect(registrationBlank.password("dasdfdsfsd")).toMatch(/[0-9]/);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.password("aAFD5265_@Dfds561")} value is Valid and the ${registrationBlank.password(
        "dasdfdsfsd",
      )} value is invalid`,
    );
  });
});

describe("Check Confirm Password", () => {
  beforeAll(() => {
    console.log(
      `Check ${registrationBlank.confirmPassword("aAFD5265_@Dfds561")} and ${registrationBlank.confirmPassword(
        "aAFD5111_@Dfds561",
      )} values`,
    );
  });
  test("Positive: Should match Password value", () => {
    expect(registrationBlank.confirmPassword("aAFD5265_@Dfds561")).toMatch(
      registrationBlank.password("aAFD5265_@Dfds561"),
    );
  });
  test("Negative: Should match Password value", () => {
    expect(registrationBlank.confirmPassword("aAFD5111_@Dfds561")).toMatch(
      registrationBlank.password("aAFD5265_@Dfds561"),
    );
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.confirmPassword(
        "aAFD5265_@Dfds561",
      )} value is Valid and the ${registrationBlank.confirmPassword("aAFD5111_@Dfds561")} value is invalid`,
    );
  });
});

describe("Check Age", () => {
  beforeAll(() => {
    console.log(`Check ${registrationBlank.age(26)} and ${registrationBlank.age(-15)} values`);
  });
  test("Positive: Should be 18 and more ", () => {
    expect(registrationBlank.age(26)).toBeGreaterThanOrEqual(18);
  });
  test("Negative: Should be 18 and more", () => {
    expect(registrationBlank.age(-15)).toBeGreaterThanOrEqual(18);
  });
  afterAll(() => {
    console.log(
      `The ${registrationBlank.age(26)} value is Valid and the ${registrationBlank.age(-15)} value is invalid`,
    );
  });
});
