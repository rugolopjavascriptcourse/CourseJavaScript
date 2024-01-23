//import { fetchMovie } from "../service/movie_service"
//import searchMovie as search from '../service/movie_service'

var inputSearch = document.querySelector('#searchText')
var btnSearch = document.querySelector('#btnSearch')

btnSearch.addEventListener('click', ()=>{
    data = fetchMovie(inputSearch.value)
    console.log('%c%s', 'color: #99adcc', data.Title);

})