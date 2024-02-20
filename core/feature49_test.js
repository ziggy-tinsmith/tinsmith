var feature49Names = ["S", "F1", "PointsA", "PointsB", "F2", "PointsM"];
var feature49Accuracies = [1, 0, 0, 0, 0, 0];
var feature49Types = [true, true, false, false, true, false];

function test01feature49() {
  var arguments = {"D": 200, "A": 300, "B": 350, "L": 200, "V": 200, "T": 6};
  var expected = {"S": 104.7, "F1": 150, "PointsA": [230, 133], "PointsB": [358, 292], "F2": 250, "PointsM": [153, 166]};
  genericTester(feature49_core(arguments), expected, feature49Names, feature49Accuracies, feature49Types);
}

test01feature49();
