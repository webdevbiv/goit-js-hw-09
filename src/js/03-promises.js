import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  button: document.querySelector('button')
}
// console.log(refs.delay.value);
// console.log(refs.button);

refs.button.addEventListener('click', clickHeandler)
function clickHeandler(e) {
  e.preventDefault()
  if (refs.delay.value !== '' && refs.step.value !== '' && refs.amount.value !== '') {
    let delay = Number(refs.delay.value)
    const step = Number(refs.step.value)
    const amount = Number(refs.amount.value)
    // const position = Array.from([...Array(amount).keys()], (_, i) => i + 1)
    // console.log(position);
    // const promises = position.map(createPromise)
    for (let position = 1; position <= amount; position++) {
      // console.log(position);
      createPromise(position, delay)
      delay += step
      // console.log(delay);
    }
  } else {
    return Report.failure(
      'Please fill in all required inputs',
      '',
      'Okay',
    );
  }
}


function createPromise(position, delay) {
  // console.log('promise is working');
  console.log(`position: ${position} delay: ${delay}`);
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        // Reject
        reject({ position, delay })
      }
    }, delay)
  })

  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

