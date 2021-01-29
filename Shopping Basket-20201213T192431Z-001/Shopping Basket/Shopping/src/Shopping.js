function Shopping() {
}
Shopping.prototype.cost = function(item, quantity) {
  const costOfBeans = 40;
  const costOfPotatoesPerPound= 199;
  let totalCost = 0;
  switch(item){
    case "beans": //offer for beans is 3 for £1
      let modulusOfThree = quantity % 3; 
      if (modulusOfThree == 0 || quantity > 3){
        totalCost = 100 * Math.floor(quantity / 3); //If beans is multiple of 3, gives us the offer price 
      };

      totalCost = totalCost + (costOfBeans * modulusOfThree);
      break;

    case "potatoes":
      //Quantity passed in is in ounces 
      const costOfPotatoesPerOunce = costOfPotatoesPerPound / 16;
      totalCost = costOfPotatoesPerOunce * quantity;
      break;
  };   
  return Math.round(totalCost);    
};

Shopping.prototype.costBasket = function(items){
  let totalBasketCost = 0;
  for (var i=0; i < items.length; i++) {
    totalBasketCost += this.cost(items[i][0], items[i][1]);
   };
  return totalBasketCost;
};

//Loop through each item in items array.
//For each item call cost, passing in the values from that item.
//Return the total of the cost of each item.