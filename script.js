/*
Elka Evasco
March 19, 2026
https://data.winnipeg.ca/resource/bhrt-29rb.json

*/

const form = document.getElementById("mySearchForm");
const input = document.getElementById("searchInput");
const tableBody = document.querySelector("#mySearchTable tbody")

form.addEventListener("submit", (event) => {
	event.preventDefault(); 
	demonstrateAsyncCall();
})

async function getData(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
}

async function demonstrateAsyncCall() {

	console.log("Starting async operation...");
	
	let streetName = input.value; // This would be coming from the form input.
	const apiUrl =   "https://data.winnipeg.ca/resource/bhrt-29rb.json?" +
				`$where=street LIKE '%${streetName}%'` +
				"&$order=issue_date DESC" +
				"&$limit=100";

	const encodedURL = encodeURI(apiUrl);
	const result = await getData(encodedURL);

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

	console.log(result);
}