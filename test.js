test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion from USD to JPY (1 USD = 146.26 JPY)", function() {
    
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62);
})

test("Conversion from JPY to GBP (1 JPY = 0.0055 GBP)", function() {
    
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);
})