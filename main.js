// start navbar
/*========================================== updating menu and close btn=========================================== */

let menu =document.getElementById('nav-items');
let openM =document.getElementById('menu-open');
let closeM =document.getElementById('menu-close');

openM.onclick =()=>{
    openM.style.display="none";
    closeM.style.display="block";
    menu.style.display="flex";
}
closeM.onclick =()=>{
    closeM.style.display="none";
    openM.style.display="block";
    menu.style.display="none";
    disLinks.classList.remove('main-nav')
}
// end navigation bar


/* ============================================updating slide menu============================================== */
// slide menu btn customization
let slides =document.querySelectorAll('.slide-container');
let index=0
function next(){
    slides[index].classList.remove('active');
    index =(index+1) % slides.length;
    slides[index].classList.add('active')
}
function prev(){
    slides[index].classList.remove('active');
    index =(index -1 +slides.length) % slides.length;
    slides[index].classList.add('active')
}



/* =========================remove all events from links after clicking========================================== */

let disLinks =document.querySelector('.mega-menu');
let clickable = document.querySelector('.other-links');
clickable.onclick=()=>{
    disLinks.classList.toggle('main-nav')
}





// ----------------------------------------------------- on scroll event style navbar end ------------------------------------
let progresss =document.querySelector('.progress-section');
let spans =document.querySelectorAll('.info-psg');
let start =  false;



// ----------------------------------------------------- on scroll event style navbar end ------------------------------------------------------------

window.addEventListener('scroll' ,()=>{
    document.querySelector('#score').classList.toggle('navbacklinear' , window.scrollY > 10);


    scrollTopBtn.classList.toggle('scroll-show' , window.scrollY > 50);
    

// ----------------------------spans evnts when scroll-------------------------------


if(window.scrollY >= progresss.offsetTop -100){
    if(!start){ //if it not start ---please start it.
        spans.forEach((span) => { startCount(span)})
    }
    start =true;
}

})
// ----------------------------------------return to the top on click------------------------------------

let scrollTopBtn =document.querySelector('.show-up');
scrollTopBtn.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}






function  startCount(ele){
    let max = ele.dataset.progress;
    let count = setInterval(() =>{
        ele.textContent++;
        if (ele.textContent == max){
            clearInterval(count)
        }
    },4000 / max)
}