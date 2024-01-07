import Block from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { PagesUrls } from "#types/types";

export class ProfilePage extends Block {
  constructor() {
    super({
      onReturnBack: () => {
        navigate(PagesUrls.MainPage);
      },
      onChangeData: () => {
        navigate(PagesUrls.EditInfoPage);
      },
      onChangePassword: () => {
        navigate(PagesUrls.EditPassPage);
      },
      onLogOut: () => {
        navigate(PagesUrls.LoginPage);
      },
      image: "assets/dog2.jpg",
      name: "Danil",
      email: "mail@mail.ru",
      login: "boymep",
      fname: "Danil",
      lname: "Panov",
      displayed: "Boymep",
      phone: "+7 (999) 999 99 99",
    });
  }

  protected render(): string {
    const {} = this.props;

    return `<div class="profileWrapper">
    {{{ BackButton onClick=onReturnBack }}}
    <div class="profile">
        {{{ ProfileInfo image="${this.props.image}"
        email="${this.props.email}"
        login="${this.props.login}"
        fname="${this.props.fname}"
        lname="${this.props.lname}"
        displayed="${this.props.displayed}"
        phone="${this.props.phone}"
        }}}
        {{{ ButtonGhost onClick=onChangeData id="change-info" text="Изменить данные" }}}
        {{> Divider}}
        {{{ ButtonGhost onClick=onChangePassword id="change-pass" text="Изменить пароль" }}}
        {{> Divider}}
        {{{ ButtonGhost onClick=onLogOut text="Выйти" class="red" }}}
    </div>
    <div class="profileLogo">{{> Logo}}</div>
</div>`;
  }
}
