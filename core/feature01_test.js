var feature01Names = ["S", "L", "Points", "Area"];
var feature01Accuracies = [1, 0, 0, 2];
var feature01Types = [true, false, false, true];

function test01Feature01() {
  var arguments = {"D": 200, "R": 500, "S": 5, "E": 10, "T": 12};
  var expected = {"S": 52.4, "L": [628, 658], "Points": [73, 75, 81, 89, 97, 103, 105], "Area": 0.49};
  genericTester(feature01_core_core(arguments), expected, feature01Names, feature01Accuracies, feature01Types);
}

test01Feature01();

function test02Feature01() {
  var arguments = {"D": 400, "R": 600, "S": 8, "E": 20, "T": 16};
  var expected = {"S": 78.5, "L": [1257, 1297], "Points": [59, 61, 65, 72, 79, 87, 93, 97, 99], "Area": 1.18};
  genericTester(feature01_core_core(arguments), expected, feature01Names, feature01Accuracies, feature01Types);
}

test02Feature01();