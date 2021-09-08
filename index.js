window.alert('我是外部程序');
const oDiv = document.querySelector('div');
oDiv.onclick = function(){
    this.innerHTML = '实在是热啊,能不能有人帮我拿个冰镇饮料';
    this.style.color = 'pink';
}