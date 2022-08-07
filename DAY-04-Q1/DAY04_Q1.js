//  Question:1
//  How to Compare Two JSON have the Same Properties Without Order?
//  a. var obj1 = {name: "Person 1", age:"5"};
//  b.var obj2 = {age:5, name:"Person 1"};

var obj1 = { name: "Person 1", age: "5" };
var obj2 = { age: 5, name: "Person 1" };
var person = true;
if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] === obj2[key]) {
    }
  }
} else {
  person = false;
}
console.log(person);
