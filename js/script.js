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
});
// end dark light button
// start slider

const sliderEls=document.querySelector('#slider')
const bannerEls=[...document.querySelectorAll('#slider > div')];
const bannerImgEls=[...document.querySelectorAll('#slider > div img')];
const bodyEl=document.querySelector('body')
const banner2Els=[...document.querySelectorAll('#slider-2 > div > div')]

let currentBanner=0;
let interEnter;
let interOut;
let intervalIsActive=true;

if(window.screen.width>=1024){
// slider 1
bannerInterval()
bannerEls.map(el=>{
    el.addEventListener('click',()=>{
        clearInterval(interEnter)
        clearInterval(interOut)
        intervalEnter(el)
        intervalIsActive=false;
    })     
    window.addEventListener('click',(e)=>{
        if(!e.target.closest('.slider-slides')){
            intervalOut(el)
            if(!intervalIsActive){
                bannerInterval()
                intervalIsActive=true;
            }
        }
     })
 })
}else{
// slider 2
let currentBanner2=0;
setInterval(()=>{
    banner2Els[currentBanner2].classList.remove('show')
    if(currentBanner2==banner2Els.length-1){
        currentBanner2=0
    }else{
        currentBanner2++ 
    }
    banner2Els[currentBanner2].classList.add('show')
},2500)
}

// end slider
// start hamburger menu
const menuIconEl=document.querySelector('#hamburger-menu > div')
const hamburgerPartEl=document.querySelector('#hamburger')
const hamburgerPartContentEl=document.querySelector('#hamburger > div')
const closeHamEl=document.querySelector('.close-hamburger')

menuIconEl.addEventListener('click',()=>{
    hamburgerPartEl.classList.add('show')
    hamburgerPartContentEl.classList.add('width-up')
})
closeHamEl.addEventListener('click',()=>{
    hamburgerPartEl.classList.remove('show')
    hamburgerPartContentEl.classList.remove('width-up')
})

// end hamburger menu
// start functions
function bannerInterval(){
   interEnter=setInterval(()=>{
    intervalEnter(bannerEls[currentBanner])
    },3000)
 interOut=setInterval(()=>{
        intervalOut(bannerEls[currentBanner])
        if(currentBanner==bannerEls.length-1){
            currentBanner=0
        }else{
            currentBanner++ 
        }
},6000)  
}

function intervalEnter(element){
    bannerEls.map(e=>{
        if(e!=element){
         e.classList.add('hide')   
        }
    })
if(bannerEls.indexOf(element)%2==0){
     element.classList.remove('animate-up-down')
}else{
     element.classList.remove('animate-down-up')
}
 element.classList.add('enter')
element.children[0].classList.add('full')
sliderEls.style.setProperty('padding','0')
}

function intervalOut(element){
        bannerEls.map(e=>{
            e.classList.remove('hide')
        })
         element.classList.remove('enter')
        if(bannerEls.indexOf(element)%2==0){
             element.classList.add('animate-up-down')
        }else{
             element.classList.add('animate-down-up')
        }
        element.children[0].classList.remove('full')
        sliderEls.style.setProperty('padding','40px')
}

// end functions