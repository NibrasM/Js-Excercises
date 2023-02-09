const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;

  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

const b = {
  power: 50,
};

const a = hero.getStrength.bind(b);

console.log(whoIsStronger(a));

//need to call  getStrength function with () because it is a function
