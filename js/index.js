// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
//     center: {lat: 47.6062, lng: -122.3321},
//     zoom: 10
//
//     function addMarker(location) {
//        marker = new google.maps.Marker({
//            position: location,
//            map: map
//        });
//    }
//   });
// }

var neighbors = [
{lat: 41.081445, lng: -81.519005},
{lat: 42.652579, lng: -73.756232},
{lat: 61.218056, lng: -149.900278},
{lat: 32.735687, lng: -97.108066},
{lat: 35.595058, lng: -82.551487},
{lat: 33.748995, lng: -84.387982},
{lat: 33.473498, lng: -82.010515},
{lat: 30.267153, lng: -97.743061},
{lat: 35.373292, lng: -119.018712},
{lat: 39.290385, lng: -76.612189},
{lat: 30.458283, lng: -91.14032},
{lat: 33.520661, lng: -86.80249},
{lat: 43.61871, lng: -116.214607},
{lat: 42.360082, lng: -71.05888},
{lat: 45.676998, lng: -111.042934},
{lat: 42.886447, lng: -78.878369},
{lat: 41.97788, lng: -91.665623},
{lat: 40.110588, lng: -88.20727},
{lat: 35.9132, lng: -79.055845},
{lat: 38.34982, lng: -81.632623},
{lat: 32.85462, lng: -79.97481},
{lat: 35.227087, lng: -80.843127},
{lat: 38.029306, lng: -78.476678},
{lat: 35.04563, lng: -85.30968},
{lat: 41.139981, lng: -104.820246},
{lat: 41.878114, lng: -87.629798},
{lat: 39.103118, lng: -84.51202},
{lat: 41.49932, lng: -81.694361},
{lat: 38.833882, lng: -104.821363},
{lat: 38.951705, lng: -92.334072},
{lat: 34.00071, lng: -81.034814},
{lat: 39.961176, lng: -82.998794},
{lat: 27.800583, lng: -97.396381},
{lat: 32.776664, lng: -96.796988},
{lat: 41.519018, lng: -90.542196},
{lat: 39.758948, lng: -84.191607},
{lat: 39.840315, lng: -88.9548},
{lat: 39.739236, lng: -104.990251},
{lat: 41.600545, lng: -93.609106},
{lat: 42.331427, lng: -83.045754},
{lat: 39.158168, lng: -75.524368},
{lat: 42.500558, lng: -90.664572},
{lat: 35.994033, lng: -78.898619},
{lat: 31.761878, lng: -106.485022},
{lat: 44.052069, lng: -123.086754},
{lat: 47.978985, lng: -122.202079},
{lat: 64.837778, lng: -147.716389},
{lat: 46.841988, lng: -96.716831},
{lat: 35.198284, lng: -111.651302},
{lat: 26.122439, lng: -80.137317},
{lat: 41.079273, lng: -85.139351},
{lat: 32.755488, lng: -97.330766},
{lat: 36.746842, lng: -119.772587},
{lat: 29.651634, lng: -82.324826},
{lat: 39.063871, lng: -108.550649},
{lat: 42.96336, lng: -85.668086},
{lat: 44.519159, lng: -88.019826},
{lat: 35.612661, lng: -77.366354},
{lat: 34.852618, lng: -82.39401},
{lat: 40.273191, lng: -76.886701},
{lat: 41.763711, lng: -72.685093},
{lat: 21.306944, lng: -157.858333},
{lat: 34.5037, lng: -93.05518},
{lat: 29.760427, lng: -95.369803},
{lat: 34.730369, lng: -86.586104},
{lat: 43.491651, lng: -112.033965},
{lat: 39.768403, lng: -86.158068},
{lat: 41.661128, lng: -91.530168},
{lat: 42.443961, lng: -76.501881},
{lat: 32.298757, lng: -90.18481},
{lat: 30.332184, lng: -81.655651},
{lat: 38.576702, lng: -92.173516},
{lat: 41.525031, lng: -88.081725},
{lat: 37.084227, lng: -94.513281},
{lat: 58.301944, lng: -134.419722},
{lat: 42.291707, lng: -85.587229},
{lat: 48.191989, lng: -114.316813},
{lat: 39.099727, lng: -94.578567},
{lat: 35.960638, lng: -83.920739},
{lat: 57.79, lng: -152.407222},
{lat: 40.416702, lng: -86.875287},
{lat: 30.22409, lng: -92.019843},
{lat: 30.226595, lng: -93.217376},
{lat: 34.483901, lng: -114.322455},
{lat: 41.311367, lng: -105.591101},
{lat: 36.169941, lng: -115.13983},
{lat: 38.971669, lng: -95.23525},
{lat: 38.040584, lng: -84.503716},
{lat: 34.833332, lng: -92.253891},
{lat: 41.73698, lng: -111.833836},
{lat: 35.880036, lng: -106.303114},
{lat: 33.77005, lng: -118.193739},
{lat: 38.252665, lng: -85.758456},
{lat: 40.397761, lng: -105.07498},
{lat: 33.577863, lng: -101.855166},
{lat: 37.413754, lng: -79.142246},
{lat: 34.724776, lng: -100.534014},
{lat: 25.76168, lng: -80.19179},
{lat: 43.038902, lng: -87.906474},
{lat: 44.977753, lng: -93.265011},
{lat: 48.232967, lng: -101.292291},
{lat: 46.878718, lng: -113.996586},
{lat: 30.695366, lng: -88.039891},
{lat: 31.511907, lng: -87.460397},
{lat: 32.366805, lng: -86.299969},
{lat: 33.68906, lng: -78.886694},
{lat: 36.184418, lng: -86.738475},
{lat: 40.654615, lng: -73.559413},
{lat: 41.308274, lng: -72.927884},
{lat: 40.678178, lng: -73.944158},
{lat: 40.78306, lng: -73.971249},
{lat: 40.728224, lng: -73.794852},
{lat: 40.681815, lng: -74.208273},
{lat: 35.222567, lng: -97.439478},
{lat: 37.804364, lng: -122.271114},
{lat: 31.845682, lng: -102.367643},
{lat: 35.46756, lng: -97.516428},
{lat: 47.037874, lng: -122.900695},
{lat: 41.252363, lng: -95.997988},
{lat: 33.717471, lng: -117.831143},
{lat: 28.538335, lng: -81.379236},
{lat: 40.693649, lng: -89.588986},
{lat: 39.952584, lng: -75.165222},
{lat: 33.448377, lng: -112.074037},
{lat: 40.440625, lng: -79.995886},
{lat: 33.019843, lng: -96.698886},
{lat: 43.661471, lng: -70.255326},
{lat: 45.523062, lng: -122.676482},
{lat: 41.823989, lng: -71.412834},
{lat: 35.77959, lng: -78.638179},
{lat: 39.516934, lng: -119.816219},
{lat: 37.540725, lng: -77.436048},
{lat: 37.27097, lng: -79.941427},
{lat: 44.012122, lng: -92.480199},
{lat: 43.16103, lng: -77.610922},
{lat: 33.394266, lng: -104.523024},
{lat: 38.581572, lng: -121.4944},
{lat: 40.760779, lng: -111.891047},
{lat: 29.424122, lng: -98.493628},
{lat: 32.715738, lng: -117.161084},
{lat: 37.774929, lng: -122.419416},
{lat: 37.338208, lng: -121.886329},
{lat: 29.883275, lng: -97.941394},
{lat: 27.336435, lng: -82.530653},
{lat: 32.083541, lng: -81.099834},
{lat: 47.606209, lng: -122.332071},
{lat: 32.525152, lng: -93.750179},
{lat: 31.5455, lng: -110.277286},
{lat: 43.544596, lng: -96.731103},
{lat: 47.65878, lng: -117.426047},
{lat: 39.781721, lng: -89.650148},
{lat: 37.208957, lng: -93.292299},
{lat: 45.557945, lng: -94.16324},
{lat: 37.096528, lng: -113.568416},
{lat: 38.627003, lng: -90.199404},
{lat: 44.953703, lng: -93.089958},
{lat: 41.05343, lng: -73.538734},
{lat: 43.048122, lng: -76.147424},
{lat: 47.252877, lng: -122.444291},
{lat: 27.950575, lng: -82.457178},
{lat: 39.055824, lng: -95.689018},
{lat: 32.221743, lng: -110.926479},
{lat: 36.153982, lng: -95.992775},
{lat: 34.257607, lng: -88.703386},
{lat: 33.209841, lng: -87.569173},
{lat: 42.562967, lng: -114.460871},
{lat: 45.638728, lng: -122.661486},
{lat: 31.549333, lng: -97.14667},
{lat: 38.907192, lng: -77.036871},
{lat: 42.534899, lng: -92.445316},
{lat: 37.687176, lng: -97.330053},
{lat: 39.739072, lng: -75.539788},
{lat: 34.225726, lng: -77.94471},
{lat: 36.09986, lng: -80.244216},
{lat: 41.079933, lng: -80.66321},
{lat: 32.692651, lng: -114.627692}
];

var markers = [];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
    zoom: 2,
    center: {lat: 39.8282, lng: -98.5795},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}

window.onload = function drop() {
  clearMarkers();
  for (var j = 0; j < neighbors.length; j++) {
    addMarkerWithTimeout(neighbors[j], j * 8000);
  }
};

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    var contentString = 'Test';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var bounds = new google.maps.LatLngBounds(),
      marker = new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
      });
    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });

    bounds.extend(marker.getPosition());
    markers.push(marker);
    map.fitBounds(bounds);
    map.setZoom(15);
  }, timeout);
}

function clearMarkers() {
  for (var j = 0; j < markers.length; j++) {
    markers[j].setMap(null);
  }
  markers = [];
}
