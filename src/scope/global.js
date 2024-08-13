//variables

var a; //declarando
var b = 'b'; //decalramos y asignamos
b = 'bb'; // reasignando
var a = 'aa'; //redeclaracion


// Global scope
var fruit = 'apple'; //global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Mexico'; // global
    console.log(country);
}

countries();
console.log(country);

const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple'; 
        const fruit2 = 'banana'; 
        let fruit3 = 'kiwi'; 
    } 
}
