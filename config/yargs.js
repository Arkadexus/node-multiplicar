const argv = require('yargs')
        .option(`b`, {
            alias: 'base',
            description: 'El número que queremos multiplicar',
            type: 'number',
            demandOption: true,
        })
        .option(`h`, {
            alias: 'hasta',
            description: 'El número hasta el cual queremos multiplicar',
            type: 'number',
            default: 10,
        })
        .option(`l`, {
            alias: 'listar',
            description: 'Listar o no la tabla de multiplicar',
            type: 'boolean',
            default: false,
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número'
            }
            if(isNaN(argv.h)){
                throw 'El argumento hasta debe ser un número'
            }
            return true;
        })
        .argv;

module.exports = argv;