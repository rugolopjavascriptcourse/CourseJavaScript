fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
    .then (response => response.json())
    .then(response => {
        response.type == 'single' ? 
                document.querySelector('#responseDataFetch').innerHTML = response.joke : 
                document.querySelector('#responseDataFetch').innerHTML = response.setup + 
                '<br>' + response.delivery
        
    })
    .catch (error => console.log(error))