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