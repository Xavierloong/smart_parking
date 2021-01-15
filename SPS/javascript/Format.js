var img = document.getElementById("CreditCardImage");

var cleave = new Cleave('.CreditCard', {
    creditCard: true,
    onCreditCardTypeChanged: function(type){
        img.src= "PaymentPageResource/" + (type || "other") +".png"
    }
});

var cleave = new Cleave('.ExpiryDate', {
    date: true,
    datePattern: ['m', 'y']
});

var cleave = new Cleave('.CVV', {
    blocks: [4],
    numericOnly: true
});

var cleave = new Cleave('.TopUpAmount', {
    prefix: 'MYR',
    blocks: [3,3],
    numericOnly: true
});