const POS_MENU_ON = '0px'
const POS_MENU_OFF = '-28%'

 const mainMenu = document.querySelector('#menu')
// mainMenu.addEventListener('click', (e) => {
//     mainMenu.style.left === POS_MENU_ON ? 
//         mainMenu.style.left = POS_MENU_OFF :
//         mainMenu.style.left = POS_MENU_ON
// })

const btnMenu = document.querySelector('#btnMenu')
btnMenu.addEventListener('click', (e) => {
    mainMenu.style.left === POS_MENU_ON ? 
        mainMenu.style.left = POS_MENU_OFF :
        mainMenu.style.left = POS_MENU_ON
})

let menuOptions = document.querySelectorAll('.btnMainMenu')
menuOptions.forEach(element => {
    element.addEventListener('click', (e) => {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.id == e.target.getAttribute('screen') ?
                document.querySelector(`#${screen.id}`).style.display = 'block' :
                document.querySelector(`#${screen.id}`).style.display = 'none'         
        });
    })
    
});