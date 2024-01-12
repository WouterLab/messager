import Block from "#core/Block/Block";
import { attachFile } from "#scripts/attach";
import { editChat } from "#scripts/editChat";
import { sendMessage } from "#scripts/sendMessage";

type ChatWindowProps = {
  name: string;
  profile: string;
};

export class ChatWindow extends Block {
  constructor(props: ChatWindowProps) {
    super({
      ...props,
      onViewProps: () => {
        editChat();
      },
      onAttachFile: () => {
        attachFile();
      },
      onSendMessage: () => {
        const chatInput = this.refs.chatInput.element;
        sendMessage(chatInput);
      },
    });
  }

  protected render(): string {
    const { name, profile } = this.props;

    return `
    <section class="chatWindow">
    <div class="chatWindowHeader">
        <div class="chatWindowHeaderUser">
            <img src="${profile}" alt="user-profile">
            <div>${name}</div>
        </div>
        {{{ PropsButton onClick=onViewProps }}}
    </div>
    {{{ MessageList }}}
    <div class="chatWindowInputs">
        {{{ AttachButton id="attach" onClick=onAttachFile }}}
        {{{ ChatInput name="message" ref="chatInput" }}}
        {{{ SendButton onClick=onSendMessage }}}
    </div>
</section>
`;
  }
}
