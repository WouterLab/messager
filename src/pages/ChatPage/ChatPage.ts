import Block from "#core/Block/Block";
import { connect } from "#utils/connect";

class ChatPage extends Block {
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

export default connect(ChatPage);
