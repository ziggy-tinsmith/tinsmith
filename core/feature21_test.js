var feature21Names = ["S", "L", "Points", "B", "MH", "PH"];
var feature21Accuracies = [1, 0, 0, 0, 0, 0];
var feature21Types = [true, false, false, false, false, false];

function test01feature21() {
  var arguments = {"D": 50, "K": 150, "G": 200, "L": 1000, "A": 80, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [0, 2, 5, 5, 3, 1, 2, 4, 4, 1, 0], "B": [25, 20, 8, -8, -21, -26], "MH": [0, -15, -24, -24, -15, 0], "PH": [0, 15, 24, 24, 15, 0]};
  genericTester(feature21_core(arguments), expected, feature21Names, feature21Accuracies, feature21Types);
}

test01feature21();

function test02feature21() {
  var arguments = {"D": 400, "K": 1000, "G": 1400, "L": 2000, "A": 85, "V": 10, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "Points": [0, 54, 53, 48, 46, 0], "B": [205, 62, -165], "MH": [-4, -191, -121], "PH": [-4, 191, 115]};
  genericTester(feature21_core(arguments), expected, feature21Names, feature21Accuracies, feature21Types);
}

test02feature21();
