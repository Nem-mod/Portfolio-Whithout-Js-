
function scriptInitialization(){
    let burgerMenu = document.getElementById('burger-menu');

    let overlay = document.getElementById('menu');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
        document.body.classList.toggle("lock");
    });
}   

document.addEventListener('DOMContentLoaded', scriptInitialization);