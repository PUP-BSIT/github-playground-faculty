function displayConstants() {
    const score = 25;
    // we cannot write score = 26 because score is a constant.
    const person = {name:"John Doe"};
    console.log(person);
    person.name = "Jane Dee";
    console.log(person);
}
