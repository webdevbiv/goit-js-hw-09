// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const promise = new Promise((resolve, reject) => {
  const canFulFill = Math.random() > 0.5
  setTimeout(() => {
    console.log(canFulFill);
    if (canFulFill) {
      resolve('test good');
    }
    reject('test bad');
  }, 1000)
})

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  },
)

console.log(promise);