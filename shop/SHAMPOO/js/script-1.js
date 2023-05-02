let btnOne = document.querySelector('.btn-1');
let btnTwo = document.querySelector('.btn-2');
let desriptionText = document.querySelector('.description-texts');
let methodOfApplication= document.querySelector('.method-of-application');

btnOne.onclick = function () {
    btnOne.classList.remove('none-active-btn');
    btnTwo.classList.add('none-active-btn'); 
desriptionText.classList.add('active');
    methodOfApplication.classList.remove('active'); }
       
btnTwo.onclick = function () {
    btnOne.classList.add('none-active-btn');
    btnTwo.classList.remove('none-active-btn'); 
    desriptionText.classList.remove('active');
    methodOfApplication.classList.add('active'); }

// desriptionText.onclick = function () {
    
// }
       
// methodOfApplication.onclick = function () {
    
// }
     
       
