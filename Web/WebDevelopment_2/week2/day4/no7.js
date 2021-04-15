// No 7
// getQuote.then(quote => {
//   console.log(quote);
// }).catch(function(err){
//   console.log(err)
// })

const SHOULD_MAKE_ERROR = false;

const getQuote = () =>
  new Promise((resolve) => {
    console.log("Start get quote");

    if (SHOULD_MAKE_ERROR) {
      throw new Error("Err Happen XD");
    }

    resolve("this is quote :)");
  });

const promise = async () => {
  try {
    console.log("Start parent promise");
    const quote = await getQuote();
    console.log("quote is ", quote);
    return;
  } catch (error) {
    console.log("Catched!!");
    console.log(err);
  }
};

promise();
