const request = require('request');

// request.get('https://pokeapi.co/api/v2/pokemon/1/',(error,response,body)=>{
//     if(response.statusCode === 200){
//         const pokemon = JSON.parse(body);

//         console.log(pokemon.name)

//     }else{
//         console.log(`El código http es ${response.statusCode}`)
//     }
// });

const URL_BASE = "https://pokeapi.co/api/v2";


// const getPokemonById = (name,selection) => {
//     request.get(`${URL_BASE}/pokemon/${name}`, (error,response,body)=>{
//         const pokemon = JSON.parse(body);

//         const itemNames = item => item[selection].name;

//         const concaten = (accumulator, value, valueIndex) => `${accumulator} ${valueIndex+1}. ${value} \n`;

//         const moves = pokemon[selection+'s'].map(itemNames).reduce(concaten,"Estos son los movimientos\n");
//         // console.log(pokemon.name)
//         console.log(typeof moves)
//     });
// };


// getPokemonById('mewtwo','move');


// const calif = [5,6,7,8,9,10,8];

// const promedio = calif.reduce((accumulator,itemIndex) => accumulator + itemIndex , 0 )/calif.length;

// console.log(promedio)
// console.log((5+6+7+8+9+10+8)/7)


// request.get(`${URL_BASE}/pokemon/jigglypuff`,(error,response,body)=>{
//     const pokemon = JSON.parse(body);

//     for (let i = 0; i < pokemon.moves.length; i++) {
//         console.log(pokemon.moves[1].move.name)   
//     }
// });

// console.log('Hola desde el main')

// console.log(tuFucnion())

const NASA_URL ='https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-10-29&end_date=2019-11-5&api_key=';

const api_key = 'p4p5UQ1zHzL9hKj66cdYK62T8aszYPiNmba8cMBQ';

// const getPotentiallyHazardous = async () => {

    
//     const dangerous_asteroids = await new Promise((resolve,reject) => {
//         request.get(`${NASA_URL}${api_key}`,(error,response,body)=>{
//             if(response.statusCode !== 200) reject( `Código de error:${response.statusCode}`);
            
//             const near_earth_objects = JSON.parse(body).near_earth_objects;
            
//             const neo_array = Object.values(near_earth_objects);

//             const reducex = neo_array.map(date => date.filter(asteroid => asteroid.is_potentially_hazardous_asteroid))

//             resolve( reducex);
            
//         });
//     })
//     // console.log(dangerous_asteroids)
//     return dangerous_asteroids;
// };

// getPotentiallyHazardous()
// .then(res => console.log(res))
// .catch(err => console.log(err))
// const  array = [{name:'Hola'},{name:'Carmen'},{name:'Pikachu'}];

// const arrayMap = array.map((element)=> element.name);

// console.log(arrayMap)


// [[{},{},{}],[{},{},{}],[{},{},{}]]


// near_earth_objects = {
//     '2019...':[],
//     '2019...':[],
//     '2019...':[],
//     '2019...':[],
// };


// request.get(`${NASA_URL}${api_key}`,(error,response,body)=>{
//     if(response.statusCode !== 200) return response.statusCode;

//     const json = JSON.parse(body);

//     const array = Object.values(json.near_earth_objects);

//     array.forEach(date =>
//          date.forEach(asteroid => 
//             asteroid.is_potentially_hazardous_asteroid 
//             ? console.log(asteroid.id,asteroid.is_potentially_hazardous_asteroid )
//             :""
//         )
//     )

//     // console.log()


// })


// const getPokeById = (id) => {
//     let pokemon_1 = "Sin pokemon"

    
    // request.get(`${URL_BASE}/pokemon/${id}`,(error,response,body)=>{
    //     const json = JSON.parse(body);
    //     pokemon_1 = json.name;
        // console.log(pokemon_1);
        // console.log(2)
    // })
//     // console.log(1)
//     return pokemon_1
// }


// console.log(getPokeById(150))


// const pokePromesa = new Promise((resolve,reject)=>{
//     const statusCode = 200;
//     if(statusCode !== 200){
//         reject('Desde el  reject');
//     }else{
//         resolve('Desde el resolve');
//     }
// })

// pokePromesa
// .then( parametro => console.log(parametro))
// .catch(parametro => console.log(parametro));

// for (let i = 0; i < 999999999; i++){
//     console.log(i)
// };

// request.get('http://localhost:4532/',(error,response, body) => {
//     console.log(JSON.parse(body))
// });