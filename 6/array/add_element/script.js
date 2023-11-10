let names = [];
let textInput = document.querySelector("#text_input");

function pushToArray() {
    names.push(textInput.value);
}

function unshiftToArray() {
    names.unshift(textInput.value);
}

function printArray() {
    console.log(names);
}
