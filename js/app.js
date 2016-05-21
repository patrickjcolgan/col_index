//Perhaps our City instances will be stored here?
var allCities [];

//Object Constructor function to store city data
function City(city, state, income, longitude, latitude, grocery, housing, utilities, transportation, healthcare, miscellaneous) {//do we need parameters??
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

var resultArray [];
var getIncome = document.getElementById('income');
var lowerIncomeRange = getIncome - 5000;
var higherIncomeRange = getIncome + 5000;

for (var i in allMetro) {
  if (lowerIncomeRange < allMetro.income[i] && allMetro.income[i] < higherIncomeRange) {
    var metroResult = allMetro[i].name;
    metroResult.push(allMetro[i].name);
    push.resultArray;
  }
}
