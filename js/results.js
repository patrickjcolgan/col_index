var dupeState;
var resultsArr = [];
var randomArr = [];
var nameArr = [];
var polarArr = [];

// function Polar (resultsArr){
//   this.income = resultsArr[i].income;
//   this.grocery = resultsArr[i].grocery;
//   this.housing = resultsArr[i].housing;
//   this.utilities = resultsArr[i].utilities;
//   this.transportation = resultsArr[i].transportation;
//   this.healthcare = resultsArr[i].healthcare;
//   this.miscellaneous = resultsArr[i].miscellaneous;
//   polarArr.push(this);
// };

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

barChartData = function() {
  for (idx in randomArr) {
    data.datasets[0].data[idx] = randomArr[idx].income;
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
// //Bar Chart Data
var data = {
  labels: nameArr,
  datasets: [
    {
      label: 'Median Income for Metro Area',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [],
    }
  ]
};

//Polar Chart - pull data
polarChartData = function(randomArrObj) {
  var polarData = {
    datasets: [{
      data: [],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels: Object.keys(randomArrObj),
  };
  for (var i = 0; i < polarData.labels.length; i++) {
    polarData.datasets[0].data[i] = randomArrObj[polarData.labels[i]];
  }
  return polarData;
};
//Polar Chart - create
polarChartResults = function(id, obj) {
  console.log(id);
  var ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    data: polarChartData(obj),//call&return chart data for each Obj
    type: 'polarArea',
  });
};

//randomizer
var rand = [];

function randomizer() {
  r = Math.floor(Math.random() * resultsArr.length);
  if (rand.indexOf(r) === -1) {
    rand.push(r);
    randomArr.push(resultsArr[rand.length - 1]);
  }
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
    console.log('5k');
  }
  if (resultsArr.length < 5) {
    matchInput(10000);
    console.log('10k');
  }
  if (resultsArr.length < 5) {
    matchInput(20000);
    console.log('15k');
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
  barChartData();
  barChartResults();
  // polarChartData();
  //Scott: for loop iterate over arrays & call polarChartData with arguments
  for (idx in randomArr) {
    polarChartResults(elCR[idx].id, randomArr[idx]);
    console.log(elCR[idx], randomArr[idx]);
  }
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

// function Polar (income, grocery, housing, utilities, transportation, healthcare, miscellaneous){
//   this.income = resultsArr[i].income;
//   this.grocery = resultsArr[i].grocery;
//   this.housing = resultsArr[i].housing;
//   this.utilities = resultsArr[i].utilities;
//   this.transportation = resultsArr[i].transportation;
//   this.healthcare = resultsArr[i].healthcare;
//   this.miscellaneous = resultsArr[i].miscellaneous;
//   polarArr.push(this);
// };
