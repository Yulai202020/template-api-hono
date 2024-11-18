const start = performance.now();

fetch("http://localhost:4000/", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
.then(response => response.json())
.then(json => {
  
});

const end = performance.now();

const delta = end - start;

console.log(delta, "ms");