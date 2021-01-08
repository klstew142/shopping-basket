function Shopping() {
}
Shopping.prototype.cost = function(item, quantity) {
  const costOfBeans = 40;
  let totalCost = 0;
  switch(item){
    case "beans":
        let modulusOfThree = quantity % 3;
        if (modulusOfThree == 0 || quantity > 3){
          totalCost = 100;
        }
        let modulusOfSix = quantity % 6;
        if (modulusOfSix == 0 || quantity > 6){
          totalCost = 200;
        }

        totalCost = totalCost + (costOfBeans * modulusOfThree);
        return totalCost;
      }
    
};

