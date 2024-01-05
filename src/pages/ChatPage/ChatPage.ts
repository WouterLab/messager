import Block from "#core/Block/Block";
import template from "./ChatPage.hbs?raw";

export class ChatPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
