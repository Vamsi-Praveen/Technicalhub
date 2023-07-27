const header = document.getElementById('header');
const scrl = document.getElementById('scrl');
const links = document.getElementById('ll');
const drop = document.getElementById('drop');

links.addEventListener('mousemove',()=>{
    drop.classList.add('active');
});
links.addEventListener('mouseleave',()=>{
    drop.classList.remove('active');
})
window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>80);
    scrl.classList.toggle('active',window.scrollY>80);
})
scrl.addEventListener('click',()=>{{
    window.scrollTo(0,0);
}});