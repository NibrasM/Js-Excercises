// // The first function, makeAllCaps(), will take in an array of words  and
// capitalize them, and then the second function, sortWords(), will sort the
// words in alphabetical order. If the array contains anything but strings, it
// should throw an error. // Call the functions once with an array of words and
// call it once // with an array that includes at least one item that is not a
// word. Print the resolve and reject in a .then, .catch.

const str = ["nibras", "nnnn", "bbbbb"];
const str1 = ["nibras", "nnn5n", "bbbbb"];
const onlyStr = [];

function stringOnly(str) {
  return /^[A-Za-z]*$/.test(str);
}

function makeAllCaps() {
  return new Promise((res, rej) => {
    const capitals = str.map((a) => {
      return a.toUpperCase();
    });
    res(capitals);
  });
}

function sortWords(str) {
  return new Promise((res, rej) => {
    res(str.sort());
  });
}

const p1 = new Promise((res, rej) => {
  const s = str.forEach((element) => {
    onlyStr.push(stringOnly(element));
  });

  if (!onlyStr.includes(false)) {
    res(str);
  } else rej(new Error("Not only strings"));
})
  .then(makeAllCaps)
  .then((sortWords) => {
    console.log(sortWords);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
const p1 = new Promise((res, rej) => {
  const m = makeAllCaps(str);
  console.log("m ", m);
  if (m !== false) {
    res(m);
  } else rej(new Error("Error"));
})
  .then((result) => {
    const sorted = sortWords(result);
    console.log(sorted);
  })
  .catch((error) => {
    console.log(error.message);
  });
function stringOnly(str) {
  return /^[A-Za-z]*$/.test(str);
}
function makeAllCaps(array) {
  const onlyStr = [];
  const capitals = array.map((a) => {
    onlyStr.push(stringOnly(a));
    return a.toUpperCase();
  });
  if (onlyStr.includes(false)) {
    return false;
  } else {
    return capitals;
  }
}
function sortWords(array) {
  return array.sort();
}
*/
