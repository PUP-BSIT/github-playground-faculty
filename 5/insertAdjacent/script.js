function insertAdjacentSection() {
    let container = document.querySelector(".container");
    const newElement = '<div class="section"><div>';
    container.insertAdjacentHTML('afterbegin', newElement);
}
