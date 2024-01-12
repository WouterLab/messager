import Block, { RefElement } from "#core/Block/Block";
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
    });
  }

  protected render(): string {
    const { image, email, login, fname, lname, displayedName, phone } =
      this.props;

    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
        <div class="profileInfoImg noClick">
            <img src="${image}" alt="profile-image">
        </div>
        <div>${displayedName}</div>
    </div>
    <div class="profileInfoRows">
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Почта</span>
            {{{ ProfileInput value="${email}" type="text" name="email" 
            onBlur=onBlurValidate onChange=onChangeInput }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Логин</span>
            <span class="grey">${login}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Имя</span>
            {{{ ProfileInput value="${fname}" type="text" name="first_name" 
            onBlur=onBlurValidate onChange=onChangeInput }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Фамилия</span>
            {{{ ProfileInput value="${lname}" type="text" name="second_name" 
            onBlur=onBlurValidate onChange=onChangeInput }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Отображаемое имя</span>
            {{{ ProfileInput value="${displayedName}" type="text" name="display_name" 
            onBlur=onBlurValidate onChange=onChangeInput }}}
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Телефон</span>
            {{{ ProfileInput value="${phone}" type="text" name="phone" 
            onBlur=onBlurValidate onChange=onChangeInput }}}
        </div>
    </div>
    <p class="errorMessage" id="reg-message"></p>
</div>
`;
  }
}
