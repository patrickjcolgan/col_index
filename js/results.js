//event listener
// var getIncome = document.getElementById('income');
document.getElementById('indexSearch').addEventListener('submit', function(event){
  event.preventDefault();
  var userInput = event.target.income.value;
  console.log(userInput);
  console.log("hey");
});

// var resultArray = [];
// // getIncome = parseInt(getIncome);
// var lowerIncomeRange = getIncome - 5000;
// var higherIncomeRange = getIncome + 5000;
//
// for (var i in allMetro) {
//   if (lowerIncomeRange < allMetro.income[i] && allMetro.income[i] < higherIncomeRange) {
//     var metroResult = allMetro[i].name;
//     metroResult.push(allMetro[i].name);
//     push.resultArray;
//   }
// }
