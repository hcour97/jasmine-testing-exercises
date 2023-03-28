describe("calculateMonthlyRate Tests", function(){

  it('should calculate the monthly rate correctly', function () { 
    const values = {
      amount:100000,
      years: 10,
      rate: 4.5,
    }
    expect(calculateMonthlyPayment(values)).toEqual('1036.38');

    const otherValues = {
      amount: 650000,
      years: 30,
      rate: 6.7,
    }
    expect(calculateMonthlyPayment(otherValues)).toEqual('4194.31');
});
})

describe("return correct decimal places", () => {
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount:100000,
      years: 10,
      rate: 4.5,
    }
    expect(calculateMonthlyPayment(values)).toEqual('1036.38');
});
})

/// etc
