var navbar = document.querySelector('.navbar');

window.addEventListener('scroll' , function() {
    if  (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400){
        navbar.classList.add("bg-light");
    } 
    else {
        navbar.classList.remove("bg-light");
    }
});