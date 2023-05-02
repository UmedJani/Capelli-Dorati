const counters = document.querySelectorAll('[data-counter]');

if (counters) {
   counters.forEach(counter => {
       counter.addEventListener('click', e => {
           const target = e.target;

           if (target.closest('.counter-button')) {
               if (target.closest('.counter').querySelector('input').value == '' && (target.classList.contains('counter-button-minus') || target.classList.contains('counter-button-plus'))) {
                   target.closest('.counter').querySelector('input').value = 0;
               }

               let value = parseInt(target.closest('.counter').querySelector('input').value);

               if (target.classList.contains('counter-button-plus')) {
                   value++;
               } else {
                   --value;
               }

               if (value <= 0) {
                   value = 0;
                   target.closest('.counter').querySelector('.counter-button-minus').classList.add('disabled')
               } else {
                   target.closest('.counter').querySelector('.counter-button-minus').classList.remove('disabled')
               }

               target.closest('.counter').querySelector('input').value = value;
           }
       })
   })	
}
