let promise = new Promise(function(resolve, reject) {
    // Asynchronous operation code here
    if (/* operation successful */) {
        resolve(value); // Resolve with a value
    } else {
        reject(error);  // Reject with an error
    }
});


let fetchData = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(function() {
        let success = true; // You can change this to false to simulate failure

        if (success) {
            resolve("Data fetched successfully!"); // Operation was successful
        } else {
            reject("Failed to fetch data."); // Operation failed
        }
    }, 2000); // Simulate a 2-second delay
});

// Consuming the Promise using .then() and .catch()
fetchData
    .then(function(result) {
        console.log(result); // Output: "Data fetched successfully!"
    })
    .catch(function(error) {
        console.log(error); // Output: "Failed to fetch data." (if failed)
});




let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

promise
    .then(function(result) {
        console.log(result); // Output: 10
        return result * 2;   // Pass the value to the next then
    })
    .then(function(result) {
        console.log(result); // Output: 20
        return result * 3;   // Pass the value to the next then
    })
    .then(function(result) {
        console.log(result); // Output: 60
    })
    .catch(function(error) {
        console.log(error); // Handle any errors in the chain
    });



    class Person {
        // The constructor method is called when a new instance of the class is created
        constructor(name, age) {
            this.name = name; // Instance property
            this.age = age;   // Instance property
        }
    
        // Method to display person information
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    
        // Static method (can be called without instantiating the class)
        static species() {
            return 'Homo sapiens';
        }
    }
    
    // Creating an instance of the Person class
    let person1 = new Person('John', 30);
    
    // Accessing the instance properties and methods
    console.log(person1.name); // Output: John
    console.log(person1.age);  // Output: 30
    person1.greet();           // Output: Hello, my name is John and I am 30 years old.
    
    // Calling a static method
    console.log(Person.species()); // Output: Homo sapiens
    




    // Define a derived class 'Student' that inherits from 'Person'
class Student extends Person {
    constructor(name, age, grade) {
        // Call the parent class constructor with 'super'
        super(name, age);
        this.grade = grade; // Add a new property
    }

    // Method specific to the Student class
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }

    // Overriding the greet method
    greet() {
        console.log(`Hi, I am ${this.name}, a grade ${this.grade} student.`);
    }
}

// Creating an instance of the Student class
let student1 = new Student('Alice', 20, 'A');

// Accessing methods
student1.greet(); // Output: Hi, I am Alice, a grade A student.
student1.study(); // Output: Alice is studying in grade A.




// math.js
export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return pi * this.radius * this.radius;
    }
}
// greeting.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
// main.js
import { pi, add, Circle } from './math.js';

console.log(pi); // Output: 3.14159
console.log(add(2, 3)); // Output: 5

let myCircle = new Circle(5);
console.log(myCircle.area()); // Output: 78.53975
// main.js
import greet from './greeting.js';

console.log(greet('Alice')); // Output: Hello, Alice!
// main.js
if (someCondition) {
    import('./math.js').then(module => {
        console.log(module.add(2, 3)); // Output: 5
    });
}
