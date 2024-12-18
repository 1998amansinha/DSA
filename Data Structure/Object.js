const obj = {
  name: "John",
  age: 30,
  person: true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.gender = "male";

console.log(obj.name);
console.log(obj["person"]);
console.log(delete obj.person);

console.log(obj);
console.log(obj.sayMyName);

// Object.keys() .values() .entries()
