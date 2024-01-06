import Block from "#core/Block/Block";

export class EditPassPage extends Block {
  protected render(): string {
    return `<div class="changePassWrapper">
    <img src="assets/back.svg" redirect="profile" alt="return-back" class="backArrow">
    <div class="changePass">
        {{> ProfileEditPassword img="assets/dog2.jpg" displayed="Boymep"}}
        <div class="changeInfoSave">{{> Button redirect="profile" text="Сохранить"}}</div>
    </div>
    <div class="changePassLogo">{{> Logo}}</div>
</div>`;
  }
}
