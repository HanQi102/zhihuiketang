
// 渲染功能介绍
function render() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://www.chenfuguo.cn:5600/getIntroduce');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText).introduce.data
                show1(data)
            }
        }
    }
}

function show1(data_) {
    var items = document.querySelector('.itemDiv');
    var str = '';
    for (var item of data_) {
        str += `
            <div class="item1">
                <div>
                <img src="${item.iconPath}">
                 </div>
                 <p>
                 ${item.title}
                 </p>
                <span>${item.content}</span>
            </div>
            `
    }
    items.innerHTML = str;
}
render()
