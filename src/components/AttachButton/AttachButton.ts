import Block from "#core/Block/Block";

type AttachButtonProps = {
  onClick: () => void;
  id: string;
};

export class AttachButton extends Block {
  constructor(props: AttachButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { id } = this.props;
    return `<div class="chatWindowInputsAttach">
    <img src="assets/attach.svg" id="${id}" alt="attach">
    {{#> ModalSmall id="attach-modal" class="pos-top hidden"}}
      {{{ ModalVariant img="assets/attach-media.svg" text="Фото или Видео" }}}
      {{{ ModalVariant img="assets/attach-file.svg" text="Файл" }}}
      {{{ ModalVariant img="assets/attach-location.svg" text="Локация" }}}
    {{/ModalSmall}}
    </div>
    `;
  }
}
