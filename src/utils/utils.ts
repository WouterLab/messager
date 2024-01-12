import { RefElement } from "#core/Block/Block";
import { clearErrorMessage } from "#scripts/registration";

const getInputData = (input: RefElement) => {
  switch (input.name) {
    case "email":
      return {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error:
          'Поле "Почта" пустое или не соответствует требованиям (должно содержать символ @ и домен с точкой)',
      };
    case "login":
      return {
        regex: /^[a-zA-Z0-9_-]{3,20}$/,
        error: 'Поле "Логин" пустое или содержит недопустимые символы',
      };
    case "first_name":
      return {
        regex: /^[А-ЯЁA-Zа-яёa-z]*$/,
        error: 'Поле "Имя" пустое или содержит недопустимые символы',
      };
    case "second_name":
      return {
        regex: /^[А-ЯЁA-Zа-яёa-z]*$/,
        error: 'Поле "Фамилия" пустое или содержит недопустимые символы',
      };
    case "phone":
      return {
        regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        error:
          'Поле "Телефон" пустое или несоответствует виду "+7-999-999-99-99"',
      };
    case "display_name":
      return {
        regex: /^[А-ЯЁA-Zа-яёa-z0-9]*$/,
        error:
          'Поле "Отображаемое имя" пустое или содержит недопустимые символы',
      };
    case "password":
      return {
        regex: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
        error: 'Поле "Пароль" пустое или содержит недопустимые символы',
      };
    case "s-password":
      return {
        regex: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
        error: "Пароли должны совпадать и не содержать недопустимые символы",
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
