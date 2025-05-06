// task1.js
// Function Declarations vs Expressions + Hoisting

console.log("Before declarations:");
try {
    console.log(getCalculation("area")("circle", 10));
} catch (e) {
    console.error("Error before declaration:", e);
}

function calculateArea(shape, value) {
    if (shape === "circle") {
        return Math.PI * value * value;
    } else if (shape === "square") {
        return value * value;
    } else {
        return "Invalid shape";
    }
}

const calculatePerimeter = function (shape, value) {
    if (shape === "circle") {
        return 2 * Math.PI * value;
    } else if (shape === "square") {
        return 4 * value;
    } else {
        return "Invalid shape";
    }
};

function getCalculation(type) {
    if (type === "area") {
        return calculateArea;
    } else if (type === "perimeter") {
        return calculatePerimeter;
    } else {
        return () => "Unknown type";
    }
}

console.log("After declarations:");
console.log(getCalculation("area")("square", 5));
console.log(getCalculation("perimeter")("circle", 7));

console.log("\nTypeof checks:");
console.log("typeof calculateArea:", typeof calculateArea);
console.log("typeof calculatePerimeter:", typeof calculatePerimeter);


// task2.js
// Closures & Arrow Functions

function createCounter(start) {
    let count = start;
    return function () {
        console.log("Count:", count);
        count++;
    };
}

const counter = createCounter(5);
counter(); // 5
counter(); // 6
counter(); // 7

// Arrow function version
function createArrowCounter(start) {
    let count = start;
    return () => {
        console.log("Arrow Count:", count);
        count++;
    };
}

const arrowCounter = createArrowCounter(10);
arrowCounter(); // 10
arrowCounter(); // 11
arrowCounter(); // 12


// task3.js
// Scope, Parameters, and this Binding

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser();
greetUser("Alex");

const user = {
    name: "Dana",
    sayHiRegular: function () {
        console.log("Regular function:", this.name);
    },
    sayHiArrow: () => {
        console.log("Arrow function:", this.name); // 'this' is from global scope
    }
};

user.sayHiRegular();
user.sayHiArrow();

// var vs let
for (var i = 0; i < 1; i++) {
    var varMessage = "I'm declared with var";
}

for (let j = 0; j < 1; j++) {
    let letMessage = "I'm declared with let";
}

console.log("varMessage after loop:", varMessage);
try {
    console.log("letMessage after loop:", letMessage);
} catch (e) {
    console.error("letMessage is not accessible:", e.message);
}
