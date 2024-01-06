import Block from "#core/Block/Block";

export class Divider extends Block {
  protected render(): string {
    return `<div class="divider"></div>`;
  }
}
