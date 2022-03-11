const fs = require(`fs`);
const colors = require(`colors`);

const crearArchivo = async (base, hasta, listar) => {

    try{
        console.log(`==================`.yellow);
        console.log(`   TABLA DEL ${base}   `.cyan);
        console.log(`==================`.yellow);

        let salida = ``;
        let salidaColor = ``;

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`
            salidaColor += `${base.toString().cyan} ${`x`.red} ${i.toString().cyan} ${`=`.red} ${(base*i).toString().green}\n`;
        }

        if(listar) console.log(salidaColor);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.green+` `+`creado`.yellow.underline;
    }catch(err){
        return err;
    }
}

module.exports = {
    crearArchivo
}