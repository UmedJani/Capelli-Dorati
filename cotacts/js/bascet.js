let headerSec = document.querySelector('.main-header');
let bascet = document.querySelector('.bascet-circle-icon');
let shop = document.querySelector('.main-page');
let popUp = document.querySelector('.pop-up-container');
let btnClose = document.querySelector('.btn-close');
let footer =  document.querySelector('.footer-sec');

bascet.addEventListener ('click', () =>  {
    popUp.classList.add('active'); 
    headerSec.classList.add('none-active');
    shop.classList.add('none-active'); 
    footer.classList.add('none-active');
})
btnClose.addEventListener ('click', () =>  {
    popUp.classList.remove('active');
    headerSec.classList.remove('none-active');
    shop.classList.remove('none-active'); 
    footer.classList.remove('none-active'); 
})
// bascet.onclick = function () { 
//     popUp.classList.add('active'); 
//     headerSec.classList.add('none-active');
//     shop.classList.add('none-active'); 
//     footer.classList.add('none-active'); 
//  }   
//  btnClose.onclick = function () { 
//      popUp.classList.remove('active');
//      headerSec.classList.remove('none-active');
//      shop.classList.remove('none-active'); 
//      footer.classList.remove('none-active'); 
//   }

