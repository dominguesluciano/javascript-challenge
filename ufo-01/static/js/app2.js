let ufoData = data;


let button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element
  var inputElementDate = d3.select("#datetime-field");


  // Get the value property of the input element selected
  var inputDateValue = inputElementDate.property("value");


  // fiter data according to value input value element selected
let ufoDataFiltered = ufoData.filter(ufoData => ufoData.datetime === inputDateValue); 

if ( ufoDataFiltered.length > 0 ) {
  // if TRUE append keys to each cell
  let tbody = d3.select("tbody");

  tbody.selectAll("*").remove();
  

  ufoDataFiltered.forEach(
    function(x) {
      let row = tbody.append("tr");
      Object.entries(x).forEach(
        ([key,value]) => {
          let cell = row.append("td").text(value);
        });
      });
      console.log(ufoDataFiltered);

} else {

  alert("No data found")
}



});