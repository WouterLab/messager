import Block from "#core/Block/Block";

type SidebarProps = {};

export class Sidebar extends Block {
  constructor(props: SidebarProps) {
    super(props);
  }

  protected render(): string {
    const {} = this.props;

    return `
    <aside class="sidebar">
    <div class="sidebarControls">
        <div class="sidebarTop">
            {{> Logo}}
            <div redirect="profile" class="sidebarProfile">Профиль</div>
        </div>
        {{{ Search id="chat-search" placeholder="Поиск" name="search" }}}
    </div>
    ${this.children}
    <div class="addChat"><img class="plus" src="assets/plus.png" alt="add-chat"></div>
    </aside>
    `;
  }
}
