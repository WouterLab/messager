import Block from "#core/Block/Block";

type ImageMessageProps = {
  image: string;
  time: string;
};

export class ImageMessage extends Block {
  constructor(props: ImageMessageProps) {
    super(props);
  }
  protected render(): string {
    const { image, time } = this.props;

    return `
    <div class="imgMessageWrapper">
    <img class="imgMessage" src="${image}" alt="image-message" />
    <div class="imgMessageTime">${time}</div>
</div>
`;
  }
}
