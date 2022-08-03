document.querySelector('.nav__btn-menu').addEventListener('click', ()=>{
//  this.style.background="red";
      document.querySelector('.nav__btn-menu').classList.toggle('nav__btn-menu_active');

document.querySelector('.nav__list').classList.toggle('nav__list_open');
    
})


document.querySelector('[type="checkbox"]').addEventListener('click', ()=>{
let styleBlack=document.querySelectorAll('[href="css/style_Black.css"]');
if(document.querySelector('[type="checkbox"]').checked){
      document.querySelector('head').insertAdjacentHTML("beforeend",
      `<link rel="stylesheet" href="css/style_Black.css">`);
      document.querySelector('.list__img').src='moon.png';
}else{
      styleBlack[0].parentNode.removeChild(styleBlack[0]);
      document.querySelector('.list__img').src='sun.png';
}    
})


document.querySelector('.gallery').addEventListener('click', (event)=>{
            let fop=event.target.background;
            alert(fop);
            console.dir(document.querySelector('.gallery__item').style.background.url)
      })