class Movie {
    constructor( title, director, year ){
        this.title = title
        this.director = director
        this.year = year
        this.premios = []
    }

    saludar(){    
        console.log('%c%s', 'color: #8c0038', 'El director es.:: ' + this.director);
    }
}