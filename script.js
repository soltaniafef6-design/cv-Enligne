document.addEventListener('DOMContentLoaded',()=>{
  const burger=document.getElementById('burger');
  const nav=document.getElementById('nav');
  const themeToggle=document.getElementById('theme-toggle');
  burger.addEventListener('click',()=>nav.classList.toggle('open'));
  themeToggle.addEventListener('click',()=>document.body.classList.toggle('dark'));
});
