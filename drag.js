function (id) {
    var obj = document.getElementsById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(){
        var objL = ev.pageX - obj.offsetX;
        var objT = ev.pageY - obj.offsetY;
        
    };
}