
const fs = require('fs');
const colors = require('colors');
 

const crearArchivo = async (base,l,h) => {
  try {
    
    
    let salida = '' ;
    let consola = '';
        
        for(let i = 1 ; i <= h ; i++){
        consola += `${colors.brightGreen( base)} ${colors.cyan.underline('x')} ${colors.bold(i)} = ${colors.brightRed(base* i)}\n`  
       
        salida +=`${base} x ${i} = ${base* i}\n`  ;
         }
        if(l) {
            console.log(colors.red('====================' ))
            console.log(colors.blue('    TABLA DE: '), colors.yellow(base))
            console.log(colors.red('====================' ))
            console.log(consola)}
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

    return(`tabla-${base}.text`)
}
catch(error){
    throw error
}
    
    



}

module.exports = {
    crearArchivo
}