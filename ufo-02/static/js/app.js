let ufoData = data;

let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let clear = d3.select("#clear-btn");


button.on("click", getData);

clear.on("click", resetTable);

function clearData(){
    
    delete filteredUfoData;
    tbody.selectAll("*").remove();

};

function resetTable(){
    let elements = document.getElementsByTagName('select');
    for (var i = 0; i < elements.length; i++)
{
    elements[i].selectedIndex = 0;
}
delete filteredUfoData;
tbody.selectAll("*").remove();

}


function getData(){
    
    // call function that clears variable holding filtered data and remove all existing <tbody> elements
    //clearData();

    // method chaining to select html element by id and store value typed in it 
    // used .toLowerCase method so no matter what user types in, gets lowercase just as original data
    let inputDateValue = d3.select("#datetime-field").property("value");
    let inputCityValue = d3.select("#city-field").property("value").toLowerCase();
    let inputStateValue = d3.select("#selectState").property("value").toLowerCase();
    let inputCountryValue = d3.select("#selectCountry").property("value").toLowerCase();
    let inputShapeValue = d3.select("#selectShape").property("value").toLowerCase();

    //console.log(inputStateValue);
    // create a object to store all input
    let storeInputs = {
        "datetime":inputDateValue,
        "city": inputCityValue,
        "state": inputStateValue,
        "country": inputCountryValue,
        "shape": inputShapeValue
      };
    
      //console.log(storeInputs);
      
      // loop through storeInput and delete when nothing was input 
      for (let key in storeInputs) {    
        if (storeInputs[key] === "") {
          delete storeInputs[key];
        }
      };
      
      // use method Object.entries (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 
    let filters = Object.entries(storeInputs);
    console.log("filter:");
    console.log(filters);

    // fiter data according to value input value element selected
    let filteredUfoData = ufoData.filter(item => filters.every(([key, value]) => item[key] === value));
    //console.log(filteredUfoData);

    if(filteredUfoData.length >0){
        generate_table(filteredUfoData);
    }
    else {
        alert("Select valid options")
    }

}


function generate_table(filteredUfoData){

filteredUfoData.forEach(function(x) {
    //console.log(x);
    let row = tbody.append("tr");
    Object.entries(x).forEach(function([key,value]) {
        //console.log(key,value);
        let cell = tbody.append("td");
        cell.text(value);
        
    });
});
}
let listUniqueStates = [];

// loop through objects and get existing unique States
const map = new Map();
for (const item of ufoData) {
    if(!map.has(item.state)){
       map.set(item.state, true);
        listUniqueStates.push(
           // append/store unique results into a variable 
            item.state.toUpperCase()
        );
    }
}
////

// states

////
// sort state names
let stateList = listUniqueStates.sort();

var stateDropdown = document.getElementById("selectState");
           
//Add the Options to the DropDownList.
for (let i = 0; i < stateList.length; i++) {
    let option = document.createElement("option");

    //Set Customer Name in Text part.
    option.innerHTML = stateList[i];

    //Set CustomerId in Value part.
    option.value = stateList[i];

    //Add the Option element to DropDownList.
    stateDropdown.options.add(option);
}
////

// shapes

////
let listUniqueShapes = [];

// loop through objects and get existing unique States
const mapShapes = new Map();
for (const item of ufoData) {
    if(!mapShapes.has(item.shape)){
        mapShapes.set(item.shape, true);
       listUniqueShapes.push(
           // append/store unique results into a variable 
            item.shape.toUpperCase()
        );
    }
}
//variable to told list of date

// sort state names
let shapeList = listUniqueShapes.sort();

var shapeDropdown = document.getElementById("selectShape");
           
//Add the Options to the DropDownList.
for (let i = 0; i < shapeList.length; i++) {
    let option = document.createElement("option");

    //Set Customer Name in Text part.
    option.innerHTML = shapeList[i];

    //Set CustomerId in Value part.
    option.value = shapeList[i];

    //Add the Option element to DropDownList.
    shapeDropdown.options.add(option);
}
////

// country

////
let listUniqueCountry = [];

// loop through objects and get existing unique States
const mapCountry = new Map();
for (const item of ufoData) {
    if(!mapCountry.has(item.country)){
        mapCountry.set(item.country, true);
       listUniqueCountry.push(
           // append/store unique results into a variable 
            item.country.toUpperCase()
        );
    }
}

// sort state names
let countryList = listUniqueCountry.sort();

var countryDropdown = document.getElementById("selectCountry");
           
//Add the Options to the DropDownList.
for (let i = 0; i < countryList.length; i++) {
    let option = document.createElement("option");

    //Set Customer Name in Text part.
    option.innerHTML = countryList[i];

    //Set CustomerId in Value part.
    option.value = countryList[i];

    //Add the Option element to DropDownList.
    countryDropdown.options.add(option);
}