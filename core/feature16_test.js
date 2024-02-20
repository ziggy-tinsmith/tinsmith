var feature16Names = ["S", "L", "Points", "B", "H"];
var feature16Accuracies = [1, 0, 0, 0, 0];
var feature16Types = [true, false, false, false, false];

function test01Feature16() {
  var arguments = {"D": 200, "K": 25, "G": 50, "M": 250, "T": 10};
  var expected = {"S": 62.8, "L": [628, 658], "Points": [39, 23, 2, 7, 38, 64], "B": [111, 86, 31, -32, -91, -124], "H": [0, 59, 95]};
  genericTester(feature16_core(arguments), expected, feature16Names, feature16Accuracies, feature16Types);
}

test01Feature16();

function test02Feature16() {
  var arguments = {"D": 400, "K": 50, "G": 100, "M": 450, "T": 8};
  var expected = {"S": 157.1, "L": [1257, 1297], "Points": [101, 41, 0, 61, 151], "B": [234, 150, 0, -157, -265], "H": [0, 141, 200]};
  genericTester(feature16_core(arguments), expected, feature16Names, feature16Accuracies, feature16Types);
}

test02Feature16();
