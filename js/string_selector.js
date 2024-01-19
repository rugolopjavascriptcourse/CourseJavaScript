
function handleChart(){
    let divElement = document.querySelector('#showCharts')
    let cadena = document.getElementById('email').value
    let cadena2 = cadena.replaceAll('a', '@').replaceAll('A', '@')
    divElement.innerHTML = cadena2

    
}
function onClickEmail(){
    //let checkEmailButton = document.querySelector('#checkEmailButton')
    let email = document.getElementById('email').value
    if (!email.includes('@')){
        throw 'Error.: El email no es válido porque no incluye la .-@-.'
    }
    if ( email.length < 5 ) {
        throw 'Error.: El email no es váldo porque contiene menos de 5 caracteres'
    }

}

function changeColor(){
    let divElement = document.querySelector('#showCharts')
    let inputColor = document.querySelector('#inputColor')
    divElement.style.color = inputColor.value
    //divElement.setAttribute('color', inputColor)
}

let dato = 15
let resultado = undefined


function calculando(){
    
    console.log('%c%s', 'color: #0088cc', 'Calculando......');
    return 5;

}

function reduciendo(){

    console.log('%c%s', 'color: #917399', 'Reduciendo......');
    return 3
}

resultado = dato > 10 ? calculando() : reduciendo()
console.log('%c%s', 'color: #d90000', resultado);

