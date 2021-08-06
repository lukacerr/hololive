new WOW().init();

let logo = document.getElementById('logo'); 
let nav = document.getElementById('navbar');  
const root = document.querySelector(':root');

if(document.cookie.charAt(document.cookie.length-1) == 1) root.classList.toggle('dark');
else root.classList.remove('dark');

window.onload = function() {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (width >= 992) {
        logo.style.height = '64px';
    } else{
        logo.style.height = '48px';
    }
    
    nav.classList.add("navbar--noborder");
}

window.onscroll = () => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (width >= 992) {
        if (window.scrollY > width/24) {
            logo.style.height = '40px';
            nav.classList.add("bg-light--bg");
            nav.classList.remove("navbar--noborder");
            
            var buttons = document.getElementsByClassName("nav-link");
            for(i = 0; i < buttons.length; i++) {buttons[i].className += " nav-link--scroll";}
        } else{
            logo.style.height = '64px';
            nav.classList.remove("bg-light--bg");
            nav.classList.add("navbar--noborder");

            var buttons = document.getElementsByClassName("nav-link");
            for(i = 0; i < buttons.length; i++) {buttons[i].classList.remove("nav-link--scroll");}
        }
    }
};  

document.querySelector(".btn-toggle").addEventListener("click", function() {
    if(!root.classList.contains('dark')){
        document.cookie = "darkmode=1; SameSite=None; Secure"; 
        root.classList.toggle('dark'); 
    } else {
        document.cookie = "darkmode=0; SameSite=None; Secure"; 
        root.classList.remove('dark');
    }
});