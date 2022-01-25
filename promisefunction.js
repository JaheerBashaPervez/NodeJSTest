var promise = new Promise(function (resolve, reject) {
  const x = "jaheer";
  const y = "taheer";

  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("success");
  })
  .catch(function () {
    console.log("failed");
  });
