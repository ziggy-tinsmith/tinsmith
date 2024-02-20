var feature18Names = ["S", "L", "Points", "B", "H"];
var feature18Accuracies = [1, 0, 0, 0, 0];
var feature18Types = [true, false, false, false, false];

function test01feature18() {
  var arguments = {"D": 50, "A": 80, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [0, 27, 98, 186, 256, 284], "B": [144, 116, 44], "H": [0, 15, 24]};
  genericTester(feature18_core(arguments), expected, feature18Names, feature18Accuracies, feature18Types);
}

test01feature18();

function test02feature18() {
  var arguments = {"D": 400, "A": 70, "T": 8};
  var expected = {"S": 157.1, "L": [1257, 1297], "Points": [0, 161, 549, 938, 1099], "B": [585, 413, 0], "H": [0, 141, 200]};
  genericTester(feature18_core(arguments), expected, feature18Names, feature18Accuracies, feature18Types);
}

test02feature18();
