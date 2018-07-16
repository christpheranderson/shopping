// had to call this array outside therefore I can access globally
// if my storage on my computer have a value where my data is stored than I want to parse out my info on each object especially when the page loads up again s
var cart = [];
$(document).ready(function(){
// this is a click function for everything that is in the class of item
	$(".item").click(function(e){
		// this is so  I can grab the value for my console to access my shirts data intormation
		// I want to set my shirt count to 1 so I  can have a starting point
		e.preventDefault();
		var shirtsData = $(this.dataset[0]); 
		  shirtsData.count = 1; 
		  // set this variable to false just in case there are no shirts
		  var shirtsInBasket = false;  
		  // looped through each item in a array to display is value
		  $.each(cart,function(index,value){
		  	//console.log(index + " " + value);
		  	// wanted to compare to see each item matches its value

            // set the value so I the price of shirt is a decimal number
		  	if(value === shirtsData){
		  		value = parseInt(value) + parseInt(shirtsData.count);  
		  		 // set the value so if there are shirts in the basket
		  		shirtsInBasket = true;
		  	};
		  });
		   // if shirts are in the basket I want them push the items in cart therefore the cart can load
		  if(!shirtsInBasket){
		  	cart.push(shirtsData)
		 };
		  localStorage = JSON.stringify(cart);
  
		 // set a variable therefore each shirt that is loaded to the cart the JSON Object Info is as string value to the browser.

		  //console.log(localStorage);
		  function shoppingCart(){
		  	if(localStorage != null){
		cart = JSON.parse(localStorage.toString());
	      }
           console.log(localStorage)
		};
	});
});

