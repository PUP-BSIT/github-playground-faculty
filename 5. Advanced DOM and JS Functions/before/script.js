function oneBefore2() {
    let elem1 = document.querySelector("#section_1");
    let elem2 = document.querySelector("#section_2");
    elem2.before(elem1);
}

function twoBefore1() {
    let elem1 = document.querySelector("#section_1");
    let elem2 = document.querySelector("#section_2");
    elem1.before(elem2);
}
