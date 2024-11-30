const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro debería ser 1.07 dólares", () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); 
  });


  test("10 dólares deberían ser 1461.68 yenes", () => {
    expect(fromDollarToYen(10)).toBe(1461.68);
  });
  
  test("100 yenes deberían ser 0.555 libras", () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.555);
  });