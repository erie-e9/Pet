const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass');

// <comentar código si no se usará sass/less
  const myRoutes = require('./server/routes.ts')
  module.exports = {
    exportPathMap: myRoutes
  }

  const path = require('path')
  const glob = require('glob')

  // module.exports = {
  //   webpack: (config, {dev}) => {
  //     config.module.rules.push(
  //       {
  //         test: /\.(css|scss)/,
  //         loader: "emit-file-loader",
  //         options: {
  //           name: "dist/[path][name].[ext]"
  //         }
  //       },
  //       {
  //         test: /\.css$/,
  //         use: ["babel-loader", "raw-loader", "postcss-loader"]
  //       },
  //       {
  //         test: /\.s(a|c)ss$/,
  //         use: ["babel-loader", 
  //         "raw-loader", 
  //         "postcss-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             includePaths: ["scss", "node_modules"]
  //               .map(d => path.join(__dirname, d))
  //               .map(g => g.sync(g))
  //               .reduce((a, c) => a.concat(c), [])
  //           }
  //         }]
  //       }
  //     );
  //     return config;
  //   }
  // }
  // module.exports = withSass;

  // </comentar código si no se usará sass/less>

module.exports = withTypescript(
    withSass({
        webpack: (config, {dev}) => {
          config.module.rules.push(
            {
              test: /\.(css|scss)/,
              loader: "emit-file-loader",
              options: {
                name: "dist/[path][name].[ext]"
              }
            },
            {
              test: /\.css$/,
              use: ["babel-loader", "raw-loader", "postcss-loader"]
            },
            {
              test: /\.s(a|c)ss$/,
              use: ["babel-loader", 
              "raw-loader", 
              "postcss-loader",
              {
                loader: "sass-loader",
                options: {
                  includePaths: ["scss", "node_modules"]
                    .map(d => path.join(__dirname, d))
                    .map(g => glob.sync(g))
                    .reduce((a, c) => a.concat(c), [])
                }
              }]
            }
          );
          return config;
        },
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          indentedSyntax: true
          // localIdentName: "[local]___[hash:base64:5]",
        },
        sassLoaderOptions: {
          includePaths: ["styles/", "absolute/path/b"]
        },
        
    }),
)