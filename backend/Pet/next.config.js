const withTypescript = require('@zeit/next-typescript')
// module.exports = {
//     crossOrigin: 'anonymous'
// }
module.exports = withTypescript()

// module.exports = withCSS(withTypescript(withSass({
//     cssModules: true,
//     webpack: (config) => {
//         return config
//     }
// })))