let tabsContent = [
    {
        id: 0,
        image: './assets/images/tabs-icons/doctor.svg',
        title: 'Doctor'
    },
    {
        id: 1,
        image: './assets/images/tabs-icons/coach.svg',
        title: 'Coach'
    },
    {
        id: 2,
        image: './assets/images/tabs-icons/app.svg',
        title: 'App'
    },
    {
        id: 3,
        image: './assets/images/tabs-icons/medication.svg',
        title: 'Medication'
    },
    {
        id: 4,
        image: './assets/images/tabs-icons/community.svg',
        title: 'Community'
    },
    
]

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 300,
    mousewheel: true,
    scrollbar: true,
    centeredSlides: true,
    centeredSlidesBounds: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className}"> 
                    <button class="found-tab" >
                        <img
                            src=${tabsContent[index].image}
                            alt="doctor"
                            class="found-tab-icon"
                        >
                        <span class="found-tab-text">${tabsContent[index].title}</span>
                    </button>
                </div>`
      },
    },

    breakpoints: {
        1040: {
        direction: 'vertical',
        loop: true,
        autoHeight: true,
        // mousewheel: true,
        slidesPerView: 1.5,
        speed: 1,
        scrollbar: true,
        spaceBetween: 140,
        // handleElementorBreakpoints: true,
      
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false
            },
        },
        340: {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        speed: 3,
        mousewheel: false,
        slidesPerView: 1,
        scrollbar: false,
        spaceBetween: 80,
        // handleElementorBreakpoints: true,
      
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: true
        },
        },
    }
});
