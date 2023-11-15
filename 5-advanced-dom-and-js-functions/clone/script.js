function clone() {
    let container = document.querySelector(".container");
    const input = document.querySelector('.input');
    container.append(input.cloneNode());
}
