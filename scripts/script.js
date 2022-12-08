'use strict'


// get elements

const mainCardEl = document.querySelector('.card-container');
const thankCardEl = document.querySelector('.thankyou-container');

const ratingBtnEl = document.querySelectorAll('.btn');

const submitBtnEl = document.querySelector('.submit-btn');
const spanEl = document.querySelector('.rating');

const rateAgainEl = document.querySelector('.rate-btn');


//  global variable
function init(){
  spanEl.innerText = 0;
}


init();

submitBtnEl.addEventListener('click' , function(){
  // view thank card
  thankCardEl.classList.remove('hidden');
  // remove rating card
  mainCardEl.style.display='none';
});



ratingBtnEl.forEach(function(button){
  button.addEventListener('click' , function(){
    spanEl.innerHTML=button.innerHTML;
    console.log(spanEl.innerHTML)
  
  })
  

})

rateAgainEl.addEventListener('click',function(){
  thankCardEl.classList.add('hidden');
 mainCardEl.style.display='block';
  


})






// let rating = null

// ratingBtnEl.forEach((ratingBtn)=>{
// ratingBtn.addEventListener('click', (e)=>{
//   rating = e.target.innerText
//   span.innerText=rating
//   console.log(rating)
// })
// })

 
// event listeners



// for (let i = 0; i <ratingBtnEl.length; i++) {
//   ratingBtnEl[i].addEventListener('click', function(){
//     rating = Number(this.value)
//   })

//   console.log(rating);
  

// }

