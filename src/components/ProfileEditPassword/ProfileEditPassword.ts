import Block from "#core/Block/Block";

export class ProfileEditPassword extends Block {
  protected render(): string {
    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
        <div class="profileInfoImg noClick">
            <img src="{{img}}" alt="profile-image">
        </div>
        <div>{{displayed}}</div>
    </div>
    <div class="profileInfoRows">
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Старый пароль</span>
            <input class="inputProfile grey" placeholder="••••••••" type="password" name="oldPassword" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль</span>
            <input class="inputProfile grey" placeholder="•••••••••••••" type="password" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Новый пароль (ещё раз)</span>
            <input class="inputProfile grey" placeholder="•••••••••••••" type="password" name="newPassword" />
        </div>
    </div>
</div>
    `;
  }
}
