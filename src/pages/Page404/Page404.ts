import Block from "#core/Block/Block";
import template from "./Page404.hbs?raw";

export class Page404 extends Block {
  constructor() {
    super({});
  }
  protected render(): string {
    return template;
  }
}
