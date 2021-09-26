/* const server = require("./src/app.js");

server.listen(3001, () => {
  console.log("server listening on port: 3001");
}); */


const server = require('./src/app');
const { conn } = require('./db');

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); 