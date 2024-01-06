import Block from "#core/Block/Block";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  id: number;
};

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  protected render(): string {
    const { placeholder, type, id, name } = this.props;
    const idAttribute = id ? `id="${id}"` : "";
    const typeAttribute = type ? `type="${type}"` : "";

    return `<input class="input" placeholder="${placeholder}" ${typeAttribute} ${idAttribute} name="${name}" />`;
  }
}
