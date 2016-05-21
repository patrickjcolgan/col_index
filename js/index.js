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

// var neighbors = [
//   {lat: allMetro[i].latitude, lng: allMetro[i].longitude},
// ];



var markers = [];
var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
    zoom: 4,
    center: {lat: 39.8282, lng: -98.5795}
  });
}

window.onload = function drop() {
  clearMarkers();
  for (var i = 0; i < allMetro.length; i++) {
    var latlng = new google.maps.LatLng(allMetro[i].latitude, allMetro[i].longitude);
    addMarkerWithTimeout(latlng, i * 1000);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
