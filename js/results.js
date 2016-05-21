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
