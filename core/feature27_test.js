var feature27Names = ["KS", "GS", "R1", "R2", "L1", "L2"];
var feature27Accuracies = [1, 1, 0, 0, 0, 0];
var feature27Types = [true, true, false, true, true, false];

function test01feature27() {
  var arguments = {"K": 100, "G": 150, "L": 100, "V": 20, "Z": 12, "T": 8};
  var expected = {"KS": 37.0, "GS": 61.2, "R1": [337, 334, 325, 317, 313], "R2": [204, 202, 197, 191, 189], "L1": [131, 132, 129, 125, 124], "L2": [138, 132, 128, 130]};
  genericTester(feature27_core(arguments), expected, feature27Names, feature27Accuracies, feature27Types);
}

test01feature27();
