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

    it("should give price of £300 for 300 tins of beans", function() {
      expect(shopping.cost("beans", 300)).toEqual(10000);
    });

    it("should give price of £2.80 for 8 tins of beans", function() {
      expect(shopping.cost("beans", 8)).toEqual(280);
    });

    it("should give price for 1lb of potatoes", function() {
      expect(shopping.cost("potatoes", 16)).toEqual(199)
    });
    
    it("should give price for 4oz of potatoes", function() {
      expect(shopping.cost("potatoes", 4)).toEqual(50)
    });

    it("should give price for 17oz of potatoes", function() {
      expect(shopping.cost("potatoes", 17)).toEqual(211)
    });
});