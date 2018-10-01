const background = document.querySelector('body');

background.addEventListener('keydown', ()=> {
    background.style.backgroundColor = "red";
    event.stopPropagation();
});

const welcome = document.querySelectorAll('h1');

welcome.addEventListener('click', (event)=>{
    alert("we have awoke")
});