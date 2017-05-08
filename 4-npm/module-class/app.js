var foo = require("./foo.js");
var myFoo = new foo("tom",25);

console.log("获取修改前的私有变量");
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

console.log("修改私有变量");
myFoo.SetName("json");
myFoo.SetAge(13);

console.log("获取修改后的私有变量");
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

console.log("获取修改前的公有变量");
console.log(myFoo.name);
console.log(myFoo.age);

console.log("修改公有变量");
myFoo.name = "cat";
myFoo.age = 50;

console.log("获取修改后的公有变量");
console.log(myFoo.name);
console.log(myFoo.age);
