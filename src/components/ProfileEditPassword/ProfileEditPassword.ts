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
    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
        <div class="profileInfoImg noClick">
            <img src="{{img}}" alt="profile-image">
        </div>
        <div>{{displayedName}}</div>
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
</div>
    `;
  }
}
