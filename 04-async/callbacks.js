const errorMsg = () => {
    console.log('Error')
};

const successMsg = () => {
    console.log('Se ha hecho la petición con éxito')
};

const ordenSuperior = (callback) => {
    return callback()
};


ordenSuperior(successMsg);

// setTimeout(()=>{},4000)

// ordenSuperior(1,6,resta)

//