var feature03Names = ["R", "A"];
var feature03Accuracies = [0, 2];
var feature03Types = [true, true];

function test01Feature03() {
  var arguments = {"K": 200, "G": 300, "D": 100};
  var expected = {"R": 250, "A": 57.30};
  genericTester(feature03_core(arguments), expected, feature03Names, feature03Accuracies, feature03Types);
}

test01Feature03();
