var feature06Names = ["S", "L", "Points"];
var feature06Accuracies = [1, 0, 0];
var feature06Types = [true, false, true];

function test01Feature06() {
  var arguments = {"D": 200, "A": 90, "T": 12};
  var expected = {"S": 52.4, "L": [628, 658], "Points": [0, 13, 50, 100, 150, 187, 200]};
  genericTester(feature06_core(arguments), expected, feature06Names, feature06Accuracies, feature06Types);;
}

test01Feature06();

function test02Feature06() {
  var arguments = {"D": 400, "A": 90, "T": 16};
  var expected = {"S": 78.5, "L": [1257, 1297], "Points": [0, 15, 59, 123, 200, 277, 341, 385, 400]};
  genericTester(feature06_core(arguments), expected, feature06Names, feature06Accuracies, feature06Types);;
}

test02Feature06();
