var feature22Names = ["S", "L", "Points"];
var feature22Accuracies = [1, 0, 0];
var feature22Types = [true, false, false];

function test01feature22() {
  var arguments = {"D": 50, "A": 80, "K": 180, "G": 200, "L": 1000, "J": 50, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [0, 2, 6, 8, 9, 9, 10, 10, 7, 2, 0]};
  genericTester(feature22_core(arguments), expected, feature22Names, feature22Accuracies, feature22Types);
}

test01feature22();

function test02feature22() {
  var arguments = {"D": 400, "A": 100, "K": 900, "G": 1000, "L": 2000, "J": 100, "V": 10, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "Points": [71, 84, 20, 25, 94, 71]};
  genericTester(feature22_core(arguments), expected, feature22Names, feature22Accuracies, feature22Types);
}

test02feature22();
