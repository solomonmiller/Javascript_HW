// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $DateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn1 = document.querySelector("#search");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");
var $searchBtn5 = document.querySelector("#search5");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn1.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick1);
$searchBtn3.addEventListener("click", handleSearchButtonClick2);
$searchBtn4.addEventListener("click", handleSearchButtonClick3);
$searchBtn5.addEventListener("click", handleSearchButtonClick4);

// Set ufo to data initially
var ufo = dataSet;

// renderTable renders the ufo to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < ufo.length; i++) {
    // Get get the current ufo object and its fields
    var ufo_data = ufo[i];
    var fields = Object.keys(ufo_data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufo object, create a new cell at set its inner text to be the current value at the current ufo's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo_data[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set ufo to an array of all ufos whose "state" matches the filter
  ufo = dataSet.filter(function(state) {
    var ufo_state = state.state.toLowerCase();

    // If true, add the ufo to the ufo, otherwise don't add it to ufo
    return ufo_state === filterState;
  });
  renderTable();
}


function handleSearchButtonClick1() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterdate = $DateInput.value;
  
    // Set ufo to an array of all ufos whose "state" matches the filter
  ufo = dataSet.filter(function(datetime) {
    var ufo_date = datetime.datetime;
  
      // If true, add the ufo to the ufo, otherwise don't add it to ufo
    return ufo_date === filterdate;
  });
  renderTable();
}

function handleSearchButtonClick2() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filtercity = $cityInput.value.trim().toLowerCase();
  
    // Set ufo to an array of all ufos whose "state" matches the filter
  ufo = dataSet.filter(function(test) {
    var ufo_city = test.city.toLowerCase();
  
      // If true, add the ufo to the ufo, otherwise don't add it to ufo
    return ufo_city === filtercity;
  });
  renderTable();
}

function handleSearchButtonClick3() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
var filtercountry = $countryInput.value.trim().toLowerCase();

  // Set ufo to an array of all ufos whose "state" matches the filter
ufo = dataSet.filter(function(test) {
  var ufo_country = test.country.toLowerCase();

    // If true, add the ufo to the ufo, otherwise don't add it to ufo
  return ufo_country === filtercountry;
});
renderTable();

}
function handleSearchButtonClick4() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
var filtershape = $shapeInput.value.trim().toLowerCase();

  // Set ufo to an array of all ufos whose "state" matches the filter
ufo = dataSet.filter(function(test) {
  var ufo_shape = test.shape.toLowerCase();

    // If true, add the ufo to the ufo, otherwise don't add it to ufo
  return ufo_shape === filtershape;
});
renderTable();
}
// Render the table for the first time on page load
renderTable();