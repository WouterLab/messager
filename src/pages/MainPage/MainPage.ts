import Block from "#core/Block/Block";
import { connect } from "#utils/connect";

class MainPage extends Block {
  protected render(): string {
    return `{{#> Layout}}
    <div class="emptyChat">Выберите чат для начала переписки</div>
    {{/ Layout}}`;
  }
}

export default connect(MainPage);
