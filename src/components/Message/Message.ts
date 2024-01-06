import Block from "#core/Block/Block";
import { MessageType } from "#types/types";

export class Message extends Block {
  constructor(props: MessageType) {
    super(props);
  }

  protected render(): string {
    const { text, time } = this.props;

    return `<div class="messageWrapper">
    <div class="message">
        <span>${text}</span>
        <div class="messageInfo">${time}</div>
    </div>
</div>
`;
  }
}
