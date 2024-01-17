var cart = []
document.querySelector('#addProduct').addEventListener('click', function(){
    const newProduct = document.querySelector('#product').value.trim()
    !newProduct ? alert('Add a valid product') : cart.push(newProduct)
    
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

