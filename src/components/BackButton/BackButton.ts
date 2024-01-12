import Block from "#core/Block/Block";

type BackButtonProps = {
  id: string;
  onClick?: () => void;
};

export class BackButton extends Block {
  constructor(props: BackButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { id } = this.props;
    const idAttribute = id ? `id="${id}"` : "";

    return `<img src="assets/back.svg" alt="return-back" ${idAttribute} class="backArrow">`;
  }
}
