import Block from "#core/Block/Block";
import { findUser } from "#services/user";

type PropsButtonProps = {
  onClick: () => void;
};

export class PropsButton extends Block {
  constructor(props: PropsButtonProps) {
    super({
      ...props,
      addModalTitle: "Добавить пользователя",
      deleteModalTitle: "Удалить пользователя",
      users: [],
      openAddModal: () => {
        const modal = document.getElementById("add-user-modal");
        modal?.classList.remove("hidden");
      },
      openDeleteModal: () => {
        const modal = document.getElementById("delete-user-modal");
        modal?.classList.remove("hidden");
      },
      addUser: async () => {
        const search = document.getElementById(
          "user-search",
        ) as HTMLInputElement;

        const value = search.value;
        const users = await findUser(value);
        this.props.users = users;
      },
    });
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
            {{{ ModalVariant img="assets/add-user.svg" text="Добавить пользователя" onClick=openAddModal }}}
            {{{ ModalVariant img="assets/delete-user.svg" text="Удалить пользователя" onClick=openDeleteModal }}}
        {{/ModalSmall}}
        {{{ Modal title=addModalTitle id="add-user-modal" callToAction=addUser users=users }}}
        {{{ Modal title=deleteModalTitle id="delete-user-modal" }}}
        </div>
    `;
  }
}
