import Block from "#core/Block/Block";
import { updatePassword, validatePassword } from "#scripts/updatePassword";

type ProfilePasswordProps = {
  oldPass: string;
};

export class ProfileEditPassword extends Block {
  constructor(props: ProfilePasswordProps) {
    super({
      ...props,
      onValidatePassword: () => {
        const firstPasswordValue = this.refs.firstPassword.element.value;
        const secondPasswordValue = this.refs.secondPassword.element.value;

        validatePassword(firstPasswordValue, secondPasswordValue);
      },
      onSavePassword: () => {
        const oldPass = this.refs.oldPassword.element;
        const newPass = this.refs.firstPassword.element;
        const newPassDouble = this.refs.firstPassword.element;
        updatePassword(oldPass, newPass, newPassDouble).then(() =>
          this.props.onBack(),
        );
      },
    });
  }

  protected render(): string {
    const { image, display_name } = this.props;

    const noDisplayName = display_name === "null" || !display_name;

    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
    {{{ ProfileAvatar image="${image}" }}}
    <div>${noDisplayName ? "" : display_name}</div>
    </div>
    <div class="profileInfoRows">
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Старый пароль</span>
            {{{ ProfileInput placeholder="••••••••" type="password" name="oldPassword" ref="oldPassword" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль</span>
            {{{ ProfileInput ref="firstPassword" placeholder="•••••••••••••" 
            onBlur=onValidatePassword type="password" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль (ещё раз)</span>
            {{{ ProfileInput ref="secondPassword" 
            placeholder="•••••••••••••" type="password" onChange=onValidatePassword name="newPassword" }}}
        </div>
    </div>
    <div class="changeInfoSave">
    <p class="errorMessage" id="profile-message"></p>
    {{{ Button onClick=onSavePassword
      text="Сохранить" id="profile-save-pass" }}}
      </div>
</div>
    `;
  }
}
