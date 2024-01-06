import Block from "#core/Block/Block";

type ButtonProps = {
  text: string;
  type: string;
  id: string;
  onClick?: () => void;
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
    const { text, id, type } = this.props;
    const idAttribute = id ? `id="${id}"` : "";

    return `<button class="button" ${idAttribute} type="${type}">${text}</button>`;
  }
}
