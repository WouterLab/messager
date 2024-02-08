import { RefElement } from "#core/Block/Block";
import { validateInput } from "#utils/utils";
import { CreateUser } from "#api/types";
import { signup } from "#services/auth";
import { apiHasError } from "#utils/apiHasError";

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

export const registration = async (
  emailInput: RefElement,
  loginInput: RefElement,
  first_nameInput: RefElement,
  second_nameInput: RefElement,
  phoneInput: RefElement,
  passwordInput: RefElement,
  secPasswordInput: RefElement,
) => {
  const inputsToCheck = [
    emailInput,
    loginInput,
    first_nameInput,
    second_nameInput,
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
    const data: CreateUser = {
      login: loginInput.value,
      first_name: first_nameInput.value,
      second_name: second_nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    const response = await signup(data);

    if (apiHasError(response)) {
      if (errorLabel) {
        errorLabel.innerText = response.reason;
      }
      throw Error(response.reason);
    }
  } else {
    clearError(inputsToCheck);
  }
};
