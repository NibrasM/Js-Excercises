//Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

//Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

//Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

function say(name) {
  console.log(`hi my name is ${name} and my age is: ${this.age}`);
}

const obj1 = { age: 12 };
const obj2 = { age: 22 };
const obj3 = { age: 32 };

// // bind
const f1 = say.bind(obj1);
f1("alice");
const f2 = say.bind(obj2);
f2("bob");
const f3 = say.bind(obj3);
f3("charles");

const obj4 = { age: 100, say: f1 };
obj4.say("greg");

// call;
// say.call(obj1, "yishai");
// say.call(obj2, "muhammad");
// say.call(obj3, "dania");

// // apply
// say.apply(obj1, ['yishai']);
// say.apply(obj2, ['muhammad']);
// say.apply(obj3, ['dania']);
