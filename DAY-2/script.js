
let menu = document.querySelector('.menu')
console.log("abbc");

menu.addEventListener('click', ()=> {
    console.log("clicked");
    menu.classList.toggle('open');
	menu.classList.remove('no-animation');
})