function objectCompare() {
    let obj1 = {};
    let obj2 = {};

    console.log(obj1 === obj2);

    let obj3 = {name:"John Doe"};
    let obj4 = {name:"John Doe"};

    console.log(obj3 === obj4);

    let obj5 = {name:"Jane Dee"};
    let obj6 = obj5;

    console.log(obj5 === obj6);
}
