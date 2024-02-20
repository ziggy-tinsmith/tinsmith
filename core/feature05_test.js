var feature05Names = ["S", "L", "Points", "T", "Area"];
var feature05Accuracies = [1, 0, 0, 0, 2];
var feature05Types = [true, false, false, true, true];

function test01Feature05() {
  var arguments = {"D": 200, "R": 500, "S": 5, "A": 90, "E": 10, "T": 12};
  var expected = {"S": 52.4, "L": [628, 658], "Points": [73, 75, 81, 89, 97, 103, 105], "T": 500, "Area": 0.49};
  genericTester(feature05_core(arguments), expected, feature05Names, feature05Accuracies, feature05Types);
}

test01Feature05();

function test02Feature05() {
  var arguments = {"D": 400, "R": 600, "S": 8, "A": 90, "E": 20, "T": 16};
  var expected = {"S": 78.5, "L": [1257, 1297], "Points": [59, 61, 65, 72, 79, 87, 93, 97, 99], "T": 600, "Area": 1.18};
  genericTester(feature05_core(arguments), expected, feature05Names, feature05Accuracies, feature05Types);
}

test02Feature05();
