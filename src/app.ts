import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

const corsOptions = {
  origin: "*",
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
  maxAge: 600,
  credentials: true,
};

app.use("/*", cors(corsOptions));

app.use(logger());

app.get("/", (c) => {
  return c.json({ message: "hello"}, 200);
});

app.post("/", (c) => {
  return c.json({ message: "hello"}, 200);
});

// not found

app.notFound((c) => {
  return c.json({ error: "Yuk" }, 404);
});

// error

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "App Error" }, 500);
});

export default app;
