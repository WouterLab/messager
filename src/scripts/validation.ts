import { RefElement } from "#core/Block/Block";
import { router } from "src/main";
import { PagesUrls } from "#types/types";

const defaultLogin = "user";
const defaultPassword = "user";

export const validation = (
  loginInput: RefElement,
  passwordInput: RefElement,
) => {
  const clearError = () => {
    setTimeout(() => {
      loginInput.classList.remove("error");
      passwordInput.classList.remove("error");
    }, 3000);
  };

  if (loginInput.value === "") {
    loginInput.classList.add("error");
    clearError();
  } else if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    clearError();
  } else if (
    loginInput.value !== defaultLogin ||
    passwordInput.value !== defaultPassword
  ) {
    loginInput.classList.add("error");
    passwordInput.classList.add("error");
    clearError();
  } else {
    console.log(loginInput.value, passwordInput.value);

    router.go(PagesUrls.MainPage);
  }
};
