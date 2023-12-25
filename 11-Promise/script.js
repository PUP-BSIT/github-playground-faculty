function run() {
  new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve(`(${num}).Promise is fulfilled!`);
    } else {
      reject(`(${num})Promise failed!`);
    }
  }).then(
    (value) => console.log(value),
    (error) => console.error(error)
  );
}
