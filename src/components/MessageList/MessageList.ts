/* eslint-disable max-len */
import Block from "#core/Block/Block";
import { MessageType } from "#types/types";

type MessageListProps = {
  messages: MessageType;
};

export class MessageList extends Block {
  constructor(props: MessageListProps) {
    super({
      ...props,
      messages: [],
    });
  }

  protected render(): string {
    return `
    <div class="messageList" id="chat-window">
    {{#each messages}}
      {{{ Message type=this.type route=this.route time=this.time image=this.image id=this.id text=this.text }}}
    {{/each}}
    </div>  
`;
  }
}
