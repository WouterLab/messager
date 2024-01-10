import { RefElement } from "#core/Block/Block";

export const sendMessage = (sendButton: RefElement) => {
  if (sendButton.value === "") {
    alert("Поле сообщения не должно быть пустым");
  } else {
    sendButton.value = "";
    console.log(sendButton.value);
  }
};
