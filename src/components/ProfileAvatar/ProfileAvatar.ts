import Block from "#core/Block/Block";
import { updateAvatar } from "#services/user";

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
        const avatar = document.getElementById("avatar-input") as HTMLInputElement;
        if (avatar) {
          avatar.addEventListener("change", async () => {
            const formData = new FormData();

            if (avatar.files) {
              formData.append("avatar", avatar.files[0]);
            }

            await updateAvatar(formData);
          });
          avatar.click();
        }
      },
    };
  }

  protected render(): string {
    const { image } = this.props;

    return `<div class="profileAvatar">
    ${
      image !== "null"
        ? `<img src="${"https://ya-praktikum.tech/api/v2/resources" + image}" alt="profile-image">`
        : '<img src="assets/image.png" style="width: 60px; height: 60px;" alt="profile-image">'
    }
    <div class="profileAvatarHover">
        <span>Новое фото</span>
    </div>
    <input id="avatar-input" type="file" name="avatar" style="display: none" />
    </div>
    `;
  }
}
