import Block from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { PagesUrls } from "#types/types";

export class Page404 extends Block {
  protected init(): void {
    setTimeout(() => {
      navigate(PagesUrls.MainPage);
    }, 3000);
  }

  protected render(): string {
    return `{{#> AuthPage}}
    {{#> Form title="404"}}
    <div class="page404">Страница не найдена</div>
    {{/Form}}
    {{/AuthPage}}`;
  }
}
