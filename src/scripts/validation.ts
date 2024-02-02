import { RefElement } from "#core/Block/Block";
import { signin } from "#services/auth";

export const validation = async (
  loginInput: RefElement,
  passwordInput: RefElement,
) => {
  const errorLabel = document.getElementById("login-message");

  const clearError = () => {
    setTimeout(() => {
      loginInput.classList.remove("error");
      passwordInput.classList.remove("error");
      if (errorLabel) errorLabel.innerText = "";
    }, 3000);
  };

  if (loginInput.value === "") {
    loginInput.classList.add("error");
    clearError();
  } else if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    clearError();
  } else {
    await signin({
      login: loginInput.value,
      password: passwordInput.value,
    }).catch((error) => {
      loginInput.classList.add("error");
      passwordInput.classList.add("error");
      if (errorLabel) errorLabel.innerText = error;
      clearError();
    });
  }
};
