
const URL = 'http://www.omdbapi.com/?apikey='
const API_KEY = '2dd11f6a'
var searchText = ''

var inputSearch = document.querySelector('#searchText')
var btnSearch = document.querySelector('#btnSearch')
var res

btnSearch.addEventListener('click', ()=>{
    let query = `${URL}${API_KEY}&t=${inputSearch.value}&r=json`
    console.log('%c%s', 'color: #00ff88', query);
    fetch(query)
        .then (response => {
            if (response.ok){
                return response.json();
            } else {
                document.querySelector('#title').innerHTML = response.status + response.statusText
            }
            throw console.log(response.status)
        })
        .then (data => {
            console.log('%c%s', 'color: #7f2200', data);
            if (!data.Error){
                document.querySelector('#title').innerHTML = data.Title
                document.querySelector('#imageMovie').src=data.Poster
            }else {
                document.querySelector('#title').innerHTML = data.Error
            }
            
            }
            
        )
        .catch (err => {
            document.querySelector('#title').innerHTML = err.status
        })
})



// export default function fetchMovie (searchText){
//     query = `${URL}${API_KEY}&t=${inputSearch.value}`
//     fetch(query)
//     .then (response => response.json())
//     .then(response => {
//         console.log('%c%s', 'color: #ffcc00', response.Title);  
//     })
//     .catch (error => console.log(error))
// }

