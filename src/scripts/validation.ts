import { navigate } from "#core/navigate";

const defaultLogin = "user";
const defaultPassword = "user";

document.addEventListener("click", (e) => {
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

  const handleclick = (e: Event) => {
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

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("id") === "auth-submit") {
      e.preventDefault();
      handleclick(e);
    }
  }
});
