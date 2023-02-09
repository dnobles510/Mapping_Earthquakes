//Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport
//let map = L.map('mapid').setView([37.5, -122.5], 10);

//Create the map object with center and zoom level
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
    //"type":"Feature",
    //"properties":{
        //"id":"3469",
        //"name":"San Francisco International Airport",
        //"city":"San Francisco",
        //"country":"United States",
        //"faa":"SFO",
        //"icao":"KSFO",
        //"alt":"14",
        //"tz-offset":"-8",
        //"dst":"A",
        //"tz":"America/Los_Angeles"},
        //"geometry":{
            //"type":"Point",
            //"coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON
//L.geoJSON(sanFranAirport, {
    //We turn each feature into a marker on the map
    //onEachFeature: function(feature, layer) {
        //console.log(layer);
        //return L.marker(latlng)
        //layer.bindPopup();  
    //} 

//}).addTo(map);

// Coordinates for each point to be used in the line
//let line = [
    //[33.9416, -118.4085],
    //[37.6214, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
//];

// Create a polyline using the line coordinates and make the line red
//L.polyline(line, {
    //color: "yellow"
//}).addTo(map);


// Loop through the cities array and create one marker for each city
//cityData.forEach(function(city) {
    //console.log(city)
    //L.circleMarker(city.location, {
        //radius: city.population/100000
    //})
    //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    //.addTo(map);
//});
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let sattelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": sattelliteStreets
};

// Create the map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});
// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
//let torontoHoods = "https://raw.githubusercontent.com/dnobles510/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

//Create a style for the lines
//let myStyle = {
    //color: "#ffffa1",
    //weight: 2
//}
// Grabbing our GeoJSON data
//d3.json(torontoHoods).then(function(data) {
   // console.log(data);
    // Creating a GeoJSON layer with the retrieved data
   // L.geoJSON(data).addTo(map);
//});

// Retrieve the earthquake GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});