import Block from "#core/Block/Block";
import { MessageType } from "#types/types";

export class MyMessage extends Block {
  constructor(props: MessageType) {
    super(props);
  }

  protected render(): string {
    const { text, time } = this.props;

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
