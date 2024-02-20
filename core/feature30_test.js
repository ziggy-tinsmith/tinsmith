var feature30Names = ["S", "F1", "PointsA", "PointsB", "F2", "F3"];
var feature30Accuracies = [1, 0, 0, 0, 0, 0];
var feature30Types = [true, true, false, false, true, true];

function test01feature30() {
  var arguments = {"D": 300, "A": 400, "B": 500, "K": 50, "G": 70, "V": 10, "T": 8};
  var expected = {"S": 117.8, "F1": 64, "PointsA": [258, 174, 220], "PointsB": [243, 191, 266], "F2": 92, "F3": 116};
  genericTester(feature30_core(arguments), expected, feature30Names, feature30Accuracies, feature30Types);
}

test01feature30();
