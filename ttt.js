const div = document.getElementById("write");

function func1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.color = "red";
      res();
    }, 5000);
  });
}

function func2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.fontSize = "50px";
      res();
    }, 5000);
  });
}
function func3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.fontStyle = "italic";
      res();
    }, 5000);
  });
}

function func4() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      div.style.color = "purple";
      res();
    }, 5000);
  });
}

window.onload = () => {
  func1().then(func2).then(func3).then(func4);
};

// window.onload = async () => {
//   await func1();
//   await func2();
//   await func3();
//   await func4();
// };

// function f6() {
//   return new Promise((res, rej) => {
//     res(1);
//   });
// }

// function f6() {
//   Promise.resolve(1);
// }

// function main1() {
//   main2();
//   main3();
// }

// async function main2() {
//   try {
//     const res1 = func1();
//     const res2 = func2();
//     await func3();
//   } catch (error) {
//     console.log("error", error);
//   }
// }
