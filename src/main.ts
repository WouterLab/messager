import { LoginPage } from "#pages/LoginPage";
import Handlebars, { Template } from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";
import "./styles/styles.scss";

const app = document.getElementById("app");

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template<any>);
});

const pages = {
  login: [Pages.LoginPage, {}],
  reg: [Pages.RegPage, {}],
};

const [source, context] = pages["login"];

const render = Handlebars.compile(source)(context);

if (app) {
  app.innerHTML = render;
}
