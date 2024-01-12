import Block from "#core/Block/Block";
import { navigate } from "#core/navigate";
import { PagesUrls } from "#types/types";

export class SidebarButton extends Block {
  constructor() {
    super({
      onProfileRedirect: () => {
        navigate(PagesUrls.ProfilePage);
      },
    });
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onProfileRedirect,
    };
  }

  protected render(): string {
    const {} = this.props;

    return `<div class="sidebarButton">Профиль</div>`;
  }
}
