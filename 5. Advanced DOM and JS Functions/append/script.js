function appendSection() {
    let container = document.querySelector(".container");
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    newSection.style.borderColor = 'red';
    container.append(newSection);
}
