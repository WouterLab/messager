const express = require("express");

const app = express();
const PORT = 3000;

Handlebars.registerPartial("myPartial", "{{prefix}}");

app.use(express.static("./"));

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
