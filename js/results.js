var dupeState;
var resultsArr = [];
var resultsIncomeArr = [];

var data = {
    labels: resultsArr, // change to randomArr once we make it,
    datasets: [
        {
            label: "Median Income for Metro Area",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [],
        }
    ]
};

//event listener
document.getElementById('indexSearch').addEventListener('submit', function(event) {
  event.preventDefault();
  userInput = event.target.income.value;
  if (userInput >= 40000) {
    // console.log(userInput);
    var locationInput = event.target.location.value;
    // console.log(locationInput);
    matchInput(1000);
    barChartData();
    barChartResults();
  } else {
    alert('Please enter at least $40,000');
  }
  if (resultsArr.length < 10) {
    console.log('5000');
    console.log(dupeState);
    matchInput(5000);
    barChartData();
    barChartResults();
  }
  if (resultsArr.length < 10) {
    console.log('10000');
    console.log(dupeState);
    matchInput(10000);
    barChartData();
    barChartResults();
  }
  if (resultsArr.length < 10) {
    console.log('20000');
    console.log(dupeState);
    matchInput(20000);
    barChartData();
    barChartResults();
  }
});

//checks for duplications in resultsArr
function checkDupArray(array1, array2) {
  if (array1.indexOf(array2) === -1) {
    console.log('new array is ' + array1);
    dupeState = true;
  } else if (array1.indexOf(array2) > -1) {
    console.log(array2 + 'already exists in the array');
    dupeState = false;
  }
};

//matches userInput with suggested cities based on cost of living
matchInput = function(range) {
  userInput = parseInt(userInput);
  var lowerIncomeRange = userInput - parseInt(range);
  var higherIncomeRange = userInput + parseInt(range);
  for (var i = 0; i < allMetro.length; i++) {
    if (lowerIncomeRange < allMetro[i].income && allMetro[i].income < higherIncomeRange) {
      checkDupArray(resultsArr, allMetro[i].name);
      console.log('dupestate succssfully processed');
      if (dupeState === true) {
        resultsArr.push(allMetro[i].name);
        resultsIncomeArr.push(allMetro[i].income);
        console.log(dupeState);
        console.log(resultsArr.length);
      }
    }
  }
};

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('googleMapResults'), {
    center: {lat: 47.6062, lng: -122.3321},
    zoom: 10
  });
}
barChartData = function() {
  for (idx in resultsIncomeArr) {
    data.datasets[0].data[idx] = resultsIncomeArr[idx];
  }
};
//Bar Chart - create
barChartResults = function(){
  var ctx = document.getElementById('barCanvas').getContext('2d');
        var barCanvas = new Chart(ctx, {
					type: 'bar',
					data: data,
				});
};
