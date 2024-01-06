import Block from "#core/Block/Block";

export class MainPage extends Block {
  protected render(): string {
    return `{{#> Layout}}
    <div class="emptyChat">Выберите чат для начала переписки</div>
    {{/ Layout}}`;
  }
}
