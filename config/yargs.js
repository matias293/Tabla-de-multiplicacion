const { describe } = require('yargs')


const argv = require('yargs')
               .option('b',{
                 alias: 'base',
                 type: 'number',
                 demandOption:true,
                 describe: 'Es la base de la tabla de mutliplicar'
               })
               .option('h',{
                   alias: 'hasta',
                   type: 'number',
                   default:10,
                   describe:'Hasta donde quiero que multiplique'
               })
               .option('l',{
                alias: 'lista',
                type: 'boolean',
                default:false,
                describe:'Muestra la tabla en consola'
              })
              
              .check( (argv, options) => {
                 if( isNaN(argv.b)){
                   throw 'La base tiene que ser un numero'
                 }
                 return true
               })
                .argv
 module.exports = argv