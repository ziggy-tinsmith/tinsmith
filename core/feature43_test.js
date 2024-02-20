var feature43Names = ["SS", "L", "S", "LL", "Points", "Area", "VL"];
var feature43Accuracies = [0, 0, 1, 0, 0, 2, 2];
var feature43Types = [true, false, true, true, false, true, true];

function test01feature43() {
  var arguments = {"D": 200, "I": 10, "K": 20, "S": 8, "Z": 10, "T": 6};
  var expected = {"SS": 3, "L": [326, 5], "S": 54.3, "LL": 326, "Points": [14, 34, 48, 53], "Area": 0.15, "VL": 1.39};
  genericTester(feature43_core(arguments), expected, feature43Names, feature43Accuracies, feature43Types);
}

test01feature43();
