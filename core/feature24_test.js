var feature24Names = ["S", "L", "P1", "P2"];
var feature24Accuracies = [1, 0, 0, 0];
var feature24Types = [true, false, false, false];

function test01feature24() {
  var arguments = {"D": 50, "G": 200, "A": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "P1": [5, 4, 2], "P2": [3, 2, 0]};
  genericTester(feature24_core(arguments), expected, feature24Names, feature24Accuracies, feature24Types);
}

test01feature24();

function test02feature24() {
  var arguments = {"D": 400, "G": 1000, "A": 10, "T": 5};
  var expected = {"S": 251.3, "L": [1257, 1297], "P1": [50, 14], "P2": [43, 4]};
  genericTester(feature24_core(arguments), expected, feature24Names, feature24Accuracies, feature24Types);
}

test02feature24();
