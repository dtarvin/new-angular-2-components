// valid ES6 or TypeScript
class User {
    constructor(id) {
        this.id = id;
    }
    getUserInfo() {
        return this.getUserInfo;
    }
}

//----------------------------------------------------------------
// simple TypeScript class
class Product {
    private id: number;
    private color: string;
    constructor(id: number, color:string) {
        this.id = id;
        this.color = color;
    }
}

// ES6 will output this code
class Product {
    constructor(id, color) {
        this.id = id;
        this.color = color;
    }
}

// ES5 will output this
var Product = (function() {
    function Product(id, color) {
        this.id = id;
        this.color = color;
    }
    return Product;
})();
//----------------------------------------------------------------

// Export and import statements

// The following module exposes a function, a class, and a variable
export function getRandomNumber() {
    return Math.random();
}
export class User {
    constructor(name) {
        this.name = name;
    }
}
export const id = 12345;

// To use the exported code, we need to import it in another module

// import only the function from the module
import { getRandomNumber } from './user';

// import both the function and the class from the module
import { getRandomNumber, Person } from './user';

// import the function and bind it to a random variable
import {getRandomNumber as random } from './user';

// import everything from the module and
// bind it to a userModule variable
import * as UserModule from './user';

// default export
export default class User {
    constructor(name) { this.name = name }
}
// don't need to use exact name of the function, class or variable that was exported
import UserModule from './user.ts';

//----------------------------------------------------------------

// Classes

// class with a constructor, property and method
class Product {
    color;
    price;

    constructor(color, price) {
        this.color = color;
        this.price = price;
    }

    getProductDetails() {
        return this.color + this.price;
    }
}

// class with extends and super
class Product {
    color;
    price;
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
}
class Ebook extends Product {
    size;
    constructor(color, price, size) {
        super(color, price);
        this.size = size;
    }
    getProductDetails() {
        return `${this.color}, ${this.price}, ${this.size}`;
    }
}
//----------------------------------------------------------------

// The type system

// basic types

// strings
let name: string = "bob";
// boolean
let isLoggedIn: boolean = true;
// number
let height: number = 24;
let width: number = 12;
// arrays
let colors: string[] = ['red', 'green', 'blue'];
let colors: Array<string> = ['red', 'green', 'blue'];
