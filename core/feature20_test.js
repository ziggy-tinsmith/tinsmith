var feature20Names = ["S", "L", "Points"];
var feature20Accuracies = [1, 0, 0];
var feature20Types = [true, false, false];

function test01feature20() {
  var arguments = {"D": 50, "G": 200, "R": 100, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [3, 1, 0, 1, 3, 4]};
  genericTester(feature20_core(arguments), expected, feature20Names, feature20Accuracies, feature20Types);
}

test01feature20();

function test02feature20() {
  var arguments = {"D": 400, "G": 1400, "R": 700, "V": 100, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "Points": [7, 3, 54]};
  genericTester(feature20_core(arguments), expected, feature20Names, feature20Accuracies, feature20Types);
}

test02feature20();
