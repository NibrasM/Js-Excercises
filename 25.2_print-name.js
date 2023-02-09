const a = {
  name: "sara",
  printName: function () {
    console.log("my name is " + this.name);
  },

  printNameAfter: function () {
    setTimeout(() => {
      console.log("after");
      this.printName();
    }, 1000);
  },
};

a.printName();
a.printNameAfter();
