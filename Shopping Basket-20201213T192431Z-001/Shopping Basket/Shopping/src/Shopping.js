function Shopping() {
}
Shopping.prototype.cost = function(item, quantity) {
  const costOfBeans = 40;
  const costOfPotatoesPerPound= 199;
  let totalCost = 0;
  switch(item){
    case "beans":
      let modulusOfThree = quantity % 3;
      if (modulusOfThree == 0 || quantity > 3){
        totalCost = 100 * Math.floor(quantity / 3);
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
  //Loop through each item in items array.
  //For each item call cost, passing in the values from that item.
  //Return the total of the cost of each item.
  return totalBasketCost;
};