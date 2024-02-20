var feature17Names = ["S", "L", "Points", "B", "H"];
var feature17Accuracies = [1, 0, 0, 0, 0];
var feature17Types = [true, false, false, false, false];

function test01feature17() {
  var arguments = {"D": 50, "A": 80, "G": 200, "V": 2, "T": 10};
  var expected = {"S": 15.7, "L": [157, 187], "Points": [0, 2, 5, 8, 9, 9, 9, 9, 6, 2, 0], "B": [25, 20, 8, -8, -20, -25], "H": [-25, -20, -7, 8, 21, 25, 21, 8, -7, -20, -25]};
  genericTester(feature17_core(arguments), expected, feature17Names, feature17Accuracies, feature17Types);
}

test01feature17();

function test02feature17() {
  var arguments = {"D": 400, "A": 70, "G": 1000, "V": 10, "T": 8};
  var expected = {"S": 157.1, "L": [1257, 1297], "Points": [0, 40, 113, 143, 146, 149, 122, 46, 0], "B": [205, 143, 0, -144, -207], "H": [-213, -144, 14, 157, 213, 159, 17, -142, -213]};
  genericTester(feature17_core(arguments), expected, feature17Names, feature17Accuracies, feature17Types);
}

test02feature17();
