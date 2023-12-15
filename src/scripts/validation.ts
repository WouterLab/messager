import { navigate } from "src/main";

const defaultLogin = "user";
const defaultPassword = "user";

document.addEventListener("DOMContentLoaded", function () {
  const authForm = <HTMLFormElement>document.getElementById("auth-form");
  const loginInput = <HTMLInputElement>document.getElementById("auth-login");
  const passwordInput = <HTMLInputElement>(
    document.getElementById("auth-password")
  );

  const clearError = () => {
    setTimeout(() => {
      loginInput.classList.remove("error");
      passwordInput.classList.remove("error");
    }, 3000);
  };

  const handleclick = (e: any) => {
    e.preventDefault();
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
      navigate("chats");
    }
  };

  if (authForm) {
    authForm.addEventListener("submit", handleclick);
  }
});
