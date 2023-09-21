var mySwiper1 = new Swiper('.swiper1', {
    direction: 'horizontal', // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',

        renderBullet: function (index, className) {
            return '<span class=" ' + className + '"></span>';
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
mySwiper1.el.onmouseover = function () {
    mySwiper1.autoplay.stop();
    // 鼠标悬浮显示箭头
    mySwiper1.navigation.$nextEl.removeClass('hide')
    mySwiper1.navigation.$prevEl.removeClass('hide')
}
mySwiper1.el.onmouseleave = function () {
    mySwiper1.autoplay.start();
    // 鼠标悬浮显示箭头
    mySwiper1.navigation.$nextEl.addClass('hide')
    mySwiper1.navigation.$prevEl.addClass('hide')
}

// 渲染ul导航栏
window.onload = function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://www.chenfuguo.cn:5600/getIndexHead');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText).indexData.data
                show(data)
            }
        }
    }
}

function show(data_) {
    var list1 = document.querySelector('.list1');
    var str = '';
    for (var item of data_) {
        str += `
        <li >
            <a class='type1' href='${item.goUrl}'>${item.txt}</a>
        </li>
        `
    }
    list1.innerHTML = str;
}



// 固定定位导航栏
window.addEventListener('scroll', function () {
    var header = this.document.querySelector('.header')
    var logo = this.document.querySelector('#logo')
    var list1 = document.querySelector('.list1').children
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0

    for (var item of list1) {
        if (scrollY > 10) {
            item.firstElementChild.style.color = 'black'
        } else {
            item.firstElementChild.style.color = 'white'
        }
    }

    if (scrollY > 10) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
        logo.src = './img/logo1.77137f01.png'

    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        logo.src = './img/logo.png'
    }
})


// 翻转图
var mySwiper = new Swiper('.swiper2', {
    direction: 'horizontal', // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'flip'
})






