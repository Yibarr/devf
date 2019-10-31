const { Mascota } = require('./mascota')


class Gato extends Mascota{
    constructor(raza,color,ronroneo,name){
        super(name,4);
        this.raza = raza;
        this.color = color;
        this.ronroneo = ronroneo;
    }
};

const flecha = new Gato('Azul ruso','azul griseado','prrrr','Flecha');


module.exports = {
    flecha,
    Gato
}