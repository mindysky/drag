function (id) {
    var obj = document.getElementsById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){
        var disX = ev.pageX - obj.offsetLeft;
        var disY = ev.pageY - obj.offsetTop;
        obj.onmousemove = function(){

        };
    };
}