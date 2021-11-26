const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slides = document.querySelectorAll(".slider div ")

// Array.from(slides).forEach(element => {
//     element.addEventListener('click',()=> element.classList.toggle('hide'))
    
// });

setInterval(() => {
    if(!slide2.className.includes('hide')){
        slide2.classList.toggle('hide')
    }else{
        slide2.classList.toggle('hide')
    }
    
}, 3000);