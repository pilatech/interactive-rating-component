let rating
const ratingCircles = document.querySelectorAll('.rating__number')
const btn = document.querySelector('.btn')
const ratingFront = document.querySelector('.rating--front')
const ratingThanks = document.querySelector('.rating--thanks')

ratingCircles.forEach(ratingCircle => {
 ratingCircle.addEventListener('click', event => {
  resetColors()
  event.target.style.background = 'hsl(25, 97%, 53%)' 
   rating = event.target.textContent
 })
})

function resetColors(){
 ratingCircles.forEach(circle => {
  circle.style.background = 'hsla(210, 11%, 21%, 0.801)'
 })
}

btn.addEventListener('click', () => {
 if(!rating) return
 ratingThanks.classList.remove('hidden');
 ratingFront.classList.add('hidden');
 const num = document.querySelector('.rating__rating')
 num.textContent = rating
})