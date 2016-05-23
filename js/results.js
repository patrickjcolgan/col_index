//event listener
// var userInput = document.getElementById('income');
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
//Get data for current location to render in bar chart

//Match userInput with cities to suggest: create function MatchInput callinside listener
var resultsArr = [];

function checkDupArray (array1, array2){
  if (array1.indexOf(array2) === -1){
    array1.push(array2);
    console.log('new array is ' + array1);
  } else if (array1.indexOf(array2) > -1){
    console.log(array2 + 'already exists in the array');
  }
}

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
