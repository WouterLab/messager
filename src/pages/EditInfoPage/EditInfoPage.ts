import Block from "#core/Block/Block";
import template from "./EditInfoPage.hbs?raw";

export class EditInfoPage extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
