COVERS_URL = 'https://demo8403202.mockable.io/covers'

var dataCovers = []

function fetchCovers (){
    fetch(COVERS_URL)
        .then( response => {
            if(response.ok){
                return response.json()
            }else {
                console.log('Error')
            }
        })
        .then (data => {
            dataCovers = data;
            data.forEach(element => {
                createCover(element)
            });
        })
        .catch(error => {console.log('%c%s', 'color: #cc7033', error ) })
    }  

function createCover(dataCover) {
    const IMAGES_URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/'
    let main = document.querySelector('#main')
    let cover = document.createElement('article')
    let h2Title = document.createElement('h2')
    let title = document.createTextNode(dataCover.title)
    let image = document.createElement('img')
    image.src = IMAGES_URL+dataCover.image

    //Add elements at the DOM
    h2Title.appendChild(title)
    cover.appendChild(h2Title)
    cover.appendChild(image)
    main.appendChild(cover)
}

document.querySelector('#btnSearch').addEventListener('click', () => {
    document.querySelector('#main').innerHTML = ''
    let titleSearch = document.querySelector('#inputSearch').value.trim().toUpperCase()
    let filterGames = dataCovers.filter((game) => {
        return game.title.toUpperCase().includes(titleSearch)
    })
    filterGames.forEach(game => {
        createCover(game);
    });
    
})



fetchCovers()
console.log(dataCovers)