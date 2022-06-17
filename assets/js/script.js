
//   import * as pp from '../images/background/purple-bgc.svg'
//   import * as bb from '../images/background/blue-bgc.svg'
//   import * as gg from '../images/background/green-bgc.svg'
//   import * as yy from '../images/background/yellow-bgc.svg'
//   import * as rr from '../images/background/red-bgc.svg'

//   import * as url from


const backgrounds = ['../images/background/purple-bgc-mobile.svg', '../images/background/blue-bgc.svg', '../images/background/green-bgc.svg', '../images/background/yellow-bgc.svg', '../images/background/red-bgc.svg']


const foundTabs = document.querySelectorAll('.found-tab')
const programListWrapper = document.querySelector('.program-list-wrapper')
const programCards = document.querySelectorAll('.program-card')
const swiperPaginationBulletArr = document.querySelectorAll('.swiper-pagination-bullet')

// swiperPaginationBulletArr.forEach(swiperPaginationBullet, () => {



    foundTabs.forEach((tab, index, backgrounds) => {
        tab.addEventListener('click', () => {
            console.log(index);
            for(i = 0; i <= backgrounds.length; i++) {
                backgrounds[i] ===  index ? programListWrapper.style.backgroundImage = backgrounds[i] : undefined
            }
        })
    })




    // function changeBgImg(index){
    //     programListWrapper.style.backgroundImage = backgrounds[index];
    // }



// function changeBackground() {
// }
// foundTabs[0].addEventListener('click', () => {
//     programListWrapper.style.backgroundImage = backgrounds[0]
// })
// foundTabs[1].addEventListener('click', () => {
//     programListWrapper.style.backgroundImage = backgrounds[1]
// })
// foundTabs[2].addEventListener('click', () => {
//     programListWrapper.style.backgroundImage = backgrounds[2]
// })
// foundTabs[3].addEventListener('click', () => {
//     programListWrapper.style.backgroundImage = backgrounds[3]
// })
// foundTabs[4].addEventListener('click', () => {
//     programListWrapper.style.backgroundImage = backgrounds[4]
// })

// changeBackground()


//     if (swiperPaginationBullet.classList.contains('swiper-pagination-bullet-active')) {

//     }
// })

// swiperPaginationBulletArr.forEach(swiperPaginationBullet, () => {
//     foundTabs.forEach(foundTab, () => {

//     })
// })




// for (i = 0; i <= swiperPaginationBulletArr.length; i++) {
//     if (swiperPaginationBulletArr[1])
// }



// setTimeout(() => 
// foundTabs.forEach(tab => {
//     tab.addEventListener('click', function() {
//         console.log('cddcdscscd');
//     })
// })
// , 3000);

// setTimeout(() => 
// console.log('dcmdcn')
// , 3000);



// console.log(document.getElementsByClassName("found-tab")[0].parentNode);

// if (document.getElementsByClassName("found-tab")[0].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//     console.log('wkdjwekdjwekd');
// }
// if (document.getElementsByClassName("found-tab")[4].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//     console.log('wkdjwekdjwekd');
// }
// if (document.getElementsByClassName("found-tab")[0].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//     console.log('wkdjwekdjwekd');
// }


// function bb() {
//     if (foundTabs[0].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//         foundTabs[0].style.backgroundColor = '#000'
//     } 
//     else if (foundTabs[1].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//         foundTabs[1].style.backgroundColor = 'red'
//     }
//     else if (foundTabs[2].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//         foundTabs[2].style.backgroundColor = 'green'
//     }
//     else if (foundTabs[3].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//         foundTabs[3].style.backgroundColor = 'blue'
//     }
//     else if (foundTabs[4].parentNode.classList.contains('swiper-pagination-bullet-active')) {
//         foundTabs[4].style.backgroundColor = '#fff'
//     }
// }

// bb()

// foundTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         tab.parentNode.classList.contains('swiper-pagination-bullet-active') ? tab.style.backgroundColor = '#fff' : tab.style.backgroundColor = '#000'
//     })
// })












// background-image: url('../images/background/blue-bgc.svg');
// background-image: url('../images/background/green-bgc.svg');
// background-image: url('../images/background/yellow-bgc.svg');
// background-image: url('../images/background/red-bgc.svg');

// foundTabs.forEach((tad, index) => {
//     tad.addEventListener('click', (index) => {
//         if (index == 0) {
//             programListWrapper.style.backgroundImage = pp
//             // programListWrapper.style.backgroundImage = '../images/background/purple-bgc.svg'
//         } else if (index == 1) {
//             programListWrapper.style.backgroundImage = bb
//             // programListWrapper.style.backgroundImage = '../images/background/blue-bgc.svg'
//         } else if (index == 2) {
//             programListWrapper.style.backgroundImage = gg
//             // programListWrapper.style.backgroundImage = '../images/background/green-bgc.svg'
//         } else if (index == 3) {
//             programListWrapper.style.backgroundImage = yy
//             // programListWrapper.style.backgroundImage = '../images/background/yellow-bgc.svg'
//         } else {
//             programListWrapper.style.backgroundImage = rr
//             // programListWrapper.style.backgroundImage = '../images/background/red-bgc.svg'
//         }
//     })
// })

// for(i = 0; i<= programCards.length; i++) {

// }

// if (programCards[0].classList.contains('.swiper-slide-active')) {
//     programListWrapper.style.backgroundImage = "url('../images/background/purple-bgc.svg')"
//     programListWrapper.style.backgroundImage = `url('${pp}')`
//     // programListWrapper.style.backgroundImage = pp
// } else if (programCards[1].classList.contains('swiper-slide-active')) {
//     programListWrapper.style.backgroundImage = "url('../images/background/blue-bgc.svg')"
//     programListWrapper.style.backgroundImage = `url('${bb}')`
//     // programListWrapper.style.backgroundImage = bb
// } else if (programCards[2].classList.contains('swiper-slide-active')) {
//     programListWrapper.style.backgroundImage = "url('../images/background/green-bgc.svg')"
//     programListWrapper.style.backgroundImage = `url('${gg}')`
//     // programListWrapper.style.backgroundImage = gg
// } else if (programCards[3].classList.contains('swiper-slide-active')) {
//     programListWrapper.style.backgroundImage = "url('../images/background/yellow-bgc.svg')"
//     programListWrapper.style.backgroundImage = `url('${yy}')`
//     // programListWrapper.style.backgroundImage = yy
// } else {
//     programListWrapper.style.backgroundImage = "url('../images/background/red-bgc.svg')"
//     programListWrapper.style.backgroundImage = `url('${rr}')`
//     // programListWrapper.style.backgroundImage = rr
// }











