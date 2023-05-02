document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active'); 
    document.querySelector('.pop-up-menu').classList.toggle('open');
})
