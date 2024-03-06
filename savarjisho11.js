//1. Create a Class: Create a class called Person with properties name and age. Instantiate an object and display its details.

/* class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let person = new Person("Manana",25);
console.log(person); 

//2. Class Inheritance: Create a class Student that inherits from the Person class. Add a new property grade to the Student class.

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
}
let student = new Student("Manana",25,90);
console.log(student); */

//3. Encapsulation: Create a class BankAccount with a private property balance. Implement methods to deposit and withdraw funds,
// ensuring that the balance is updated accordingly.

/*class BanckAccout {
    #balance;
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder;
        this.#balance = balance;
        this.getBalance = () => {
            return this.#balance;
        };
        this.deposite = (amount) => {
            this.#balance += amount;
        };
        this.withdrow = (amount) => {
            if(amount > this.#balance){
                throw new Error ("Not enough money on your account!")
            }
            this.#balance -= amount;
        }
    }
}
const account = new BanckAccout("Manana", 500);
console.log(account.getBalance());
account.deposite(50);
console.log(account.getBalance());
try{
    account.withdrow(600);
}catch(error){
    console.log(error.message);
};
console.log(account.getBalance());*/

//4.Polymorphism: Create a class Shape with a method calculateArea(). Create subclasses Circle and Rectangle that override this method.

/*class Shape{
    calculateArea(){
        return;
    }
};
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius
    };

    calculateArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
};
class Rectangle extends Shape{
    constructor(height, width){
        super();
        this.height = height;
        this.width = width;
    };
    calculateArea(){
        return this.height*this.width;
    }
}
let circle = new Circle(5);
let rectangle = new Rectangle(5,10);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea()); */

//5. Static Method: Create a class Calculator with a static method add that takes two numbers as parameters and returns their sum.

/*class Calculator {
    static add(num1,num2){
        return num1 + num2;
    }
}
let sum = Calculator.add(5,3);
console.log(sum);*/

// 6.Getter and Setter: Create a class Temperature with a private property _celsius. Implement getter and setter methods 
//for Celsius and Fahrenheit temperatures.
 
/* class Temperature {
    #celsius;
    constructor(celsius){
        this.#celsius = celsius;
        this.fahrenheit = 0;
    }
    get celsius(){
        return this.#celsius;
    }
    set Fahrenheit(celsius){
        this.fahrenheit =this.#celsius*5/9+32;
    }
}
let temp = new Temperature(0);
temp.Fahrenheit=0
console.log(temp.fahrenheit); */

// 7. Class Method: Create a class ArrayHelper with a method reverseArray that takes an array and returns its reversed version.
/* class ArrayHelper {
    static reverseArray (array){
        return array.reverse();
    }
}
let reversed =ArrayHelper.reverseArray([1,2,3,4,5]);
console.log(reversed); */

//8. Factory Pattern: Create a factory function createCircle that generates instances of a Circle class with a given radius.

/*class Circle {
    constructor(radius){
        this.radius = radius;
    };
    calculateArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
};
function createCircle(radius){
    return new Circle(radius);
};
let circle1 = createCircle(5);
let circle2 = createCircle(10);
let circle3 = createCircle(15);
console.log(circle1);
console.log(circle1.calculateArea());
console.log(circle2);
console.log(circle2.calculateArea());
console.log(circle3);
console.log(circle3.calculateArea());*/

//9. Shopping Cart:
//Create a Product class with properties id, name, price, and quantity. Implement a method getTotalPrice() that calculates the 
//total price for the product (price * quantity).Create a ShoppingCart class that includes an array to store products. Implement 
//methods to add a product to the cart, remove a product by id, and calculate the total price of all products in the cart.Extend the 
//ShoppingCart class by adding a method checkout() that logs the products in the cart and the total price. Implement a method emptyCart() 
//to clear all products from the cart.

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    getProductInfo() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            quantity: this.quantity
        };
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProductById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    checkOut() {
        console.log("Products in the cart:");
        for (let product of this.products) {
            console.log(product.getProductInfo());
        }
        console.log(`Total price: $${this.getTotalPrice()}.`);
    }

    emptyCart() {
        this.products = [];
    }
}

const product1 = new Product(1, "Laptop", 1000, 2);
const product2 = new Product(2, "Phone", 500, 1);
const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.checkOut();
cart.removeProductById(1);
console.log(`Total price after removing product: $${cart.getTotalPrice()}`);
cart.emptyCart();
console.log(`Total price after emptying cart: $${cart.getTotalPrice()}`);

/*აიდის მიხედვით პროდუქტის წასაშლელად ფილტრაციის გარდა სხვა მეთოდი ვერ მოვიფიქრე, შესაბამისად კალათის დასაცარიელებლად 
პრიმიტიული გზა გამოვიყენე. :)*/