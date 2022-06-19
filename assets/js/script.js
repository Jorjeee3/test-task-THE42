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
const swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet')

setInterval(() => {
    swiperPaginationBullet.forEach((tab, index) => {
        if (tab.classList.contains('swiper-pagination-bullet-active')) {
            desktopBackground.src = descktopBackgrounds[index].image
        } 
    })
}, 50);

setInterval(() => {
    swiperPaginationBullet.forEach((slide, index) => {
        if (slide.classList.contains('swiper-pagination-bullet-active')) {
            mobileBackground.src = mobileBackgrounds[index].image
        } 
    })
}, 50);
