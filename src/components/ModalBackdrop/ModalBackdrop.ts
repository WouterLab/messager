import Block from "#core/Block/Block";

type ModalBackdropProps = {
  closeModal: () => void;
};

export class ModalBackdrop extends Block {
  constructor(props: ModalBackdropProps) {
    super({
      ...props,
    });
  }

  protected init(): void {
    this.props.events = {
      click: this.props.closeModal,
    };
  }

  protected render(): string {
    return `
    <div class="modalBackdrop"></div>
`;
  }
}
