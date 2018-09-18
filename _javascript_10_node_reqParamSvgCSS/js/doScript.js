// THE ALASKA REMOVER!!!

function doClick() {
    alaska.style['fill'] = 'none';
}

var alaska = document.getElementById('AK');
alaska.onclick = doClick;


var VA = document.getElementById('VA');
VA.onclick = function(ev) {
    console.log(ev);
}
