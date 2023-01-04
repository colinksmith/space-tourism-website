const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')

    if (visibility === "false") {
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)

    }
    
})


const destinations = Array.from(document.querySelectorAll('.destination-navigation li'))

destinations.forEach(destination => {
    destination.addEventListener('click', () => {
        const dataObj = null
    })
})