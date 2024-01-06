import Block from "#core/Block/Block";
import template from "./MainPage.hbs?raw";

export class MainPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
