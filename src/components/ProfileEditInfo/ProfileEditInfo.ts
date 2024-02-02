import Block, { RefElement } from "#core/Block/Block";
import { updateUserInfo } from "#scripts/updateUserInfo";
import { ProfileProps } from "#types/types";
import { validateInput } from "#utils/utils";

export class ProfileEditInfo extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      onBlurValidate: (e: Event) => {
        const input = e.target as RefElement;
        if (input) {
          const validation = validateInput(input);
          const saveButton = document.getElementById("profile-save-info");

          if (validation === false) {
            saveButton?.classList.add("disabled");
          } else {
            saveButton?.classList.remove("disabled");
          }
        }
      },
      onChangeInput: (e: Event) => {
        const input = e.target as RefElement;
        input.classList.remove("error");
      },
      onSaveInfo: async () => {
        const login = this.props.login;
        const email = this.refs.email.element.value;
        const first_name = this.refs.first_name.element.value;
        const second_name = this.refs.second_name.element.value;
        const phone = this.refs.phone.element.value;
        const display_name = this.refs.display_name.element.value;

        const data = {
          login,
          email,
          first_name,
          second_name,
          phone,
          display_name,
        };

        updateUserInfo(data).then(() => this.props.onBack());
      },
    });
  }

  protected render(): string {
    const {
      image,
      email,
      login,
      first_name,
      second_name,
      display_name,
      phone,
    } = this.props;

    const noDisplayName = display_name === "null" || !display_name;

    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
    {{{ ProfileAvatar image="${image}" }}}
    <div>${noDisplayName ? "" : display_name}</div>
    </div>
    <div class="profileInfoRows">
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Почта</span>
            {{{ ProfileInput value="${email}" type="text" name="email" 
            onBlur=onBlurValidate onChange=onChangeInput ref="email" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Логин</span>
            <span class="grey">${login}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Имя</span>
            {{{ ProfileInput value="${first_name}" type="text" name="first_name" 
            onBlur=onBlurValidate onChange=onChangeInput ref="first_name" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Фамилия</span>
            {{{ ProfileInput value="${second_name}" type="text" name="second_name" 
            onBlur=onBlurValidate onChange=onChangeInput ref="second_name" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Отображаемое имя</span>
            {{{ ProfileInput value="${
              noDisplayName ? "" : display_name
            }" type="text" name="display_name" 
            onBlur=onBlurValidate onChange=onChangeInput ref="display_name" }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Телефон</span>
            {{{ ProfileInput value="${phone}" type="text" name="phone" 
            onBlur=onBlurValidate onChange=onChangeInput ref="phone" }}}
        </div>
    </div>
    <p class="errorMessage" id="reg-message"></p>
    <div class="changeInfoSave">{{{ Button onClick=onSaveInfo text="Сохранить" id="profile-save-info" }}}</div>
</div>
`;
  }
}
