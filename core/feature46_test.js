var feature46Names = ["ZMKS", "ZMGS", "L1", "L2", "M1", "M2"];
var feature46Accuracies = [1, 0, 0, 0, 0, 0];
var feature46Types = [true, true, false, false, false, false];

function test01feature46() {
  var arguments = {"K": 200, "G": 300, "L": 200, "V": 200, "T": 6};
  var expected = {"ZMKS": 104.7, "ZMGS": 157.1, "L1": [112, 141, 283, 364], "L2": [112, 141, 320], "M1": [0, 135], "M2": [0]};
  genericTester(feature46_core(arguments), expected, feature46Names, feature46Accuracies, feature46Types);
}

test01feature46();
