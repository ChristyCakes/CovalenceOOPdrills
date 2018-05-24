class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
    console.log(`Hello, my name is ${this.name}. I live in ${this.city} and I'm ${this.age} years old.`);
    }
}




let person1 = new Person("Robert", "Redondo Beach", 37);
let person2 = new Person("Vicki", "Castro Valley", 69);
let person3 = new Person("Chris", "Wenatchee", 35);
let person4 = new Person("Bunny", "Castro Valley", 66)
let person5 = new Person("Christy", "Redondo Beach", 35);

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();



class Vehicle {
    constructor(type, manufact, wheels){
        this.type = type;
        this.manufact = manufact;
        this.wheels = wheels;
    }

    aboutVehicle() {
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufact, wheels, doors, truckBed=true){
        super(type, manufact, wheels);
        this.doors = doors;
        this.truckBed = truckBed;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels. It also has ${this.doors} doors.`);
        if (this.truckBed){
            console.log(`A ${this.type} also has a truck bed.`);
        }
    }
}

class Sedan extends Vehicle {
    constructor(type, manufact, wheels, doors, size, mpg){
        super(type, manufact, wheels);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is a ${this.size} vehicle made by ${this.manufact} and has ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} miles per gallon.`);
    }
}



class Motorcycle extends Vehicle {
    constructor(type, manufact, wheels, steering, purpose){
        super(type, manufact, wheels);
        this.steering = steering;
        this.purpose =purpose;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels. This motorcyle is steered with a ${this.steering} for ${this.purpose}.`);
    }
}


let civic = new Vehicle("Civic", "Honda", 4)
civic.aboutVehicle();

let tacoma = new Truck("Tacoma", "Toyota", 4, 2);
tacoma.aboutVehicle();

let modelS = new Sedan("Model S", "Tesla", 4, 4, "mid size", 100);
modelS.aboutVehicle();

let scout = new Motorcycle("Scout", "Indian", 2, "handlebar", "speed cruising");
scout.aboutVehicle();