"use strict"
const darkLightBtn=document.querySelector('#dark-light')

let isDark=false;
darkLightBtn.addEventListener('click',()=>{
    if(isDark){
    document.documentElement.classList.remove('dark')
    isDark=false;
    }else{
    document.documentElement.classList.add('dark')
    isDark=true; 
    }

})
