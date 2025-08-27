// REUSABLE FUNCTIONS
function callingFeature(nameId, numberId) {
	const numberofCoins = parseInt(document.getElementById("coins").innerText);
	if (numberofCoins < 20) {
		alert("You do not have enough coins to make a call");
	} else {
		const serviceName = document.getElementById(nameId).innerText;
		const serviceNumber = document.getElementById(numberId).innerText;
		const newNumberOfCoins = numberofCoins - 20;
		document.getElementById("coins").innerText = newNumberOfCoins;
		alert("Calling: " + serviceName + "\nNumber: " + serviceNumber);
	}
}
document.getElementById("call-one").addEventListener("click", function () {
	callingFeature("service-one", "service-number-one");
});

document.getElementById("call-two").addEventListener("click", function () {
	callingFeature("service-two", "service-number-two");
});

document.getElementById("call-three").addEventListener("click", function () {
	callingFeature("service-three", "service-number-three");
});

document.getElementById("call-four").addEventListener("click", function () {
	callingFeature("service-four", "service-number-four");
});

document.getElementById("call-five").addEventListener("click", function () {
	callingFeature("service-five", "service-number-five");
});

document.getElementById("call-six").addEventListener("click", function () {
	callingFeature("service-six", "service-number-six");
});

document.getElementById("call-seven").addEventListener("click", function () {
	callingFeature("service-seven", "service-number-seven");
});

document.getElementById("call-eight").addEventListener("click", function () {
	callingFeature("service-eight", "service-number-eight");
});

document.getElementById("call-nine").addEventListener("click", function () {
	callingFeature("service-nine", "service-number-nine");
});
