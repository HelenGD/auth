import { requestStripe } from 'request-stripe';

export const fakeFetch = <T>(input: T) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log('OK: ', input);
        resolve('200: OK');
      } else {
        reject(Error('5xx: Something went wrong'));
      }
    }, 1000);
  }).finally(requestStripe());
