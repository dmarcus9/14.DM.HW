// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// made this section it's own function
function tableCreate (UFOdata)
{tbody.html("")
    UFOdata.forEach(function(alienSiting) {
    // console.log(alienSiting); 
    var row = tbody.append("tr");
    Object.entries(alienSiting).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value in the weather report object
      var cell = row.append("td");
      cell.text(value);
    }); });}

tableCreate(tableData) 

// Use a date form in your HTML document and write JavaScript code that will 
// listen for events (filter table click) and takes the input field value (3.4)
// Getting a reference to the button & input element and value property on the page with the id property 

var button = d3.select("#filter-btn");
// This function is triggered when the button is clicked
  // We  use d3 to see the object that dispatched the event
// We use the `on` function in d3 to attach an event to the function
button.on("click", function() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime").property("value");
  // console.log("you clicked the button, your input is: " + inputElement)
  // console.log(d3.event.target);
  var filteredSitings = selectDate(inputElement)
  // and then recreate table with tableCreate function from above
  tableCreate(filteredSitings)  
});
// and search through the `date/time` column to find rows that match user input. 
// (2.7 & 2.8) using  .filter(method) to create a custom filtering function as its argument
function selectDate(date) {
  var filteredSitings = tableData.filter(function(row){return row.datetime === date})
  return filteredSitings;
};
