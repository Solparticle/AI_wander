const navOn = document.getElementById('navOn');
const navOff = document.getElementById('navOff');
const nav = document.getElementById('nav');

navOn.addEventListener('click', ()=>{
    nav.style.display = 'flex';
});

navOff.addEventListener('click', ()=> {
    nav.style.display = 'none';
});