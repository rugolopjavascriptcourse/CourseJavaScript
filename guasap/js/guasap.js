import { initializeApp } from 'https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app/'
import { get, collection, getDocs } from 'firebase/firestore/lite';
https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app/

const userId =''
let main = document.querySelector('#main')
let message = document.createElement('article')
let h3MessageText = document.createElement('h3')

if(localStorage.getItem('userId')){
    document.querySelector('#h1UserId').innerHTML=`Hola ${localStorage.getItem('userId')}`
    document.querySelector('#btnLogin').disabled=true
    let inputMessage = document.createElement('input')
    let btnSendMessage = document.createElement('button')

    btnSendMessage.textContent = 'Send Message'
    inputMessage.placeholder = 'Message .....'

    main.appendChild(inputMessage)
    main.appendChild(btnSendMessage)
} 