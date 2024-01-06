import Block from "#core/Block/Block";

export class Page404 extends Block {
  protected render(): string {
    return `{{#> AuthPage}}
    {{#> Form title="404"}}
    <div class="page404">Страница не найдена</div>
    {{/Form}}
    {{/AuthPage}}`;
  }
}
