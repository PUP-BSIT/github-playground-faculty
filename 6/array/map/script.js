function mapArray() {
    const persons = [
        {firstname : "Malcom", lastname: "Reynolds"},
        {firstname : "Kaylee", lastname: "Frye"},
        {firstname : "Jayne", lastname: "Cobb"}
    ];
       
    let fullnames = persons.map(function(item) {
        return `${item.lastname}, ${item.firstname}`;
    });
    console.log(persons, fullnames);       
}
