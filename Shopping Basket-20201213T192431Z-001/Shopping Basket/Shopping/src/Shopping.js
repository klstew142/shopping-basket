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
        totalCost = totalCost + (costOfBeans * modulusOfThree);
        return totalCost;
      }
        break;
    default:
        throw new Error("No item found");
  }
};

