const scaryCrown = (isScary) =>
  new Promise((resolve, reject) => {
    isScary ? resolve("👻") : reject("🐱");
  });

(async () => {
  // async resolve
  const result1 = await scaryCrown(true);
  console.log("result1 is ", result1);

  // async reject
  try {
    const neverHere = await scaryCrown(false);
    console.warn(neverHere);
  } catch (result2) {
    console.log("result2 is ", result2);
  }

  // chain resolve
  scaryCrown(true)
    .then((result3) => {
      console.log("result3 is ", result3);
    })
    .catch((err) => console.error(err));

  // chain reject
  scaryCrown(false)
    .then((neverHere) => console.warn(neverHere))
    .catch((result4) => console.log("result4 is ", result4));
})();
