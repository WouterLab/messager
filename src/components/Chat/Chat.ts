import Block from "#core/Block/Block";
import { ChatType } from "#types/types";
import { getChatData } from "#services/chat";

export class Chat extends Block {
  constructor(props: ChatType) {
    super({
      ...props,
      onChatChoose: async () => {
        await getChatData(this.props.id);
      },
    });
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onChatChoose,
    };
  }

  protected render(): string {
    const { img, title, lastMessage, count, id } = this.props;

    return `
    <div class="chat" id="${id}">
    <div class="chatUser">
        ${
          img
            ? `<img class="chatImg" src="${img}" alt="chat">`
            : '<div class="mock"></div>'
        }
        <div class="chatMiddle">
            <span class="chatTitle">${title}</span>
            ${
              lastMessage
                ? `<div class="chatLast">${lastMessage.message}</div>`
                : "Нет сообщений"
            }
        </div>
    </div>
    <div class="chatLeft">
        ${lastMessage ? `<div class="chatCount">${lastMessage.time}</div>` : ""}
        ${count ? `<div class="chatCount">${count}</div>` : ""}
    </div>
</div>
`;
  }
}
