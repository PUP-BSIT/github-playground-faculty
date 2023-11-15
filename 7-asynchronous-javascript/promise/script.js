function run() {
    const lotteryPromise = new Promise(function (resolve, reject) {
        // change this
        console.log('Lottery draw is happening.');        
        for(let i=0;i < 2999999999;i++) {}
        resolve('You WIN.');
    });

    lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
}