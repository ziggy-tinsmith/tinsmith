var feature23Names = ["S", "L", "Points"];
var feature23Accuracies = [1, 0, 0];
var feature23Types = [true, false, false];

function test01feature23() {
  var arguments = {"D": 50, "K": 180, "G": 200, "L": 1000, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [4600, 4641, 4746, 4869, 4964, 5000]};
  genericTester(feature23_core(arguments), expected, feature23Names, feature23Accuracies, feature23Types);
}

test01feature23();

function test02feature23() {
  var arguments = {"D": 400, "K": 900, "G": 1000, "L": 2000, "V": 10, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "Points": [15200, 15486, 15927]};
  genericTester(feature23_core(arguments), expected, feature23Names, feature23Accuracies, feature23Types);
}

test02feature23();
