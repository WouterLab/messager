import { UserDTO } from "#api/types";
import Block from "#core/Block/Block";

type ModalProps = {
  callToAction: () => void;
  title: string;
  users: UserDTO[];
};

export class Modal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      closeModal: () => {
        const addModal = document.getElementById("add-user-modal");
        const deleteModal = document.getElementById("delete-user-modal");
        addModal?.classList.add("hidden");
        deleteModal?.classList.add("hidden");
      },
      callToAction: () => {
        props.callToAction();
      },
    });
  }

  protected render(): string {
    const { title, id } = this.props;

    return `
    <div class="modalWrapper hidden" id="${id}">
    <div class="modalContent">
      <div class="modalTitle">${title}</div>
      {{{ Search placeholder="Логин пользователя" name="user-search" id="user-search" ref="search" }}}
      {{{ Button text="Добавить" onClick=callToAction }}}
      {{#each users}}
            <div>this.login</div>
        {{/each}}
    </div>
    {{{ ModalBackdrop closeModal=closeModal }}}
    </div>  
`;
  }
}
