document.querySelector('#operate').addEventListener('click', function(){
    const long = document.querySelector('#long').value
    const weigth = document.querySelector('#weigth').value
   
    const result = calculate(long, weigth)

    document.querySelector('#result').innerHTML = result.toFixed(1)
})

document.querySelector('#age').addEventListener('input', function(){
    let age = document.querySelector('#age').value
    document.querySelector('#lblAge').innerHTML = age
})

function calculate(long, weigth){
    return weigth / (long**2)
}