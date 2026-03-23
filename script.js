/*
Elka Evasco
March 19, 2026
https://data.winnipeg.ca/resource/bhrt-29rb.json
*/

// This gets the search form, search input and table body from the HTML
const form = document.getElementById("mySearchForm");
const input = document.getElementById("searchInput");
const tableBody = document.querySelector("#mySearchTable tbody")

//  Event of form submission
form.addEventListener("submit", (event) => {
	event.preventDefault(); 
	demonstrateAsyncCall();
})

// The header
document.addEventListener("DOMContentLoaded", () => {
	const header = document.getElementById("header")
	const header1 = document.createElement("h1")

	header1.textContent = "Winnipeg Parking Violations"
	header.appendChild(header1)
})

// Async function that fetch the json  data from API
async function getData(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			resolve(data); 
		} catch (error) {
			reject(error); // Returns error if something fails.
		}
	});
}


