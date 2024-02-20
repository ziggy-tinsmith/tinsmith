var feature40Names = ["S", "L", "PointsBR", "PointsSR"];
var feature40Accuracies = [1, 0, 0, 0];
var feature40Types = [true, false, false, false];

function test01feature40() {
  var arguments = {"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6};
  var expected = {"S": 104.7, "L": [628, 658], "PointsBR": [0, 12, 38, 51], "PointsSR": []};
  genericTester(feature40_core(arguments), expected, feature40Names, feature40Accuracies, feature40Types);
}

test01feature40();

function test02feature40() {
  var arguments = {"D": 200, "G": 400, "I": 10, "V": 110, "T": 10};
  var expected = {"S": 62.8, "L": [628, 658], "PointsBR": [0, 5, 19, 36], "PointsSR": [93, 59]};
  genericTester(feature40_core(arguments), expected, feature40Names, feature40Accuracies, feature40Types);
}

test02feature40();
