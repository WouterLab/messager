import { RefElement } from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { PagesUrls } from "#types/types";

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

const getInputData = (input: RefElement) => {
  switch (input.id) {
    case "reg-email":
      return {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error: 'Поле "Почта" пустое, или не соответствует требованиям',
      };
    case "reg-login":
      return {
        regex: /^[a-zA-Z0-9_-]{3,20}$/,
        error: 'Поле "Логин" пустое, или не соответствует требованиям',
      };
    case "reg-fname":
      return {
        regex: /^[А-ЯЁA-Z][а-яёa-z]*$/,
        error: 'Поле "Имя" пустое, или не соответствует требованиям',
      };
    case "reg-sname":
      return {
        regex: /^[А-ЯЁA-Z][а-яёa-z]*$/,
        error: 'Поле "Фамилия" пустое, или не соответствует требованиям',
      };
    case "reg-phone":
      return {
        regex: /^(\+?[0-9]{10,15})$/,
        error: 'Поле "Телефон" пустое, или не соответствует требованиям',
      };
    case "reg-password":
      return {
        regex: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
        error: 'Поле "Пароль" пустое, или не соответствует требованиям',
      };
    case "reg-s-password":
      return {
        regex: undefined,
        error: "Повторите введённый пароль",
      };
    default:
      return {
        regex: undefined,
        error: "Неизвестное поле",
      };
  }
};

export const validateInput = (input: RefElement): boolean => {
  const { regex, error } = getInputData(input);
  const errorLabel = document.getElementById("reg-message");

  if (input.value === "" || (regex && !regex.test(input.value))) {
    input.classList.add("error");

    if (errorLabel && errorLabel.innerText === "") {
      errorLabel.innerText = error;
    }

    return false;
  } else {
    input.classList.remove("error");
    if (errorLabel) {
      clearErrorMessage(errorLabel);
    }
  }

  return true;
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
