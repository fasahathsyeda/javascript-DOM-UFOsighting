// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
data.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button=d3.select("#filter-btn");
var form=d3.select("#form");
var dateEvnt=d3.select("#datetime");
var countryEvnt=d3.select("#country");
var stateEvnt=d3.select("#state");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
dateEvnt.on("change",runDate);
countryEvnt.on("change",runCountry);
//stateEvnt.on("change",runState);

function runDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var date = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateValue = date.property("value");
  
    console.log(dateValue);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === dateValue);
    console.log(filteredData);
    
    var dupCountry=filteredData.map(entry=>entry.country);
    var uniqueCountry=[...new Set(dupCountry)];
    console.log(uniqueCountry);
    
    var countryhtml=d3.select("#country");
    for (var i=0;i<uniqueCountry.length; i++){
      //var selstate=d3.select("#state");
      var country=countryhtml.append("option");
      country.text(uniqueCountry[i]);
      
    }

    
};

 function runCountry(){

  // Prevent the page from refreshing
  d3.event.preventDefault();
    
  // Select the input element and get the raw HTML node
  var date = d3.select("#datetime");

  // Get the value property of the input element
  var dateValue = date.property("value");

  console.log(dateValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === dateValue);
  console.log(filteredData);




  var country=d3.select("#country");
  var selectedcountry=country.property("value");
  console.log(selectedcountry);


  var filteredCountry=filteredData.filter(filteredData => filteredData.country === selectedcountry );
  console.log(filteredCountry);

  var dupStates = filteredCountry.map(entry => entry.state);
  var uniqueState=[...new Set(dupStates)];
  console.log(uniqueState);
  var statehtml=d3.select("#state");
  for (var i=0;i<uniqueState.length; i++){
      //var selstate=d3.select("#state");
    var state=statehtml.append("option");
    state.text(uniqueState[i]);
  }

  // tbody.html("");
  // filteredData.forEach((signting) => {
  // var row = tbody.append("tr");
  // Object.entries(signting).forEach(([key, value]) => {
  //   var cell = row.append("td");
  //   cell.text(value);
  //   });
  // });
 };





// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
    
  // Select the input element and get the raw HTML node
  var date = d3.select("#datetime");

  //var filDate=tableData.filter(tableData => tableData.date === inputDate);

  // Get the value property of the input element
  var dateValue = date.property("value");

  var country=d3.select("#country");
  var selectedcountry=country.property("value");






  var state=d3.select("#state");
  var selectedstate=state.property("value");
  console.log(selectedstate);
  var filteredD=tableData.filter(tableData => tableData.datetime === dateValue && tableData.country === selectedcountry && tableData.state === selectedstate );
  console.log(filteredD);
  var tbody=d3.select("tbody");
  tbody.html("");
  filteredD.forEach((signting) => {
  var row = tbody.append("tr");
  Object.entries(signting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });

};
