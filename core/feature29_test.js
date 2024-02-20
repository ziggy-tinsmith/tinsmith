var feature29Names = ["S", "F1", "PointsA", "F2", "PointsB", "F3", "PointsC", "F4", "PointsD", "Area"];
var feature29Accuracies = [1, 0, 0, 0, 0, 0, 0, 0, 0, 2];
var feature29Types = [true, true, false, true, false, true, false, true, false, true];

function test01feature29() {
  var arguments = {"D": 300, "A": 400, "B": 500, "H": 50, "V": 10, "W": 15, "T": 8};
  var expected = {"S": 117.8, "F1": 64, "PointsA": [244, 162, 214], "F2": 99, "PointsB": [232, 173, 248], "F3": 78, "PointsC": [276, 196, 245], "F4": 125, "PointsD": [228, 187, 273], "Area": 0.07};
  genericTester(feature29_core(arguments), expected, feature29Names, feature29Accuracies, feature29Types);
}

test01feature29();
