let buttonOffer = document.querySelector('#buttonOffer')
buttonOffer.addEventListener('click', seeOfferRooms)


function seeOfferRooms(){
    //buttonOffer.classList.add('offer')
    document.querySelector('#room').classList.add('offer')
    console.log('Estoy aqui')
}