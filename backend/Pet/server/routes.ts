// prettier-ignore
const routes = require('next-routes')
// prettier-ignore
// tslint:disable-next-line:prettier
                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
.add('user', '/user/:id', 'profile')                // user   profile   /user/:id
.add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
.add("detail", "/item/:id/:name", "detail")
.add("signup", "/signup")
.add("login", "/login")
.add("confirm", "/user/confirm/:token")
.add("check-email", "/check-email")
.add("forgot-password", "/forgot-password")
.add("change-password", "/user/change-password/:token")
.add({ name: "beta", pattern: "/v3", page: "v3" });
