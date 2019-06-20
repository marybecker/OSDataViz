var map = L.map('map').setView([41.5,-72.6], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFyeS1iZWNrZXIiLCJhIjoiY2p3bTg0bDlqMDFkeTQzcDkxdjQ2Zm8yMSJ9._7mX0iT7OpPFGddTDO5XzQ', {
                       maxZoom: 16,
                       minZoom: 9,
                       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                       id: 'mapbox.streets'
}).addTo(map);

var circle = L.circle([41.3728, -72.3188], {
    color: 'black',
    fillColor: 'black',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

circle.bindPopup("Uncas Pond");
circle.openPopup();
