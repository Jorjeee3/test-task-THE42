const descktopBackgrounds = [
    {
        id: 0,
        image: './assets/images/background/purple-desktop.svg'
    },
    {
        id: 1,
        image: './assets/images/background/blue-desktop.svg'
    },
    {
        id: 2,
        image: './assets/images/background/green-desktop.svg'
    },
    {
        id: 3,
        image: './assets/images/background/yellow-desktop.svg'
    },
    {
        id: 4,
        image: './assets/images/background/red-desktop.svg'
    },
]

const mobileBackgrounds = [
    {
        id: 0,
        image: './assets/images/background/purple-mobile.svg'
    },
    {
        id: 1,
        image: './assets/images/background/blue-mobile.svg'
    },
    {
        id: 2,
        image: './assets/images/background/green-mobile.svg'
    },
    {
        id: 3,
        image: './assets/images/background/yellow-mobile.svg'
    },
    {
        id: 4,
        image: './assets/images/background/red-mobile.svg'
    },
]

const foundTabs = document.querySelectorAll('.found-tab')
let desktopBackground = document.querySelector('.desktop-background')
let mobileBackground = document.querySelector('.mobile-background')
const swiperSlides = document.querySelectorAll('.swiper-slide')


// && swiperSlides[index].classList.contains('swiper-slide-active')

foundTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (index === descktopBackgrounds[index].id ) {
            desktopBackground.src = descktopBackgrounds[index].image
        }
    })
})

foundTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (index === mobileBackgrounds[index].id ) {
            mobileBackground.src = mobileBackgrounds[index].image
        }
    })
})
