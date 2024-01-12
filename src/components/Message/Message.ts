import Block from "#core/Block/Block";
import { MessageType } from "#types/types";

export class Message extends Block {
  constructor(props: MessageType) {
    super(props);
  }

  protected render(): string {
    const { text, time, route, image, type } = this.props;

    if (type === "image") {
      return `<div class="imgMessageWrapper ${
        route === "outgoing" ? "outgoing" : ""
      }">
      <img class="imgMessage" src="${image}" alt="image-message" />
      <div class="imgMessageTime">${time}</div>
      </div>
      `;
    } else {
      if (route === "incoming") {
        return `<div class="messageWrapper">
          <div class="message">
              <span>${text}</span>
              <div class="messageInfo">${time}</div>
          </div>
          </div>
          `;
      } else {
        return `
        <div class="myMessageWrapper">
        <div class="myMessage">
            <span>${text}</span>
            <div class="myMessageInfo">
                <img class="myMessageInfoRead" src="assets/read.svg" alt="message-read">
                <span>${time}</span>
            </div>
        </div>
        </div>
        `;
      }
    }
  }
}
