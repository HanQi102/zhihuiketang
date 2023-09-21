
// 切换
var NavList = document.querySelector('.NavList').children
var newsTitle2 = document.querySelector('.newsTitle2').children

for (let i = 0; i < NavList.length; i++) {

    NavList[i].setAttribute('index', i)

    NavList[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < NavList.length; j++) {
            NavList[j].className = ' '
            if (index == 0) {
                NavList[index].className = ' '

                NavList[index].className = ' active1'
            } else {
                NavList[index].className = ' '
                NavList[index].className = ' active2'
            }

            // if (index == 0) {
            //     NavList[index].onmouseover = function () {
            //         NavList[index].className = ' active98'
            //     }
            //     NavList[index].onmouseleave = function () {
            //         NavList[index].className += ' '
            //     }

            // } else {
            //     NavList[index].onmouseover = function () {
            //         NavList[index].className = ' active99'
            //     }
            //     NavList[index].onmouseleave = function () {
            //         NavList[index].className += ' '
            //     }
            // }
        }

        for (let k = 0; k < newsTitle2.length; k++) {
            newsTitle2[k].style.display = 'none'
            newsTitle2[index].style.display = 'block'
        }



    }

}


// // 渲染企业动态
function fn1() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://www.chenfuguo.cn:5600/news');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText).news.data
                show_(data)
            }
        }
    }
}

function show_(data_) {
    var newsDiv1 = document.querySelector('.newsDiv1');
    var str = '';
    for (var item of data_) {
        str += `
        <div class="newsFor">
        <div class="newsSingle">
            <img src="${item.picUrl}">
            <div class="newsContent">
                <div class="contentFont">
                    <p>${item.title}</p>
                    <span>${item.content}</span>
                </div>
                <div class="contentImg">
                    <p>${item.time}</p>
                    <img src="./img/right01.png">
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
        `
    }
    newsDiv1.innerHTML = str;
}
fn1()

// 切换
var left = document.querySelector('.left').children
var right = document.querySelector('.right').children

for (let i = 0; i < left.length; i++) {

    left[i].setAttribute('index', i)

    left[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < left.length; j++) {
            left[j].className = ' '
            left[index].className = 'active4'
        }

        for (let k = 0; k < right.length; k++) {
            right[k].style.display = 'none'
            right[index].style.display = 'block'
        }
    }

}