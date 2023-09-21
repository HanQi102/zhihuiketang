

// 渲染智慧课堂
function fn() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://www.chenfuguo.cn:5600/wisdomClass');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText).wisdomClass.data
                show_(data)
            }
        }
    }
}


function show_(data_) {
    var items = document.querySelector('.contentDiv2');
    var str = '';
    for (var item of data_) {
        str += `
        <div class="item1">
        <div></div>
        <span>${item.title}</span>
            <p> <span>${item.number}</span></p>
        </div>
        `
    }
    items.innerHTML = str;
}
fn()

var items = document.querySelectorAll('.item2')
var more = document.querySelector('.more')

more.onclick = function () {

    for (let i = 3; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            items[j].className = 'item2'
        }
    }
    more.style.display = 'none'
}


// 切换
var content4 = document.querySelector('.content4').children
var item3 = document.querySelectorAll('.item3')

for (let i = 0; i < item3.length; i++) {

    item3[i].setAttribute('index', i)

    item3[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < item3.length; j++) {
            item3[j].className = 'item3'
        }
        item3[index].className += ' active1'

        for (let k = 0; k < content4.length; k++) {
            content4[k].style.display = 'none'
            content4[index].style.display = 'block'
        }
    }
}


