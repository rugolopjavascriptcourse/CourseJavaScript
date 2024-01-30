console.log('Soy un script 2')
const message = 'Prueba de Query Selector'
const newH1 = document.createElement("h1")
newH1.innerText = message

let range = document.querySelector('#rangeTest')
let image = document.querySelector('img')
let widthImage = image.width
let heightImage = image.height
range.addEventListener('input', () => {
    let pixel = parseInt(range.value)
    image.width = widthImage + pixel
    image.height = heightImage + pixel
    
    
})