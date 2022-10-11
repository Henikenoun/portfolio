/* ============================================================== nav toggler ==============================================================*/

const navtoggler = document.querySelector('.nav-toggler'),
aside = document.querySelector('.aside');
navtoggler.onclick= function()
{ 
    aside.classList.toggle("open");
    navtoggler.classList.toggle('open');
    document.querySelector('.main').classList.toggle("open");
}



