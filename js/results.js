var dupeState;
var resultsArr = [];
var randomArr = [];
var nameArr = [];
var pc = document.getElementById('polarContainer');
var elCR = [
  document.getElementById('polar5Canvas'),
  document.getElementById('polar4Canvas'),
  document.getElementById('polar3Canvas'),
  document.getElementById('polar2Canvas'),
  document.getElementById('polar1Canvas')
];
var elCCR = [
  document.getElementById('polar5'),
  document.getElementById('polar4'),
  document.getElementById('polar3'),
  document.getElementById('polar2'),
  document.getElementById('polar1')
];

//randomizer
var rand = [];

function randomizer() {
  r = Math.floor(Math.random() * resultsArr.length);
  if (rand.indexOf(r) === -1) {
    rand.push(r);
    randomArr.push(resultsArr[rand.length - 1]);
  }
  addMarkerWithTimeout(resultsArr);
}

function pushName() {
  for (var p = 0; p < randomArr.length; p++)
    nameArr.push(randomArr[p].metroArea);
}

//event listener
document.getElementById('indexSearch').addEventListener('submit', function(event) {
  event.preventDefault();
  userInput = event.target.income.value;
  if (userInput >= 40000) {
    var locationInput = event.target.location.value;
    matchInput(1000);
  } else {
    alert('Please enter at least $40,000');
  }
  if (resultsArr.length < 5) {
    matchInput(5000);
  }
  if (resultsArr.length < 5) {
    matchInput(10000);
  }
  if (resultsArr.length < 5) {
    matchInput(20000);
  }
  for (ran = 0; ran < 5; ran++) {
    if (resultsArr.length > 5) {
      console.log('randomizer called');
      randomizer();
    }
  }
  if (resultsArr.length < 5) {
    console.log('into the less than 5');
    for (rem2 = 0; rem2 < resultsArr.length; rem2++) {
      randomArr.push(resultsArr[rem2]);
      console.log('name has been pushed');
    }
  }

  pushName();
  console.log('Script complete');
});

//checks for duplications in resultsArr
function checkDupArray(array1, array2) {
  if (array1.indexOf(array2) === -1) {
    dupeState = true;
  } else if (array1.indexOf(array2) > -1) {
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
      checkDupArray(resultsArr, allMetro[i]);
      if (dupeState === true) {
        resultsArr.push(allMetro[i]);
      }
    }
  }
};

var markers = [];
var map;
var name2arr = [];
for (var c = 0; c < allMetro.length; c++) {
  name2arr.push(allMetro[c].metroArea);
}
function initMap() {
  map = new google.maps.Map(document.getElementById('googlemapsbackground'), {
    zoom: 4,
    center: {lat: 39.8282, lng: -98.5795},
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
}
function drop() {
  // clearMarkers();
  for (j = 0; j < resultsArr.length; j++) {
    addMarkerWithTimeout((resultsArr[0].latitude), (resultsArr[0].longitude), j * 500);
  }
};

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    // function drop() {
    //   clearMarkers();
    //   for (j = 0; j < resultsArr; j++) {
    //     addMarkerWithTimeout(resultsArr[j].metroArea, resultsArr[j].income, j * 8000);
    //     console.log(resultsArr);
      // }
    // };
    // var contentString = name2arr;
    var infowindow = new google.maps.InfoWindow({
      // content: contentString
    });
    var marker = new google.maps.Marker({
      position: position,
      // map: map,
      animation: google.maps.Animation.DROP,
    });
    // marker.setMap(resultsArr[j].latitude, resultsArr[j].longitude);
    google.maps.event.addListener(marker, 'mouseover', function() {
      // for ()
      infowindow.setContent('<div><strong>' + 'City Name: ' + resultsArr[j].metroArea + '</strong><br>' + 'Suggested Income: ' + resultsArr[j].income + '<br>' + '</div>');
      infowindow.open(map, this);
    });
  }, timeout);
}
function clearMarkers() {
  for (var j = 0; j < markers.length; j++) {
    markers[j].setMap(null);
  }
  markers = [];
}
