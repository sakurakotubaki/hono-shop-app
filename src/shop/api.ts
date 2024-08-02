import { Hono } from "hono";

// shop array data type Shop
let shops: Shop[] = [
  { id: "1", name: "牛乳", description: "生乳100%" },
  { id: "2", name: "卵", description: "鶏卵100%" },
  { id: "3", name: "パン", description: "小麦粉100%" },
];

// instance of Hono
const shop = new Hono();
// GET /api/shop
shop.get("/", (c) => c.json(shops));

// GET /api/shop/:id
shop.get("/:id", async(c) => {
  const id = c.req.param("id");
  const shop = shops.find((shop) => shop.id === id);
  if (shop) {
    return c.json(shop);
  } else {
    return shop;
  }
});

// POST /api/shop
shop.post("/", async(c) => {
  const param = await c.req.json<Shop>();
  const newShop: Shop = {
    id: (shops.length + 1).toString(),
    name: param.name,
    description: param.description,
  };
  shops = [...shops, newShop];
  
  return c.json(newShop, 201);
});

export { shop };