import Block from "#core/Block/Block";

export class ChatPage extends Block {
  constructor() {
    super({
      name: "Danil",
      profileImage: "assets/dog.jpg",
    });
  }

  protected render(): string {
    return `{{#> Layout}}
    {{{ ChatWindow name="${this.props.name}" profile="${this.props.profileImage}" }}}
    {{/ Layout}}`;
  }
}
