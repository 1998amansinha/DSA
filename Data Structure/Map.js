const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
console.log("size", map.size);
console.log(map.values());
console.log(map.keys());
console.log(map.has("a"));
map.delete("c");
map.clear();

for (let [key, values] of map) {
  console.log(`${key} : ${values}`);
}
