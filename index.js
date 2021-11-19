let darkMode = document.querySelector('#darkMode')
let menuMobile = document.querySelector('#menuMobile')

darkMode.addEventListener('click', luzNoite)
function luzNoite() {
    darkMode.classList.toggle('fa-sun')
    
    if(darkMode.classList.contains('fa-sun')) {
        document.body.classList.add('active')
        document.body.style.color = '#000'
    } else {
        document.body.classList.remove('active')
        document.body.style.color = '#fff'
    }
}

function moon() {
    document.body.style.color = '#fff'
}
moon()

















function removeMenu() {

}
window.addEventListener('scroll', removeMenu)

