function oneAfter2() {
    let elem1 = document.querySelector("#section_1");
    let elem2 = document.querySelector("#section_2");
    elem2.after(elem1);
}

function twoAfter1() {
    let elem1 = document.querySelector("#section_1");
    let elem2 = document.querySelector("#section_2");
    elem1.after(elem2);
}
