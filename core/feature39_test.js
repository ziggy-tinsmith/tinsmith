var feature39Names = ["S", "L", "Points"];
var feature39Accuracies = [1, 0, 0];
var feature39Types = [true, false, false];

function test01feature39() {
  var arguments = {"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6};
  var expected = {"S": 104.7, "L": [628, 658], "Points": [0, 12, 38, 51]};
  genericTester(feature39_core(arguments), expected, feature39Names, feature39Accuracies, feature39Types);
}

test01feature39();
