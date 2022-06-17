const backgrounds = ['../images/background/purple-bgc-mobile.svg', '../images/background/blue-bgc.svg', '../images/background/green-bgc.svg', '../images/background/yellow-bgc.svg', '../images/background/red-bgc.svg']

const foundTabs = document.querySelectorAll('.found-tab')
const programListWrapper = document.querySelector('.program-list-wrapper')
const programCards = document.querySelectorAll('.program-card')
const swiperPaginationBulletArr = document.querySelectorAll('.swiper-pagination-bullet')

    foundTabs.forEach((tab, index, backgrounds) => {
        tab.addEventListener('click', () => {
            console.log(index);
            for(i = 0; i <= backgrounds.length; i++) {
                backgrounds[i] ===  index ? programListWrapper.style.backgroundImage = backgrounds[i] : undefined
            }
        })
    })
