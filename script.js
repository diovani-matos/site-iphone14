const burguer = document.querySelector(".burguer");
const navMenu = document.querySelector(".nav-menu");

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function corPhone(e){
    document.querySelector('#phone').src = e;
}
function corCircle(color){
const circle = document.querySelector('.circle');
circle.style.background = color
}