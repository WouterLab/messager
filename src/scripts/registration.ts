import { navigate } from "src/main";

document.addEventListener("click", (e) => {
  const loginInput = <HTMLInputElement>document.getElementById("reg-login");
  const passwordInput = <HTMLInputElement>(
    document.getElementById("reg-password")
  );
  const secondPasswordInput = <HTMLInputElement>(
    document.getElementById("reg-s-password")
  );
  const phoneInput = <HTMLInputElement>document.getElementById("reg-phone");
  const fnameInput = <HTMLInputElement>document.getElementById("reg-fname");
  const snameInput = <HTMLInputElement>document.getElementById("reg-sname");
  const emailInput = <HTMLInputElement>document.getElementById("reg-email");
  // const errorMessageTag = <HTMLParagraphElement>(
  //   document.getElementById("reg-message")
  // );

  const clearError = (inputs: HTMLInputElement[]) => {
    setTimeout(() => {
      inputs.forEach((input) => {
        input.classList.remove("error");
      });
    }, 3000);
  };

  const validateField = (input: HTMLInputElement, errorMessage: string) => {
    if (input.value === "") {
      input.classList.add("error");
      console.log(errorMessage);

      return false;
    }
    return true;
  };

  const handleclick = (e: Event) => {
    e.preventDefault();

    const inputsToCheck = [
      { input: loginInput, errorMessage: 'Заполните поле "Логин"' },
      { input: passwordInput, errorMessage: 'Заполните поле "Пароль"' },
      {
        input: secondPasswordInput,
        errorMessage: "Повторите введённый пароль",
      },
      { input: phoneInput, errorMessage: 'Заполните поле "Телефон"' },
      { input: fnameInput, errorMessage: 'Заполните поле "Имя"' },
      { input: snameInput, errorMessage: 'Заполните поле "Фамилия"' },
      { input: emailInput, errorMessage: 'Заполните поле "Почта"' },
    ];

    let isValid = true;

    inputsToCheck.forEach((inputData) => {
      if (!validateField(inputData.input, inputData.errorMessage)) {
        isValid = false;
      }
    });

    const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (!phoneInput.value.match(regExp)) {
      phoneInput.classList.add("error");
      clearError(inputsToCheck.map((inputData) => inputData.input));
      return;
    }

    if (passwordInput.value !== secondPasswordInput.value) {
      passwordInput.classList.add("error");
      secondPasswordInput.classList.add("error");
      clearError(inputsToCheck.map((inputData) => inputData.input));
      return;
    }

    if (isValid) {
      navigate("chats");
    } else {
      clearError(inputsToCheck.map((inputData) => inputData.input));
    }
  };

  const element = e.target as Element;

  if (element) {
    if (
      element.hasAttribute("type") &&
      element.getAttribute("type") === "submit" &&
      element.getAttribute("id") === "reg-submit"
    ) {
      e.preventDefault();
      handleclick(e);
    }
  }
});
