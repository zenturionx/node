// escribir en un archivo de texto
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        // crear tabla de multiplicar
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
        }
        // mostrar tabla de multiplicar
        if (listar) {
            // titulo del programa en ascii
            console.log('===================================='.green);
            console.log('   Tabla de multiplicar del '.green, colors.blue(base));
            console.log('===================================='.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

// exportar la funcion crearArchivo
module.exports = {
    crearArchivo
}