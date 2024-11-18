import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import page from "@/page"
const app = new Hono();

const users = [
  "Yulai",
  "Azamat"
]

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

app.get("/user/:id", (c) => {
  const id = parseInt(c.req.param('id'));
  const username = users[id];

  if (username !== undefined) {
    return c.json({ username: username }, 200);
  } else {
    return c.json({ message: "username doesnt exist!" }, 404);
  }
});

app.post('/post', async (c) => {
  const body = await c.req.parseBody();

  return c.json({post: body}, 200);
});

app.get("/html", (c) => {
  return c.html(page);
})

// not found

app.notFound((c) => {
  return c.json({ error: "resoure not found!" }, 404);
});

// error

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "App Error" }, 500);
});

export default app;
