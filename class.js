// Classes, metodo constructor e getters and setters

class ClimaChange{
    constructor(far){
        this._celsius = 5/9 * (far - 32); 
    }
    get temperature(){
        return this._celsius;
    }
    set temperature(temp){
        this._celsius = temp;
    }
}

const clima = new ClimaChange(451)

console.log(clima.temperature)