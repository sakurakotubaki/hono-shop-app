import { Hono } from "hono"
import { shop } from "./shop/api"

const app = new Hono()

app.route("/api/shop", shop);

export default app
