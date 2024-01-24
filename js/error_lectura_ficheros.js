const fs = require('node:fs')
try{
    const data = fs.readFileSync('/Users/Tardes/Documents/test.txt')
    console.log('%c%s', 'color: #e5de73', data);
    console.log('%c%s', 'color: #33cc99', 'Todo OK');
}catch (error){
    console.log('%c%s', 'color: #364cd9', 'KO', error.message);
    //throw error
}finally{

    console.log('%c%s', 'color: #ffa280', 'Siempre se ejecuta');
}
//#################### TRY-CATCH Funcion Cuadrdado ##################################
console.log('#################### TRY-CATCH Funcion Cuadrdado ##################################')
function cuadrado(data){
    if (data < 0 ){
        throw Error ('El numero es negativo')
    } else if ( data%2 == 0 ){
        throw Error (' El numero es par')
    }else {
        return console.log('%c%s', 'color: #eeff00', data**2);
    }
}

try {
    cuadrado(85)
}catch (error){
     console.log('%c%s', 'color: #73998c', error.message);
}finally {

    console.log('%c%s', 'color: #514080', 'FIN');
}
//#################### TRY-CATCH Funcion Cuadrdado Corta ##################################
console.log('#################### TRY-CATCH Funcion Cuadrdado Corta ##################################')
function cuadrado2(data){
    if ( data < 0 ) throw Error ('El numero es negativo')
    if ( data%2 == 0 ) throw Error (' El numero es par')
    return console.log('%c%s', 'color: #eeff00', data**2);
    
}
try {
    cuadrado2(85)
}catch (error){
     console.log('%c%s', 'color: #73998c', error.message);
}finally {

    console.log('%c%s', 'color: #514080', 'FIN');
}