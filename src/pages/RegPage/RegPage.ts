import Block from "#core/Block/Block";
import template from "./RegPage.hbs?raw";

export class RegPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
