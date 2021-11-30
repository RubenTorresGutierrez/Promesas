/**
*   @file Promesas
*   @description Archivo de prueba de promesas
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let fPromesa = (fExito, fFracaso) => {
    if(Math.random() > 0.5){
        let resultado = 42;
        console.log('Hemos tenido éxito.');
        // Llamamos a fExito con el resultado
        fExito(resultado);
    }else{
        let error = 'Es el fin del mundo.';
        console.log('Hemos fracasado');
        // Llamamos a fFracaso con el error
        fFracaso(error);
    }
}

// Ahora que ya tenemos creada la función de la promesa
// CREAMOS la promesa
let promesa = new Promise(fPromesa);

// Ahora podemos usar la promesa
// Para eso le pasamos las funciones que gestionarán el resultado o el error
let fUsarResultado = (resultado => console.log(`El resultado ha sido: ${resultado}`));

let fControlarError = (error => console.log(`El resultado ha sido: ${error}`));

// Ahora que ya tenemos creadas las funciones que gestionará el resultado
// USAMOS la promesa
promesa.then(fUsarResultado, fControlarError);

// PERO... no es habitual CREAR promesas
// lo más normal es que obtengamos promesas como resultado de llamar a functión asíncrona...

//~~~~~~~~~~~ Modo largo ~~~~~~~~~~~
// Por ejemplo fetch
let promesaFetch = fetch('js/datos.txt') // Al usar fetch obtenemos una pr...
console.log(promesaFetch); // Este console.log aparecerá antes de que se cargue el archivo
promesaFetch.then(resultado => {
    console.log(resultado); //El resultado que obtenemos es de tipo response
    let promesa2 = resultado.text(); //el problema es, que también devuelve una promesa
    promesa2.then(texto => console.log('Por fin tenemos el texto :\n' + texto));
});

//~~~~~~~~~~~ Modo corto ~~~~~~~~~~~
fetch('js/datos.txt')
.then(resultado => resultado.text())
.then(texto => console.log('Por fin tenemos el texto :\n' + texto))
.catch(error => console.error(`Error: ${error}`));