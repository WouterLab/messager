import Block from "#core/Block/Block";

type ModalVariantProps = {
  img: string;
  text: string;
};

export class ModalVariant extends Block {
  constructor(props: ModalVariantProps) {
    super(props);
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
