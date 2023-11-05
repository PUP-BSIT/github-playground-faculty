const person = {
    first_name: "John", 
    last_name: "Doe",
    greet: function(){
        console.log("Hi "+this.first_name+"!");
    },
};

function greet() {
    person.greet();
}
