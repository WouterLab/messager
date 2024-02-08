import Block from "#core/Block/Block";

type ModalVariantProps = {
  img: string;
  text: string;
  onClick: () => void;
};

export class ModalVariant extends Block {
  constructor(props: ModalVariantProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { img, text } = this.props;

    return `
    <div class="variant">
    <img class="variantImg" src="${img}" alt="variant-${text}">
    <span>${text}</span>
</div>
`;
  }
}
