import Handlebars from "handlebars";
import Template from "./Input.tmpl";

const template = Handlebars.compile(Template);

export function Input({ placeholder }: { placeholder: string }) {
  const context = { placeholder };
  return template(context);
}
