let arr = ['John', 'Smith', 'Lucky', 'Serah'];
//Destructuring Array

let [fourth, second, third, first] = arr

document.write(fourth + ' ' + second + '<br>');

var [$firstName, surname] = "John Smith".split(' ');
document.write($firstName + '<br>'); // John
document.write(surname + '<br>');  // Smith

var fName = arr[0];
alert(fName);
var last = arr[3];
alert(last);

//“Destructuring” does not mean “destructive”.
//It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

//USING COMMA TO IGNORE ELEMENTS IN AN ARRAY
var arrs = ['Julius', 'Caesar', 'consul', 'Of The Roman Republic'];
var [, , , last] = arrs;
document.write(last + '<br>');

const $profile = ['Ebenezer', 'Male', 'cenlogistics.com', ['Esomchi', 'Nezer']];

const getUserInfo = ([firstName, ,website, [, nezer] ]) => {
    return(`${firstName} runs ${website} with ${nezer}`)
};
document.write(getUserInfo($profile) +'<br>');

//Invoking a function destructuring Array parameter without passing an argument. This is achieved using default parameter

const userInfo = function ([firstName] = ['KingNezer', 'Ebenezer']) {  //default destructuring parameter.
    return (`My name is ${firstName}`)
};
document.write(userInfo() +'<br>');

//destructuring nested objects

const userProfile = {
    website: "codesweetly.com",
    gender: "Male",
    fullName: {
        firstName: "Oluwatobi",
        lastName: "Sofela"
    }
};

// Define a function with two destructuring objects containing a parameter each:
const userBio = function ({ website, fullName: { firstName: userName }}) {
    return `${userName} runs ${website}`;
}

// Invoke getUserBio while passing the profile object as an argument:
document.write(userBio(userProfile) +'<br>');

//Invoking a function destructuring object parameter without passing an argument. This is achieved using default parameter

const $userInfo = function ({firstName} = {firstName: 'NezerKing'}) {  //default destructuring parameter.
    return (`My name is ${firstName}`)
};
document.write($userInfo() +'<br>');

//Assign to anything at the left-side
let user = {};
[user.name, user.surname] = "John Taylor".split(' ');
alert(user.name + ', ' + user.surname); // John Taylor


let user1 = {
    Name: "Chukwuemeka",
    Age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user1)) {
  document.write(`${key}: ${value}` + '<br>'); // name:John, then age:30
};

//Looping with .entries()
const obj = { foo: "bar", baz: 42 };
document.write(Object.entries(obj) + '<br>');

//USING REST '...'
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

document.write(`His name is ${name1} ${name2}, ${rest}`+ '<br>');

let [fname = 'Julius', lname = prompt('surname?')] = [prompt('name?'), 'Akin'];

document.write(fname +'<br>');    // Julius (from array)
document.write(lname +'<br>')
//Note that the values on the right side will always over-ride the default value on the left side.

//OBJECT DESTRUCTURING

let car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2012
}

const {name: var1, model, year: var3} = car
document.write(var1 +'<br>');//Outputs Toyota
document.write(var3 +'<br>');//Outputs Year
document.write(model +'<br>');//Outputs Year
//Order does not matter in Object destructuring
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {height, width, title} = options;

document.write(title +'<br>');  // Menu
document.write(width +'<br>');  // 100
document.write(height +'<br>');

let order = {
    menu: 'Salad',
    drink: 'Red Wine',
    fruit: 'Banana',
    amount: 5000
};

({menu, drink, fruit, amount} = order);
document.write(`${menu}, ${drink}, ${fruit}, ${amount}` +'<br>')

//USING THE REST PARAMETER FOR OBJECTS

const details = {
    choiceName: 'Ebenezer',
    surName: 'Esomchi',
    start: '16 March',
    end: '30 July',
    stack: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'RAECT', 'REDUX', 'NODE.JS', 'EXPRESS', 'MONGODB', 'NOSQL']
}

let {choiceName, surName, ...others} = details;

document.write(surName + '<br>');
console.log(others);
document.write(details.stack + '<br>');

let $options = {
    size: {
    $width: 100,
    $height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

//NESTED DESTRUCTURING
// destructuring assignment split in multiple lines for clarity
let {size: { $width, $height}, items: [item1, item2], descript = "Menu" // not present in the object (default value is used)
} = $options;

document.write(descript +'<br>');  // Menu
document.write($width +'<br>');  // 100
document.write($height +'<br>'); // 200
document.write(item1 +'<br>');  // Cake
document.write(item2 +'<br>');  // Donut

let intro = ['Hello', 'I', 'am', 'Nezer'];

// let greeting = intro[0];
// let $name = intro[3];

// let [greeting, , , $name] = intro

// console.log(greeting + ' '+ $name)

// let introduction = ["Hello", "I" , "am", "Sarah"];
// let greeting = introduction[0];
// let name = introduction[3];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

let [greeting, ...$intro] = intro

document.write('The wordings are: ' + greeting + ' '+ $intro + '<br>');

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add, subtract, multiply, divide);
// console.log(add);
// console.log(add);

const fullName = ({ first, last, country }) => {
    return (`My name is ${first} ${last}, I am from ${country}`)
};

const runner = {
    first : 'Eliud',
    last : 'John',
    country : 'Kenya'
};
document.write(fullName(runner) + '<br>'); 


// Define an object with three-parent properties:
const profile = {
    website: "codesweetly.com",
    gender: "Male",
    fullName: {
        firstName: "Oluwatobi",
        lastName: "Sofela"
    }
};

// Define a function with two destructuring objects containing a parameter each:
function getUserBio({ website, fullName: { firstName: hisName } }) {
    return `${hisName} runs ${website}`;
}

// Invoke getUserBio while passing the profile object as an argument:
document.write(getUserBio(profile) + '<br>');

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

document.write(myVehicle(vehicleOne) + '<br>');

function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    return message
    
};

//DESTRUCTURING NESTED OBJECT IN AN ARRAY

// const result = [{
//     first : 'Eluis',
//     last : 'Kip',
//     country: 'kenya'
// }, {
//     first : 'Feyisa',
//     last : 'Lilesa',
//     country : 'Ethiopia'
// }, {
//     first : 'Gaten',
//     last : 'Rupp',
//     country : 'United States'
// }];   
// //The above is an Array of 3 objects

// const [{first}, {country}] = result

// document.write(first);


const $runner = {
    first : 'Eliud',
    last : 'Kipchoge',
    country : 'Kenya',
    title : 'Golden Heart of Kenya'
};

function print (person) {
    const {first, last, country, title} = $runner;
    console.log(`${first} ${last} is from ${country} with a title of ${title}`)
}
print($runner);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

function getArray() {
    return ['Hello', 'I', 'Am', 'Nezer']
}
// console.log(getArray());
let [greetings, , , naming] = getArray()
console.log(`${greetings} ${naming}`);

let persons = {names: "Sarah", country: "Nigeria", job: "Developer"}; 
let names, country, job;

({names, country, job} = persons)

console.log(names);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rests] = numbers;

document.write(`<p> ${one} </p>`);
document.write("<p>" + two + "</p>");
document.write("<p>" + rests + "</p>");

const user3 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const getValue = key => {
    const { [key]: returnValue } = user3;   
    return returnValue;
}

document.write(getValue(age) +'<br>');

//Destructure in Loops

const users = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for (let {name, age, address} of users) {
    document.write(`${name} is ${age} old and live in ${address}` +'<br>')
}