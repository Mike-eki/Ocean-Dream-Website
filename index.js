function hideNavigation() {
    
    if(prevScrollY > window.scrollY) 
        nav.classList.remove('hidden')
    else
        nav.classList.add('hidden')

    prevScrollY = window.scrollY
    
}

function toggleActive(e) {
    
    const isMenu = e.target.className === 'btn-menu'
    const isMenuActive = e.target.className === 'btn-menu active'
    const isLink = e.target.className === 'link'

    if(isMenu || isMenuActive)
        btnMenu.classList.toggle('active')
    else if (isLink)
        btnMenu.classList.toggle('active')
}

let prevScrollY = window.scrollY


const nav = document.querySelector('.navigation');
const btnMenu = document.querySelector('.btn-menu')
console.log(btnMenu.className)

document.addEventListener('scroll', hideNavigation)

nav.addEventListener('click', toggleActive)