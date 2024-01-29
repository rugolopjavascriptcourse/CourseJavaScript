COVERS_URL = 'https://demo8403202.mockable.io/covers'

var dataCovers = []

//function fetchCovers (){
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
//}  

function createCover(dataCover, noOpacity) {
    const IMAGES_URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/'
    let main = document.querySelector('#main')
    let cover = document.createElement('article')
    let h2Title = document.createElement('h2')
    let title = document.createTextNode(dataCover.title)
    let image = document.createElement('img')
    image.src = IMAGES_URL+dataCover.image

    if (noOpacity){
        cover. classList.add('no-opacity')
    }

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
// Buscar y mostrar solos las covers que contienen la busqueda
// document.querySelector('#inputSearch').addEventListener('input' , () => {
//     document.querySelector('#main').innerHTML = ''
//     let titleSearch = document.querySelector('#inputSearch').value.trim().toUpperCase()
//     let filterGames = dataCovers.filter((game) => {
//         return game.title.toUpperCase().includes(titleSearch)
//     })
//     filterGames.forEach(game => {
//         createCover(game);
//     });

// })

//Con Foreach
// document.querySelector('#inputSearch').addEventListener('input' , () => {
//     document.querySelector('#main').innerHTML = ''
//     let titleSearch = document.querySelector('#inputSearch').value.trim().toUpperCase()

//     dataCovers.forEach(element => {
//         if (element.title.toUpperCase().includes(titleSearch))
//             createCover (element)
//         else createCover (element, 'noOpacity')
        
//     });
// })

//Con MAP
document.querySelector('#inputSearch').addEventListener('input' , () => {
    document.querySelector('#main').innerHTML = ''
    let titleSearch = document.querySelector('#inputSearch').value.trim().toUpperCase()
    dataCovers.map(element => {
        element.title.toUpperCase().includes(titleSearch) ? createCover (element) : createCover (element, 'noOpacity')
        
    });
})
const imageCovers = document.querySelectorAll('img')
console.log( imageCovers);
imageCovers.forEach(element => {
    onsole.log( element);
    element.onwheel = (event) => {
        console.log(event);
        let imageWidth = event.target.width
        imageWidth += event.deltaY
        event.target.width = imageWidth
    }
});

//fetchCovers()


// imageCovers.addEventListener('wheel', (event) => {
//     document.querySelector('#'+event.target.id).width += document.querySelector('#'+event.target.id).width + event.deltaY
// })

// document.querySelector('#main').addEventListener('mouseover', (e) => {
//     console.log('%c', 'color: #00e600', e);

//     e.target.addEventListener('wheel', ()=> {
//         e.target.classList.add('zoom')
    
//     })
    // document.querySelector(event.target).addEventListener('wheel', () => {
    //     console.log('%c%s', 'color: #9c66cc', event.target);
    //     document.querySelector(event.target.).classList().add('zoom')
       
    // })
//})

// document.querySelectorAll('article').addEventListener('mouseover', (event) => {
//     event.target.addEventListener('wheel', (event)=> {
        
        
//         event.target.classList.add('zoom')
    
//     })    
// })

// document.querySelector('article').addEventListener('mouseout', (event) => {
//         event.target.classList.remove('zoom')  
// })



