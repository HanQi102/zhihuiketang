// 切换
var contentDiv3 = document.querySelector('.contentDiv').children
var contentDiv4 = document.querySelector('.contentDiv4').children

var item1 = document.querySelectorAll('.item1')

var item2 = document.querySelectorAll('.item2')
for (let i = 0; i < contentDiv3.length; i++) {
    contentDiv3[i].setAttribute('index', i)

    contentDiv3[i].onclick = function () {
        var index = this.getAttribute('index')
        for (let j = 0; j < contentDiv3.length; j++) {
            contentDiv3[j].className = 'item1'
        }
        contentDiv3[index].className += ' active'

        for (let k = 0; k < item2.length; k++) {
            item2[k].style.display = 'none'
            item2[index].style.display = 'block'

            item1[k].firstElementChild.firstElementChild.style.display = 'block'
            item1[k].firstElementChild.lastElementChild.style.display = 'none'

            item1[index].firstElementChild.firstElementChild.style.display = 'none'
            item1[index].firstElementChild.lastElementChild.style.display = 'block'
        }

    }
}

for (let i = 0; i < contentDiv4.length; i++) {
    contentDiv4[i].setAttribute('index', i)
    var index = contentDiv4[i].getAttribute('index')
    contentDiv4[index].className += ' active1'
}
