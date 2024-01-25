const fs = require('node:fs')
const name = ''
const pass = ''
const email = ''
const MIN = 6
class EmailError{
    constructor (message){
        this.message = message
    }
}

class PassError{
    constructor (message){
        this.message = message
    }
}


function checkUser (userEmail){
    if ( !userEmail.includes('@') ) throw new EmailError()
    return true 
}

function checkPass(pass){
    if ( pass.length < MIN ) throw new PassError()
    return true
}

function saveUser(email, pass){
    try {
        if ( checkUser(email)  && checkPass(pass) ) {
            let nameFile =  email.slice(0, email.indexOf('@'))+'.txt'
            fs.writeFileSync( nameFile, `Username.: ${email} \n Pass.: ${pass}`)
        }
     
    }catch (e) {
        console.log('%c%s', 'color: #99614d','Error writing file' );
        throw e
    }
}

try{
    saveUser('rugolop@gmail.com', '8yuryeb725')
}catch (e) {
    if (e instanceof EmailError){
        console.log('%c%s', 'color: #00736b', 'Email is worng');
    } else if (e instanceof PassError) {
        console.log('%c%s', 'color: #d0bfff', 'Pass minimun characteres requirements');
    } else {
        console.log('%c%s', 'color: #cc0036', e.message);
    }

}

console.log('%c%s', 'color: #607339', '#############################################');
class FiguraGeometrica{
    constructor(nombre){
        this.nombre = nombre
    }
}
class Cuadrado extends FiguraGeometrica{
    constructor(nombre,lado){
        super(nombre)
        this.lado = lado
        
    }

    area(){
        console.log('%c%s', 'color: #40fff2', `Soy ${this.nombre} y mi area es.: ${this.lado**2}`);
        
    }
}
class Rectangulo extends FiguraGeometrica {
    constructor(nombre,ladoa, ladob){
        super(nombre)
        this.ladoa = ladoa
        this.ladob = ladob
    }
    area(){
        console.log('%c%s', 'color: #24e0d4', `Soy ${this.nombre} y mi area es.: ${this.ladoa*this.ladob}`);
    }
}
class CuadradoHeredado extends  Rectangulo {
    constructor(nombre, lado){
        super(nombre, lado, lado)
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(nombre, base, altura){
        super(nombre)
        this.altura = altura
        this.base = base
    }
    area(){
        console.log('%c%s', 'color: #223af0', `Soy ${this.nombre} y mi area es.: ${(this.base*this.altura)/2}`);
    }
}
class Circulo extends FiguraGeometrica {
    constructor(nombre,radio){
        super(nombre)
        this.radio = radio
    }
    area(){
        console.log('%c%s', 'color: #13a53d', `Soy ${this.nombre} y mi area es.: ${(Math.PI*this.radio)**2}`);
    }
}



let cuadrado = new Cuadrado('Cuadrado', 5)
cuadrado.area()

let rectangulo = new Rectangulo('Rectangulo',5,9)
rectangulo.area()

let cuadradoHeredado = new CuadradoHeredado('CuadrdadoHeredado', 5)
cuadradoHeredado.area()

let triangulo = new Triangulo('Triangulo', 12, 20)
triangulo.area()

let circulo = new Circulo('Circulo', 15)
circulo.area()