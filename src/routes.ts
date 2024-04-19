import Router from "koa-router";
import productsAPIs from "./productsAPIs";

export const router = new Router();

router.get("/products/:type", async (ctx, next) => {
  const { type } = ctx.params;
  const products = await productsAPIs[type]();
  ctx.body = products;
});
