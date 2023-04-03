
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
//--------------------------------
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

// function init() {
//   // Get a reference to the dropdown menu
//   let dropdownMenu = d3.select("#country-select");

//     // Load the data from the JSON file
//   d3.json("sample.json").then(data => {
//     console.log(data);
//     // Get the country names from the data
//     let countryNames = data.map(d => d.Countries);
//     console.log(countryNames);

//   // Add options to the select element for each country
//   d3.select("#country-select")
//     .selectAll("option")
//     .data(countryNames)
//     .enter()
//     .append("option")
//     .text(d => d)
//     .attr("value", d => d);

//   createPlots(countryNames[0], data);

//   });
// }  
//------------------------------------------
// // 1. Load the data
// function init() {
//   d3.json("sample.json").then(function(data) {

//     // 2. Create the dropdown menu
//     var dropdown = d3.select("#country-select");
//     var countries = data.map(function(d) { return d.Countries; });
//     countries.forEach(function(country) {
//       dropdown.append("option").text(country);
//     });
  
  
//     // 3. Use the selected country to filter the data
//     dropdown.on("change", function() {
//       var selectedCountry = d3.select(this).property("value");
//       var filteredData = data.filter(function(d) {
//         return d.Countries === selectedCountry;
//       });
//       createPlots(countries[0], data);
//     });
//   } 

//   // Create a function to create chart
// function createPlots(sample, data) {
//   let sampleData = data.samples.filter(d => d.id === sample)[0];

//   // Create bar chart
//     // Create the trace for the bar chart
//   let barDataTrace = [{
//     // Get the top 10 OTUs for the selected sample
//     x: sampleData.sample_values.slice(0, 10).reverse(),
//     y: sampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
//     text: sampleData.otu_labels.slice(0, 10).reverse(),
//     type: "bar",
//     orientation: "h"
//   }];
//     // Define the layout for the bar chart
//   let barLayout = {
//     title: `Top 10 OTUs ${sample}`,
//     xaxis: { title: "Sample Values" },
//     yaxis: { title: "OTU IDs" }
//   };

//   Plotly.newPlot("bar", barDataTrace, barLayout);

//   // Create bubble chart
//     // Create the trace for the bubble chart
//   let bubbleDataTrace = [{
//     x: sampleData.otu_ids,
//     y: sampleData.sample_values,
//     text: sampleData.otu_labels,
//     mode: "markers",
//     marker: {
//       size: sampleData.sample_values,
//       color: sampleData.otu_ids,
//       colorscale: "Earth"
//     }
//   }];
//     // Define the layout for the bubble chart
//   let bubbleLayout = {
//     xaxis: { title: "OTU IDs" },
//     yaxis: { title: "Sample Values" }
//   };

//   Plotly.newPlot("bubble", bubbleDataTrace, bubbleLayout);



//   // Display metadata
//     // Retrieve all metadata and filtering
//   let metaData = data.metadata.filter(d => d.id == sample)[0];
//     // Clear out any previously displayed metadata information
//   let metaDataPanel = d3.select("#sample-metadata");
//   metaDataPanel.html("");
//     // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs to the panel
//   Object.entries(metaData).forEach(([key,value]) => {
//     metaDataPanel.append("h6").text(`${key}: ${value}`);
//   });

//     // Create gauge chart
//   let wfreq = metaData.wfreq;
//   let guageTrace = [
//       {
//           domain: { x: [0, 1], y: [0, 1] },
//           value: parseFloat(wfreq),
//           title: {
//             text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
//             font: {color: "black", size: 24}
//             },
//           type: "indicator",
//           mode: "gauge+number",
//           gauge: { axis: { range: [null, 9] },
//                    steps: [
//                       { range: [0, 2], color: "#FEF9E7" },
//                       { range: [2, 4], color: "#FCF3CF" },
//                       { range: [4, 6], color: "#F9E79F" },
//                       { range: [6, 8], color: "#F7DC6F" },
//                       { range: [8, 9], color: "#F4D03F" }
//                     ]

//                   }
//       }
//     ];
//   let guageLayout = { 
//             width: 700, 
//             height: 600, 
//             margin: { t: 0, b: 0 } 
//     };
//   Plotly.newPlot("gauge", guageTrace, guageLayout);
// }

// // Create function that updates dashboard when sample is changed
// function optionChanged(value) {
//   d3.json(url).then(data => {
//     createPlots(value, data);
//   });
// }

// // Call the initial function
// init();
//-----------------------
// Load the GeoJSON file and Private debt, loans and debt securities data
// Load the GeoJSON file
// Initialize the map
// document.addEventListener('touchstart', function(e) {
//   // your event handler code here
// }, {passive: true});


//----------------------------------------
// var map = L.map('map').setView([0, 0], 2);

// // Add the base tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Load the debt data
// d3.json("sample.json").then(function(data) {
//   var debtData = {};
//   data.forEach(function(d) {
//     if (d['2021'] !== "no data") {
//       debtData[d['Countries']] = parseFloat(d['2021']);
//     }
    
//   });

//   // Load the GeoJSON data and add it to the map
//   d3.json("countries.geojson").then(function(data) {
//     var countries = L.geoJson(data, {
//       style: function(feature) {
//         var country = feature.properties.ADMIN;
//         var debtRatio = debtData[country];
        
