
var products = [
    {
        type: 'Lacteo',
        name: 'Central Lechera Asturiana',
        pvp: 1.5
    },
    {
        type: 'Lacteo',
        name: 'Yogurt Sabor Fresa',
        pvp: 0.9
    },
    {
        type: 'Bebida',
        name: 'Mahou 33cl',
        pvp: 0.36
    },
    {
        type: 'Bebida',
        name: 'Coca-Cola 2L',
        pvp: 1.8
    },
    {
        type: 'Snack',
        name: 'Patatas Fritas 500gr',
        pvp: 1.05
    }
]
var select = document.querySelector('#selectProduct')
var selectTypeProduct = document.querySelector('#selectProductType')
var newProduct = document.querySelector('#product')


var typeProducts = []
var productsXType = []
var cart = []

//  Creamos la lista de tipos de productos
products.map(product => {
        if ( !typeProducts.includes(product.type) ) {
            typeProducts.push(product.type)
        }
        
})

typeProducts.forEach(element => {
    let option = document.createElement('option')
    option.text = element
    option.value = element
    selectTypeProduct.appendChild(option)
});


select.addEventListener('change', () => newProduct.value = select.value )

selectTypeProduct.addEventListener('change', () => {
    productsXType = products.filter( product => product.type === selectTypeProduct.value )
    productsXType.forEach((element, index) => {
        let option = document.createElement('option')
        option.text = element.name
        option.value = element.name
        select.appendChild(option)
    });
})

document.querySelector('#addProduct').addEventListener('click', function(){
    newProductObject = products.filter (product => product.name === newProduct.value.trim())
    console.log('%c%s', 'color: #735656', newProductObject);
    newProduct = newProduct.value.trim()

   /* !newProduct ? alert('Add a valid product') : cart.push(newProduct) */
    if (!newProduct){
        alert('Add a valid product')
    }else{
        cart.push(newProduct)
        document.querySelector('#result').innerHTML += 
            `${newProductObject[0].name}  ${newProductObject[0].pvp}
             ${document.querySelector('#units').value} 
             ${newProductObject[0].pvp * document.querySelector('#units').value} <br>`
    }
    
   console.log('%c%s', 'color: #1d5673', newProduct); 
    console.log('%c%s', 'color: #00b300', cart);
    document.querySelector('#product').value = ''
})

document.querySelector('#showCar').addEventListener('click', function(){
    if ( cart.length == 0){
        alert('The cart is Empty')
    }else {
        cart.forEach(element => {
            document.querySelector('#result').innerHTML += `<br>${element}`
        });
    }
    
})
/**
 * ARRAYS
 */
let ficheros = ['perrito.jpg', 'gatito.avi', 'loro.mp3', 'galapago.docx', 'gallo.jpg']

ficheros.forEach(element => {
    if (element.slice((element.lastIndexOf('.')+1),) === 'jpg') {
        console.log('%c%s', 'color: #e57373', element.slice(0,element.lastIndexOf('.')).toUpperCase());
    }
});

console.log(ficheros.filter(element => element.slice((element.lastIndexOf('.')+1),) == 'jpg'))

let mascotas = ficheros
                    .filter(mascota => mascota.endsWith('.jpg'))
                    .map(mascota => mascota.slice(0,mascota.lastIndexOf('.')).toUpperCase())
console.log(mascotas)


// function Comparar(coche1, coche2){
//     if ( coche1.pvp != coche2.pvp ){
//         return coche1.pvp - coche2.pvp
//     } else {
//         return coche12.velocidad - coche2.velocidad
//     }
// }
// coches.sort(Comparar)

