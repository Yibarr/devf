// const perro = {
//     name:'Ayudante de santa',
//     comer: () => 'Estoy comiendo',
//     habla: () =>  'Hola, soy un perro que habla',
//     existencialismo:() => this,
//     existencialismo2: function(){
//         return this
//     },
//     diTuNombre(){
//         return this.name
//     },
//     corre(){
//         return 'estoy corriendo'
//     },
//     baila(){
//         return 'Baila conmigo, we'
//     }  ,

// }; 

// perro.comer()
// console.log(perro.existencialismo2());

// console.log(perro)


// const miFuncion = (animal,edad = 2) =>{
//     let hola = 'Hola'; 
//     return animal +' '+edad; 
// }; 

// const miFuncion2 = animal => animal

// console.log(miFuncion2('pato'))

// console.log(miFuncion('Pato'))

// let x = 20;
// let y = 30


// let z =  undefined || 'Hola'; 

// const otraFuncion = ( A, B, C) => {
//     return A + (B * C);
// }


// console.log(otraFuncion(3 , 2 , 9));


// const curso = {
//     name:'Cinta roja',
//     sensei:{
//         name:'Yael',
//         edad:22,
//         getThis(){
//             return this
//         },
//         getThis2:()=>{
//             return this
//         }
//     },
//     getSenseiInfo(){
//         return this.sensei
//     }
// };
// curso.sensei.nombre

// console.log(curso.sensei.getThis2())


// const gato = {
//     name:'Michi'
// };

// gato.vidas = 7;

// gato.name='Calabacita'

// gato['name'] = 'Ronaldo'

// const arr = ['gato','vidas',8]

// console.log(gato['name'])
// arr.push = 2
// arr.cuatro = 1
// Math.E = 1
// console.log(Math.E)


// const array = {
//     '0':3,
//     '1':4
// }

// console.log(array)

class Animal{
    constructor(patas,nombre,color,especie){
        this.especie = especie
        this.numPatas = patas;
        this.nombre = nombre;
        this.cola = true;
        this.color = color;
    }

    comer(comida){
        return `Estoy comiendo: ${comida}`
    }

    getNombre(){
        return this.nombre
    }
};

const Lorito =  new Animal(2, 'Ludovico', 'verde','Loro');

const Gattito = new Animal(4, 'Robin', 'negro', 'Gato')

// console.log(Gattito.comer('Anvorguesa'))

// Gattito.dormir = function(){
//     return 'Estoy durmiendo'
// }

// Gattito.dormir = 40;

// console.log(Gattito.dormir)