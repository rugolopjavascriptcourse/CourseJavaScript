const MIN_LENGTH = 5

function loadData(){
    let stringData = window.prompt('Give me your Name::').trim()
    let errors = []
    if (
        stringData.toLowerCase().includes('remo') || 
        name.toLowerCase().startsWith('a') || 
        name.endsWith('txt') || 
        name.length < MIN_LENGTH) {
        name='The String is not valid'
        
    } 

    switch (stringData){
        case stringData.toLowerCase().includes('remo'):
            errors.push('La cadena no puede contener .-REMO-.')
        
        case stringData.toLowerCase().startsWith('a'):
            errors.push('La cadena no puede empezar por .-A-.')
        
        case stringData.endsWith('txt'):
            errors.push('La cadena no puede finalizar en .-txt-.')
        
    }
    if (!errors){
        alert('String not Valid, errors.::\n' + errors)
        
    }else {
        alert(`The String is\n ${stringData.toUpperCase()}`)
    }    
    
    
    

    console.log('%c%s', 'color: #f69d37', 'Ok Button');
}