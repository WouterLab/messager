import Block from "#core/Block/Block";
import template from "./ProfilePage.hbs?raw";

export class ProfilePage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
