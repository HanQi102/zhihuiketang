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
            <a href='${item.goUrl}'>${item.txt}</a>
        </li>
        `
    }
    list1.innerHTML = str;
}

// 固定定位导航栏
var flg = true;//节流
window.addEventListener('scroll', function () {
    if (flg) {
        flg = false;


        var header = this.document.querySelector('.header');
        var logo = this.document.querySelector('#logo');
        var list1 = document.querySelector('.list1').children;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0
        for (var item of list1) {
            if (scrollY > 200) {
                item.firstElementChild.style.color = 'black';
            } else {
                item.firstElementChild.style.color = 'white';
            }
        }
        if (scrollY > 200) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
            header.style.boxShadow = '0px 0px 2px 2px rgba(83, 83, 83, 0.437)';
            logo.src = './img/logo1.77137f01.png';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            header.style.boxShadow = '';
            logo.src = './img/logo.png';
        }
        this.setTimeout(function () {
            return flg = true;
        }, 100)
        console.log(scrollY);
    }
})

// 回到顶部
var toTop = document.querySelector('.toTop')
toTop.onclick = function () {
    var scrollTop = setInterval(function () {
        var position = window.pageYOffset;
        if (position > 0) {
            window.scrollTo(0, position - 100);
        } else {
            clearInterval(scrollTop)
        }
    }, 10)
}

// 鼠标悬浮

var contactDiv1 = document.querySelector('.contactDiv1')
var contactDiv2 = document.querySelector('.contactDiv2')
var triangle = document.querySelector('.triangle')

contactDiv2.onmouseover = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    contactDiv1.className += ' block'
}
contactDiv2.onmouseleave = function () {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    contactDiv1.className = 'contactDiv1'
}
contactDiv1.onmouseover = function () {
    contactDiv1.className += ' block'
}
contactDiv1.onmouseleave = function () {
    contactDiv1.className = 'contactDiv1'
}


