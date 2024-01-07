import { RefElement } from "#core/Block/Block";
import { navigate } from "#core/navigate";
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
    navigate(PagesUrls.MainPage);
  }
};
