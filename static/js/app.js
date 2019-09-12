// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// YOUR CODE HERE!
// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
//EXAMPLE FROM CLASS - using it!

function displayTable(data) {

    //clear table
    tbody.text("");
    
    //load table
    data.forEach(function(sighting) {
        //console.log(sigthing);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
        var cell = row.append("td");
        cell.text(value);
        });
    })};

// display default table

displayTable(tableData);

  // Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
  //    Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// // need a change function that filters the data by date given
var date_change = d3.select("#datetime");

function clickIt() {

    d3.event.preventDefault();

    // get input and raw html node
    var inputElement = d3.select("#datetime");
    
    // get the value of the input element
    var inputValue = inputElement.property("value");

    //filter the data and put it out into the table
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    displayTable(filteredData);
}

date_change.on("change", clickIt);
