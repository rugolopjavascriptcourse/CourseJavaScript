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
const userId =''
var main = document.querySelector('#main')
var btnSendMessage = document.createElement('button')
var inputMessage = document.createElement('textarea')

// const startCountRef = ref(db, '/posts')
// onValue(startCountRef, (snapshot) => {
//     const postsData = snapshot.forEach(element => {
//         //console.log(element.val().from)
//         //createMessage(element)
//     });
// })


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

function writeNewPost(date, to, username, body) {
    const db = getDatabase(app);

    // A post entry.
    const postData = {
        date: date,
        from: username,
        to: to,
        body: body,
        starCount: 0,
        //authorPic: picture
    };

    // Get a key for a new Post.
    //var newPostKey = app.database().ref().child('posts').push().key;
    var newPostKey = push(child(ref(db), 'posts')).key
    // const data = {}
    // data[newPostKey]=postData

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + postData.from + '/' + newPostKey] = postData;
    updates[newPostKey] = postData
    update(ref(db), updates)
    //return app.database().ref().update(updates);
}
deleteData()
function deleteData(){
    remove(ref(db),'post')
    //app.database().ref("posts").remove()
}


