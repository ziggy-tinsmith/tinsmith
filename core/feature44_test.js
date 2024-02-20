var feature44Names = ["S", "L", "PointsB", "PointsA"];
var feature44Accuracies = [1, 0, 0, 0];
var feature44Types = [true, false, false, false];

function test01feature44() {
  var arguments = {"D": 200, "L": 200, "V": 200, "T": 8, "LL": 300};
  var expected = {"S": 78.5, "L": [628, 658], "PointsB": [100, 129, 200, 200, 200], "PointsA": [200, 229, 300]};
  genericTester(feature44_core(arguments), expected, feature44Names, feature44Accuracies, feature44Types);
}

test01feature44();

function test02feature44() {
  var arguments = {"D": 400, "L": 400, "V": 400, "T": 6, "LL": 600};
  var expected = {"S": 209.4, "L": [1257, 1297], "PointsB": [200, 300, 400], "PointsA": [400, 500]};
  genericTester(feature44_core(arguments), expected, feature44Names, feature44Accuracies, feature44Types);
}

test02feature44();
