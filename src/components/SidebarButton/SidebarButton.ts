import Block from "#core/Block/Block";
import { router } from "src/main";
import { PagesUrls } from "#types/types";

export class SidebarButton extends Block {
  constructor() {
    super({
      onProfileRedirect: () => {
        router.go(PagesUrls.ProfilePage);
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
