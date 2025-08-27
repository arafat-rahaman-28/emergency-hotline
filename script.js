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
function heartCounterFeature() {
	const numberOfHearts = parseInt(
		document.getElementById("heart-count").innerText
	);
	const newNumberOfHearts = numberOfHearts + 1;
	document.getElementById("heart-count").innerText = newNumberOfHearts;
}
function copyCounterFeature() {
	const numberOfCoppies = parseInt(
		document.getElementById("coppy-count").innerText
	);
	const newNumberOfCoppies = numberOfCoppies + 1;
	document.getElementById("coppy-count").innerText = newNumberOfCoppies;
}
// CALL & COINS REDUCING FEATURE
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

// HEART INCREAMENT FEATURE
document
	.getElementById("heart-icon-one")
	.addEventListener("click", function () {
		heartCounterFeature();
	});
document
	.getElementById("heart-icon-two")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-three")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-four")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-five")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-six")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-seven")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-eight")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

document
	.getElementById("heart-icon-nine")
	.addEventListener("click", function () {
		heartCounterFeature();
	});

// copy button id: copy-one
// copy count id: coppy-count
document.getElementById("copy-one").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-two").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-three").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-four").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-five").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-six").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-seven").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-eight").addEventListener("click", function () {
	copyCounterFeature();
});
document.getElementById("copy-nine").addEventListener("click", function () {
	copyCounterFeature();
});
