import Block from "#core/Block/Block";
import { createChat } from "#services/chat";
import { ChatType } from "#types/types";

type ChatListProps = {
  chats: ChatType[];
};

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      ...props,
      chats: window.store.getState().chats,
      onClick: async () => {
        const chanIndex = window.store.getState().chats.length;
        const chatTitle = "Чат номер " + chanIndex;
        await createChat(chatTitle);
      },
    });
  }

  protected render(): string {
    return `
    <div class="overflow-container">
        {{#each chats}}
            {{{ Chat img=this.avatar title=this.title
            count=this.unread_count id=this.id }}}
        {{/each}}
        {{{ AddChatButton onClick=onClick }}}
    </div>
`;
  }
}
