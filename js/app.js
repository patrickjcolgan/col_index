//Perhaps our City instances will be stored here?
var allCities [];

//Object Constructor function to store city data
function City(city, state, income, longitude, latitude) {//do we need parameters??
  this.city = city;
  this.state = state;
  this.income = income;
  this.longitude = longitude;
  this.latitude = latitude;
  this.grocery = grocery;
  this.housing = housing;
  this.utilities = utilities;
  this.transportation = transportation;
  this.healthcare = healthcare;
  this.miscellaneous = miscellaneous;
};

//Google Maps
var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
