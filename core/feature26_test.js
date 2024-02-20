var feature26Names = ["S", "P1", "P2", "V", "L", "P1L", "P2L"];
var feature26Accuracies = [1, 0, 0, 0, 0, 0, 0];
var feature26Types = [true, false, false, true, true, false, false];

function test01feature26() {
  var arguments = {"D": 200, "L": 600, "V": 10, "Z": 12, "T": 8};
  var expected = {"S": 39.2, "P1": [624, 624, 624, 624, 624], "P2": [625, 625, 625, 625], "V": 10, "L": 624, "P1L": [15, 329], "P2L": [172, 172]};
  genericTester(feature26_core(arguments), expected, feature26Names, feature26Accuracies, feature26Types);
}

test01feature26();

function test02feature26() {
  var arguments = {"D": 400, "L": 600, "V": 20, "Z": 20, "T": 5};
  var expected = {"S": 125.2, "P1": [640, 640, 640], "P2": [651, 649], "V": 21, "L": 640, "P1L": [20, 648], "P2L": [334, 334]};
  genericTester(feature26_core(arguments), expected, feature26Names, feature26Accuracies, feature26Types);
}

test02feature26();
