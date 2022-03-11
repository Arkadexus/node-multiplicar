const { crearArchivo } = require(`./helpers/multiplicar`);
const colors = require(`colors`);
const argv = require(`./config/yargs.js`);

console.clear();

crearArchivo(argv.b, argv.h, argv.l).then((res) => console.log(res))
.catch(err => console.log(err));