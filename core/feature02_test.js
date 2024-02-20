var feature02Names = ["R", "A"];
var feature02Accuracies = [0, 2];
var feature02Types = [true, true];

function test01Feature02() {
  var arguments = {"K": 200, "G": 300, "D": 100};
  var expected = {"R": 250, "A": 26.57};
  genericTester(feature02_core(arguments), expected, feature02Names, feature02Accuracies, feature02Types);
}

test01Feature02();
