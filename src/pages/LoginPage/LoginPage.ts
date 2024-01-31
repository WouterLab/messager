import Block from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { validation } from "#scripts/validation";
import { PagesUrls } from "#types/types";
import { connect } from "#utils/connect";

export class LoginPage extends Block {
  constructor() {
    super({
      onSignUp: (e: Event) => {
        e.preventDefault();
        navigate(PagesUrls.RegPage);
      },
      onLogin: (e: Event) => {
        e.preventDefault();
        const loginInput = this.refs.login.element;
        const passwordInput = this.refs.password.element;
        validation(loginInput, passwordInput);
      },
    });
  }

  protected render(): string {
    return `{{#> AuthPage}}
      {{#> Form title="Вход" action="#" method="POST" id="auth-form"}}
      <div class="formWrapper">
          <div class="formRows">
              {{{ Input placeholder="Логин" name="login" ref="login" id="auth-login" }}}
              {{{ Input placeholder="Пароль" name="password" ref="password" type="password" id="auth-password" }}}
          </div>
          <div class="formButtons">
              {{{ Button text="Войти" id="auth-submit" type="submit" onClick=onLogin }}}
              {{{ ButtonGhost text="Нет аккаунта?" onClick=onSignUp }}}
          </div>
      </div>
      {{/Form}}
      {{/AuthPage}}`;
  }
}

export default connect(({ chats, user }) => ({ chats, user }))(LoginPage);
