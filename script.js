const callData = [];
// REUSABLE FUNCTIONS
function renderHistory() {
	const historyContainer = document.getElementById("history-card-container");
	historyContainer.innerHTML = "";
	for (const data of callData) {
		const div = document.createElement("div");
		div.innerHTML = `
		<div
								class="history-card flex justify-between items-center p-2 rounded-[8px] bg-[#f6f6f6]"
							>
								<div class="history-card-left w-[160px]">
									<p class="font-bold text-[16px]">${data.name}</p>
									<p class="text-gray-500 font-semibold">
										${data.number}
									</p>
								</div>
								<div class="history-card-right">
									<p class="text-[14px]">${data.time}</p>
								</div>
							</div>
		`;
		historyContainer.prepend(div);
	}
}
function callingFeature(nameId, numberId) {
	const numberofCoins = parseInt(document.getElementById("coins").innerText);
	if (numberofCoins < 20) {
		alert(
			"❌ You do not have enough coins. You need atleast 20 coins to make a call"
		);
	} else {
		const serviceName = document.getElementById(nameId).innerText;
		const serviceNumber = document.getElementById(numberId).innerText;
		const newNumberOfCoins = numberofCoins - 20;
		document.getElementById("coins").innerText = newNumberOfCoins;
		alert(`📞Calling ${serviceName} ${serviceNumber}...`);
		const data = {
			name: serviceName,
			number: serviceNumber,
			time: new Date().toLocaleTimeString(),
		};
		callData.push(data);
		renderHistory();
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
function copyOnclickFeature(numberId) {
	const textToCopy = document.getElementById(numberId).innerText;
	navigator.clipboard.writeText(textToCopy);
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

// COPY ON CLICK FEATURE
document.getElementById("copy-one").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-one");
});
document.getElementById("copy-two").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-two");
});
document.getElementById("copy-three").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-three");
});
document.getElementById("copy-four").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-four");
});
document.getElementById("copy-five").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-five");
});
document.getElementById("copy-six").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-six");
});
document.getElementById("copy-seven").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-seven");
});
document.getElementById("copy-eight").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-eight");
});
document.getElementById("copy-nine").addEventListener("click", function () {
	copyCounterFeature();
	copyOnclickFeature("service-number-nine");
});

// CLEAR HISTORY BUTTON
document.getElementById("clear-btn").addEventListener("click", function () {
	callData.splice(0, callData.length);
	renderHistory();
});
renderHistory();