//         if (debtRatio) {
//           if (debtRatio < 30) {
//             return { color: 'green' };
//           } else if (debtRatio < 60) {
//             return { color: 'orange' };
//           } else {
//             return { color: 'red' };
//           }
//         } else {
//           return { color: 'gray' };
//         }
//       }
//     });
//     console.log(typeof countries);
//     console.log(countries);
//     console.log(debtData);
//     countries.addTo(map);
//   });
// });

//----------------------------------------------

// Define the map and set the initial view
var map = L.map('map').setView([0, 0], 2);

// Add the base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Load the debt data from a JSON file using D3
d3.json("sample.json").then(function(data) {
  // Initialize an empty object to store the debt data
  var debtData = {};
  
  // Loop through the data and store the debt-to-GDP ratios by country
  data.forEach(function(d) {
    if (d['2021'] !== "no data") {
      debtData[d['Countries']] = parseFloat(d['2021']);
    }
  });

  // Load the GeoJSON data and add it to the map
  d3.json("countries.geojson").then(function(data) {
    // Create a Leaflet GeoJSON layer with styles based on the debt data
    var countries = L.geoJson(data, {
      style: function(feature) {
        // Get the country name and debt-to-GDP ratio
        var country = feature.properties.ADMIN;
        var debtRatio = debtData[country];
        
        // Set the color based on the debt-to-GDP ratio
        if (debtRatio) {
          if (debtRatio < 25) {
            return { color: '#f5f5dc' };
          } else if (debtRatio < 50) {
            return { color: '#e0e094' };
          } 
          else if (debtRatio < 75) {
            return { color: '#50bcdf' };
          } else if (debtRatio < 100) {
            return { color: '#00a000' };
          } else {
            return { color: '#006600' };
          }
        } else {
          return { color: 'gray' };
        }
      }
    });
    
    // Add the countries layer to the map
    countries.addTo(map);
  });
});


// // 1. Load the data
// function init() {
//   d3.json("sample.json").then(function(data) {

//     // 2. Create the dropdown menu
//     var dropdown = d3.select("#country-select");
//     var countries = data.map(function(d) { return d.Countries; });
//     countries.forEach(function(country) {
//       dropdown.append("option").text(country);
//     });
  
  
//     // 3. Use the selected country to filter the data
//     dropdown.on("change", function() {
//       var selectedCountry = d3.select(this).property("value");
//       var filteredData = data.filter(function(d) {
//         return d.Countries === selectedCountry;
//       });
//       createPlots(countries[0], data);
//     });
//   } 

//   // Create a function to create chart
// function createPlots(sample, data) {
//   let sampleData = data.samples.filter(d => d.id === sample)[0];

//   // Create bar chart
//     // Create the trace for the bar chart
//   let barDataTrace = [{
//     // Get the top 10 OTUs for the selected sample
//     x: sampleData.sample_values.slice(0, 10).reverse(),
//     y: sampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
//     text: sampleData.otu_labels.slice(0, 10).reverse(),
//     type: "bar",
//     orientation: "h"
//   }];
//     // Define the layout for the bar chart
//   let barLayout = {
//     title: `Top 10 OTUs ${sample}`,
//     xaxis: { title: "Sample Values" },
//     yaxis: { title: "OTU IDs" }
//   };

//   Plotly.newPlot("bar", barDataTrace, barLayout);

//   // Create bubble chart
//     // Create the trace for the bubble chart
//   let bubbleDataTrace = [{
//     x: sampleData.otu_ids,
//     y: sampleData.sample_values,
//     text: sampleData.otu_labels,
//     mode: "markers",
//     marker: {
//       size: sampleData.sample_values,
//       color: sampleData.otu_ids,
//       colorscale: "Earth"
//     }
//   }];
//     // Define the layout for the bubble chart
//   let bubbleLayout = {
//     xaxis: { title: "OTU IDs" },
//     yaxis: { title: "Sample Values" }
//   };

//   Plotly.newPlot("bubble", bubbleDataTrace, bubbleLayout);



//   // Display metadata
//     // Retrieve all metadata and filtering
//   let metaData = data.metadata.filter(d => d.id == sample)[0];
//     // Clear out any previously displayed metadata information
//   let metaDataPanel = d3.select("#sample-metadata");
//   metaDataPanel.html("");
//     // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs to the panel
//   Object.entries(metaData).forEach(([key,value]) => {
//     metaDataPanel.append("h6").text(`${key}: ${value}`);
//   });

//     // Create gauge chart
//   let wfreq = metaData.wfreq;
//   let guageTrace = [
//       {
//           domain: { x: [0, 1], y: [0, 1] },
//           value: parseFloat(wfreq),
//           title: {
//             text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
//             font: {color: "black", size: 24}
//             },
//           type: "indicator",
//           mode: "gauge+number",
//           gauge: { axis: { range: [null, 9] },
//                    steps: [
//                       { range: [0, 2], color: "#FEF9E7" },
//                       { range: [2, 4], color: "#FCF3CF" },
//                       { range: [4, 6], color: "#F9E79F" },
//                       { range: [6, 8], color: "#F7DC6F" },
//                       { range: [8, 9], color: "#F4D03F" }
//                     ]

//                   }
//       }
//     ];
//   let guageLayout = { 
//             width: 700, 
//             height: 600, 
//             margin: { t: 0, b: 0 } 
//     };
//   Plotly.newPlot("gauge", guageTrace, guageLayout);
// }

// // Create function that updates dashboard when sample is changed
// function optionChanged(value) {
//   d3.json(url).then(data => {
//     createPlots(value, data);
//   });
// }

// // Call the initial function
// init();
