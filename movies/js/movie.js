//import { writeFile, fs } from 'node'

const fs = require('node:fs')
const URL = 'http://www.omdbapi.com/?apikey='
const API_KEY = '2dd11f6a'

let query = `${URL}${API_KEY}&t=Superman&r=json`
    console.log('%c%s', 'color: #00ff88', query);
    fetch(query)
        .then (response => {
            if (response.ok){
                return response.json();
            } else {
            
            }
            throw console.log(response.status)
        })
        .then (data => {
            console.log('%c%s', 'color: #7f2200', data);
            if (!data.Error){
                fs.writeFile('peli.txt',
                `${data.Title}\n${data.Year}\n${data.Genre}\n${data.Poster}\n${JSON.stringify(data)}`, err => { err ? console.log(err) : console.log('Ok')})
                
            }else {
                console.log(data.Error)
            }
            
            }
            
        )
        .catch (err => {
            
        })

