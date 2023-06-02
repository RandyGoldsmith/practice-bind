const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

let speak = johnWick.sayName;
let myfunc = speak.bind(johnWick);

setTimeout(myfunc, 2000);

let job = johnWick.sayOccupation;
let myfunc2 = job.bind(johnWick);

setTimeout(myfunc2, 3000);