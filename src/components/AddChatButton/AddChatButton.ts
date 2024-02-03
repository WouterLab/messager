import Block from "#core/Block/Block";

type ButtonProps = {
  onClick?: () => void;
};

export class AddChatButton extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return `
    <div class="addChat">
          <img class="plus" src="assets/plus.png" alt="add-chat">
        </div>
    `;
  }
}
