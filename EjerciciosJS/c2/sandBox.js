//alert('Hola bienvenido');
//log things to console
console.log(1);
console.log(2);
let age = 25;
let year = 2020;
console.log(age, year);
age = 21;
console.log(age);
const points = 100;
console.log(points);
var score = 50;
console.log(score);

//Strings
console.log('Hola mundo');
let email = 'josueomar99@gmail.com';
console.log(email);
//String concatenation
let firstname = 'Omar';
let lastname = 'Machucho';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
//Getting characters
console.log(fullname[3]);
//String length
console.log(fullname.length);
//String methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result);
let index = email.indexOf('@');
console.log(index);

//Common string methods

let result2 = email.lastIndexOf('o');
console.log(result2);
let result3 = email.slice(0,10);
console.log(result3);
let result4 = email.substr(4,10);
console.log(result4);
let result5 = email.replace('o', 'w');
console.log(result5);

//Numbers
let radio = 10;
const pi = 3.14159;
console.log(radio, pi);
//math operators +, -, *, /, **, %
console.log(10/2);
let result6 = radio % 3;
console.log(result6);
let result7 = pi * radio**2;
console.log(result7);
//order of operation - B I D M A S
//Orden de operaciones - Parentesis, Exponentes, Disvisiones, Multiplicaciones, Sumas y Restas
let result8 = 5 * (10-3)**3;
console.log(result8);
let likes = 10;
//likes = likes + 1;
//likes++;
//likes--;
//console.log(likes);
//likes += 10;
//likes -= 5;
//likes *=2;
//likes /=2;
console.log(likes);
console.log(5 * 'aa');
let result9 = 'the blog has ' + likes + ' likes';
console.log(result9);

//template strings 
const titulo = 'Mejores obras del 2019';
const autor = 'Josue';
const nLikes = 15;

//Concatenation way
let result10 = 'El blog llamado ' + titulo + ' por ' 
+ autor + ' tiene ' + nLikes + ' likes';
console.log(result10);  

//Template string way 
let result11 = `El blog llamado ${titulo} por ${autor} tine ${nLikes} likes`;
console.log(result11);
let html = `
    <h2>${titulo}</h2>
    <p> Por ${autor}</p>
    <span> Este blog tiene ${nLikes} likes</span>
`;
console.log(html);

//Arrays
let nombres = ['Sergio', 'Beatriz', 'Yolanda'];
console.log(nombres); 
console.log(nombres[1]); 
nombres[0]= 'Alberto';
console.log(nombres); 
let edades = [21, 20, 22];
console.log(edades); 
console.log(edades[1]); 
let random = ['Samuel', 13, 'S']; 
console.log(random); 

//Arrays methods
console.log(nombres.length);
let result12 = nombres.join('-');
console.log(result12); 
let result13 = edades.indexOf(20);
console.log(result13);
let result14 = nombres.concat(['Crystal']);
console.log(result14);
let result15 = random.push('Alberto');
console.log(result15);
let result16 = nombres.pop();
console.log(result16);

//Null & undefined
let undef;
console.log(undef, undef + 3, `the age is ${undef}`);
let nulo = null;
console.log(nulo, nulo + 3, `sthe age is ${nulo}`);

//Booleans
console.log(true, false, 'true', 'false');
//Methods can return booleans
let result17 = email.includes('@');
console.log(result17);
let result18 = nombres.includes('Beatriz');
console.log(result18);
//Comparison operators
let num = 21;
console.log(num == 21);
console.log(num == 20);
console.log(num != 12);
console.log(num != 21);
console.log(num > 20);
console.log(num < 20);
console.log(num <= 25);
console.log(num >= 25);
let pizza = 'hawaiana';
console.log(pizza == 'hawaiana');
//Chale me dio hambre
console.log(pizza == 'Hawaiana');
console.log(pizza > 'pepperoni');
console.log(pizza > 'Hawaiana');
console.log(pizza > 'Pepperoni');

//loose comparison (differnt types can still de equal)
console.log(num == 21);
console.log(num == '21');
console.log(num != 21);
console.log(num != '21');
//strict comparison (different types cannot be equal)
console.log(num === 21);
console.log(num ==='21');
console.log(num !== 21);
console.log(num !=='21');

//type conversion
let mark = '100';
console.log(mark + 1);
mark = Number(mark);
console.log(mark + 1);
console.log(typeof mark);
let naN = Number('notaNumber');
console.log(naN);
let yesaNumber = String(52);
console.log(yesaNumber, typeof yesaNumber);
let boolean1 = Boolean(100);
console.log(boolean1, typeof boolean1);
let boolean2 = Boolean(0);
console.log(boolean2, typeof boolean2);
let boolean3 = Boolean('0');
console.log(boolean3, typeof boolean3);
let boolean4 = Boolean('');
console.log(boolean4, typeof boolean4);