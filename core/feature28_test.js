var feature28Names = ["S", "F1", "Points", "F2", "Area"];
var feature28Accuracies = [1, 0, 0, 0, 2];
var feature28Types = [true, true, false, true, true];

function test01feature28() {
  var arguments = {"D": 300, "A": 400, "B": 500, "H": 50, "T": 8};
  var expected = {"S": 117.8, "F1": 71, "Points": [260, 179, 229], "F2": 112, "Area": 0.12};
  genericTester(feature28_core(arguments), expected, feature28Names, feature28Accuracies, feature28Types);
}

test01feature28();
