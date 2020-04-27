const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});
const errors = document.querySelectorAll('.error')

console.log(paras[2]);
console.log(errors);


//get an element by ID
const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name
const errs = document.getElementsByClassName('error');
console.log(errs);
console.log(errs[0]);
/*errs.forEach(error => {
    console.log(error);
})*/

//get elementss by their tag name
const prs = document.getElementsByTagName('p');
console.log(prs);
console.log(prs[1]);

const parara = document.querySelector('p');
console.log(parara.innerText);
parara.innerText += 'ninjas are awesome!';

const pararas = document.querySelectorAll('p');
pararas.forEach(para =>{
    console.log(para.innerText);
    para.innerText += 'new text';
});

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>this is a new h2</h2>';

const people = ['Yuriria', 'Marian', 'Isabela'];
people.forEach(person => {
    content.innerHTML += `<p> ${person}</p>`;
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.facebook.com');
link.innerText = 'Facebook';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: blue');

const titl = document.querySelector('h1');

//titl.setAttribute('style', 'margin: 20px;');
console.log(titl.style);
console.log(titl.style.color);
titl.style.margin = '20px';
titl.style.color = 'crimson';
titl.style.fontSize = '45px';
titl.style.margin = '';

const change = document.querySelector('p');
console.log(change.classList);

change.classList.add('rara');
change.classList.remove('rara');
change.classList.add('yorick');

const sis = document.querySelectorAll('p');
sis.forEach(p => {
    if(p.textContent.includes('si')){
        p.classList.add('error');
    }
    if(p.textContent.includes('no')){
        p.classList.add('horror');
    }
});

const titulo = document.querySelector('.titulo');
titulo.classList.toggle('test');
titulo.classList.toggle('test');