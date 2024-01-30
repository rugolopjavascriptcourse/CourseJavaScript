import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js'
import { getDatabase, ref, child, push, update } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js'
//https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app/
const firebaseConfig = {
    //apiKey: 'xxx',
    //appId: 'APP_ID',
    //measurementId: 'G-MEASUREMENT_ID',
    projectId: 'javascriptcourse-db4a0',
    authDomain: 'javascriptcourse-db4a0.firebaseapp.com',
    databaseURL: 'https://javascriptcourse-db4a0-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'javascriptcourse-db4a0.appspot.com',
    messagingSenderId: 'SENDER_ID',
};
const app = initializeApp(firebaseConfig)
//const db = getDatabase()
const userId =''
var main = document.querySelector('#main')
var btnSendMessage = document.createElement('button')
var inputMessage = document.createElement('textarea')



if(localStorage.getItem('userId')){
    document.querySelector('#h1UserId').innerHTML=`Welcome Mr. ${localStorage.getItem('userId')}`
    document.querySelector('#btnLogin').disabled=true
    
    btnSendMessage.textContent = 'Send Message'
    inputMessage.placeholder = 'Message .....'

    main.appendChild(inputMessage)
    main.appendChild(btnSendMessage)
} 

btnSendMessage.addEventListener('click', () => {
    createMessage()
})

function createMessage () {
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
    
    writeNewPost(localStorage.getItem('userId'),localStorage.getItem('userId'),inputMessage.value)
}

function getDate (){
    const date = new Date();
    const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    ];
    const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    ];
    return `${hour}:${minutes} - - ${day}/${month}/${year}`
}

function writeNewPost(uid, username, body) {
    const db = getDatabase();
  
    // A post entry.
    const postData = {
      author: username,
      uid: uid,
      body: body,
      //title: title,
      starCount: 0,
      //authorPic: picture
    };
  
    // Get a key for a new Post.
  var newPostKey = app.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
