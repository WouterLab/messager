import Block from "#core/Block/Block";

type ButtonGhostProps = {
  text: string;
  className: string;
  id: string;
  onClick?: () => void;
};

export class ButtonGhost extends Block {
  constructor(props: ButtonGhostProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { text, className, id } = this.props;
    const idAttribute = id ? `id="${id}"` : "";
    const classAttribute = className ? `class="${className}"` : "";

    return `<button class="ghost ${classAttribute}" ${idAttribute}>${text}</button>`;
  }
}
