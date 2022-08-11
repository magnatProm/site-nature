document.querySelector('.nav__btn-menu').addEventListener('click', () => {

      document.querySelector('.nav__btn-menu').classList.toggle('nav__btn-menu_active');

      document.querySelector('.nav__list').classList.toggle('nav__list_open');

})


document.querySelector('[type="checkbox"]').addEventListener('click', () => {
      const styleBlack = document.querySelectorAll('[href="css/style_Black.css"]');
      if (document.querySelector('[type="checkbox"]').checked) {
            document.querySelector('head').insertAdjacentHTML("beforeend",
                  `<link rel="stylesheet" href="css/style_Black.css">`);
            document.querySelector('.list__img').src = 'moon.png';
      } else {
            styleBlack[0].parentNode.removeChild(styleBlack[0]);
            document.querySelector('.list__img').src = 'sun.png';
      }
})


document.querySelector('.gallery').addEventListener('click', (event) => {
      if (event.target.closest('.gallery__item')) {
            document.querySelector('.modal').classList.toggle('none');
            slider_bar()
      }
})
document.querySelector('.modal').addEventListener('click', (event) => {
      if (!event.target.closest('.modal_dialog')) {
            document.querySelector('.modal').classList.toggle('none');
      }
})




// slider bar
function slider_bar() {
      const slider = document.querySelectorAll('.card'),
            prev = document.querySelector('.control__left'),
            next = document.querySelector('.control__right'),
            slidesWrapper = document.querySelector('.slider'),
            slidesField = document.querySelector('.slider__carousel'),
            width = window.getComputedStyle(slidesWrapper).width;

      let offset = 0;

      // slidesField.style.width = width - slider.length + '%';

      slidesField.style.width = 100 * slider.length + '%';

      slider.forEach(slide => {
            slide.style.width = width;
      })

      next.addEventListener('click', () => {
            if (offset >= width.slice(0, width.length - 2) * (slider.length - 1)) {
                  offset = 0;
            } else {
                  offset += +width.slice(0, width.length - 2) + (slider.length - 1);
            }
            slidesField.style.transform = `transLateX(-${offset}px)`;
      })

      prev.addEventListener('click', () => {
            if (offset == 0) {
                  offset = +width.slice(0, width.length - 2) * (slider.length - 1);
            } else {
                  offset -= +width.slice(0, width.length - 2);
            }
            slidesField.style.transform = `transLateX(-${offset}px)`;
      })
}
// / slider bar







document.querySelector('.header__nav').addEventListener('click', (event) => {
      const list = document.querySelectorAll('.list__item');
      const text = event.target.innerHTML;
      const anchor = document.querySelector(`[data-wotor="${text}"]`)

      list.forEach(item => {
            item.classList.remove('item__link_active');
      });

      event.target.closest('.list__item').classList.toggle('item__link_active');
      if (event.target.closest('.list__input')) {
            event.target.closest('.list__item').classList.remove('item__link_active');
      }


      // const text = event.target.innerHTML;
      // const anchor = document.querySelector(`[data-wotor="${text}"]`)

      scroll_page(anchor);


      function scroll_page(element) {
            window.scrollTo({
                  left: 0,
                  top: element.offsetTop
            })
      }

})