
import { Report } from 'notiflix/build/notiflix-report-aio';
const refs = {
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  button: document.querySelector('button')
}
// console.log(refs.delay.value);
// console.log(refs.button);

refs.button.addEventListener('click', buttonHeandler)


function buttonHeandler(e) {
  e.preventDefault()
  if (refs.delay.value !== '' && refs.step.value !== '' && refs.amount.value !== '') {
    const delay = Number(refs.delay.value)
    const step = Number(refs.step.value)
    const amount = Number(refs.amount.value)
    const position = Array.from([...Array(amount).keys()], (_, i) => i + 1)
    console.log(position);
    const promises = position.map(createPromise)


    //runArray(position, delay).then(x => console.log(x))
    // for (let i = 0; i < amount; i++) {
    //   console.log('loop');
    //   const position = amount[i] + 1
    //   console.log(position);
    //   function createPromise(position, delay) {
    //     const shouldResolve = Math.random() > 0.3;
    //     if (shouldResolve) {
    //       console.log(`resolved: ${position}, ${delay}`);
    //     } else {
    //       console.log(`rejected: ${position}, ${delay}`);
    //     }
    //   }
    // }


  } else {
    return Report.failure(
      'Please enter all required values',
      '',
      'Okay',
    );
  }
}

// function runArray(position, delay) {
//   return new Promise(resolve => {
//     const time = delay
//     setTimeout(() => {
//       resolve({ position, time })
//     }, time)
//   })
// }

function createPromise(position, delay) {
  console.log(position);
  console.log(`delay: ${delay}`);
  // return new Promise(resolve => {
  // setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log('resolve');
  } else {
    console.log('reject');
  }
  // }, 0)
  // })
}

function getTime(delay) {
  return delay
}

// fetch('https://pokeapi.co/api/v2/pokemon1/1')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => console.log('error'))

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon1/${id}`).then(r => r.json())
// }

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError)

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('chatch block');
//   console.log('error');
// }

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve('✔️ this is resolve')
//   })
// }
// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// const promise = new Promise((resolve, reject) => {
//   const canFulFill = Math.random() > 0.5
//   setTimeout(() => {
//     console.log(canFulFill);
//     if (canFulFill) {
//       resolve('test good');
//     }
//     reject('test bad');
//   }, 1000)
// })

// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   },
// )

// console.log(promise);