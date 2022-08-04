export const fakeFetch = <T extends unknown>(input: T) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log('OK: ', input);
        resolve('200: OK');
      } else {
        reject(Error('5xx: Something went wrong'));
      }
    }, 1000);
  });
