var feature48Names = ["S", "F1", "PointsA", "PointsB", "F2", "PointsM"];
var feature48Accuracies = [1, 0, 0, 0, 0, 0];
var feature48Types = [true, true, false, false, true, false];

function test01feature48() {
  var arguments = {"D": 200, "A": 300, "B": 350, "L": 200, "V": 200, "T": 6};
  var expected = {"S": 104.7, "F1": 112, "PointsA": [208, 113], "PointsB": [358, 382], "F2": 364, "PointsM": [153, 164]};
  genericTester(feature48_core(arguments), expected, feature48Names, feature48Accuracies, feature48Types);
}

test01feature48();
