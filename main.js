const header = document.getElementById('header');
const scrl = document.getElementById('scrl');
window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>80);
    scrl.classList.toggle('active',window.scrollY>80);
})
scrl.addEventListener('click',()=>{{
    window.scrollTo(0,0);
}});