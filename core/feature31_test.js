var feature31Names = ["S", "F1", "PointsA", "F2", "PointsB", "F3", "OS", "L", "Points"];
var feature31Accuracies = [1, 0, 0, 0, 0, 0, 1, 0, 0];
var feature31Types = [true, true, false, true, false, true, true, false, false];

function test01feature31() {
  var arguments = {"A": 500, "B": 600, "H": 60, "D": 400, "R": 200, "S": 4, "Z": 12, "T": 6};
  var expected = {"S": 209.4, "F1": 78, "PointsA": [310, 212], "F2": 141, "PointsB": [287, 253], "F3": 148, "OS": 209.4, "L": [1257, 1297], "Points": [12, 32, 72, 92]};
  genericTester(feature31_core(arguments), expected, feature31Names, feature31Accuracies, feature31Types);
}

test01feature31();

function test02feature31() {
  var arguments = {"A": 400, "B": 500, "H": 60, "D": 300, "R": 150, "S": 5, "Z": 10, "T": 8};
  var expected = {"S": 117.8, "F1": 78, "PointsA": [262, 184, 239], "F2": 130, "PointsB": [239, 199, 277], "F3": 119, "OS": 117.8, "L": [942, 972], "Points": [10, 17, 34, 51, 58]};
  genericTester(feature31_core(arguments), expected, feature31Names, feature31Accuracies, feature31Types);
}

test02feature31();
