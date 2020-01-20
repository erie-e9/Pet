// @ts-ignore
const express = require("express");
const next = require("next");

// !<
const compression = require("compression");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const LRUCache = require("lru-cache");
const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require("ngrok") : null;
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
// !>

const myroutes = require("./routes.ts");
const app = next({ dev: isDev });
const handler = myroutes.getRequestHandler(app);

// !<
const ssrCache = new LRUCache({
  max: 200,
  maxAge: 1000 * 60 * 60 // 1hour
});
// @ts-ignore
const getCacheKey = function getCacheKey(req) {
  return `${req.url}`;
};

const renderAndCache = function renderAndCache(
  // @ts-ignore
  // tslint:disable-next-line:prettier
  req, res, pagePath, queryParams
) {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    // @ts-ignore
    .then(html => {
      // Let's cache this page
      if (!isDev) {
        console.log(`CACHE MISS: ${key}`);
        ssrCache.set(key, html);
      }

      res.send(html);
    })
    // @ts-ignore
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = myroutes.getRequestHandler(
  app,
  // @ts-ignore
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  }
);
// @ts-ignore
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}
// !>
// With express
app
  .prepare()
  .then(() => {
    // @ts-ignore
    const server = express();

    // @ts-ignore
    server
      .use(compression({ threshold: 0, filter: shouldCompress }))
      .use(
        cors({
          origin: "http://localhost:3000",
          // tslint:disable-next-line:prettier
            // prettyHost.indexOf("http") !== -1 ? prettyHost : `http://${prettyHost}`,
          credentials: true
        })
      )
      .use(helmet())
      .use(routerHandler)
      .use(handler)
      // @ts-ignore
      // tslint:disable-next-line:prettier
      .get(`/favicon.ico`, (req, res) =>
        app.serveStatic(req, res, path.resolve("../static/icons/favicon.ico"))
      )
      // @ts-ignore
      // tslint:disable-next-line:prettier
      .get("*", (req, res) => handler(req, res))
      // @ts-ignore
      // tslint:disable-next-line:prettier
      .listen(port, host, (err) => {
        if (err) throw err;
        console.log(`🚀  Ready on http://localhost:3000`);
      });
  })
  // @ts-ignore
  // tslint:disable-next-line:prettier
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
