import Block from "#core/Block/Block";

type ButtonProps = {
  text: string;
  type: string;
  id: string;
  onClick?: () => void;
  disabled?: boolean;
};

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { text, id, type, disabled } = this.props;
    const idAttribute = id ? `id="${id}"` : "";
    const typeAttribute = type ? `type="${type}"` : "";

    return `<button class="button ${
      disabled ? "disabled" : ""
    }" ${idAttribute} ${typeAttribute}>${text}</button>`;
  }
}
