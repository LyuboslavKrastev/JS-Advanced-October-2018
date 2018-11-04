function assembleCar(carInfo) {
    let assembledCar = {};

    assembledCar.model = carInfo.model;
    
    let engine;
    if(carInfo.power <= 90){
        engine = {power: 90, volume: 1800};
    } else if(carInfo.power <= 120){
        engine = {power:120, volume: 2400};
    } else if(carInfo.power <= 200) {
        engine = {power:200, volume: 3500};
    }
    assembledCar.engine = engine;

    assembledCar.carriage = {type: carInfo.carriage, color: carInfo.color};

    if(carInfo.wheelsize % 2 === 0) { // The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
        carInfo.wheelsize--;
    }

    let wheels = [];

    for(let i=0; i<4; i++){
        wheels.push(carInfo.wheelsize);
    }
    assembledCar.wheels = wheels;
    return assembledCar;
}