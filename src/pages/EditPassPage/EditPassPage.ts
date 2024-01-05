import Block from "#core/Block/Block";
import template from "./EditPassPage.hbs?raw";

export class EditPassPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
