function toggleActive(e) {
    
    const isMenu = e.target.className === 'btn-menu'
    const isMenuActive = e.target.className === 'btn-menu active'
    const isLink = e.target.className === 'link'

    if(isMenu || isMenuActive)
        btnMenu.classList.toggle('active')
    else if (isLink)
        btnMenu.classList.toggle('active')
}

const nav = document.querySelector('.navigation');
const btnMenu = document.querySelector('.btn-menu')
console.log(btnMenu.className)

nav.addEventListener('click', toggleActive)