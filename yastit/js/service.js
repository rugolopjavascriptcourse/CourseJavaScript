import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js'
import { getDatabase, ref, child, push, update, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js'
//https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app/
const firebaseConfig = {
    //apiKey: 'xxx',
    //appId: 'APP_ID',
    //measurementId: 'G-MEASUREMENT_ID',
    projectId: 'javascriptcourse-db4a0',
    authDomain: 'javascriptcourse-db4a0.firebaseapp.com',
    databaseURL: 'https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'javascriptcourse-db4a0.appspot.com',

};
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

function createMessage (element) {
    let articleMessage = document.createElement('article')
    let divHeaderMessage = document.createElement('div')
    divHeaderMessage.classList.add('div-header')
    let messageFrom = document.createElement('h3')
    let labelFrom = document.createElement('h4')
    let labelDate = document.createElement('h4')

    labelFrom.innerHTML = 'From.:'
    messageFrom.innerHTML = localStorage.getItem('userId')

    let divMessageText = document.createElement('div')
    divMessageText.classList.add('div-message')
    let messageDate = document.createElement('h3')
    labelDate.innerHTML = 'Date.:'
    messageDate.innerHTML = getDate()

    //let messageText = document.createTextNode(inputMessage.value)
    let messageText = document.createElement('span')
    messageText.innerHTML = inputMessage.value

    divHeaderMessage.appendChild(labelFrom)
    divHeaderMessage.appendChild(messageFrom)
    divHeaderMessage.appendChild(labelDate)
    divHeaderMessage.appendChild(messageDate)
    articleMessage.appendChild(divHeaderMessage)
    divMessageText.appendChild(messageText)
    articleMessage.appendChild(divMessageText)
    main.appendChild(articleMessage)

    writeNewPost(getDate(),localStorage.getItem('userId'),localStorage.getItem('userId'),inputMessage.value)
    inputMessage.value = ''
}