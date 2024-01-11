import Block from "#core/Block/Block";

type ProfileAvatarProps = {
  image: string;
};

export class ProfileAvatar extends Block {
  constructor(props: ProfileAvatarProps) {
    super(props);
  }

  componentDidMount(): void {
    this.props.events = {
      click: () => {
        const avatar = document.getElementById("avatar-input");
        avatar?.click();
      },
    };
  }

  protected render(): string {
    const { image } = this.props;

    return `<div class="profileAvatar">
    <img src="${image}" alt="profile-image">
    <div class="profileAvatarHover">
        <span>Новое фото</span>
    </div>
    <input id="avatar-input" class="profileAvatarFile" type="file" name="avatar" />
    </div>
    `;
  }
}
