

// 切换
var item1 = document.querySelectorAll('.item1')
var contentDiv5 = document.querySelector('.contentDiv5').children
var contentDiv2 = document.querySelector('.contentDiv4')
var contentDiv3 = document.querySelector('.contentDiv6')
var content = document.querySelector('.content')
var item2 = document.querySelectorAll('.item2')

for (let i = 0; i < item1.length; i++) {
    item1[i].setAttribute('index', i)

    item1[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < item1.length; j++) {
            item1[j].className = 'item1'
        }
        item1[index].className += ' active'

        for (let k = 0; k < item2.length; k++) {
            item2[k].style.display = 'none'
            item2[index].style.display = 'block'

            item1[k].firstElementChild.firstElementChild.style.display = 'block'
            item1[k].firstElementChild.lastElementChild.style.display = 'none'

            item1[index].firstElementChild.firstElementChild.style.display = 'none'
            item1[index].firstElementChild.lastElementChild.style.display = 'block'
        }
        if (index > 4) {
            contentDiv2.appendChild(contentDiv3)
        } else {
            content.appendChild(contentDiv3)
        }
    }
}

for (let i = 0; i < contentDiv5.length; i++) {
    contentDiv5[i].setAttribute('index', i)
    var index = contentDiv5[i].getAttribute('index')
    contentDiv5[index].className += ' active1'
}

var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        // 分页器设置
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',

        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
})


// 鼠标悬浮停止滚动
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
    // 鼠标悬浮显示箭头
    mySwiper.navigation.$nextEl.removeClass('hide')
    mySwiper.navigation.$prevEl.removeClass('hide')
}
mySwiper.el.onmouseleave = function () {
    mySwiper.autoplay.start();

    // 鼠标悬浮显示箭头
    mySwiper.navigation.$nextEl.addClass('hide')
    mySwiper.navigation.$prevEl.addClass('hide')
}



