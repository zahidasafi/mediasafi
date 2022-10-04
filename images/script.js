var hide_icon = document.querySelector('.menu-bar');
var hideHeader_box =document.querySelector('.hide-menu-box');
var spaceClick=document.querySelector('.drak-parda');
var clickHide = document.querySelector('.click-hide');
var contHide= document.querySelector('.cont-hide');
var servHide =document.querySelector('.serv-hide');


console.log(contHide);
hide_icon.addEventListener('click',function(){
    hideHeader_box.style.display='block';
    spaceClick.style.display='block'
    // hideHeader_box.style.transition='all 4s ease';
    
});
spaceClick.addEventListener('click',function(){
    hideHeader_box.style.display='none';
    spaceClick.style.display='none';
});
clickHide.addEventListener('click',function(){
    hideHeader_box.style.display='none';
});

contHide.addEventListener('click',function(){
    hideHeader_box.style.display='none';
});
servHide.addEventListener('click',function(){
    hideHeader_box.style.display='none';
});

