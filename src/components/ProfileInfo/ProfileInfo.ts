import Block from "#core/Block/Block";

type ProfileInfoProps = {
  image: string;
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

export class ProfileInfo extends Block {
  constructor(props: ProfileInfoProps) {
    super(props);
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
            <span class="grey">${email}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Логин</span>
            <span class="grey">${login}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Имя</span>
            <span class="grey">${first_name}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Фамилия</span>
            <span class="grey">${second_name}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Отображаемое имя</span>
            <span class="grey">${
              noDisplayName ? "Не указано" : display_name
            }</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Телефон</span>
            <span class="grey">${phone}</span>
        </div>
    </div>
</div>
    `;
  }
}
