//menu icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{

    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
       

    // sticky navbar
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//dark light mode
let darkModeIcon=document.querySelector('#darkMode-icon');

darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};

// scroll reveal
ScrollReveal({ 
    //reset: true, 
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.image-container',{origin:'left'});
ScrollReveal().reveal('.home-style-img',{origin:'right'});
ScrollReveal().reveal('.dynamicProfession',{origin:'bottom'});

/*=========small description will appear when clicking ReadMore button in About Me page============*/

function toggleReadMore() {
        let moreText = document.getElementById("more-text");
        let btnText = document.getElementById("read-more-btn");

        //moreText.offsetHeight;
      
        if (moreText.style.display === "none" || moreText.style.display==="") {
          moreText.style.display = "inline";
          btnText.innerHTML = "Read Less";
        } else {
          moreText.style.display = "none";
          btnText.innerHTML = "Read More";
        }
};


function toggleServiceReadMore1(){
    let webServiceMoreText1=document.getElementById('service-more-text1');
    let btnText=document.getElementById('service-read-more-btn1');

    //webServiceMoreText1.offsetHeight;

    if (webServiceMoreText1.style.display === "none" || webServiceMoreText1.style.display==="") {
        webServiceMoreText1.style.display = "inline";
        btnText.innerHTML = "Read Less";
      } else {
        webServiceMoreText1.style.display = "none";
        btnText.innerHTML = "Read More";
      }
}

function toggleServiceReadMore2(){
    let webServiceMoreText2=document.getElementById('service-more-text2');
    let btnText=document.getElementById('service-read-more-btn2');

    //webServiceMoreText2.offsetHeight;

    if (webServiceMoreText2.style.display === "none" || webServiceMoreText2.style.display==='') {
        webServiceMoreText2.style.display = "inline";
        btnText.innerHTML = "Read Less";
      } else {
        webServiceMoreText2.style.display = "none";
        btnText.innerHTML = "Read More";
      }
}

function toggleServiceReadMore3(){
    let webServiceMoreText3=document.getElementById('service-more-text3');
    let btnText=document.getElementById('service-read-more-btn3');

   // webServiceMoreText3.offsetHeight;

    if (webServiceMoreText3.style.display === "none" || webServiceMoreText3.style.display==="") {
        webServiceMoreText3.style.display = "inline";
        btnText.innerHTML = "Read Less";
      } else {
        webServiceMoreText3.style.display = "none";
        btnText.innerHTML = "Read More";
      }
}




/* adding Text  dynamically*/
const professions = ["Web Developer", "Web Designer", "Frontend Developer", "Fullstack Developer"];
let index = 0;

function rotateProfessions() {
  document.getElementById("profession").textContent = professions[index];
  //document.getElementById("profession").style.color='blue'
  index = (index + 1) % professions.length; // Loop back to the start
}

setInterval(rotateProfessions, 2000); // Change every 2 seconds