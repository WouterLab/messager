import { Input } from "#components/Input/Input";
import { Button } from "#components/Button";
import s from "./Form.module.scss";

export default `<div class="${s.form}">
  ${Button({ text: "Click" })}
  ${Input({ placeholder: "Почта" })}
</div>`;
