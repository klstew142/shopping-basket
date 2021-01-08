describe("Shopping", function() {
    let shopping;
  
    beforeEach(function() {
      shopping = new Shopping();
    });
  
    it("should give price for tin of beans", function() {
      expect(shopping.cost("beans", 1)).toEqual(40);
    });

    it("should give price of £1 for 3 tins of beans", function() {
      expect(shopping.cost("beans", 3)).toEqual(100);
    });

    it("should give price of £0.80 for 2 tins of beans", function() {
      expect(shopping.cost("beans", 2)).toEqual(80);
    });

    it("should give price of £1.40 for 4 tins of beans", function() {
      expect(shopping.cost("beans", 4)).toEqual(140);
    });

    it("should give price of £2 for 6 tins of beans", function() {
      expect(shopping.cost("beans", 6)).toEqual(200);
    });
  });
  
