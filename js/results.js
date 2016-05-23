//event listener
document.getElementById('indexSearch').addEventListener('submit', function(event){
  event.preventDefault();
  userInput = event.target.income.value;
  if (userInput >= 40000){
    // console.log(userInput);
    var locationInput = event.target.location.value;
    // console.log(locationInput);
    matchInput(5000);
  } else {
    alert('Please enter at least $40,000');
  }
});

var resultsArr = [];
//checks for duplications in resultsArr
function checkDupArray (array1, array2){
  if (array1.indexOf(array2) === -1 && array1.length < 5){
    array1.push(array2);
    console.log('new array is ' + array1);
    if (array1.length < 5){
      matchInput(10000);
    } if (array1.length < 5){
      matchInput(15000);
    } if (array1.length < 5){
      matchInput(20000);
    }
  } else if (array1.indexOf(array2) > -1){
    console.log(array2 + 'already exists in the array');
  }
};

//matches userInput with suggested cities based on cost of living
matchInput = function(range){
  userInput = parseInt(userInput);
  var lowerIncomeRange = userInput - parseInt(range);
  var higherIncomeRange = userInput + parseInt(range);
  console.log(lowerIncomeRange);
  console.log(higherIncomeRange);

    for (var i = 0; i < allMetro.length; i++){
      if (lowerIncomeRange < allMetro[i].income && allMetro[i].income < higherIncomeRange){
        checkDupArray(resultsArr, allMetro[i].name);
      }
    }
  };

  //Get data for current location to render in bar chart
