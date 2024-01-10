import Block from "#core/Block/Block";

type SendButtonProps = {
  onClick: () => void;
  ref: string;
};

export class SendButton extends Block {
  constructor(props: SendButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { ref } = this.props;
    return `<div class="chatWindowInputsSend" ref=${ref}>
    <img src="assets/arrow.svg" alt="send" id="send-message" class="noClick">
    </div>
    `;
  }
}
