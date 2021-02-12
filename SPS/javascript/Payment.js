var CreditCardType = 0;
document.getElementById("Name").focus();
var VName, VCard, VDate, VCVV, VAmount = 0;


function ValidateName(){
	var Name = document.getElementById("Name").value;
	var NameValidity = document.getElementById("NameValidity");
	var ErrorEffect = document.getElementById("Name");

	if (Name == ""){
		NameValidity.style.visibility = "visible";
		ErrorEffect.style.borderColor = "red";
		VName = 0;
	}
	else{
		NameValidity.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "lightgreen";
		VName = 1;
	}

}

function validateCreditCardNumber(cardNumber) {
	cardNumber = cardNumber.split(' ').join("");
	if(parseInt(cardNumber) <= 0 || (!/\d{15,16}(~W[a-zA-Z])*$/.test(cardNumber)) || cardNumber.length > 16) {
		return false;
	}
	var carray = new Array();
	for(var i = 0; i < cardNumber.length; i++) {
		carray[carray.length] = cardNumber.charCodeAt(i) - 48;
	}
	carray.reverse(); // luhn approaches number from the end
	var sum = 0;
	for(var i = 0; i < carray.length; i++) {
		var tmp = carray[i];
		if((i % 2) != 0) {
			tmp *= 2;
			if(tmp > 9) {
				tmp -= 9;
			}
		}
		sum += tmp;
	}
	return (sum % 10) == 0;
}

function cardType(cardNumber) {
	cardNumber = cardNumber.split(" ").join("");
	var o = {
		visa: /^4\d{0,15}/,
		mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
		amex: /^3[47]\d{0,13}/,
		unionPay: /^(62|81)\d{0,14}/,
	};
	for(var k in o) {
		if(o[k].test(cardNumber)) {
			return k;
		}
	}
	return null;
}

function update(cardNumber) {
	var ErrorEffect = document.getElementById("CreditCard")
	var valid = document.getElementById("CCValidity");
	var ValidCardType = document.getElementById("CCTypeValidity")
	CreditCardType = cardType(cardNumber)

	if(validateCreditCardNumber(cardNumber)) {
		valid.style.visibility = "hidden"
		ErrorEffect.style.borderColor = "lightgreen";
		VCard = 1;
	}
	else {
		valid.style.visibility = "visible"
		ErrorEffect.style.borderColor = "red";
		VCard = 0;
	}

	if (cardType(cardNumber) == null && cardNumber != ""){
		ValidCardType.style.visibility = "visible"
		valid.style.visibility = "hidden"
		ErrorEffect.style.borderColor = "red";
		VCard = 0;
	}
	else{
		ValidCardType.style.visibility = "hidden"	
	}

	
}

function ValidateDate(ExpiryDate){
	console.log(ExpiryDate);
	var DateValidity = document.getElementById("DateValidity");
	var ErrorEffect = document.getElementById("ExpiryDate");

	var InputDate = document.getElementById("ExpiryDate").value;
	console.log(InputDate);
	var d = new Date();
	var currentYear = d.getFullYear();
	var currentMonth = d.getMonth()+1;

	var parts = InputDate.split("/",2);
	var year = parseInt(parts[1],10) + 2000;
	var month = parseInt(parts[0],10);

	if (year < currentYear || (year == currentYear && month < currentMonth) 
	|| InputDate == "") {
		DateValidity.style.visibility = "visible";
		ErrorEffect.style.borderColor = "red";
		VDate = 0;
	}
	else{
		DateValidity.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "lightgreen";
		VDate = 1;
	}
}

function ValidateCVV(){
	var ErrorEffect = document.getElementById("CVV");
	var CVV = document.getElementById("CVV").value;
	CreditCardNumber = document.getElementById("CreditCard").value;
	CreditCardLength = String(CreditCardNumber.split(" ").join("")).length;

	console.log(CreditCardLength)

	CVVlength = String(CVV).length;
	ErrorEffect = document.getElementById("CVV"); 
	console.log(CreditCardType)

	if ((CreditCardType == "amex") && (CreditCardLength == 15)){
		document.getElementById("CVV").maxLength = "4"
		ErrorEffect.disabled = false
		ErrorEffect.style.borderColor = "#dddddd";
	}
	else if (((CreditCardType== "visa") || (CreditCardType== "mastercard") || (CreditCardType== "unionPay")) && (CreditCardLength == 16)) {
		document.getElementById("CVV").maxLength = "3"
		ErrorEffect.disabled = false
		ErrorEffect.style.borderColor = "#dddddd";
	}
	else {
		ErrorEffect.disabled = true;
	}

	if ((CreditCardType == "amex") && (CVVlength == 4)){
		CVVValidity.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "lightgreen";
		VCVV = 1;
	}
	else if (((CreditCardType == "visa") || (CreditCardType== "mastercard") || (CreditCardType== "unionPay")) && (CVVlength == "3")){
		CVVValidity.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "lightgreen";
		VCVV = 1;
	}
	else if (ErrorEffect.disabled == true){
		CVVValidity.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "#dddddd";
	}
	else{
		CVVValidity.style.visibility = "visible";
		ErrorEffect.style.borderColor = "Red";
		VCVV = 0;
	}
}

function ValidateTopUpAmount(){
	var ErrorEffect = document.getElementById("TopUpAmount");
	var InputAmount = document.getElementById("TopUpAmount").value;
	var parts = InputAmount.split(" ",2);
	var TopUpAmount = parseInt(parts[1],10);
	console.log(TopUpAmount)

	var TopUpAmountValidity1 = document.getElementById("TopUpAmountValidity1");
	var TopUpAmountValidity2 = document.getElementById("TopUpAmountValidity2");

	if ((TopUpAmount < 1) || (TopUpAmount > 100)){
		TopUpAmountValidity1.style.visibility = "visible";
		TopUpAmountValidity2.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "Red";
		VAmount = 0;
	}
	else if ((TopUpAmount > 1) || (TopUpAmount <= 100)) {
		TopUpAmountValidity1.style.visibility = "hidden";
		TopUpAmountValidity2.style.visibility = "hidden";
		ErrorEffect.style.borderColor = "lightgreen";
		VAmount = 1;
	}
	else {
		TopUpAmountValidity1.style.visibility = "hidden";
		TopUpAmountValidity2.style.visibility = "visible";
		ErrorEffect.style.borderColor = "Red";
		VAmount = 0;
	}
}

function ButtonEnable(){
	var ButtonEnable = VName*VCard*VDate*VCVV*VAmount;

	if (ButtonEnable == 1 ){
		document.getElementById("PayButton").disabled=false;
	}
	else{
		document.getElementById("PayButton").disabled=true;
	}
}