curl -s http://localhost:4000/ > /dev/null

echo "bun: "

bun fetch.ts

echo "deno: "

bun fetch.ts

echo "node: "

node fetch.ts