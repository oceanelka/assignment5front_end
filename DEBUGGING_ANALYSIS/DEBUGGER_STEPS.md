## Front-End Development: Assignment 5

## Author
Elka Evasco

## Breakpoint 1
In this screenshot, the breakpoint was placed before the application retrieves parking violation data 
from the City of Winnipeg API. In this image, the street name entered by the user has already been stored in the streetName, the request of URL has been created in apiURL, and the encoded version is stored in the encodedURL. 

After passing through the code, the getData function executes and retrieves data from API and
that data is stored in the variable "result".

## Breakpoint 2
The breakpoint in this image was placed inside the forEach loop where each record from API is
processed. The item variable contains a single parking 
violation record, and the program is ready to convert the data into a HTML table row result.
After going through the line of codes, the variable row is assigned an HTML string containing values from the object item. 

## Breakpoint 3
The point was placed where the program updates the DOM by inserting new row into the table. 
After going through the code, the row is added to the table body and is displayed on the webpage. This validates that the application is successfully showing the retrieved data. 

## Critical State Analysis
Breakpoint 1 would be the critical breakpoint because it confirms that the program haas successfully captured the user's input and prepared API request. The process depends on this step to get the parking violation data before it can process and display the results.