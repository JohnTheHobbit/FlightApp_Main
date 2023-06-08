const flightSearchForm = document.querySelector('#flightSearchForm');
const flightSearchResults = document.querySelector('#flightSearchResults');
const apiUrl = "http://localhost:8081/api/flights";

// Event listener to process results 
flightSearchForm.addEventListener('submit', function (submission) {
  submission.preventDefault();

// Connect to the FlightApi and retreive all flight data
var xhReq = new XMLHttpRequest();
xhReq.open("GET", apiUrl, false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);
console.log(jsonObject);

let resultsHTML = '<h2>Search Results</h2>';
resultsHTML += '<table>';
// This is simply the headings for the data that will be displayed
resultsHTML += '<tr><th>Airline</th><th>Departure Time</th><th>Departure airport</th><th>Arrival Airport</th></tr>';

//   // Loop to access all rows
jsonObject.forEach(result => {
    resultsHTML += `<tr>
    <td>${result.flightCarrier} </td>
    <td>${result.departureTime}</td>
    <td>${result.flightDeparture}</td>
    <td>${result.flightArrival}</td>         
  </tr>`;
});

// Closing out the HTML table
resultsHTML += '</table>';
 // Setting innerHTML as resultsHTML variable
flightSearchResults.innerHTML = resultsHTML;

});
