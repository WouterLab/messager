import Handlebars from "handlebars";
import Template from "./Button.tmpl";

const template = Handlebars.compile(Template);

export function Button({ text }: { text: string }) {
  const context = { text };
  return template(context);
}
