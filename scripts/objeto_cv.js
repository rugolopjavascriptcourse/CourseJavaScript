let miCV = {
    
    name: 'Ruben Gomez',
    address: {
        type: 'Calle',
        name: 'Dulcinea',
        number: 11,
        ZIP: 45512,
        city: 'Portillo de Toledo',
        State: 'Toledo'
    },
    mail: 'rugolop@gmail.com',
    grades:[
        {
            name: 'DAI - Desarrollo Aplicaciones Informaticas',
            level: 'Superior',
            finished: true
        },
        {
            name: 'SMR - Sistemas Microinformaticos y Redes',
            level: 'Medio',
            finished: true
        },
        {
            name: 'DAM - Desarrollo Aplicaciones Multilataforma',
            level: 'Superior',
            finished: false
        }
    ],
    lengauges: [
        {
            lenguage: 'Spanish',
            level: 'Materno'
        },
        {
            lenguage: 'English',
            level: 'B2'
        }
    ]
}

console.log('%c%s', 'color: #e50000', miCV.address.city);
console.log('Hasta aquí el fichero')