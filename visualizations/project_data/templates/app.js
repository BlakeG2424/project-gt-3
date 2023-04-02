
// // Define Url in a constant varible
// const path = "sample.json";

// // Define a function to initialize the dashboard
// function init() {
//     // Get a reference to the dropdown menu
//   let dropdownMenu = d3.select("#country-select");

//     // Load the data from the JSON file
// d3.json(url).then(function(data) {
//   var countries = d3.map(data, function(d){return(d.Countries)}).keys();
//   var select = d3.select("#country-select");
//   select.selectAll("option")
//     .data(countries)
//     .enter()
//     .append("option")
//     .text(function(d){ return d; })
//     .attr("value", function(d){ return d; });

//   select.on("change", function() {
//     var selectedCountry = d3.select(this).property("value");
//     var filteredData = data.filter(function(d) {
//       return d.Countries === selectedCountry;
//     });

//     var margin = {top: 20, right: 20, bottom: 30, left: 40};
//     var width = 960 - margin.left - margin.right;
//     var height = 500 - margin.top - margin.bottom;

//     d3.select("#chart svg").remove();

//     var svg = d3.select("#chart")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     var x = d3.scaleBand()
//       .range([0, width])
//       .padding(0.1);

//     var y = d3.scaleLinear()
//       .range([height, 0]);

//     x.domain(filteredData.map(function(d) { return d.Column1; }));
//     y.domain([0, d3.max(filteredData, function(d) { return +d3.values(d).slice(1,-2); })]);

//     svg.selectAll(".bar")
//       .data(filteredData)
//       .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.Column1); })
//       .attr("width", x.bandwidth())
//       .attr("y", function(d) { return y(+d3.values(d).slice(1,-2)); })
//       .attr("height", function(d) { return height - y(+d3.values(d).slice(1,-2)); });
//   });
// });
//let dropdownMenu = d3.select("#country-select");

// Load the data from the JSON file
// d3.json("sample.json").then(data => {
//   console.log(data)
// // // Get the sample names from the data
//   let countryNames = data["Countries"];
//   console.log(countryNames)

// // // Add  samples to dropdown menu
//   countryNames.forEach(id => {

// //     dropdownMenu.append("option")
// //     .text(id)
// //     .property("value",id);
//   // });


// //   createPlots(countryNames[0], data);
// });


// ------------------------------------

// d3.json("sample.json").then(data => {
//   console.log(data);
//   // Get the country names from the data
//   let countryNames = data.map(d => d.Countries);
//   console.log(countryNames);

//   // Add options to the select element for each country
//   d3.select("#country-select")
//     .selectAll("option")
//     .data(countryNames)
//     .enter()
//     .append("option")
//     .text(d => d)
//     .attr("value", d => d);


// });
// --------------------------------
// select the dropdown menu element
// const select = d3.select('#country-select');

// // get the distinct country names from the data
// const countryNames = data.map(d => d.Countries).filter((value, index, self) => self.indexOf(value) === index);

// // add options to the dropdown menu
// select.selectAll('option')
//   .data(countryNames)
//   .enter()
//   .append('option')
//   .text(d => d);

// // listen for a change event
// select.on('change', function() {
//   // get the selected country value
//   const selectedCountry = d3.select(this).property('value');

//   // filter the data array based on the selected country
//   const filteredData = data.filter(d => d.Countries === selectedCountry);

//   // update the chart or table using the filtered data set
//   updateChart(filteredData); // replace this with your chart or table update function
// });
// ---------------

function init() {
  // Get a reference to the dropdown menu
  let dropdownMenu = d3.select("#country-select");

    // Load the data from the JSON file
  d3.json("sample.json").then(data => {
    console.log(data);
    // Get the country names from the data
    let countryNames = data.map(d => d.Countries);
    console.log(countryNames);

  // Add options to the select element for each country
  d3.select("#country-select")
    .selectAll("option")
    .data(countryNames)
    .enter()
    .append("option")
    .text(d => d)
    .attr("value", d => d);

  createPlots(countryNames[0], data);

  });
}  

