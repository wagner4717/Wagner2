//add to cart
let productsCountEl = document.getElementById("products-count");
//console.log(productsCountEl);

let addToCardButtons = document.querySelectorAll(".add-to-cart");
//console.log(addToCardButtons);

for (let i = 0; i < addToCardButtons.length; i++) {
	addToCardButtons[i].addEventListener("click", function(){
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}


//change like buttin state
let likeButtons = document.querySelectorAll(".image-like");
//console.log(likeButtons);

for (let i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function() {
		//console.log("cliked")
		if(this.classList.contains("liked")){
			this.classList.remove("liked")
		} else {
			this.classList.add("liked")
		}
	})

}

    /*слайдер*/

$(document).ready(function(){
  $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
    
// change quantity state 

let decrementButton = document.querySelectorAll(".decrement-button"),
    incrementButton = document.querySelectorAll(".increment-button"),
    quantityInput = document.querySelectorAll(".quantity-input input"),
    minProductCount = 1;
    maxProductCount = 10;


function toogleButtonsState(count){
  if(count >= maxProductCount) {
    incrementButton.disabled = true;
  } else if(count >= maxProductCount) {
    incrementButton.disabled = false;
  } else if(count <= minProductCount) {
        decrementButton.disabled = true;
    } else {
        decrementButton.disabled = false;
    } 
}    

let currentValue = +quantityInput.value;
toogleButtonsState(currentValue);

    incrementButton.addEventListener("click", function() {
        let currentValue = +quantityInput.value;
        //console.log(currentValue);
        let nextValue = currentValue + 1;
        //console.log(nextValue);
        quantityInput.value = nextValue;
        toogleButtonsState(nextValue);
      })
    decrementButton.addEventListener("click", function() {
        let currentValue = +quantityInput.value;
        //console.log(currentValue);
        let nextValue = currentValue - 1;
        //console.log(nextValue);
        quantityInput.value = nextValue;
        toogleButtonsState(nextValue);
      });
    
