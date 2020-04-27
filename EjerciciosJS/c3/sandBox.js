//for loops
for(let i = 0; i < 5; i++){
    console.log('in loop', i);
}
console.log('loop finished');

const nombres = ['Shaun', 'Mario', 'Luigi'];
for( let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
    let html = `<div>${nombres[i]}</div>`;
    console.log(html);
}

//While loop
let i = 0;
while(i < 5){
    console.log('in loop', i);
    i++;
}
let j = 0;
while(j < nombres.length){
    console.log(nombres[j]);
    j++;
}

//do while loops
let q = 3;
do{
    console.log('val of q is: ', q)
    q++;
}while(q < 5)

//if statements 
const edad = 21;
if(edad > 20){
    console.log('you are over 20 years old');
}
if(nombres.length < 4){
    console.log("That's a lot of people")
}

const pass = 'Passw0rd1234';

if(pass.length >= 8){
    console.log("That password is long enough");
}

//else if stamtements
if(pass.length >= 12){
    console.log("That password is might strong");
}else if(pass.length >= 8){
    console.log("That password is long enough");
}else{
    console.log("Password isn't long enough")
}

//logical operators - OR || and AND &&
const passw = 'Passw0rd@@@@';
if(passw.length >= 12 && passw.includes('@')){
    console.log("That password is might strong");
}else if(passw.length >= 8 || passw.includes('@') && passw.length > 5){
    console.log("That password is strong enough");
}else{
    console.log("Password isn't strong enough")
}

//Logilcal NOT (!)
let user = !false;
if(user){
    console.log('you must be logged in to continue')
}
console.log(!true);
console.log(!false);

//break and continue 
const scores = [54, 51, 52 ,53, 50, 55];

for(let w = 0; w < scores.length; w++){
    console.log('your score; ', scores[w]);
    if(scores[w] === 50){
        continue;
    }
    
    if(scores[w] === 55){
        console.log('Congrats, you got the top score');
        break;
    }
}

//Switch statements
const grade = 'C';
switch(grade){
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got a B');
        break;
    case 'C':
        console.log('You got a C');  
        break;  
    case 'D':
        console.log('You got a D');
        break;
    default: 
        console.log('not a valid grade');
}

//variable & block scope
const num = 13; 
if(true){
    const num = 11;
    const nom = 'Yonas'
    console.log('inside 1st code block: ', num, nom);
    if(true){
        const num = 12
        console.log('Inside 2nd code block', num)
        var test = 'hello'
    }
}
console.log('outside code block: ', num, test);