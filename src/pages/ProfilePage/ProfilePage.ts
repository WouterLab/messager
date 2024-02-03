import Block, { Props } from "#core/Block/Block";
import { router } from "src/main";
import { PagesUrls } from "#types/types";
import { connect } from "#utils/connect";

class ProfilePage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      onReturnBack: () => {
        router.go(PagesUrls.MainPage);
      },
      onChangeData: () => {
        this.setProps({ currentView: "edit-info" });
      },
      onChangePassword: () => {
        this.setProps({ currentView: "edit-pass" });
      },
      onLogOut: () => {
        router.go(PagesUrls.LoginPage);
      },
      onBack: () => {
        this.setProps({ currentView: "default" });
      },
      currentView: "default",
    });
  }

  protected render(): string {
    if (this.props.currentView === "edit-info") {
      return `<div class="changeInfoWrapper">
      {{{ BackButton onClick=onBack }}}
      <div class="changeInfo">
          {{{ ProfileEditInfo image="${this.props.avatar}" email="${this.props.email}" 
          login="${this.props.login}" first_name="${this.props.first_name}" second_name="${this.props.second_name}" 
          display_name="${this.props.display_name}" phone="${this.props.phone}" onBack=onBack }}}
      </div>
      <div class="changeInfoLogo">{{> Logo}}</div>
      </div>
      `;
    } else if (this.props.currentView === "edit-pass") {
      return `<div class="changePassWrapper">
      {{{ BackButton onClick=onBack }}}
      <div class="changePass">
          {{{ ProfileEditPassword image="${this.props.avatar}"
           display_name="${this.props.display_name}" onBack=onBack }}}
      </div>
      <div class="changePassLogo">{{> Logo}}</div>
      </div>
      `;
    } else
      return `<div class="profileWrapper">
    {{{ BackButton onClick=onReturnBack }}}
    <div class="profile">
        {{{ ProfileInfo image="${this.props.avatar}"
        email="${this.props.email}"
        login="${this.props.login}"
        first_name="${this.props.first_name}"
        second_name="${this.props.second_name}"
        display_name="${this.props.display_name}"
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

export default connect(ProfilePage, ({ user }) => ({ ...user }));
