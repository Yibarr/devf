class Largometraje{
    constructor(name, duracion, idioma){
        this.nombre = name;
        this.duracion=duracion;
        this.idioma = idioma;
    };
    
    getNombre(){
        return `El nombre de este Largometraje es ${this.nombre}`
    }
}


class Pelicula extends Largometraje{
    constructor(name,duracion,idioma,director, genero){
        super(name, duracion, idioma);
        this.director = director;
        this.genero = genero

    }
}

class Documental extends Largometraje{
    constructor(name,duracion,idioma,director, tema){
        super(name, duracion, idioma);
        this.director = director;
        this.tema = tema

    }
}

const joker = new Pelicula('El Bromas', 120, 'English', 'Todd Philips', 'ARTE, we')

// console.log(joker.getNombre())

//-------------------------------------------------


class Cine{
    constructor(ubicacion, franquicia){
            this.ubicacion = ubicacion;
            this.franquicia = franquicia;
    }


    play(obj){
        return `El cine ${this.ubicacion} está reproduciendo ${obj.nombre}`
    }
}


const cinemex = new Cine('ARTZZ', 'Cinemex');

console.log(cinemex.play(joker))