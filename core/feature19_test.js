var feature19Names = ["S", "L", "Points"];
var feature19Accuracies = [1, 0, 0];
var feature19Types = [true, false, false];

function test01feature19() {
  var arguments = {"D": 50, "G": 200, "R": 100, "A": 120, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [0, 4, 13, 25, 35, 38, 35, 27, 15, 4, 0]};
  genericTester(feature19_core(arguments), expected, feature19Names, feature19Accuracies, feature19Types);
}

test01feature19();

function test02feature19() {
  var arguments = {"D": 400, "G": 1400, "R": 700, "A": 1000, "V": 100, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "Points": [9, 118, 368, 432, 196, 9]};
  genericTester(feature19_core(arguments), expected, feature19Names, feature19Accuracies, feature19Types);
}

test02feature19();
