//event listener
// var userInput = document.getElementById('income');
document.getElementById('indexSearch').addEventListener('submit', function(event){
  event.preventDefault();
  userInput = event.target.income.value;
  console.log(userInput);
  var locationInput = event.target.location.value;
  console.log(locationInput);
  matchInput(1000);
});
//Get data for current location to render in bar chart

//Check duplication
function checkDup (arr1, arr2){
  return arr1.some(function(arrVal) {
    return arr2 === arrVal;
  });
}

//Match userInput with cities to suggest: create function MatchInput callinside listener
var resultsArr = [];
matchInput = function(range){
  userInput = parseInt(userInput);
  var lowerIncomeRange = userInput - parseInt(range);
  var higherIncomeRange = userInput + parseInt(range);
  console.log(lowerIncomeRange);
  console.log(higherIncomeRange);

  for (var i = 0; i < allMetro.length; i++){
    if (lowerIncomeRange < allMetro[i].income && allMetro[i].income < higherIncomeRange){
      // checkDup(resultsArr, allMetro[i].name)
      // if (checkDup === false){
      resultsArr.push(allMetro[i].name);
      }
    }
  // }
};
  // if (resultsArr.length < 5){
  //   matchInput(2500)
  // }
  // if (resultsArr.length < 5){
  //   matchInput(5000)
  // }


// var resultArray = [];
