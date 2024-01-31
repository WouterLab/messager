import Block, { RefElement } from "#core/Block/Block";
import { router } from "src/main";
import { clearErrorMessage, registration } from "#scripts/registration";
import { PagesUrls } from "#types/types";
import { validateInput } from "#utils/utils";

class RegPage extends Block {
  constructor() {
    super({
      onSignIn: (e: Event) => {
        e.preventDefault();
        router.go(PagesUrls.LoginPage);
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
          emailInput,
          loginInput,
          fnameInput,
          snameInput,
          phoneInput,
          passwordInput,
          secPasswordInput,
        );
      },
      onChangeInput: () => {
        const errorLabel = document.getElementById("reg-message");
        if (errorLabel) {
          clearErrorMessage(errorLabel);
        }
      },
      onBlurValidate: (e: Event) => {
        const input = e.target as RefElement;
        if (input) {
          validateInput(input);
        }
      },
    });
  }

  protected render(): string {
    return `{{#> AuthPage}}
    {{#> Form title="Вход" action="" method="POST" id="reg-form"}}
    <div class="formWrapper reg">
      <div class="formRows">
      {{{ Input placeholder="Почта" onChange=onChangeInput 
      name="email" type="email" id="reg-email" ref="email" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Логин" onChange=onChangeInput 
      name="login" id="reg-login" ref="login" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Имя" onChange=onChangeInput 
      name="first_name" id="reg-fname" ref="fname" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Фамилия" onChange=onChangeInput 
      name="second_name" id="reg-sname" ref="sname" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Телефон" onChange=onChangeInput 
      name="phone" type="phone" id="reg-phone" ref="phone" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Пароль" onChange=onChangeInput name="password" type="password" 
      id="reg-password" ref="password" onBlur=onBlurValidate }}}
      {{{ Input placeholder="Пароль (ещё раз)" onChange=onChangeInput 
      name="s-password" type="password" onBlur=onBlurValidate
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

export default RegPage;
