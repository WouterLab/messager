import Block from "#core/Block/Block";

type ProfileInputProps = {
  placeholder: string;
  value: string;
  type: string;
  name: string;
  id: number;
  onBlur?: () => void;
  onChange?: () => void;
};

export class ProfileInput extends Block {
  constructor(props: ProfileInputProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      blur: this.props.onBlur,
      input: this.props.onChange,
    };
  }

  protected render(): string {
    const { value, type, id, name, placeholder } = this.props;
    const idAttribute = id ? `id="${id}"` : "";
    const typeAttribute = type ? `type="${type}"` : "";
    const placeholderAttribute = placeholder
      ? `placeholder="${placeholder}"`
      : "";
    const valueAttribute = value ? `value="${value}"` : "";

    return `<input class="inputProfile grey" ${placeholderAttribute} 
    ${typeAttribute} ${valueAttribute} ${idAttribute} name="${name}" />`;
  }
}
