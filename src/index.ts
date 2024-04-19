import Koa from "koa";
const cors = require('@koa/cors');
import { router } from "./routes";

const app = new Koa();

app.use(cors());
app.use(router.routes());

const port = 3131;

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}/`);
});