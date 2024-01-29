document.querySelector('#btnLogin').addEventListener('click', () => {
    localStorage.setItem('userId', document.querySelector('#inputUserId').value)
    document.querySelector('#h1UserId').innerHTML = ` Welcome Mr. ${document.querySelector('#inputUserId').value}`
})