import Block from "#core/Block/Block";
import { router } from "src/main";
import { PagesUrls } from "#types/types";

class Page404 extends Block {
  protected init(): void {
    setTimeout(() => {
      router.go(PagesUrls.MainPage);
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

export default Page404;
