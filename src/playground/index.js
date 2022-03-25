class Car {
    engine;

    constructor(engine){
        this.engine = engine;

        console.log('一辆崭新的汽车！');
    }

    drive(){
        console.log('呜～呜～～');
    }
}

class PickupTruck extends Car {}

const p1 = new PickupTruck('v8');
p1.drive();

console.log(p1);