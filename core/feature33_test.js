var feature33Names = ["SS", "S", "CL", "R", "H", "Points", "Area", "Volume"];
var feature33Accuracies = [0, 1, 0, 0, 0, 0, 2, 2];
var feature33Types = [true, true, true, true, true, false, true, true];

function test01feature33() {
  var arguments = {"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "T": 6};
  var expected = {"SS": 2, "S": 17.5, "CL": 112, "R": 134, "H": 29, "Points": [6, 13, 21, 28, 34, 41, 48], "Area": 0.04, "Volume": 0.39};
  genericTester(feature33_core(arguments), expected, feature33Names, feature33Accuracies, feature33Types);
}

test01feature33();
