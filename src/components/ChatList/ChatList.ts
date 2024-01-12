import Block from "#core/Block/Block";
import { ChatType } from "#types/types";
import { nanoid } from "nanoid";

type ChatListProps = {
  chats: ChatType[];
};

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      ...props,
      chats: [
        {
          img: "assets/dog.jpg",
          title: "Friend",
          time: "10:00",
          count: "1",
          message: "Hello there!",
          id: nanoid(6),
        },
        {
          img: "assets/dog2.jpg",
          title: "Friend",
          time: "09:00",
          count: "2",
          message: "How are you?",
          id: nanoid(6),
        },
        {
          img: "assets/dog3.jpg",
          title: "Friend",
          time: "08:00",
          count: "3",
          message: "Nice to see you!",
          id: nanoid(6),
        },
        {
          img: "assets/dog3.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "Good morning!",
          id: nanoid(6),
        },
        {
          img: "assets/dog.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "What's up?",
          id: nanoid(6),
        },
        {
          img: "assets/dog3.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "Any plans for today?",
          id: nanoid(6),
        },
        {
          img: "assets/dog2.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "How's your day going?",
          id: nanoid(6),
        },
        {
          img: "assets/dog3.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "I missed you!",
          id: nanoid(6),
        },
        {
          img: "assets/dog.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "Let's catch up soon!",
          id: nanoid(6),
        },
        {
          img: "assets/dog2.jpg",
          title: "Friend",
          time: "08:00",
          count: "2",
          message: "Happy to chat with you!",
          id: nanoid(6),
        },
        {
          img: "assets/dog3.jpg",
          title: "Friend",
          time: "08:00",
          count: "4",
          message: "Anything new?",
          id: nanoid(6),
        },
        {
          img: "assets/dog2.jpg",
          title: "Friend",
          time: "08:00",
          count: "3",
          message: "How's life treating you?",
          id: nanoid(6),
        },
        {
          img: "assets/dog.jpg",
          title: "Friend",
          time: "08:00",
          count: "1",
          message: "Looking forward to our conversation!",
          id: nanoid(6),
        },
      ],
    });
  }

  protected render(): string {
    return `
    <div class="overflow-container">
        {{#each chats}}
            {{{ Chat img=this.img title=this.title time=this.time 
            count=this.count message=this.message id=this.id }}}
        {{/each}}
    </div>
`;
  }
}
