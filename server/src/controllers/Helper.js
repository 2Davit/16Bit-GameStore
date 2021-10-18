const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let text = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <p id="container">HOLA</p>
</body>
</html>`

const { window } = new JSDOM(text, {runScripts: 'outside-only'});

// console.log(window.document.getElementById("container"));
// window.eval(`document.getElementById("container").innerHTML = '<p>OHH</p>'`)
// console.log(window.document.getElementById("container").textContent);

module.exports = {
    window
}