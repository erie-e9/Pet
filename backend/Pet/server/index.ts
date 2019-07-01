// @ts-ignore
const express = require("express");
const next = require("next");
const myroutes = require("./routes.ts");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = myroutes.getRequestHandler(app);

// With express
app
  .prepare()
  .then(() => {
    // @ts-ignore
    const server = express();

    // @ts-ignore
    server.get("*", (req, res) => {
      return handler(req, res);
    });

    // tslint:disable-next-line:prettier
    server
      .use(handler)
      // @ts-ignore
      // tslint:disable-next-line:prettier
      .listen(3000, (err) => {
        if (err) throw err;
        console.log(`Ready on http://localhost:3000`);
      });
  })
  // @ts-ignore
  // tslint:disable-next-line:prettier
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
