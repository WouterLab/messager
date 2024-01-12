import Block from "#core/Block/Block";

type ChatInputProps = {
  name: string;
};

export class ChatInput extends Block {
  constructor(props: ChatInputProps) {
    super(props);
  }

  protected render(): string {
    const { name } = this.props;

    return `<input class="chatInput" id="message-input" type="text" placeholder="Сообщение" name="${name}" />`;
  }
}
