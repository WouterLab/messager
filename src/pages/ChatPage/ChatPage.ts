import Block from "#core/Block/Block";

export class ChatPage extends Block {
  protected render(): string {
    return `{{#> Layout}}
    {{{ ChatWindow name="Danil" profile="assets/dog.jpg" }}}
    {{/ Layout}}`;
  }
}
