"Use strict";
const closeBtn = document.getElementById("close-modal");
const input = document.getElementsByTagName("input");
const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
	e.preventDefault();
	const formData = new FormData(e.target);

	fetch("https://getform.io/f/ce1ab691-8b97-41b6-a81b-0f67207b09c0", {
		method: "POST",
		body: formData,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => console.log(response))
		.catch((error) => console.log(error));
}

function closeModal() {
	console.log("it works");
	closeBtn.style.opacity = 0;
}

function openModal() {
	closeBtn.style.opacity = 1;
}
