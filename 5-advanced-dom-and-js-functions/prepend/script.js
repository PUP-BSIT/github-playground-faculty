function prependSection() {
    let container = document.querySelector(".container");
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    newSection.style.borderColor = 'blue';
    container.prepend(newSection);
}
  