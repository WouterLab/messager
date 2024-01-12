import Block from "#core/Block/Block";

type ProfileInfoProps = {
  image: string;
  email: string;
  login: string;
  fname: string;
  lname: string;
  displayedName: string;
  phone: string;
};

export class ProfileInfo extends Block {
  constructor(props: ProfileInfoProps) {
    super(props);
  }

  protected render(): string {
    const { image, email, login, fname, lname, displayedName, phone } =
      this.props;

    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
        {{{ ProfileAvatar image="${image}" }}}
        <div>${displayedName}</div>
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
            <span class="grey">${fname}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Фамилия</span>
            <span class="grey">${lname}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Отображаемое имя</span>
            <span class="grey">${displayedName}</span>
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
