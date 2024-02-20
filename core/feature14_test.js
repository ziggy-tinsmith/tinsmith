var feature14Names = ["SC", "BC", "R2", "R1", "L1", "L2", "Area"];
var feature14Accuracies = [1, 1, 0, 0, 0, 0, 2];
var feature14Types = [true, true, false, false, false, false, true];

function test01Feature14() {
  var arguments = {"K": 200, "G": 400, "L": 100, "Z": 60, "T": 10};
  var expected = {"SC": 36.2, "BC": 152.3, "R2": [129, 124, 110, 89, 68, 58], "R1": [542, 521, 461, 374, 285, 242], "L1": [413, 397, 352, 285, 217, 185], "L2": [399, 344, 271, 205, 188], "Area": 0.25};
  genericTester(feature14_core(arguments), expected, feature14Names, feature14Accuracies, feature14Types);
}

test01Feature14();
