//object literals
let user = {
    name: 'Marisol', 
    age: 25, 
    email: 'sol@mail.com',
    location: 'Cancun',
    blogs: ['Drawing', 'Vacations']
};
console.log(user);
console.log(user.name);

user.age = 22;
console.log(user.age);
console.log(user['email']);
user['age']= 21;
console.log(user['age']);

const key = 'location';
console.log(user[key]);

console.log(typeof user);

//Objects literals

/*const blogs = [
    {title: 'Sports', likes: 100},
    {title: 'News', likes: 30}
]*/
//console.log(blogs);

let usr = {
    name: 'Jimena', 
    age: 26, 
    email: 'sjime@mail.com',
    location: 'Guadalajara',
    blogs: [
        {title: 'Sports', likes: 100},
        {title: 'News', likes: 30}
    ], 
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }, 
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
};
usr.login();
usr.logout();
usr.logBlogs();
console.log(this);
const name = 'Mario';
name.toUpperCase();

//Math objcet

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.8;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
//random numbers

const rnd = Math.random();
console.log(rnd); 
console.log(Math.round(rnd));

//primitive values
let score1 = 50;
let score2 = score1;
console.log(score1, score2);
score1 = 10;
console.log(score1, score2);

//reference values
const usr1 = {name: 'Ricardo', age: 12}
const usr2 = usr1;
console.log(usr1, usr2);
usr1.age = 13;
console.log(usr1, usr2);

