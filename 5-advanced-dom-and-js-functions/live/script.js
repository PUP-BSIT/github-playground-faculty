let liveElem = document.getElementsByClassName('section');
let nonLiveElem = document.querySelectorAll('.section');

console.log(liveElem);
console.log(nonLiveElem);

let hasAccess = true;
function myFunction() {
    if(hasAccess) {
        // Do something
    } else {
        // Do something
    }
    // other statements
}

function myFunction() {
    if(!hasAccess) return;

    // Do something if has access
    // statement
    // statement 
}