describe('testing sumPaymentTotal() and calculateTipPercent()' function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    })

it('should return total tip amount on all payments',) { 
    expect(sumPaymentTotal('tipAmt')).toEqual(50);

    billAmtInput.value = 500;
    tipAmtInput.value = 100;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(120);
}

it('should return total of bill amount on all payments', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 500;
    tipAmtInput.value = 100;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(600);  
})

it('should return total of tip percent', function(){
    expect(sumPaymentTotal('tipPercent')).toEqual(20);
    billAmtInput.value = 500;
    tipAmtInput.value = 100;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(24);
    
})

it('should return tip percent given a bill and tip amount calculateTipPercent', function() {
    expect(calculateTipPercent(100,35)).toEqual(35);
    expect(calculateTipPercent(100,0)).toEqual(0);
})

it('should append a new table element on append(td)', function() {
    let newTr = document.createElement('tr');

    appendTd(newTr, "test1");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

// afterEach(function() {
//     billAmtInput.value = '';
//     tipAmtInput.value = '';
//     paymentTbody.innerHTML = '';
//     summaryTds[0].innerHTML = '';
//     summaryTds[1].innerHTML = '';
//     summaryTds[2].innerHTML = '';
//     serverTbody.innerHTML = '';
//     allPayments = {};
//     paymentId = 0;
//   });
 })
