let btn=document.getElementById('btn');
let paragraph=document.getElementById('paragraph');
btn.onclick=function()
{
    paragraph.style.color='red'
};
let num1=document.getElementById('num1');
let num=document.getElementById('num');
num1.onkeyup=function(){
    num.value=num1.value;
};
let write=document.getElementById('write');
let wrote=document.getElementById('wrote');
write.onkeyup=function(){
    wrote.value=write.value;
};
let img=document.getElementById('img')
img.onmouseup=function(){
    window.alert(img.src)
}



*9