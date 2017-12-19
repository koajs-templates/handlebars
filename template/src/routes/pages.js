const Router = require("koa-router");

module.exports = options => {
  const router = new Router();

  router.get("/", async function(ctx) {
    await ctx.render("home", { title: "home" });
  });

  router.get("/about", async function(ctx) {
    await ctx.render("about", { title: "about" });
  });
  
  return router.routes();
};
