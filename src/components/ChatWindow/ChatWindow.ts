import Block from "#core/Block/Block";

type ChatWindowProps = {
  name: string;
  profile: string;
};

export class ChatWindow extends Block {
  constructor(props: ChatWindowProps) {
    super(props);
  }

  protected render(): string {
    const { name, profile } = this.props;

    return `
    <section class="chatWindow">
    <div class="chatWindowHeader">
        <div class="chatWindowHeaderUser">
            <img src="${profile}" alt="user-profile">
            <div>${name}</div>
        </div>
        <div class="chatWindowHeaderProps" id="edit-chat">
            <img class="noClick" src="assets/props.svg" alt="properties">
            {{#> ModalSmall id="edit-modal" class="pos-bottom hidden"}}
              {{{ ModalVariant img="assets/add-user.svg" text="Добавить пользователя" }}}
              {{{ ModalVariant img="assets/delete-user.svg" text="Удалить пользователя" }}}
            {{/ModalSmall}}
        </div>
    </div>
    {{{ MessageList }}}
    <div class="chatWindowInputs">
        <img class="chatWindowInputsAttach" src="assets/attach.svg" id="attach" alt="attach">
        {{#> ModalSmall id="attach-modal" class="pos-top hidden"}}
          {{{ ModalVariant img="assets/attach-media.svg" text="Фото или Видео" }}}
          {{{ ModalVariant img="assets/attach-file.svg" text="Файл" }}}
          {{{ ModalVariant img="assets/attach-location.svg" text="Локация" }}}
        {{/ModalSmall}}
        {{{ ChatInput name="message" }}}
        <div class="chatWindowInputsSend">
            <img src="assets/arrow.svg" alt="send" id="send-message">
        </div>
    </div>
</section>
`;
  }
}
