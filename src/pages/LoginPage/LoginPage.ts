import Block from "#core/Block/Block";
import template from "./LoginPage.hbs?raw";

export class LoginPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
