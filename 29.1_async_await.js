const getIDs = async () => {
  return [532, 543, 753, 1, 5];
};

const getRecipe = async (recipeID) => {
  const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
  };
  return `${recipeID}: ${recipe.title}`;
};

const a = async () => {
  try {
    const arr = await getIDs();
    const rr = await getRecipe(arr[2]);
    console.log(rr);
  } catch (error) {
    console.log("it is an error");
  }
};

a();

/*
getIDs()
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });

  */

// async function getIDs() {
//   return [532, 543, 753, 1, 5];
// }

// async function getRecipe(recipeID) {
//   const recipe = {
//     title: "Fresh tomato pasta",
//     publisher: "Pinchas Hodadad",
//   };
//   return `${recipeID}: ${recipe.title}`;
// }
// const IDS = getIDs();

// const a1 = await getRecipe(IDS[2]);
// const a2 = await (() => console.log("a ", a1));

// async function f1() {
//   try {
//     a1;
//     a2;
//   } catch (error) {
//     console.log("It is an error!");
//   }
// }
