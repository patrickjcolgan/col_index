// //Perhaps our City instances will be stored here?
// var allCities [];
//
// //Object Constructor function to store city data
// function City(city, state, income, longitude, latitude, grocery, housing, utilities, transportation, healthcare, miscellaneous) {//do we need parameters??
//   this.city = city;
//   this.state = state;
//   this.income = income;
//   this.longitude = longitude;
//   this.latitude = latitude;
//   this.grocery = grocery;
//   this.housing = housing;
//   this.utilities = utilities;
//   this.transportation = transportation;
//   this.healthcare = healthcare;
//   this.miscellaneous = miscellaneous;
// };

//Google Maps
// var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

//new instances
//new cityName = new City ()

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
    center: {lat: 47.6062, lng: -122.3321},
    zoom: 10
  });
}
