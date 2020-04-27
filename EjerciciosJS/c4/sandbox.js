//function declaration
function greet(){
    console.log('hello');
}

//funcition expression
const speak = function(){
    console.log('good day');
};
greet();
speak();

//arguments & parameters

const habla = function(name  = 'Luigi', time= 'night'){
    console.log(`good ${time} ${name}`);
};
habla('Liz', 'morning');
habla();

//returning values

const calc = function(radio){
    return 3.14 * radio**2;
};

const area = calc(4);
console.log(area);

//arrow function
const ca = r => 3.14 * r**2; 

const a = ca(3);
console.log('area is: ', a);

const sal = () => 'hello';
const s = sal();
console.log(s);

const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i]; + products[i] + tax;
    }
    return total;
};

console.log(bill([10, 15, 20], 0.5));

//methods

const nombre = 'Sugeidy'
let res = nombre.toUpperCase();
console.log(res);

//callbacks & foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}
myFunc(value => {
    //do something
    console.log(value);
});

const logP = (person, index) =>{
    console.log(`${index} - hello ${person}`);
};

let people = ['Lizbeth', 'Sugeidy', 'Sergio'];
people.forEach(logP);

//get a reference to the 'ul'
const ul = document.querySelector('.people');
let html = ``;
people.forEach(person => {
    //create an html template for each person
    html += `<li style="color: red">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;