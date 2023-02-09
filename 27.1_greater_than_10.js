// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch

const num = 11;
function greater(num) {
  if (num >= 10) {
    return true;
  } else return false;
}

const f1 = new Promise((res, rej) => {
  if (greater(num)) {
    res();
  } else rej();
})
  .then(() => {
    console.log("true");
  })
  .catch(() => {
    console.log("flase");
  });
