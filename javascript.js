var lis = document.getElementsByClassName("lis");
var box = document.getElementsByClassName("box");
var p = document.getElementsByTagName("p");
// var lisH = lis[0].offsetHeight;
for(let i=0;i<lis.length;i++){
    lis[i].onmouseover = function(){
        for(let j=0;j<box.length;j++){
            box[j].style.top = "25px";
            box[j].style.zIndex = "1";
            p[i].style.borderBottom = "none";
        }
        box[i].style.zIndex = "999";
        p[i].style.borderBottom = "1px solid #e1251b";
    }
    lis[i].onmouseout = function(){
        for(let j=0;j<box.length;j++){
            box[j].style.top = "230px";
            p[i].style.borderBottom = "none";
        }
    }
}