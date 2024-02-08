import { RefElement } from "#core/Block/Block";
import { changePassword } from "#services/user";

export const validatePassword = (newValue: string, doubleNewValue: string) => {
  const saveButton = document.getElementById("profile-save-pass");
  const errorLabel = document.getElementById("profile-message");

  if (newValue === "") {
    saveButton?.classList.add("disabled");
    if (errorLabel) {
      errorLabel.innerText = "Новый пароль не должен быть пустым";
    }
    return false;
  }
  if (newValue !== doubleNewValue) {
    saveButton?.classList.add("disabled");
    return false;
  } else {
    saveButton?.classList.remove("disabled");
    if (errorLabel) {
      errorLabel.innerText = "";
    }
    return true;
  }
};

export const updatePassword = async (
  oldPassword: RefElement,
  newPassword: RefElement,
  newPasswordDouble: RefElement,
) => {
  const oldValue = oldPassword.value;
  const newValue = newPassword.value;
  const newDoubleValue = newPasswordDouble.value;
  const errorLabel = document.getElementById("profile-message");

  const isValid = validatePassword(newValue, newDoubleValue);

  if (isValid) {
    const error = await changePassword({
      oldPassword: oldValue,
      newPassword: newValue,
    });

    if (errorLabel && error) {
      errorLabel.innerText = error;
      throw new Error(error);
    }
  }
};
