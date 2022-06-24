import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', submitCreatePromises);

function submitCreatePromises(e) {
  e.preventDefault();

  let delayAsNumber = delay.valueAsNumber;
  const stepAsNumber = step.valueAsNumber;
  const amountAsNumber = amount.valueAsNumber;

  for (let i = 1; i <= amountAsNumber; i++) {
    createPromise(i, delayAsNumber)
      .then(({ position, delayAsNumber }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${delayAsNumber}ms`
        );
      })
      .catch(({ position, delayAsNumber }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${delayAsNumber}ms`
        );
      });
    delayAsNumber += stepAsNumber;
  }
}

function createPromise(position, delayAsNumber) {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        fulfill({ position, delayAsNumber });
      } else {
        reject({ position, delayAsNumber });
      }
    }, delayAsNumber);
  });
}
