export enum ForgotPassword_locators {
  login = "[class='auth-bar__item auth-bar__item--text']",
  forgotPasswordPage = "//*/a[@href='https://profile.onliner.by/recover-password']",
  inputField = '//*/input[@placeholder="Ник, e-mail или номер телефона"]',
  nextButton = '//*/button[@type="submit"]',
  errorMessage = "(//*/div[@class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other'])[1]",
}
