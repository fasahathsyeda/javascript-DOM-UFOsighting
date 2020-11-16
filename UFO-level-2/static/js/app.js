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
var date=d3.select("#datetime")
var stchange=d3.select("#state");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
date.on("change",runDate);
stchange.on("change",runState);


// Complete the event handler function for the form
function runEnter() {

    // // Prevent the page from refreshing
    // d3.event.preventDefault();
    
    // // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime");
  
    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
  
    // var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // var dupstates=filteredData.map(entry=>entry.state);
    // var ust=[...new Set(dupstates)];
    // console.log(ust[2]);
    // // var uniquestate=[];
    // // for (var i=0; i < dupstates.length; i++){
    // //   if(dupstates[i]) not in (uniquestate)
    // //     uniquestate.push(dupstates[i]);
      
    // // }
    // // console.log(uniquestate);
    // console.log(filteredData);
    // var state=d3.select("#state");
    // for (var i=0;i<ust.length; i++){
    //   //var selstate=d3.select("#state");
    //   var st=state.append("option");
    //   st.text(ust[i]);
    // }



  //var stFiladata=filteredData.filter(filteredData => filteredData.state ===)
    
  
    // remove any children from the table to
    tbody.html("");
    filteredData.forEach((signting) => {
      var row = tbody.append("tr");
      Object.entries(signting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };

   function runDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    var dupstates=filteredData.map(entry=>entry.state);
    var ust=[...new Set(dupstates)];
    console.log(ust[2]);
    
    console.log(filteredData);

    var select = d3.select('body')
  .append('select')
  	.attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
	.data(data).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
	selectValue = d3.select('select').property('value')
	d3.select('body')
		.append('p')
		.text(selectValue + ' is the last selected option.')
};
    //var state=d3.select("#state");
    // for (var i=0;i<ust.length; i++){
    //   //var selstate=d3.select("#state");
    //   // var st=state.append("option");
    //   // st.text(ust[i]);

    //   var st=state.append(attr('class','style'));
    // var options = st.selectAll('option').append('option')
    //         .text(ust[i]);//.forEach(function (d) {return d.Name}));
    // console.log(options);
    // }
  }

  function runState(){
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var state=d3.select("#state");
    var selectedstate=state.select("option").value;
    console.log(selectedstate);

  }
