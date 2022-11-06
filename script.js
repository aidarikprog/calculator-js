const calc = document.querySelector('.calc')
const result = document.querySelector('#result')

calc.addEventListener('click', function (event) {
   if(!event.target.classList.contains('btn')) return/* не нажималось дисплей */

   const value = event.target.innerText

   switch(value){
   case 'c':
   result.innerText = ''
   break

   case '=':
      result.innerText = eval(result.innerText).toFixed(2)
      break
   default:
   result.innerText += value

   }

   
})