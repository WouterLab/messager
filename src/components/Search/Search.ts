import Block from "#core/Block/Block";

type SearchProps = {
  placeholder: string;
  name: string;
  id: number;
};

export class Search extends Block {
  constructor(props: SearchProps) {
    super(props);
  }

  protected render(): string {
    const { placeholder, id, name } = this.props;
    const idAttribute = id ? `id="${id}"` : "";

    return `<div class="search">
    <img src="assets/search.svg" alt="search" class="searchImg">
    <input class="searchInput" ${idAttribute} type="text" placeholder="${placeholder}" name="${name}" />
</div>`;
  }
}
