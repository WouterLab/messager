import Block from "#core/Block/Block";

export class ProfileEditInfo extends Block {
  protected render(): string {
    return `
    <div class="profileInfo">
    <div class="profileInfoTop">
        <div class="profileInfoImg">
            <img src="{{img}}" alt="profile-image">
        </div>
        <div>{{displayed}}</div>
    </div>
    <div class="profileInfoRows">
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Почта</span>
            <input class="inputProfile grey" value="{{email}}" type="text" name="email" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Логин</span>
            <span class="grey">{{login}}</span>
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Имя</span>
            <input class="inputProfile grey" value="{{fname}}" type="text" name="first_name" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Фамилия</span>
            <input class="inputProfile grey" value="{{lname}}" type="text" name="second_name" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Отображаемое имя</span>
            <input class="inputProfile grey" value="{{displayed}}" type="text" name="displayed" />
        </div>
        {{> Divider}}
        <div class="profileInfoRow">
            <span class="profileInfoRowTitle">Телефон</span>
            <input class="inputProfile grey" value="{{phone}}" type="text" name="phone" />
        </div>
    </div>
</div>
`;
  }
}
