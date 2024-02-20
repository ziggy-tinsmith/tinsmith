var feature35Names = ["SS", "LA", "LB", "ZMSA", "ZMSB", "L", "H", "PointsA", "PointsB", "Area", "VL"];
var feature35Accuracies = [0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2];
var feature35Types = [true, false, false, true, true, true, false, false, false, true, true];

function test01feature35() {
  var arguments = {"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "U": 10, "A": 6, "B": 4};
  var expected = {"SS": 3, "LA": [76, 1], "LB": [56, 1], "ZMSA": 12.6, "ZMSB": 13.9, "L": 141, "H": [55, 65], "PointsA": [6, 11, 16, 21, 25, 30, 34], "PointsB": [34, 39, 42, 44, 45], "Area": 0.07, "VL": 0.65};
  genericTester(feature35_core(arguments), expected, feature35Names, feature35Accuracies, feature35Types);
}

test01feature35();
