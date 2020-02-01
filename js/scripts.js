
$(document).ready(function(){
 
  $("input[type='button']").click(function(){
    event.preventDefault();
  
    if  (document.getElementById('pepperoni').checked) {
      
       var topping1 = "pepperoni"
       var topping1 = new Topping(topping1);
       pizza.addToppings(topping1);
       var price = 1
      
       pizza.addPrices(price);
      
      }
    
       
      
     
      if (document.getElementById('mushrooms').checked){
        var topping2 = "mushrooms"
        var topping2 = new Topping(topping2);
        pizza.addToppings(topping2);
        var price = 1
        pizza.addPrices(price);
      }
    
      if (document.getElementById('olives').checked){
        var topping3 = "olives"
        var topping3 = new Topping(topping3);
        pizza.addToppings(topping3);
        var price = 1
        
        pizza.addPrices(price);
      }

      if (document.getElementById('anchovy').checked){
        var topping4 = "anchovy"
        var topping4 = new Topping(topping4);
        pizza.addToppings(topping4);
        var price = 1
      
        pizza.addPrices(price);
      }

    if (document.getElementById('small').checked){
      var size1 = 'small'
      var size1 = new Size(size1);
      pizza.addSizes(size1);
      var price = 5
       
        pizza.addPrices(price);
     
    }
    if (document.getElementById('medium').checked){
      var size2 = 'medium'
      var size2 = new Size(size2);
      pizza.addSizes(size2);
      var price = 10
      pizza.addPrices(price);
    }
    if (document.getElementById('large').checked){
      var size3 = 'large'
      var size3 = new Size(size3);
      pizza.addSizes(size3);
      var price = 15
      pizza.addPrices(price);
      }
    
     
        var sum = ''
        
        pizza.outPut(sum);
        
       
        
      
      
      //pizza.outPut(sum)
      
    
    // var sum = pizza.prices.reduce(function(a, b){
    //   return a + b;
    //  }, 0);
 
      
  
    console.log(pizza)

    
    //$("#output" ).show();
     $("#output").html("$" + pizza.sums);
     $("#output").fadeIn(3000);
    });
  
});


  // Business Logic for Pizza

function Pizza() {
  this.sizes = [];
  this.toppings = [];
  this.prices = [];
  this.sums = []
 
}
 var pizza= new Pizza();


Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
Pizza.prototype.addPrices = function(price) {
  
  
  this.prices.push(price);
  
}

Pizza.prototype.addSizes = function(size) {
  this.sizes.push(size); 
}

// Business Logic for Toppings 
function Topping(topping) {
  this.topping = topping;
}
  // Business Logic for price
function Price(price) {
  
  this.price = price;
}

function Size(size) {
  
  this.size = size;
}
Pizza.prototype.outPut = function(sum){
   sum = pizza.prices.reduce(function(a, b){
    return a + b;
   }, 0);
   
  
  this.sums.push(sum); 

  }





  

  


