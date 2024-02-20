var feature15Names = ["S", "L", "Points", "B", "H"];
var feature15Accuracies = [1, 0, 0, 0, 0];
var feature15Types = [true, false, false, false, false];

function test01Feature15() {
  var arguments = {"D": 200, "G": 400, "V": 100, "T": 10};
  var expected = {"S": 62.8, "L": [628, 658], "Points": [0, 1, 12, 49, 115, 200], "B": [105, 86, 34, -38, -121, -209], "H": [0, 59, 95]};
  genericTester(feature15_core(arguments), expected, feature15Names, feature15Accuracies, feature15Types);
}

test01Feature15();

function test02Feature15() {
  var arguments = {"D": 350, "G": 600, "V": 100, "T": 10};
  var expected = {"S": 110.0, "L": [1100, 1140], "Points": [10, 3, 4, 43, 122, 180], "B": [178, 144, 56, -60, -179, -246], "H": [0, 103, 166]};
  genericTester(feature15_core(arguments), expected, feature15Names, feature15Accuracies, feature15Types);
}

test02Feature15();
