// let elForm = document.querySelector(".bs-form");
// let milSecInput = document.querySelector("input")
// let elResult = document.querySelector(".basis");

// let sec = 1000;
// let min = 60 * sec;
// let hour = 60 * min;

// elForm.addEventListener("submit",function(evt) {
//    evt.preventDefault();
   
//    let milSec = milSecInput.value;

   
//    let hourValue = Math.floor(milSec / (3600 * sec));
   
//    let minteValue = Math.floor((milSec % (3600 * sec)) / (min));
   
//    let secValue = Math.floor(milSec % (3600 * sec)) %  ((60 * sec) / sec);

//    let milSecond = Math.floor(milSec % sec)

   
//    elResult.textContent = `${hourValue} hour - ${minteValue} min - ${secValue} sec - ${milSecond} milSec`

   
//    if(milSec <= 0){
   
//       elResult.textContent = "Iltimos (0 dan) katta son kiriting!";
   
//       console.log(elResult);
   
//    }
//    elForm.reset()
// })