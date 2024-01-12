import { RefElement } from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { PagesUrls } from "#types/types";
import { validateInput } from "#utils/utils";

export const clearErrorMessage = (errorLabel: HTMLElement) => {
  errorLabel.innerText = "";
};

const clearError = (inputs: RefElement[]) => {
  setTimeout(() => {
    inputs.forEach((input) => {
      input.classList.remove("error");
    });
  }, 3000);
};

export const registration = (
  emailInput: RefElement,
  loginInput: RefElement,
  fnameInput: RefElement,
  snameInput: RefElement,
  phoneInput: RefElement,
  passwordInput: RefElement,
  secPasswordInput: RefElement,
) => {
  const inputsToCheck = [
    emailInput,
    loginInput,
    fnameInput,
    snameInput,
    phoneInput,
    passwordInput,
    secPasswordInput,
  ];
  const errorLabel = document.getElementById("reg-message");

  let isValid = true;

  inputsToCheck.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });

  if (passwordInput.value !== secPasswordInput.value) {
    passwordInput.classList.add("error");
    secPasswordInput.classList.add("error");
    if (errorLabel) {
      errorLabel.innerText = "Пароли не совпадают";
    }
    clearError(inputsToCheck);
    return;
  }

  if (isValid) {
    inputsToCheck.forEach((input) => console.log(input.value));

    navigate(PagesUrls.MainPage);
  } else {
    clearError(inputsToCheck);
  }
};
