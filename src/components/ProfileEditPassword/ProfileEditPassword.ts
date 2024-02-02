import Block from "#core/Block/Block";

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

        const saveButton = document.getElementById("profile-save-pass");

        if (firstPasswordValue !== secondPasswordValue) {
          saveButton?.classList.add("disabled");
        } else {
          saveButton?.classList.remove("disabled");
        }
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
            {{{ ProfileInput placeholder="••••••••" type="password" name="oldPassword" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль</span>
            {{{ ProfileInput ref="firstPassword" placeholder="•••••••••••••" 
            type="password" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль (ещё раз)</span>
            {{{ ProfileInput ref="secondPassword" 
            placeholder="•••••••••••••" type="password" onBlur=onValidatePassword name="newPassword" }}}
        </div>
    </div>
    <div class="changeInfoSave">{{{ Button onClick=onSavePassword
      text="Сохранить" id="profile-save-pass" }}}</div>
</div>
    `;
  }
}
