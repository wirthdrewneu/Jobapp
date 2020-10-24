const divCal = document.querySelector("#calendardata");
const divErr = document.querySelector("#divErr");
divCal.textContent = "calendar data goes here";

function populateCalendar(apps) {
	for (let a of apps) {
		const liP = document.createElement("li");
		liP.innerHTML = `${a.Stage} <br>${a.Company} <br>${a.Date}`;
		divCal.appendChild(liP);
	}
}

fetch("/calendar")
	.then((res) => res.json())
	.then(populateCalendar)
	.catch((err) => {
		divErr.textContent = err.message;
	});
	
