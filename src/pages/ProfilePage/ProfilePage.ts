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
        this.setProps({ currentView: "edit-info" });
      },
      onChangePassword: () => {
        this.setProps({ currentView: "edit-pass" });
      },
      onLogOut: () => {
        navigate(PagesUrls.LoginPage);
      },
      onSaveInfo: () => {
        this.setProps({ currentView: "default" });
      },
      currentView: "default",
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
    if (this.props.currentView === "edit-info") {
      return `<div class="changeInfoWrapper">
      <img src="assets/back.svg" redirect="profile" alt="return-back" class="backArrow">
      <div class="changeInfo">
          {{{ ProfileEditInfo img="${this.props.image}" name="${this.props.name}" 
          email="${this.props.email}" login="${this.props.login}" fname="${this.props.fname}"
          lname="${this.props.lname}" displayed="${this.props.displayed}" phone="${this.props.phone}" }}}
          <div class="changeInfoSave">{{{ Button onClick=onSaveInfo text="Сохранить" }}}</div>
      </div>
      <div class="changeInfoLogo">{{> Logo}}</div>
      </div>
      `;
    } else if (this.props.currentView === "edit-pass") {
      return `<div class="changePassWrapper">
      <img src="assets/back.svg" redirect="profile" alt="return-back" class="backArrow">
      <div class="changePass">
          {{{ ProfileEditPassword img="assets/dog2.jpg" displayed="Boymep" }}}
          <div class="changeInfoSave">{{{ Button onClick=onSaveInfo text="Сохранить" }}}</div>
      </div>
      <div class="changePassLogo">{{> Logo}}</div>
      </div>
      `;
    } else
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
