import Block from "#core/Block/Block";

export class EditInfoPage extends Block {
  protected render(): string {
    return `<div class="changeInfoWrapper">
    <img src="assets/back.svg" redirect="profile" alt="return-back" class="backArrow">
    <div class="changeInfo">
        {{> ProfileEditInfo img="assets/dog2.jpg" name="Danil" email="mail@mail.ru" login="boymep" fname="Danil"
        lname="Panov" displayed="Boymep" phone="+7 (999) 999 99 99"}}
        <div class="changeInfoSave">{{> Button redirect="profile" text="Сохранить"}}</div>
    </div>
    <div class="changeInfoLogo">{{> Logo}}</div>
</div>`;
  }
}
