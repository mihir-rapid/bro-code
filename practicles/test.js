// => hoisting
var x = 100
var fn = function() {
    console.log(x);
    var x = 50;
}
fn();

// => setTimeout
for (var i=1; i<6; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
};

// => arrow function
const sum = (n1, n2) => {
    console.log(n1 + n2);
};
sum(4, 6);

// => difference -> arrow vs normal function
// 1. keyword
// 2. implicit return 
// 3. no argument keyword inside arrow function
// 4. this keyword
let user = {
    username: "mihirxtc",
    fn1: () => {
        console.log(`Welcome to dashboard ${this.username}`);
    },
    fn2: function() {
        console.log(`Welcome to dashboard ${this.username}`);
    }
};
user.fn1();
user.fn2();


// => closure
let username = "mihirxtc";
function call() {
    console.log(`Welcome to profile ${username}`);
};
call();
