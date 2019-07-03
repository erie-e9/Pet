// @ts-ignore
const express = require("express");
const compression = require("compression");
const next = require("next");
const path = require("path");
const fs = require("fs");

const cors = require("cors");
const helmet = require("helmet");
const LRUCache = require("lru-cache");

const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require("ngrok") : null;
const myroutes = require("./routes.ts");
const app = next({ dev: isDev });
const handler = myroutes.getRequestHandler(app);

const dotenv = require("dotenv");
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const publicEnvFilename = "public.env";

dotenv.config();
const handle = app.getRequestHandler();
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

const getCacheKey = function getCacheKey(req: any) {
  return `${req.url}`;
};

// share public env variables (if not already set)
try {
  if (fs.existsSync(path.resolve(__dirname, publicEnvFilename))) {
    const publicEnv = dotenv.parse(
      fs.readFileSync(path.resolve(__dirname, publicEnvFilename))
    );
    Object.keys(publicEnv).forEach(key => {
      if (!process.env[key]) {
        process.env[key] = publicEnv[key];
      }
    });
  }
} catch (err) {
  // silence is golden
}

const buildId = isProd
  ? fs.readFileSync("./.next/BUILD_ID", "utf8").toString()
  : null;
// @ts-ignore
// @prettier-ignore
const renderAndCache = function renderAndCache(
  req: any,
  res: any,
  pagePath: any,
  queryParams: any
) {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }
  // With express
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then((html: any) => {
      if (!isDev) {
        console.log(`CACHE MISS: ${key}`);
        ssrCache.set(key, html);
      }

      res.send(html);
      // @ts-ignore
      const server = express();

      // @ts-ignore
      server.get("*", (req, res) => {
        return handler(req, res);
      });

      function shouldCompress(req: any, res: any) {
        if (req.headers["x-no-compression"]) {
          // don't compress responses with this request header
          return false;
        }

        // fallback to standard filter function
        return compression.filter(req, res);
      }

      // tslint:disable-next-line:prettier
    server
        .use(handler)
        .use(compression({ filter: shouldCompress }))
        // .use(compression({ threshold: 0 }))
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
      app.renderError(ex, req, res, pagePath, queryParams);
    });
};

//

const routerHandler = myroutes.getRequestHandler(
  app,
  // @ts-ignore
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  }
);

app.prepare().then(() => {
  const server = express();

  server.use(compression({ threshold: 0 }));
  server.use(
    cors({
      origin:
        prettyHost.indexOf("http") !== -1 ? prettyHost : `http://${prettyHost}`,
      credentials: true
    })
  );
  server.use(helmet());
  server.use(routerHandler);

  server.get(`/favicon.ico`, (req: any, res: any) =>
    app.serveStatic(req, res, path.resolve("./static/icons/favicon.ico"))
  );

  server.get("/sw.js", (req: any, res: any) =>
    app.serveStatic(req, res, path.resolve("./.next/sw.js"))
  );

  server.get("/manifest.html", (req: any, res: any) =>
    app.serveStatic(req, res, path.resolve("./.next/manifest.html"))
  );

  server.get("/manifest.appcache", (req: any, res: any) =>
    app.serveStatic(req, res, path.resolve("./.next/manifest.appcache"))
  );

  if (isProd) {
    server.get("/_next/-/app.js", (req: any, res: any) =>
      app.serveStatic(req, res, path.resolve("./.next/app.js"))
    );

    const hash = buildId;

    server.get(`/_next/${hash}/app.js`, (req: any, res: any) =>
      app.serveStatic(req, res, path.resolve("./.next/app.js"))
    );
  }

  server.get("*", (req: any, res: any) => handle(req, res));

  // server.listen(port, host, err => {
  //   if (err) {
  //     return logger.error(err.message);
  //   }

  //   if (ngrok) {
  //     ngrok.connect(port, (innerErr, url) => {
  //       if (innerErr) {
  //         return logger.error(innerErr);
  //       }
  //       logger.appStarted(port, prettyHost, url);
  //     });
  //   } else {
  //     logger.appStarted(port, prettyHost);
  //   }
  // });
});
