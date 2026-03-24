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

// Async function that fetches json data from API
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

// Search API and displays results 
async function demonstrateAsyncCall() {
	console.log("Starting async operation...");
	
	// Get the value entered by the user from the input field 
	let streetName = input.value; // This would be coming from the form input.
	
	// API URL using the street name entered. 
	const apiUrl =   "https://data.winnipeg.ca/resource/bhrt-29rb.json?" +
				`$where=street LIKE '%${streetName}%'` +
				"&$order=issue_date DESC" +
				"&$limit=100";

	const encodedURL = encodeURI(apiUrl);
	const result = await getData(encodedURL);

	tableBody.innerHTML = "";

	if(streetName !== "" && result.length > 0) {
		tableSection.style.display = "block";
	}

	// Add results to the table
	result.forEach(item => {
        const row = `
          <tr>
            <td>${item.street || "N/A"}</td>
            <td>${item.issue_date || "N/A"}</td>
			<td>${item.violation || "N/A"}</td>
			<td>${item.discounted_fine || "N/A"}</td>
			<td>${item.full_fine || "N/A"}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });

	// Prints result in console 
	console.log(result);
}