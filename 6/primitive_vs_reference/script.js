function sample1() {
    // Primitive
    let val1 = "hello";
    let val2 = "hello";

    console.log(val1 === val2);

    // Reference Type
    let obj1 = {name:"Steven"};
    let obj2 = {name:"Steven"};

    console.log(obj1 === obj2);
}

function sample2() {
    // Primitive
    let val1 = 6;
    let val2 = val1;

    val2 = 7;
    console.log(val1);

    // Reference Type
    let obj1 = {name:"John Doe"};
    let obj2 = obj1;

    obj2.name = "Jane Dee";
    console.log(obj1);
}

function sample3() {
    // Primitive
    let val1 = 1
    modifyVal(val1);

    function modifyVal(val) {
        val = val + 1;
    }

    console.log(val1);

    // Reference
    let obj1 = {name:"John Doe"}
    modifyObj(obj1);

    function modifyObj(obj1) {
        obj1.name = "Jane Dee";
    }

    console.log(obj1);
}