const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  //add your code here
  const f1 = printFunc.bind(heroes[0]);
  const f2 = printFunc.bind(heroes[1]);

  f1();
  f2();
}

printHeroes(superHeroes, printName);
