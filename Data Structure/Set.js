const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // ignore the value as 4 is already there
console.log(set.has(3));
set.delete(4);
set.clear();

for (let item of set) {
  console.log(item);
}
