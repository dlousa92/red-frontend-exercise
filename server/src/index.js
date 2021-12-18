/**
 * @module Server
 *
 * @description
 * Simple mock [json-server](https://github.com/typicode/json-server) for the excercise.
 *
 * Use `yarn install` and `yarn start` commands.
 */

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3015, () => {
    console.log("JSON Server is running in port 3015");
});
