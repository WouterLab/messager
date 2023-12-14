import Handlebars from "handlebars";

const templateSource = `
  <button>
    {{text}}
  </button>
`;
const template = Handlebars.compile(templateSource);
const context = { text: "Click" };

export const Button = template(context);
