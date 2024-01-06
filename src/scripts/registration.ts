import { RefElement } from "#core/Block/Block";
import { navigate } from "#core/navigate";

export const registration = (
  loginInput: RefElement,
  passwordInput: RefElement,
  secPasswordInput: RefElement,
  emailInput: RefElement,
  fnameInput: RefElement,
  snameInput: RefElement,
  phoneInput: RefElement,
) => {
  const clearError = (inputs: RefElement[]) => {
    setTimeout(() => {
      inputs.forEach((input) => {
        input.classList.remove("error");
      });
    }, 3000);
  };

  const validateField = (input: RefElement, errorMessage: string) => {
    if (input.value === "") {
      input.classList.add("error");
      console.log(errorMessage);

      return false;
    }
    return true;
  };

  const inputsToCheck = [
    { input: loginInput, errorMessage: 'Заполните поле "Логин"' },
    { input: passwordInput, errorMessage: 'Заполните поле "Пароль"' },
    {
      input: secPasswordInput,
      errorMessage: "Повторите введённый пароль",
    },
    { input: phoneInput, errorMessage: 'Заполните поле "Телефон"' },
    { input: fnameInput, errorMessage: 'Заполните поле "Имя"' },
    { input: snameInput, errorMessage: 'Заполните поле "Фамилия"' },
    { input: emailInput, errorMessage: 'Заполните поле "Почта"' },
  ];

  let isValid = false;

  inputsToCheck.forEach((inputData) => {
    if (validateField(inputData.input, inputData.errorMessage)) {
      isValid = true;
    }
  });

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailInput.value.match(emailRegExp)) {
    emailInput.classList.add("error");
    clearError(inputsToCheck.map((inputData) => inputData.input));
    return;
  }

  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (!phoneInput.value.match(phoneRegExp)) {
    phoneInput.classList.add("error");
    clearError(inputsToCheck.map((inputData) => inputData.input));
    return;
  }

  if (passwordInput.value !== secPasswordInput.value) {
    passwordInput.classList.add("error");
    secPasswordInput.classList.add("error");
    clearError(inputsToCheck.map((inputData) => inputData.input));
    return;
  }

  if (isValid) {
    navigate("chats");
  } else {
    clearError(inputsToCheck.map((inputData) => inputData.input));
  }
};
