const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
    withSass({
        webpack(config, options) {
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