import Block from "#core/Block/Block";
import { router } from "src/main";
import { ChatType, PagesUrls } from "#types/types";

export class Chat extends Block {
  constructor(props: ChatType) {
    super({
      ...props,
      onChatChoose: () => {
        router.go(PagesUrls.ChatPage);
        const chatWindow = <HTMLDivElement>(
          document.getElementById("chat-window")
        );
        chatWindow.scroll({ behavior: "smooth", top: chatWindow.scrollHeight });
        // behavior - только для наглядности пока один чат на всех
      },
    });
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onChatChoose,
    };
  }

  protected render(): string {
    const { img, title, message, time, count, id } = this.props;

    return `
    <div class="chat" id="${id}">
    <div class="chatUser">
        <img class="chatImg" src="${img}" alt="chat">
        <div class="chatMiddle">
            <span class="chatTitle">${title}</span>
            <div class="chatLast">${message}</div>
        </div>
    </div>
    <div class="chatLeft">
        <span class="chatTime">${time}</span>
        <div class="chatCount">${count}</div>
    </div>
</div>
`;
  }
}
