var feature34Names = ["SS", "LA", "LB", "ZMSA", "ZMSB", "L", "H", "PointsA", "PointsB", "Area", "VL"];
var feature34Accuracies = [0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2];
var feature34Types = [true, false, false, true, true, true, false, false, false, true, true];

function test01feature34() {
  var arguments = {"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "U": 10, "A": 6, "B": 4};
  var expected = {"SS": 3, "LA": [78, 1], "LB": [47, 1], "ZMSA": 13.0, "ZMSB": 11.7, "L": 135, "H": [44, 54], "PointsA": [6, 11, 16, 21, 26, 31, 36], "PointsB": [36, 40, 43, 45, 45], "Area": 0.06, "VL": 0.56};
  genericTester(feature34_core(arguments), expected, feature34Names, feature34Accuracies, feature34Types);
}

test01feature34();
