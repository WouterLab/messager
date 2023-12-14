import "./styles.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello!</h1>
    <div class="card">
      <button id="counter" type="button">Click</button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
