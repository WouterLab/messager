import Block from "#core/Block/Block";

type PropsButtonProps = {
  onClick: () => void;
};

export class PropsButton extends Block {
  constructor(props: PropsButtonProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return `<div class="chatWindowHeaderProps" id="edit-chat">
        <img class="noClick" src="assets/props.svg" alt="properties">
        {{#> ModalSmall id="edit-modal" class="pos-bottom hidden"}}
            {{{ ModalVariant img="assets/add-user.svg" text="Добавить пользователя" }}}
            {{{ ModalVariant img="assets/delete-user.svg" text="Удалить пользователя" }}}
        {{/ModalSmall}}
        </div>
    `;
  }
}
