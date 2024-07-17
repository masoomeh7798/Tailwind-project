"use strict"
// start dark light button
const darkLightBtn=document.querySelector('#dark-light')
const logoEl=document.querySelector('#logo img')

let isDark=false;
darkLightBtn.addEventListener('click',()=>{
    if(isDark){
    document.documentElement.classList.remove('dark')
    logoEl.src='assets/images/Porsche_wordmark.png'
    isDark=false;
    }else{
    document.documentElement.classList.add('dark')
    isDark=true; 
    logoEl.src='assets/images/porsche-2-xxl2.png'
    }
})
// end dark light button
