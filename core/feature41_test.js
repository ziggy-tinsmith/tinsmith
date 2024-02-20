var feature41Names = ["S", "L", "PointsBR", "PointsSR"];
var feature41Accuracies = [1, 0, 0, 0];
var feature41Types = [true, false, false, false];

function test01feature41() {
  var arguments = {"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6};
  var expected = {"S": 104.7, "L": [628, 658], "PointsBR": [0, 16, 48, 65], "PointsSR": []};
  genericTester(feature41_core(arguments), expected, feature41Names, feature41Accuracies, feature41Types);
}

test01feature41();

function test02feature41() {
  var arguments = {"D": 200, "G": 400, "I": 10, "V": 110, "T": 10};
  var expected = {"S": 62.8, "L": [628, 658], "PointsBR": [0, 6, 23], "PointsSR": [116, 76, 45]};
  genericTester(feature41_core(arguments), expected, feature41Names, feature41Accuracies, feature41Types);
}

test02feature41();
