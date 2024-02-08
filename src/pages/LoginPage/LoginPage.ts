import Block from "#core/Block/Block";
import { router } from "src/main";
import { validation } from "#scripts/validation";
import { PagesUrls } from "#types/types";

class LoginPage extends Block {
  constructor() {
    super({
      onSignUp: (e: Event) => {
        e.preventDefault();
        router.go(PagesUrls.RegPage);
      },
      onLogin: (e: Event) => {
        e.preventDefault();
        const loginInput = this.refs.login.element;
        const passwordInput = this.refs.password.element;
        validation(loginInput, passwordInput);
      },
      onKeyDown: (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          this.props.onLogin(e);
        }
      },
    });
  }

  protected render(): string {
    return `{{#> AuthPage}}
      {{#> Form title="Вход" action="#" method="POST" id="auth-form"}}
      <div class="formWrapper">
          <div class="formRows">
              {{{ Input placeholder="Логин" name="login" ref="login" id="auth-login" }}}
              {{{ Input placeholder="Пароль" name="password" ref="password"
               type="password" id="auth-password" onKeyDown=onKeyDown }}}
          </div>
          <div class="formButtons">
              <p class="errorMessage" id="login-message"></p>
              {{{ Button text="Войти" id="auth-submit" type="submit" onClick=onLogin }}}
              {{{ ButtonGhost text="Нет аккаунта?" onClick=onSignUp }}}
          </div>
      </div>
      {{/Form}}
      {{/AuthPage}}`;
  }
}

export default LoginPage;
