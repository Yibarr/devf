// console.log('En consola desde mascota')

class Mascota{
    constructor(name,patas){
        this.nombre = name;
        this.patas = patas;
        this.cola = true
    }

    dormir(){
        return `Soy ${this.nombre} y estoy durmiendo`
    }
}

module.exports = {
    Mascota
}