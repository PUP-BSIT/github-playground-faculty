
function run() {
    console.log('Start script...');

    setTimeout(onDownloadCompleted, 1000);
    
    console.log('Waiting...!');
    task('Do long running operation');
}

function onDownloadCompleted() {
    console.log("Download Completed!");
}

function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}