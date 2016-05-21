var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
    center: {lat: 47.6062, lng: -122.3321},
    zoom: 10
  });
}
