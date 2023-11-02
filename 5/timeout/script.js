function appendSection() {
    let container = document.querySelector(".container");
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    container.append(newSection);
}

function generateSection() {
    setTimeout(appendSection, 1000);
}
