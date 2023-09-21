
// 关于我们发展历程联系我们切换
var active = document.querySelectorAll('.active')
var item = document.querySelectorAll('.item')
for (let i = 0; i < active.length; i++) {
    active[i].setAttribute('index', i)
    active[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < active.length; j++) {
            active[j].className = ' '
            active[index].className = 'active0'
        }

        for (let k = 0; k < item.length; k++) {
            item[k].style.display = 'none'
            item[index].style.display = 'block'
        }
    }
}


// 联系我们切换
var item1 = document.querySelectorAll('.item1')
var item2 = document.querySelectorAll('.item2')
var contentDiv9 = document.querySelector('.contentDiv9')
var mask = document.querySelectorAll('.Mask')

for (let i = 0; i < item1.length; i++) {
    item1[i].setAttribute('index', i)

    item1[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < item1.length; j++) {
            contentDiv9.className = ' '
            mask[0].className = ' Mask'
            mask[1].className = ' Mask'
            contentDiv9.className = 'contentDiv9'
            if (index == 1) {
                mask[0].className = ' mask'
                contentDiv9.className += ' transform'
            } else {
                contentDiv9.className += ' transform1'
                mask[1].className = ' mask'
            }

            for (let k = 0; k < item2.length; k++) {
                item2[k].style.opacity = '0'
                item2[index].style.opacity = '1'
            }
            for (let k = 0; k < item1.length; k++) {
                item1[k].style.display = 'block'
                item1[index].style.display = 'none'
            }
        }
    }
}
// 知识产权切换
var button = document.querySelector('.button').children
var rightImg = document.querySelectorAll('.rightImg')
var currentSlide = 0;

// 显示初始的幻灯片
showSlide(currentSlide);

// 点击上一个按钮
button[0].addEventListener('click', function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = rightImg.length - 1;
    }
    showSlide(currentSlide);
});

// 点击下一个按钮
button[1].addEventListener('click', function () {
    currentSlide++;
    if (currentSlide >= rightImg.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

// 显示指定幻灯片
function showSlide(index) {
    for (var i = 0; i < rightImg.length; i++) {
        rightImg[i].style.display = 'none';
    }
    rightImg[index].style.display = 'block';
}

// 翻转图
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'flip'
})


