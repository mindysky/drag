function (id) {
    var obj = document.getElementsById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){
        var disX = ev.pageX - obj.offsetLeft;
        var disY = ev.pageY - obj.offsetTop;
        document.onmousemove = function() {
            obj.style.left = ev.pageX - disX +"px";
            obj.style.top = ev.pageY - disY + "px";
            
        };

    };
}