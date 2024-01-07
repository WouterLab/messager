import Block from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { registration } from "#scripts/registration";
import { PagesUrls } from "#types/types";

export class RegPage extends Block {
  constructor() {
    super({
      onSignIn: (e: Event) => {
        e.preventDefault();
        navigate(PagesUrls.LoginPage);
      },
      onReg: (e: Event) => {
        e.preventDefault();
        const loginInput = this.refs.login.element;
        const passwordInput = this.refs.password.element;
        const secPasswordInput = this.refs.secPassword.element;
        const emailInput = this.refs.email.element;
        const fnameInput = this.refs.fname.element;
        const snameInput = this.refs.sname.element;
        const phoneInput = this.refs.phone.element;
        registration(
          loginInput,
          passwordInput,
          secPasswordInput,
          emailInput,
          fnameInput,
          snameInput,
          phoneInput,
        );
      },
    });
  }

  protected render(): string {
    return `{{#> AuthPage}}
    {{#> Form title="Вход" action="" method="POST" id="reg-form"}}
    <div class="formWrapper reg">
      <div class="formRows">
        {{{ Input placeholder="Почта" name="email" type="email" id="reg-email" ref="email" }}}
        {{{ Input placeholder="Логин" name="login" id="reg-login" ref="login" }}}
        {{{ Input placeholder="Имя" name="first_name" id="reg-fname" ref="fname" }}}
        {{{ Input placeholder="Фамилия" name="second_name" id="reg-sname" ref="sname" }}}
        {{{ Input placeholder="Телефон" name="phone" type="phone" id="reg-phone" ref="phone" }}}
        {{{ Input placeholder="Пароль" name="password" type="password" id="reg-password" ref="password" }}}
        {{{ Input placeholder="Пароль (ещё раз)" name="password" type="password" 
        id="reg-s-password" ref="secPassword" }}}
      </div>
      <p class="errorMessage" id="reg-message"></p>
      <div class="formButtons">
        {{{ Button text="Зарегистрировать" type="submit" id="reg-submit" onClick=onReg }}}
        {{{ ButtonGhost text="Уже есть аккаунт?" onClick=onSignIn }}}
      </div>
    </div>
    {{/Form}}
    {{/AuthPage}}`;
  }
}
